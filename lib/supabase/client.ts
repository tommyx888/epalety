import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://example.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4YW1wbGUiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTY0NTc5OTIwMCwiZXhwIjoxOTYxMzc1MjAwfQ.example'

let supabaseInstance: SupabaseClient | null = null
let supabaseAdminInstance: SupabaseClient | null = null

export const supabase = (() => {
  if (!supabaseInstance && supabaseUrl && supabaseUrl !== 'https://example.supabase.co') {
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey)
  }
  return supabaseInstance || createClient(supabaseUrl, supabaseAnonKey)
})()

// Server-side client with service role
export const supabaseAdmin = (() => {
  if (!supabaseAdminInstance && supabaseUrl && supabaseUrl !== 'https://example.supabase.co') {
    supabaseAdminInstance = createClient(
      supabaseUrl,
      process.env.SUPABASE_SERVICE_KEY || supabaseAnonKey,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    )
  }
  return supabaseAdminInstance || createClient(
    supabaseUrl,
    process.env.SUPABASE_SERVICE_KEY || supabaseAnonKey,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  )
})()

