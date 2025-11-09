import Link from 'next/link'

export function ServicesSection() {
  const services = [
    {
      icon: '🏢',
      title: 'Dlhodobý prenájom',
      description: 'Využite špeciálny produkt dlhodobého prenájmu euro paliet, KTP a Gitterboxov.',
      link: '/services#prenajom',
    },
    {
      icon: '📦',
      title: 'Predaj',
      description: 'Naše skladové zásoby stačia aj na tie najväčšie projekty. Neváhajte nás kontaktovať s Vašim dopytom.',
      link: '/services#predaj',
    },
    {
      icon: '💰',
      title: 'Výkup',
      description: 'Výkup paliet za najlepšie ceny, ktoré si dohodneme individuálne na základe stavu a počtu.',
      link: '/services#vykup',
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-neutral-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold mb-2 block">ČO PONÚKAME</span>
          <h2 className="text-4xl font-bold mb-4">Naše služby</h2>
          <p className="text-xl text-neutral-text-secondary max-w-2xl mx-auto">
            Komplexné riešenia pre váš biznis
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white rounded-2xl border border-gray-200 hover:border-primary-500 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon container */}
              <div className="mb-6 inline-block p-4 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 group-hover:from-primary-500 group-hover:to-primary-600 transition-all duration-300">
                <span className="text-4xl">{service.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-neutral-text-secondary mb-6">{service.description}</p>

              {/* CTA Link */}
              <Link
                href={service.link}
                className="inline-flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-4 transition-all"
              >
                Zistiť viac
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              {/* Hover effect gradient border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
