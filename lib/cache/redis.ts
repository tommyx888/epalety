import { Redis } from '@upstash/redis'

let redisInstance: Redis | null = null

function getRedisClient(): Redis {
  if (!redisInstance) {
    const url = process.env.UPSTASH_REDIS_URL
    const token = process.env.UPSTASH_REDIS_TOKEN
    
    if (!url || !token) {
      throw new Error('UPSTASH_REDIS_URL and UPSTASH_REDIS_TOKEN must be set')
    }
    
    redisInstance = new Redis({
      url: url,
      token: token,
    })
  }
  return redisInstance
}

export const redis = new Proxy({} as Redis, {
  get(target, prop) {
    return getRedisClient()[prop as keyof Redis]
  }
})

export async function getCached<T>(
  key: string,
  fetcher: () => Promise<T>,
  ttl: number = 3600
): Promise<T> {
  try {
    const cached = await redis.get<T>(key)
    if (cached) return cached
    
    const data = await fetcher()
    await redis.setex(key, ttl, data)
    return data
  } catch (error) {
    // If Redis fails, fallback to direct fetch
    console.error('Redis cache error:', error)
    return await fetcher()
  }
}

export async function invalidateCache(pattern: string): Promise<void> {
  try {
    // Note: Upstash Redis doesn't support KEYS command
    // In production, maintain a cache key registry
    await redis.del(pattern)
  } catch (error) {
    console.error('Cache invalidation error:', error)
  }
}

