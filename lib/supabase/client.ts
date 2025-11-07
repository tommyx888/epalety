import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

let supabaseInstance: SupabaseClient | null = null
let supabaseAdminInstance: SupabaseClient | null = null

function getSupabaseClient(): SupabaseClient {
  if (!supabaseInstance) {
    if (!supabaseUrl || !supabaseAnonKey) {
      // During build, use a valid Supabase URL format to avoid validation errors
      // This will fail at runtime if not configured, but allows build to succeed
      const buildUrl = 'https://build-placeholder.supabase.co'
      const buildKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0'
      try {
        supabaseInstance = createClient(buildUrl, buildKey)
      } catch {
        // If even this fails, return a minimal client
        supabaseInstance = createClient('https://example.supabase.co', 'example-key')
      }
      return supabaseInstance
    }
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey)
  }
  return supabaseInstance
}

function getSupabaseAdminClient(): SupabaseClient {
  if (!supabaseAdminInstance) {
    if (!supabaseUrl || !supabaseAnonKey) {
      // During build, use a valid Supabase URL format to avoid validation errors
      const buildUrl = 'https://build-placeholder.supabase.co'
      const buildKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0'
      try {
        supabaseAdminInstance = createClient(buildUrl, buildKey, {
          auth: {
            autoRefreshToken: false,
            persistSession: false,
          },
        })
      } catch {
        supabaseAdminInstance = createClient('https://example.supabase.co', 'example-key', {
          auth: {
            autoRefreshToken: false,
            persistSession: false,
          },
        })
      }
      return supabaseAdminInstance
    }
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
  return supabaseAdminInstance
}

// Lazy getters - only create client when actually used
export const supabase = new Proxy({} as SupabaseClient, {
  get(target, prop) {
    const client = getSupabaseClient()
    const value = client[prop as keyof SupabaseClient]
    return typeof value === 'function' ? value.bind(client) : value
  }
})

export const supabaseAdmin = new Proxy({} as SupabaseClient, {
  get(target, prop) {
    const client = getSupabaseAdminClient()
    const value = client[prop as keyof SupabaseClient]
    return typeof value === 'function' ? value.bind(client) : value
  }
})

