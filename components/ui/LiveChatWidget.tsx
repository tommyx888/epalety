'use client'

import { useState } from 'react'

export function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative p-4 bg-primary-600 text-white rounded-full shadow-2xl hover:bg-primary-700 animate-bounce-slow"
      >
        {/* Notification dot */}
        <span className="absolute top-0 right-0 w-3 h-3 bg-error rounded-full animate-ping" />
        
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-neutral-text text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Napíšte nám 💬
        </span>
      </button>
      
      {/* Chat Window - placeholder */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200">
          <div className="p-4 bg-primary-600 text-white rounded-t-2xl flex items-center justify-between">
            <span className="font-bold">Chat s nami</span>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-4 h-full flex items-center justify-center text-gray-500">
            <p>Chat widget - integrovať Tawk.to alebo Crisp</p>
          </div>
        </div>
      )}
    </div>
  )
}

