import Link from 'next/link'

export function ServicesSection() {
  const services = [
    {
      icon: '🏢',
      title: 'Dlhodobý prenájom',
      description: 'Využite špeciálny produkt dlhodobého prenájmu euro paliet, KTP a Gitterboxov.',
    },
    {
      icon: '📦',
      title: 'Predaj',
      description: 'Naše skladové zásoby stačia aj na tie najväčšie projekty. Neváhajte nás kontaktovať s Vašim dopytom.',
    },
    {
      icon: '💰',
      title: 'Výkup',
      description: 'Výkup paliet za najlepšie ceny, ktoré si dohodneme individuálne na základe stavu a počtu.',
    },
  ]

  return (
    <section className="py-xl md:py-2xl lg:py-3xl bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-forest mb-4">
            Naše služby
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dlhoročné skúsenosti s obalovým materiálom. Zaručujeme bezkonkurenčné ceny pri výkupe a predaji obalového materiálu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card-modern text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold text-forest mb-3 group-hover:text-orange transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
              <Link href="/quote" className="btn-tertiary text-sm inline-flex items-center gap-1 group/link">
                <span>Zistiť viac</span>
                <span className="transform group-hover/link:translate-x-1 transition-transform duration-200">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

