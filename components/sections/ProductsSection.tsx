'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export function ProductsSection() {
  const products = [
    {
      id: 'eur-palety',
      name: 'EUR Palety',
      description: 'Euro palety v rôznych stavoch - nové, použité, tmavé. Rozmery: 1200×800×144 mm, nosnosť: 1500 kg',
      price: 'Od 8€',
      priceRange: '8€ - 12€',
      image: '/images/scraped/eur.png',
      popular: true,
      stock: 1000,
      features: ['Nové, použité, tmavé', 'Kvalitné drevo', 'Certifikované', 'Rozmery: 1200×800×144 mm'],
    },
    {
      id: 'eur-palety-nove',
      name: 'EUR Palety - Nové',
      description: 'Nové euro palety v najlepšom stave. Rozmery: 1200×800×144 mm, nosnosť: 1500 kg, hmotnosť: 25 kg',
      price: 'Od 10€',
      priceRange: '10€ - 12€',
      image: '/images/scraped/biela-pouzita.png',
      popular: false,
      stock: 500,
      features: ['Nové palety', 'Najvyššia kvalita', 'Certifikované', 'Rozmery: 1200×800×144 mm'],
    },
    {
      id: 'eur-palety-tmave',
      name: 'EUR Palety - Tmavé',
      description: 'Tmavé euro palety, použité. Rozmery: 1200×800×144 mm, nosnosť: 1200 kg, hmotnosť: 22 kg',
      price: 'Od 5€',
      priceRange: '5€ - 8€',
      image: '/images/scraped/tmava.png',
      popular: false,
      stock: 800,
      features: ['Použité palety', 'Dobrý stav', 'Výhodná cena', 'Rozmery: 1200×800×144 mm'],
    },
    {
      id: 'jednorazova-120x80',
      name: 'Jednorázová paleta 120x80',
      description: 'Jednorázová paleta 120cm × 80cm. Nosnosť: 1000 kg, hmotnosť: 15 kg',
      price: 'Od 3€',
      priceRange: '3€ - 5€',
      image: '/images/scraped/120x80.png',
      popular: false,
      stock: 2000,
      features: ['Štandardná veľkosť', 'Jednorázové použitie', 'Ekonomické', 'Rozmery: 1200×800 mm'],
    },
    {
      id: 'jednorazova-120x100',
      name: 'Jednorázová paleta 120x100',
      description: 'Jednorázová paleta 120 cm × 100 cm. Nosnosť: 1200 kg, hmotnosť: 18 kg',
      price: 'Od 4€',
      priceRange: '4€ - 6€',
      image: '/images/scraped/120x100.png',
      popular: false,
      stock: 1500,
      features: ['Väčšia veľkosť', 'Jednorázové použitie', 'Dostupné', 'Rozmery: 1200×1000 mm'],
    },
    {
      id: 'nadstavce',
      name: 'Paletové nádstavce',
      description: 'Nádstavce pre palety pre zvýšenie kapacity. Rôzne veľkosti, nosnosť: 800 kg',
      price: 'Od 15€',
      priceRange: '15€ - 25€',
      image: '/images/scraped/nadstavec.png',
      popular: false,
      stock: 300,
      features: ['Zvýšenie kapacity', 'Kvalitné', 'Rôzne veľkosti', 'Nosnosť: 800 kg'],
    },
    {
      id: 'ktp-boxy-888',
      name: 'KTP Boxy 888',
      description: 'Kvalitné KTP boxy 888. Rozmery: 800×600×640 mm, nosnosť: 1000 kg, hmotnosť: 12 kg',
      price: 'Od 20€',
      priceRange: '20€ - 30€',
      image: '/images/scraped/888.jpg',
      popular: false,
      stock: 400,
      features: ['Odolný materiál', 'Štandardná veľkosť', 'Dlhá životnosť', 'Rozmery: 800×600×640 mm'],
    },
    {
      id: 'ktp-boxy-777',
      name: 'KTP Boxy 777',
      description: 'Kvalitné KTP boxy 777. Rôzne veľkosti, nosnosť: 800 kg',
      price: 'Od 18€',
      priceRange: '18€ - 28€',
      image: '/images/scraped/KTP-777.jpg',
      popular: false,
      stock: 350,
      features: ['Odolný materiál', 'Rôzne veľkosti', 'Dlhá životnosť', 'Nosnosť: 800 kg'],
    },
    {
      id: 'ktp-boxy-999',
      name: 'KTP Boxy 999',
      description: 'Kvalitné KTP boxy 999. Väčšia veľkosť, nosnosť: 1200 kg',
      price: 'Od 25€',
      priceRange: '25€ - 35€',
      image: '/images/scraped/999.jpg',
      popular: false,
      stock: 250,
      features: ['Odolný materiál', 'Väčšia veľkosť', 'Dlhá životnosť', 'Nosnosť: 1200 kg'],
    },
    {
      id: 'gitterbox',
      name: 'Gitterbox',
      description: 'Profesionálne Gitterbox palety. Kovová konštrukcia, nosnosť: 1500 kg, hmotnosť: 35 kg',
      price: 'Od 30€',
      priceRange: '30€ - 45€',
      image: '/images/scraped/Gitterbox.jpg',
      popular: false,
      stock: 200,
      features: ['Kovová konštrukcia', 'Dlhá životnosť', 'Ideálne pre sklad', 'Nosnosť: 1500 kg'],
    },
  ]

  const [activeFilter, setActiveFilter] = useState('Všetko')
  const [quickViewProduct, setQuickViewProduct] = useState<string | null>(null)

  const filters = ['Všetko', 'EUR Palety', 'KTP Boxy', 'Ostatné']

  const filteredProducts = activeFilter === 'Všetko' 
    ? products 
    : products.filter(p => {
        if (activeFilter === 'EUR Palety') return p.id.includes('eur')
        if (activeFilter === 'KTP Boxy') return p.id.includes('ktp')
        return !p.id.includes('eur') && !p.id.includes('ktp')
      })

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        {/* Header s filtermi */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-2">Naše produkty</h2>
            <p className="text-neutral-text-secondary">Široký sortiment pre každú potrebu</p>
          </div>
          
          {/* Filter tabs */}
          <div className="flex gap-2 bg-gray-100 p-1 rounded-xl mt-4 md:mt-0">
            {filters.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 rounded-lg font-medium hover:bg-white transition-colors ${
                  activeFilter === tab ? 'bg-white shadow-md' : ''
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="card-modern group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image with Modern Effects */}
              <div className="relative h-64 bg-gray-100 overflow-hidden rounded-xl mb-6 group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Badges overlay */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.popular && (
                    <span className="px-3 py-1 bg-accent-500 text-white text-sm font-bold rounded-full">NOVÉ</span>
                  )}
                  {product.stock && product.stock > 0 && (
                    <span className="px-3 py-1 bg-white text-accent-600 text-sm font-bold rounded-full shadow-md">
                      ✓ Skladom
                    </span>
                  )}
                </div>
                
                {/* Quick view button - zobrazí sa pri hoveri */}
                <button
                  onClick={() => setQuickViewProduct(product.id)}
                  className="absolute inset-x-4 bottom-4 py-3 bg-white text-neutral-text font-semibold rounded-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg"
                >
                  Rýchly náhľad
                </button>
              </div>

              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-neutral-text-secondary text-sm mb-4 line-clamp-2">{product.description}</p>
              
              {/* Features list */}
              <ul className="space-y-2 mb-6">
                {product.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-neutral-text">
                    <svg className="w-4 h-4 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Price & CTA */}
              <div className="flex items-center justify-between pt-4 border-t">
                <div>
                  <p className="text-sm text-neutral-text-secondary">Cena od</p>
                  <p className="text-2xl font-bold text-primary-600">
                    {product.price}
                    <span className="text-sm text-neutral-text-secondary">/ks</span>
                  </p>
                </div>

                <button
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      const event = new CustomEvent('addToCart', {
                        detail: { productId: product.id, quantity: 1 },
                      })
                      window.dispatchEvent(event)
                    }
                  }}
                  className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                >
                  Objednať
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <Link href="/products" className="btn-secondary group inline-flex items-center gap-2">
            <span>Zobraziť všetky produkty</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

