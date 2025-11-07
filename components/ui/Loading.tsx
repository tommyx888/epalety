'use client'

import { useEffect } from 'react'

export function LoadingSpinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  }

  return (
    <div
      className={`${sizeClasses[size]} border-4 border-gray-200 border-t-orange rounded-full animate-spin`}
    />
  )
}

export function Toast({ message, type = 'success', onClose }: {
  message: string
  type?: 'success' | 'error' | 'info'
  onClose: () => void
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onClose])

  const bgColors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
  }

  return (
    <div
      className={`fixed bottom-4 right-4 ${bgColors[type]} text-white px-6 py-4 rounded-lg shadow-card z-50 flex items-center space-x-3`}
    >
      <span>{message}</span>
      <button onClick={onClose} className="hover:opacity-75">
        ✕
      </button>
    </div>
  )
}

export function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
  )
}

