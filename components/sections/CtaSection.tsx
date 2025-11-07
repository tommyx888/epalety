import Link from 'next/link'

export function CtaSection() {
  return (
    <section className="py-xl md:py-2xl bg-gradient-to-r from-orange to-orange-dark text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Neváhajte nás kontaktovať s Vašim dopytom
          </h2>
          <p className="text-xl mb-6 text-orange-50">
            Kontaktujte nás pre cenovú ponuku. Naše skladové zásoby stačia aj na tie najväčšie projekty.
          </p>
          <p className="text-lg mb-8 text-orange-100">
            Telefón: <a href="tel:+421905896685" className="underline font-semibold">+421 905 896 685</a> alebo <a href="tel:+421910444024" className="underline font-semibold">+421 910 444 024</a>
            <br />
            Email: <a href="mailto:info@epalety.sk" className="underline font-semibold">info@epalety.sk</a>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="btn-secondary border-white text-white hover:bg-white hover:text-forest">
              Získať ponuku
            </Link>
            <Link href="/contact" className="bg-white text-forest font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transform hover:-translate-y-0.5 transition-all duration-smooth shadow-soft">
              Kontaktovať nás
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

