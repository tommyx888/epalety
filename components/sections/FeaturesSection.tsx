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
    <section className="py-xl md:py-2xl lg:py-3xl bg-forest text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Spolupracujte s profesionálmi
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Dlhoročné skúsenosti s obalovým materiálom. Zaručujeme bezkonkurenčné ceny pri výkupe a predaji obalového materiálu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center group animate-fade-in hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-orange transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-200 text-sm group-hover:text-white transition-colors duration-300">
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

