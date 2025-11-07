export function calculateDynamicPrice(
  basePrice: number,
  quantity: number,
  stockLevel: number,
  seasonalityFactor: number = 1.0
): number {
  let price = basePrice
  
  // Volume discount
  if (quantity >= 1000) price *= 0.80 // -20%
  else if (quantity >= 500) price *= 0.85 // -15%
  else if (quantity >= 100) price *= 0.90 // -10%
  
  // Stock level adjustment
  if (stockLevel < 50) price *= 1.10 // +10% if low stock
  else if (stockLevel > 1000) price *= 0.95 // -5% if overstocked
  
  // Seasonality
  price *= seasonalityFactor // e.g., 1.15 in high season
  
  return Math.round(price * 100) / 100
}

export function getSeasonalityFactor(month: number): number {
  // Higher demand in Q4 (holiday season)
  if (month >= 10 && month <= 12) return 1.15
  // Lower demand in summer
  if (month >= 6 && month <= 8) return 0.95
  return 1.0
}

