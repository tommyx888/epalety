import { getChatbotResponse } from '@/lib/ai/chatbot'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()
    
    const response = await getChatbotResponse(messages)
    
    return NextResponse.json({ message: response })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Failed to get chatbot response' },
      { status: 500 }
    )
  }
}

