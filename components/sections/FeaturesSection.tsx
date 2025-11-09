export function FeaturesSection() {
  const features = [
    {
      icon: '📦',
      title: 'Výkup a predaj',
      description: 'Zaoberáme sa výkupom, predajom, opravou paliet, KTP boxov, Gitterboxov a recykláciou dreveného odpadu',
    },
    {
      icon: '👨‍💼',
      title: 'Servis a poradenstvo',
      description: 'Zabezpečujeme servis a poradenstvo pre jednotlivé spoločnosti pri voľbe, dodania a použitia obalového materiálu',
    },
    {
      icon: '💰',
      title: 'Bezkonkurenčné ceny',
      description: 'Zaručujeme bezkonkurenčné ceny pri výkupe a predaji obalového materiálu, ktoré sa stanovia dohodou so zákazníkom',
    },
    {
      icon: '⚡',
      title: 'Plynulé dodanie',
      description: 'Plynulé dodanie tovaru, materiálu podľa požiadaviek zákazníka, technické a skladové zabezpečenie',
    },
  ]

  return (
    <section className="py-xl md:py-2xl lg:py-3xl bg-gradient-to-br from-forest via-forest-dark to-forest text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-wood rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-orange-200 font-bold text-sm uppercase tracking-wider">Prečo my</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent">
              Spolupracujte s profesionálmi
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Dlhoročné skúsenosti s obalovým materiálom. Zaručujeme bezkonkurenčné ceny pri výkupe a predaji obalového materiálu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center group animate-fade-in hover:scale-110 transition-all duration-500 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-orange/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-6xl mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 inline-block drop-shadow-2xl">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-orange transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-200 text-base group-hover:text-white transition-colors duration-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-100 max-w-3xl mx-auto">
            Našou prioritou je spokojnosť zákazníka, vďaka ktorej sa rýchlo stávame úspešnou firmou na trhu s paletami. 
            Vďaka technickému a skladovému zabezpečeniu môžeme vyhovieť každému zákazníkovi. Tešíme sa na dlhodobú spoluprácu s Vami.
          </p>
        </div>
      </div>
    </section>
  )
}

