'use client'

import Link from 'next/link'
import { useCart } from '@/contexts/CartContext'
import { Button } from '@/components/ui/Button'

export default function CartPage() {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-2xl">
          <div className="card text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-3xl font-heading font-bold text-forest mb-4">
              Váš košík je prázdny
            </h2>
            <p className="text-gray-600 mb-6">
              Pridajte produkty do košíka a pokračujte v objednávke
            </p>
            <Link href="/products">
              <Button>Prehliadať produkty</Button>
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom max-w-5xl">
        <h1 className="text-4xl font-heading font-bold text-forest mb-8">
          Váš košík
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="card">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Product Image */}
                  <div className="w-full md:w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-4xl">📦</span>
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-semibold text-forest mb-2">
                      {item.product.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {item.product.description || 'Kvalitná paleta'}
                    </p>

                    <div className="flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-8 h-8 rounded border border-gray-300 hover:bg-gray-100 flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="w-12 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-8 h-8 rounded border border-gray-300 hover:bg-gray-100 flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="text-2xl font-bold text-forest">
                          {(item.product.price * item.quantity).toFixed(2)} €
                        </p>
                        <p className="text-sm text-gray-500">
                          {item.product.price.toFixed(2)} € / ks
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                    aria-label="Odstrániť z košíka"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}

            {/* Clear Cart Button */}
            <div className="flex justify-end">
              <button
                onClick={clearCart}
                className="text-sm text-gray-600 hover:text-red-500 transition-colors"
              >
                Vymazať košík
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="card sticky top-24">
              <h2 className="text-xl font-heading font-semibold text-forest mb-4">
                Súhrn objednávky
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Medzisúčet</span>
                  <span>{total.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Doprava</span>
                  <span>Podľa váhy</span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between text-lg font-bold text-forest">
                  <span>Celkom</span>
                  <span>{total.toFixed(2)} €</span>
                </div>
              </div>

              <Link href="/checkout" className="block w-full">
                <Button className="w-full" size="lg">
                  Pokračovať k objednávke
                </Button>
              </Link>

              <Link href="/products" className="block mt-4 text-center btn-tertiary">
                ← Pokračovať v nákupe
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

