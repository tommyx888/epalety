import Link from 'next/link'
import Image from 'next/image'

export function ProductsSection() {
  const products = [
    {
      id: 'eur-palety',
      name: 'EUR Palety',
      description: 'Euro palety v rôznych stavoch - nové, použité, tmavé',
      price: 'Individuálne ceny',
      image: '/images/scraped/eur.png',
      popular: true,
      features: ['Nové, použité, tmavé', 'Kvalitné drevo', 'Dostupné skladom'],
    },
    {
      id: 'eur-palety-nove',
      name: 'EUR Palety - Nové',
      description: 'Nové euro palety v najlepšom stave',
      price: 'Individuálne ceny',
      image: '/images/scraped/biela-pouzita.png',
      popular: false,
      features: ['Nové palety', 'Najvyššia kvalita', 'Certifikované'],
    },
    {
      id: 'eur-palety-tmave',
      name: 'EUR Palety - Tmavé',
      description: 'Tmavé euro palety, použité',
      price: 'Individuálne ceny',
      image: '/images/scraped/tmava.png',
      popular: false,
      features: ['Použité palety', 'Dobrý stav', 'Výhodná cena'],
    },
    {
      id: 'jednorazova-120x80',
      name: 'Jednorázová paleta 120x80',
      description: 'Jednorázová paleta 120cm x 80 cm',
      price: 'Individuálne ceny',
      image: '/images/scraped/120x80.png',
      popular: false,
      features: ['Štandardná veľkosť', 'Jednorázové použitie', 'Ekonomické'],
    },
    {
      id: 'jednorazova-120x100',
      name: 'Jednorázová paleta 120x100',
      description: 'Jednorázová paleta 120 cm x 100 cm',
      price: 'Individuálne ceny',
      image: '/images/scraped/120x100.png',
      popular: false,
      features: ['Väčšia veľkosť', 'Jednorázové použitie', 'Dostupné'],
    },
    {
      id: 'nadstavce',
      name: 'Paletové nádstavce',
      description: 'Nádstavce pre palety pre zvýšenie kapacity',
      price: 'Individuálne ceny',
      image: '/images/scraped/nadstavec.png',
      popular: false,
      features: ['Zvýšenie kapacity', 'Kvalitné', 'Rôzne veľkosti'],
    },
    {
      id: 'ktp-boxy-888',
      name: 'KTP Boxy 888',
      description: 'Kvalitné KTP boxy 888 pre vaše potreby',
      price: 'Individuálne ceny',
      image: '/images/scraped/888.jpg',
      popular: false,
      features: ['Odolný materiál', 'Štandardná veľkosť', 'Dlhá životnosť'],
    },
    {
      id: 'ktp-boxy-777',
      name: 'KTP Boxy 777',
      description: 'Kvalitné KTP boxy 777 pre vaše potreby',
      price: 'Individuálne ceny',
      image: '/images/scraped/KTP-777.jpg',
      popular: false,
      features: ['Odolný materiál', 'Rôzne veľkosti', 'Dlhá životnosť'],
    },
    {
      id: 'ktp-boxy-999',
      name: 'KTP Boxy 999',
      description: 'Kvalitné KTP boxy 999 pre vaše potreby',
      price: 'Individuálne ceny',
      image: '/images/scraped/999.jpg',
      popular: false,
      features: ['Odolný materiál', 'Väčšia veľkosť', 'Dlhá životnosť'],
    },
    {
      id: 'gitterbox',
      name: 'Gitterbox',
      description: 'Profesionálne Gitterbox palety',
      price: 'Individuálne ceny',
      image: '/images/scraped/Gitterbox.jpg',
      popular: false,
      features: ['Kovová konštrukcia', 'Dlhá životnosť', 'Ideálne pre sklad'],
    },
  ]

  return (
    <section className="py-xl md:py-2xl lg:py-3xl bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-forest mb-4">
            Naše produkty
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-forest/5 to-orange/5 group-hover:from-forest/10 group-hover:to-orange/10 transition-all duration-300"></div>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {product.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-orange to-orange-dark text-white px-3 py-1 rounded-full text-xs font-semibold shadow-card animate-pulse z-10">
                    <span className="relative z-10 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
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

              <h3 className="text-xl font-heading font-semibold text-forest mb-2 group-hover:text-orange transition-colors duration-300">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-4 text-sm line-clamp-2">{product.description}</p>

              <div className="mb-4">
                <span className="text-2xl font-bold bg-gradient-to-r from-orange to-orange-dark bg-clip-text text-transparent">
                  {product.price}
                </span>
              </div>

              <ul className="space-y-2 mb-6">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                    <span className="text-forest mr-2 font-bold group-hover:text-orange transition-colors">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={`/products/${product.id}`}
                className="btn-primary w-full text-center block group/btn relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Zistiť viac</span>
                  <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-orange-dark to-orange transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
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

