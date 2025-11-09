export function WhyUsSection() {
  const stats = [
    {
      number: '15+',
      label: 'Rokov skúseností',
      icon: '📅',
    },
    {
      number: '500+',
      label: 'Spokojných zákazníkov',
      icon: '👥',
    },
    {
      number: '1000+',
      label: 'Paliet skladom',
      icon: '📦',
    },
    {
      number: '24h',
      label: 'Dodanie',
      icon: '⚡',
    },
  ]

  const reasons = [
    {
      icon: '🏆',
      title: 'Certifikovaná kvalita',
      description: 'Všetky naše palety spĺňajú najvyššie štandardy kvality a sú certifikované',
    },
    {
      icon: '💰',
      title: 'Až o 20% výhodnejšie ceny',
      description: 'Bezkonkurenčné ceny pri výkupe aj predaji. Cenovú ponuku pripravíme do 2 hodín',
    },
    {
      icon: '🚚',
      title: 'Rýchle dodanie',
      description: 'Dodanie do 24 hodín po celom Slovensku. Vlastná dopravná služba',
    },
    {
      icon: '🔄',
      title: 'Dlhodobé prenájmy',
      description: 'Ponúkame dlhodobý prenájom euro paliet, KTP boxov a Gitterboxov',
    },
    {
      icon: '🛠️',
      title: 'Servis a opravy',
      description: 'Zabezpečujeme servis a opravu paliet. Profesionálne poradenstvo',
    },
    {
      icon: '♻️',
      title: 'Recyklácia',
      description: 'Ekologická recyklácia dreveného odpadu. Zodpovedný prístup k životnému prostrediu',
    },
  ]

  return (
    <section className="py-xl md:py-2xl lg:py-3xl bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-orange font-bold text-sm uppercase tracking-wider">Prečo práve my</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-forest mb-6">
            <span className="bg-gradient-to-r from-forest via-forest-light to-orange bg-clip-text text-transparent">
              Prečo si vybrať EPALETY.SK?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dlhoročné skúsenosti, profesionálny prístup a bezkonkurenčné ceny
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-orange/30 group"
            >
              <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-orange mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="card-modern group text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-forest mb-3 group-hover:text-orange transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

