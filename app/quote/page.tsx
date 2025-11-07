'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    quantity: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit quote')
      }

      setSubmitted(true)
    } catch (error) {
      console.error('Quote submission error:', error)
      alert('Chyba pri odosielaní požiadavky. Skúste to znova.')
    }
  }

  const products = [
    'EUR Palety',
    'KTP Boxy',
    'Gitterbox',
    'Špeciálne palety',
    'Iné',
  ]

  if (submitted) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-2xl">
          <div className="card text-center">
            <div className="text-6xl mb-4">✓</div>
            <h2 className="text-3xl font-heading font-bold text-forest mb-4">
              Ďakujeme za vašu požiadavku!
            </h2>
            <p className="text-gray-600 mb-6">
              Vaša cenová ponuka bola úspešne odoslaná. Kontaktujeme vás čo najskôr.
            </p>
            <Button onClick={() => setSubmitted(false)}>
              Odoslať ďalšiu ponuku
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-forest mb-4">
            Získať cenovú ponuku
          </h1>
          <p className="text-lg text-gray-600">
            Vyplňte formulár a my vám pripravíme individuálnu cenovú ponuku
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card space-y-6">
          {/* Personal Information */}
          <div>
            <h3 className="text-xl font-heading font-semibold text-forest mb-4">
              Kontaktné údaje
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Meno a priezvisko *
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ján Novák"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jan.novak@example.sk"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefón *
                </label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+421 900 123 456"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Spoločnosť
                </label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Názov spoločnosti"
                />
              </div>
            </div>
          </div>

          {/* Product Information */}
          <div>
            <h3 className="text-xl font-heading font-semibold text-forest mb-4">
              Informácie o produktoch
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">
                  Produkt *
                </label>
                <select
                  id="product"
                  required
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="input-field"
                >
                  <option value="">Vyberte produkt</option>
                  {products.map((product) => (
                    <option key={product} value={product}>
                      {product}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                  Množstvo *
                </label>
                <Input
                  id="quantity"
                  type="number"
                  required
                  min="1"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  placeholder="100"
                />
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Dodatočné informácie
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="input-field"
              placeholder="Máte špeciálne požiadavky alebo otázky?"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button type="submit" size="lg">
              Odoslať požiadavku
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

