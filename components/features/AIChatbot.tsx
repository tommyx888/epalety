'use client'

import { useChat } from 'ai/react'

export function AIChatbot() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  })
  
  return (
    <div className="fixed bottom-4 right-4 w-96 h-[600px] bg-white shadow-2xl rounded-lg flex flex-col z-50">
      <div className="bg-primary-600 text-white p-4 rounded-t-lg">
        <h3 className="font-semibold">Asistent EPALETY.SK</h3>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-gray-500 text-sm">
            Dobrý deň! Ako vám môžem pomôcť?
          </div>
        )}
        {messages.map(m => (
          <div
            key={m.id}
            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`inline-block p-3 rounded-lg max-w-[80%] ${
                m.role === 'user'
                  ? 'bg-primary-100 text-primary-900'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 p-3 rounded-lg">
              <span className="animate-pulse">Píšem...</span>
            </div>
          </div>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Napíšte správu..."
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          disabled={isLoading}
        />
      </form>
    </div>
  )
}

