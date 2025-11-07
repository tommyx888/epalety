import Link from 'next/link'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative text-white py-20 md:py-32 lg:py-40 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/scraped/pallets-2215366_1280.jpg"
          alt="EPALETY.SK sklad s paletami"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Modern Gradient Overlay with Glassmorphism */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest-dark/95 via-forest/90 to-forest-light/85 backdrop-blur-[2px]" />
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange/10 via-transparent to-wood/10 animate-pulse" />
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute inset-0 animate-[patternMove_20s_linear_infinite]" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>

      <div className="container-custom relative z-20">
        <div className="max-w-3xl animate-fade-in">
          {/* Glassmorphism Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass-effect rounded-full text-sm font-medium backdrop-blur-md animate-slide-up">
            <span className="w-2 h-2 bg-orange rounded-full animate-pulse"></span>
            <span>15+ rokov skúseností</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-6 leading-tight text-balance animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Predaj a výkup paliet
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Dlhoročné skúsenosti s obalovým materiálom | Bezkonkurenčné ceny | Profesionálny prístup
          </p>
          <p className="text-lg text-gray-200 mb-4 max-w-2xl animate-slide-up" style={{ animationDelay: '0.3s' }}>
            Zaoberáme sa výkupom, predajom, opravou paliet, KTP boxov, Gitterboxov a recykláciou dreveného odpadu.
          </p>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: '0.35s' }}>
            Naše skladové zásoby stačia aj na tie najväčšie projekty. Plynulé dodanie tovaru, technické a skladové zabezpečenie. Neváhajte nás kontaktovať s Vašim dopytom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link href="/quote" className="btn-primary text-center group relative overflow-hidden">
              <span className="relative z-10">Získať cenovú ponuku</span>
              <span className="absolute inset-0 bg-gradient-to-r from-orange-dark to-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            <Link href="/services" className="btn-secondary text-center border-white text-white hover:bg-white hover:text-forest backdrop-blur-sm bg-white/10">
              Naše služby
            </Link>
          </div>
        </div>
      </div>

      {/* Modern Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/95 to-transparent z-10" />
      
      {/* Floating elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-orange/20 rounded-full blur-xl animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-wood/20 rounded-full blur-2xl animate-pulse hidden lg:block" style={{ animationDelay: '1s' }}></div>
    </section>
  )
}

