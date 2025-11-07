import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase/client'

export async function GET() {
  // Find quotes older than 24h with no response
  const { data: abandonedQuotes } = await supabaseAdmin
    .from('quotes')
    .select('*')
    .eq('status', 'pending')
    .lt('created_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString())
  
  if (!abandonedQuotes) {
    return NextResponse.json({ processed: 0 })
  }
  
  for (const quote of abandonedQuotes) {
    // Send email (implement sendAbandonedQuoteEmail)
    console.log('Sending abandoned quote email for:', quote.id)
    
    // Mark as followed up
    await supabaseAdmin
      .from('quotes')
      .update({ last_follow_up: new Date().toISOString() })
      .eq('id', quote.id)
  }
  
  return NextResponse.json({ processed: abandonedQuotes.length })
}

