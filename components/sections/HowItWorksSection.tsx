import Link from 'next/link'

export function HowItWorksSection() {
  const steps = [
    {
      number: '1',
      title: 'Kontaktujte nás',
      description: 'Zavolajte nám na +421 905 896 685 alebo vyplňte formulár pre cenovú ponuku',
      icon: '📞',
    },
    {
      number: '2',
      title: 'Pripravíme ponuku',
      description: 'Do 2 hodín vám pripravíme individuálnu cenovú ponuku podľa vašich požiadaviek',
      icon: '📋',
    },
    {
      number: '3',
      title: 'Dodanie do 24h',
      description: 'Po potvrdení objednávky dodáme tovar do 24 hodín po celom Slovensku',
      icon: '🚚',
    },
  ]

  return (
    <section className="py-xl md:py-2xl lg:py-3xl bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-orange font-bold text-sm uppercase tracking-wider">Ako to funguje</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-forest mb-6">
            <span className="bg-gradient-to-r from-forest via-forest-light to-orange bg-clip-text text-transparent">
              Jednoduchý 3-krokový proces
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Od objednávky po dodanie - jednoducho a rýchlo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-orange to-transparent z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-orange border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                </div>
              )}

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-orange to-orange-dark rounded-full mb-6 shadow-2xl shadow-orange/30 group hover:scale-110 transition-transform duration-300">
                  <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-12 h-12 bg-orange text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-2xl font-heading font-bold text-forest mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/quote" className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2">
            <span>Začať objednávku</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

