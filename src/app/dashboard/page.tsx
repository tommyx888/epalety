'use client'

import { DailyChallenges } from '../../components/gamification/DailyChallenges'

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <DailyChallenges />
    </div>
  )
}

