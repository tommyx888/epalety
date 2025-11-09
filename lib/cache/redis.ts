import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL!,
  token: process.env.UPSTASH_REDIS_TOKEN!,
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

