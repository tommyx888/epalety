'use client'

import { useState } from 'react'
import { useCart } from '@/contexts/CartContext'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { useRouter } from 'next/navigation'

export default function CheckoutPage() {
  const router = useRouter()
  const { items, total, clearCart } = useCart()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    shipping_address: '',
    shipping_city: '',
    shipping_zip: '',
    payment_method: 'stripe',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Prepare order items
      const orderItems = items.map((item) => ({
        product_id: item.product.id,
        quantity: item.quantity,
        price: item.product.price,
      }))

      // Create order
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: orderItems,
          ...formData,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to create order')
      }

      const { data: order } = await response.json()

      // Initiate payment
      const paymentResponse = await fetch('/api/payments/initiate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderId: order.id,
          amount: total,
          paymentMethod: formData.payment_method,
        }),
      })

      const { data: paymentData } = await paymentResponse.json()

      // Handle payment based on method
      if (formData.payment_method === 'stripe') {
        // Redirect to Stripe checkout
        // This would typically use Stripe Elements or Checkout
        router.push(`/checkout/stripe?client_secret=${paymentData.clientSecret}`)
      } else if (formData.payment_method === 'cardpay') {
        // Redirect to CardPay
        if (typeof window !== 'undefined') {
          window.location.href = paymentData.paymentUrl
        }
      } else {
        // Bank transfer - show confirmation
        clearCart()
        router.push(`/order/confirmation?order=${order.order_number}`)
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Chyba pri vytváraní objednávky. Skúste to znova.')
    } finally {
      setLoading(false)
    }
  }

  if (items.length === 0) {
    router.push('/cart')
    return null
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-heading font-bold text-forest mb-8">
          Pokračovať k objednávke
        </h1>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= s
                      ? 'bg-orange text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      step > s ? 'bg-orange' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Dodacie údaje</span>
            <span>Platba</span>
            <span>Potvrdenie</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 space-y-6">
            {step === 1 && (
              <div className="card space-y-4">
                <h2 className="text-2xl font-heading font-semibold text-forest">
                  Dodacie údaje
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Meno a priezvisko *
                    </label>
                    <Input
                      required
                      value={formData.customer_name}
                      onChange={(e) =>
                        setFormData({ ...formData, customer_name: e.target.value })
                      }
                      placeholder="Ján Novák"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.customer_email}
                      onChange={(e) =>
                        setFormData({ ...formData, customer_email: e.target.value })
                      }
                      placeholder="jan.novak@example.sk"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefón *
                    </label>
                    <Input
                      type="tel"
                      required
                      value={formData.customer_phone}
                      onChange={(e) =>
                        setFormData({ ...formData, customer_phone: e.target.value })
                      }
                      placeholder="+421 900 123 456"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Adresa *
                  </label>
                  <Input
                    required
                    value={formData.shipping_address}
                    onChange={(e) =>
                      setFormData({ ...formData, shipping_address: e.target.value })
                    }
                    placeholder="Ulica a číslo"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mesto *
                    </label>
                    <Input
                      required
                      value={formData.shipping_city}
                      onChange={(e) =>
                        setFormData({ ...formData, shipping_city: e.target.value })
                      }
                      placeholder="Bratislava"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      PSČ *
                    </label>
                    <Input
                      required
                      value={formData.shipping_zip}
                      onChange={(e) =>
                        setFormData({ ...formData, shipping_zip: e.target.value })
                      }
                      placeholder="81101"
                    />
                  </div>
                </div>

                <Button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full md:w-auto"
                  disabled={!formData.customer_name || !formData.customer_email || !formData.shipping_address}
                >
                  Pokračovať k platbe
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="card space-y-4">
                <h2 className="text-2xl font-heading font-semibold text-forest">
                  Spôsob platby
                </h2>

                <div className="space-y-3">
                  {[
                    { id: 'stripe', label: 'Karta online', icon: '💳' },
                    { id: 'cardpay', label: 'CardPay (Tatra Banka)', icon: '🏦' },
                    { id: 'bank_transfer', label: 'Bankový prevod', icon: '📄' },
                  ].map((method) => (
                    <label
                      key={method.id}
                      className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        formData.payment_method === method.id
                          ? 'border-orange bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment_method"
                        value={method.id}
                        checked={formData.payment_method === method.id}
                        onChange={(e) =>
                          setFormData({ ...formData, payment_method: e.target.value })
                        }
                        className="mr-3"
                      />
                      <span className="text-2xl mr-3">{method.icon}</span>
                      <span className="font-medium">{method.label}</span>
                    </label>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => setStep(1)}
                  >
                    Späť
                  </Button>
                  <Button type="submit" disabled={loading}>
                    {loading ? 'Spracovávam...' : 'Dokončiť objednávku'}
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="card sticky top-24">
              <h2 className="text-xl font-heading font-semibold text-forest mb-4">
                Súhrn objednávky
              </h2>

              <div className="space-y-3 mb-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between text-sm">
                    <span>
                      {item.product.name} × {item.quantity}
                    </span>
                    <span className="font-semibold">
                      {(item.product.price * item.quantity).toFixed(2)} €
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-2 mb-4">
                <div className="flex justify-between text-gray-600">
                  <span>Medzisúčet</span>
                  <span>{total.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Doprava</span>
                  <span>Podľa váhy</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-forest pt-2 border-t border-gray-200">
                  <span>Celkom</span>
                  <span>{total.toFixed(2)} €</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

