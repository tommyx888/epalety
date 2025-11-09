'use client'

import Link from 'next/link'
import Image from 'next/image'

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

  return (
    <section className="py-xl md:py-2xl lg:py-3xl bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-orange font-bold text-sm uppercase tracking-wider">Produkty</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-forest mb-6">
            <span className="bg-gradient-to-r from-forest via-forest-light to-orange bg-clip-text text-transparent">
              Naše produkty
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Široký sortiment kvalitných paliet pre každú potrebu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="card-modern group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image with Modern Effects */}
              <div className="relative h-56 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 rounded-xl mb-6 overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-forest/10 via-orange/5 to-wood/10 group-hover:from-forest/20 group-hover:via-orange/15 group-hover:to-wood/15 transition-all duration-500"></div>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6 group-hover:scale-125 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {product.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-orange via-orange-dark to-orange text-white px-4 py-2 rounded-full text-xs font-bold shadow-2xl shadow-orange/50 animate-pulse z-10 border-2 border-white/30">
                    <span className="relative z-10 flex items-center gap-2">
                      <svg className="w-4 h-4 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      POPULÁRNE
                    </span>
                  </div>
                )}
                {/* Hover overlay with shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 animate-shimmer"></div>
                </div>
              </div>

              <h3 className="text-2xl font-heading font-bold text-forest mb-3 group-hover:text-orange transition-colors duration-300">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-5 text-base line-clamp-2 leading-relaxed">{product.description}</p>

              <div className="mb-5">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold bg-gradient-to-r from-orange via-orange-dark to-orange bg-clip-text text-transparent animate-gradient">
                    {product.price}
                  </span>
                  {product.priceRange && (
                    <span className="text-sm text-gray-500">({product.priceRange})</span>
                  )}
                </div>
                {product.stock && (
                  <div className="mt-2 flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-green-600 font-semibold">Skladom: {product.stock}+ ks</span>
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-base text-gray-700 group-hover:text-gray-900 transition-colors font-medium">
                    <span className="text-orange mr-3 font-bold text-xl group-hover:scale-125 transition-transform duration-300">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      const event = new CustomEvent('addToCart', {
                        detail: { productId: product.id, quantity: 1 },
                      })
                      window.dispatchEvent(event)
                    }
                  }}
                  className="btn-primary flex-1 text-center group/btn relative overflow-hidden py-4 text-base font-bold shadow-xl hover:shadow-2xl"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>Pridať do košíka</span>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-dark via-orange to-orange-light transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></span>
                </button>
                <Link
                  href={`/products/${product.id}`}
                  className="btn-secondary flex-1 text-center group/btn relative overflow-hidden py-4 text-base font-bold"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span>Detaily</span>
                    <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
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

