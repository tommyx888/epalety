'use client'

import { useState, useEffect } from 'react'

interface Challenge {
  id: string
  title: string
  description: string
  points: number
  completed: boolean
}

export function DailyChallenges() {
  const [challenges, setChallenges] = useState<Challenge[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadChallenges()
  }, [])

  const loadChallenges = async () => {
    try {
      // Load challenges from localStorage or API
      const savedChallenges = localStorage.getItem('dailyChallenges')
      if (savedChallenges) {
        setChallenges(JSON.parse(savedChallenges))
      }
    } catch (error) {
      console.error('Failed to load challenges:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleChallengeComplete = async (challengeId: string) => {
    const updatedChallenges = challenges.map(challenge =>
      challenge.id === challengeId
        ? { ...challenge, completed: true }
        : challenge
    )
    setChallenges(updatedChallenges)
    localStorage.setItem('dailyChallenges', JSON.stringify(updatedChallenges))

    // Check if all challenges are completed
    const allCompleted = updatedChallenges.every(c => c.completed)
    const allCompletedKey = `allChallengesCompleted_${new Date().toDateString()}`

    if (allCompleted && !localStorage.getItem(allCompletedKey)) {
      try {
        await fetch('/api/gamification/send-challenge-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            completedChallenges: updatedChallenges.filter(c => c.completed).length,
            totalChallenges: updatedChallenges.length,
          }),
        })
        localStorage.setItem(allCompletedKey, 'true')
      } catch (error) {
        console.error('Failed to send challenge email:', error)
      }
    }
  }

  if (loading) {
    return <div>Načítavam výzvy...</div>
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Denné výzvy</h2>
      {challenges.map(challenge => (
        <div
          key={challenge.id}
          className={`p-4 border rounded-lg ${
            challenge.completed ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">{challenge.title}</h3>
              <p className="text-sm text-gray-600">{challenge.description}</p>
              <span className="text-xs text-orange font-medium">
                +{challenge.points} bodov
              </span>
            </div>
            {!challenge.completed && (
              <button
                onClick={() => handleChallengeComplete(challenge.id)}
                className="px-4 py-2 bg-orange text-white rounded-lg hover:bg-orange-dark transition-colors"
              >
                Dokončiť
              </button>
            )}
            {challenge.completed && (
              <span className="text-green-600 font-semibold">✓ Dokončené</span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

