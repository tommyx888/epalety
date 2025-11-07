'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalRevenue: 0,
    totalProducts: 0,
    pendingQuotes: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      // Fetch orders
      const ordersRes = await fetch('/api/orders?limit=1000')
      const ordersData = await ordersRes.json()
      const orders = ordersData.data || []

      // Fetch products
      const productsRes = await fetch('/api/products?limit=1000')
      const productsData = await productsRes.json()
      const products = productsData.data || []

      // Fetch quotes
      const quotesRes = await fetch('/api/quotes?status=pending')
      const quotesData = await quotesRes.json()
      const quotes = quotesData.data || []

      // Calculate stats
      const totalRevenue = orders
        .filter((o: any) => o.status === 'delivered')
        .reduce((sum: number, o: any) => sum + parseFloat(o.total), 0)

      setStats({
        totalOrders: orders.length,
        totalRevenue,
        totalProducts: products.length,
        pendingQuotes: quotes.length,
      })
    } catch (error) {
      console.error('Failed to fetch stats:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/4"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-32 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <h1 className="text-4xl font-heading font-bold text-forest mb-8">
          Admin Panel
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Objednávky</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-forest">{stats.totalOrders}</div>
              <p className="text-sm text-gray-600 mt-2">Celkový počet</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tržby</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-forest">
                {stats.totalRevenue.toFixed(2)} €
              </div>
              <p className="text-sm text-gray-600 mt-2">Celkové tržby</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Produkty</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-forest">{stats.totalProducts}</div>
              <p className="text-sm text-gray-600 mt-2">Aktívne produkty</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ponuky</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange">{stats.pendingQuotes}</div>
              <p className="text-sm text-gray-600 mt-2">Čakajúce na spracovanie</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Rýchle akcie</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" variant="secondary">
                Pridať produkt
              </Button>
              <Button className="w-full" variant="secondary">
                Zobraziť objednávky
              </Button>
              <Button className="w-full" variant="secondary">
                Spracovať ponuky
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Posledné objednávky</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Zobraziť posledných 10 objednávok...
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Nízke zásoby</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Produkty s nízkymi zásobami...
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
