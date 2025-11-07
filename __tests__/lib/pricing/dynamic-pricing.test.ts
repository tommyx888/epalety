import { calculateDynamicPrice } from '@/lib/pricing/dynamic-pricing'

describe('Dynamic Pricing', () => {
  it('should apply volume discount for large orders', () => {
    const price = calculateDynamicPrice(10, 100, 500, 1.0)
    expect(price).toBe(9.0) // 10% discount
  })
  
  it('should increase price for low stock', () => {
    const price = calculateDynamicPrice(10, 10, 30, 1.0)
    expect(price).toBe(11.0) // +10% for low stock
  })
  
  it('should apply seasonality factor', () => {
    const price = calculateDynamicPrice(10, 50, 500, 1.15)
    expect(price).toBe(11.5) // +15% seasonality
  })
})

