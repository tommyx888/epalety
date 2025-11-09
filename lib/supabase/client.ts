import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDU3OTkyMDAsImV4cCI6MTk2MTM3NTIwMH0.placeholder'

// Lazy initialization to avoid build-time errors
let supabaseInstance: SupabaseClient | null = null
let supabaseAdminInstance: SupabaseClient | null = null

export const supabase = (() => {
  try {
    if (!supabaseInstance && supabaseUrl && supabaseUrl.startsWith('https://')) {
      supabaseInstance = createClient(supabaseUrl, supabaseAnonKey)
    }
    return supabaseInstance || createClient('https://placeholder.supabase.co', 'placeholder-key')
  } catch {
    return createClient('https://placeholder.supabase.co', 'placeholder-key')
  }
})()

// Server-side client with service role
export const supabaseAdmin = (() => {
  try {
    if (!supabaseAdminInstance && supabaseUrl && supabaseUrl.startsWith('https://')) {
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
      'https://placeholder.supabase.co',
      'placeholder-service-key',
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    )
  } catch {
    return createClient(
      'https://placeholder.supabase.co',
      'placeholder-service-key',
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    )
  }
})()

