import { supabaseAdmin } from '@/lib/supabase/client'

export interface Product {
  id: string
  name: string
  description: string
  price: number
  stock_quantity: number
  category: string
}

export interface Order {
  id: string
  product_id: string
  quantity: number
}

async function getUserOrderHistory(userId: string): Promise<Order[]> {
  const { data } = await supabaseAdmin
    .from('orders')
    .select('*, order_items(*)')
    .eq('user_id', userId)
  
  return data || []
}

async function findSimilarCustomers(userOrders: Order[]) {
  // Simplified implementation - in production use ML algorithms
  const productIds = userOrders.map(o => o.product_id)
  
  const { data } = await supabaseAdmin
    .from('order_items')
    .select('order_id, product_id')
    .in('product_id', productIds)
  
  const orderIds = new Set(data?.map(item => item.order_id) || [])
  
  return Array.from(orderIds)
}

async function getPopularProductsFromCustomers(orderIds: string[]) {
  const { data } = await supabaseAdmin
    .from('order_items')
    .select('product_id, quantity')
    .in('order_id', orderIds)
  
  // Group by product_id and sum quantities
  const productCounts = new Map<string, number>()
  data?.forEach(item => {
    const current = productCounts.get(item.product_id) || 0
    productCounts.set(item.product_id, current + item.quantity)
  })
  
  // Get top products
  const topProducts = Array.from(productCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([productId]) => productId)
  
  const { data: products } = await supabaseAdmin
    .from('products')
    .select('*')
    .in('id', topProducts)
  
  return products || []
}

export async function getProductRecommendations(userId: string): Promise<Product[]> {
  // Get user's order history
  const userOrders = await getUserOrderHistory(userId)
  
  if (userOrders.length === 0) {
    // Return popular products for new users
    const { data } = await supabaseAdmin
      .from('products')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(10)
    
    return data || []
  }
  
  // Find similar customers
  const similarCustomers = await findSimilarCustomers(userOrders)
  
  // Get products they bought
  const recommendedProducts = await getPopularProductsFromCustomers(
    Array.from(similarCustomers)
  )
  
  // Filter out already purchased
  const userProductIds = new Set(userOrders.map(o => o.product_id))
  return recommendedProducts.filter(
    p => !userProductIds.has(p.id)
  )
}

