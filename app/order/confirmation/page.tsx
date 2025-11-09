'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

function OrderConfirmationContent() {
  const searchParams = useSearchParams()
  const orderNumber = searchParams.get('order')
  const [order, setOrder] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (orderNumber) {
      fetchOrder(orderNumber)
    } else {
      setLoading(false)
    }
  }, [orderNumber])

  const fetchOrder = async (orderNum: string) => {
    try {
      const response = await fetch(`/api/orders?order_number=${orderNum}`)
      const { data } = await response.json()
      if (data && data.length > 0) {
        setOrder(data[0])
      }
    } catch (error) {
      console.error('Failed to fetch order:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-2xl">
          <div className="card text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange mx-auto"></div>
            <p className="mt-4 text-gray-600">Načítavam objednávku...</p>
          </div>
        </div>
      </section>
    )
  }

  if (!order) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-2xl">
          <div className="card text-center">
            <div className="text-6xl mb-4">❌</div>
            <h2 className="text-3xl font-heading font-bold text-forest mb-4">
              Objednávka nenájdená
            </h2>
            <p className="text-gray-600 mb-6">
              Objednávka s týmto číslom nebola nájdená.
            </p>
            <Link href="/">
              <Button>Späť na domov</Button>
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom max-w-3xl">
        <div className="card text-center mb-8">
          <div className="text-6xl mb-4">✓</div>
          <h1 className="text-4xl font-heading font-bold text-forest mb-4">
            Objednávka potvrdená!
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Ďakujeme za vašu objednávku
          </p>
          <p className="text-2xl font-bold text-orange">
            #{order.order_number}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Order Details */}
          <div className="card">
            <h2 className="text-xl font-heading font-semibold text-forest mb-4">
              Detaily objednávky
            </h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Stav:</span>
                <span className="font-semibold capitalize">{order.status}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Dátum:</span>
                <span>{new Date(order.created_at).toLocaleDateString('sk-SK')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Platba:</span>
                <span className="capitalize">{order.payment_status}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-200">
                <span className="font-semibold">Celkom:</span>
                <span className="text-xl font-bold text-forest">
                  {order.total.toFixed(2)} €
                </span>
              </div>
            </div>
          </div>

          {/* Shipping Info */}
          <div className="card">
            <h2 className="text-xl font-heading font-semibold text-forest mb-4">
              Dodacie údaje
            </h2>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="font-semibold text-gray-900">{order.customer_name}</p>
              <p>{order.shipping_address}</p>
              <p>
                {order.shipping_zip} {order.shipping_city}
              </p>
              {order.customer_email && (
                <p className="pt-2 border-t border-gray-200">{order.customer_email}</p>
              )}
            </div>
          </div>
        </div>

        {/* Order Items */}
        {order.order_items && order.order_items.length > 0 && (
          <div className="card mb-8">
            <h2 className="text-xl font-heading font-semibold text-forest mb-4">
              Objednané produkty
            </h2>
            <div className="space-y-3">
              {order.order_items.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0"
                >
                  <div>
                    <p className="font-semibold">{item.products?.name || 'Produkt'}</p>
                    <p className="text-sm text-gray-600">
                      Množstvo: {item.quantity} × {item.price.toFixed(2)} €
                    </p>
                  </div>
                  <p className="font-bold text-forest">
                    {(item.quantity * item.price).toFixed(2)} €
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Next Steps */}
        <div className="card bg-orange-50 border-2 border-orange">
          <h2 className="text-xl font-heading font-semibold text-forest mb-4">
            Čo ďalej?
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-orange mr-2">1.</span>
              <span>Potvrdzovací email sme vám odoslali na {order.customer_email}</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange mr-2">2.</span>
              <span>Objednávku spracujeme do 24 hodín</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange mr-2">3.</span>
              <span>O odoslaní vás budeme informovať emailom</span>
            </li>
          </ul>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link href="/products">
            <Button variant="secondary">Pokračovať v nákupe</Button>
          </Link>
          <Link href="/">
            <Button>Späť na domov</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-2xl">
          <div className="card text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange mx-auto"></div>
            <p className="mt-4 text-gray-600">Načítavam...</p>
          </div>
        </div>
      </section>
    }>
      <OrderConfirmationContent />
    </Suspense>
  )
}

