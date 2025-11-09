'use client'

import { useState, useEffect } from 'react'

interface TypewriterEffectProps {
  text: string
  speed?: number
  className?: string
}

export function TypewriterEffect({ text, speed = 50, className = '' }: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(interval)
  }, [])

  return (
    <span className={className}>
      {displayedText}
      <span className={showCursor ? 'opacity-100' : 'opacity-0'}>|</span>
    </span>
  )
}

