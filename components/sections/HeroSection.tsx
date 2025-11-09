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
          <div className="inline-flex items-center gap-2 px-6 py-3 mb-6 glass-effect rounded-full text-sm font-bold backdrop-blur-md animate-slide-up shadow-lg border-2 border-white/30">
            <span className="w-3 h-3 bg-orange rounded-full animate-pulse shadow-lg shadow-orange/50"></span>
            <span className="text-white font-bold">15+ rokov skúseností</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-6 leading-tight text-balance animate-slide-up drop-shadow-2xl" style={{ animationDelay: '0.1s' }}>
            <span className="bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent animate-gradient">
              Najväčší dodávateľ paliet na Slovensku
            </span>
          </h1>
          
          {/* Value Proposition - Benefits */}
          <div className="flex flex-wrap gap-4 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <svg className="w-5 h-5 text-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-white font-semibold">Dodanie do 24h</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <svg className="w-5 h-5 text-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-white font-semibold">Certifikovaná kvalita</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <svg className="w-5 h-5 text-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-white font-semibold">Dlhodobé prenájmy</span>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl animate-slide-up leading-relaxed" style={{ animationDelay: '0.3s' }}>
            Až o <span className="text-orange font-bold text-2xl">20% výhodnejšie ceny</span> než konkurencia. 
            <span className="block mt-2">Dlhoročné skúsenosti, bezkonkurenčné ceny a profesionálny prístup k každému zákazníkovi.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link href="/quote" className="btn-primary text-center group relative overflow-hidden text-lg px-8 py-4 shadow-2xl shadow-orange/50 hover:shadow-orange/70">
              <span className="relative z-10 flex items-center justify-center gap-2 font-bold">
                <span>Získať cenovú ponuku</span>
                <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-orange-dark via-orange to-orange-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </Link>
            <a href="tel:+421905896685" className="btn-secondary text-center border-2 border-white/80 text-white hover:bg-white hover:text-forest backdrop-blur-md bg-white/20 group text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300">
              <span className="flex items-center justify-center gap-2 font-bold">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Zavolať +421 905 896 685</span>
              </span>
            </a>
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

