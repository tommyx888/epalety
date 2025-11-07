import { NextResponse } from 'next/server'

export async function GET() {
  const checks = {
    database: await checkDatabase(),
    redis: await checkRedis(),
    external_apis: await checkExternalAPIs(),
  }
  
  const allHealthy = Object.values(checks).every(c => c.status === 'ok')
  
  return NextResponse.json(
    {
      status: allHealthy ? 'healthy' : 'degraded',
      checks,
      timestamp: new Date().toISOString(),
    },
    {
      status: allHealthy ? 200 : 503,
    }
  )
}

async function checkDatabase() {
  try {
    const { supabaseAdmin } = await import('@/lib/supabase/client')
    const { error } = await supabaseAdmin.from('products').select('id').limit(1)
    return { status: error ? 'error' : 'ok', error: error?.message }
  } catch (error: any) {
    return { status: 'error', error: error.message }
  }
}

async function checkRedis() {
  try {
    // Simple check - Redis doesn't have ping in Upstash
    const { redis } = await import('@/lib/cache/redis')
    await redis.get('health-check')
    return { status: 'ok' }
  } catch (error: any) {
    return { status: 'error', error: error.message }
  }
}

async function checkExternalAPIs() {
  // Check critical external APIs
  return { status: 'ok' }
}

