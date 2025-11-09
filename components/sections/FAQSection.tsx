'use client'

import { useState } from 'react'

export function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Aké typy paliet ponúkate?',
      answer: 'Ponúkame široký sortiment paliet vrátane EUR paliet (nové, použité, tmavé), jednorázových paliet (120x80, 120x100), KTP boxov (888, 777, 999), Gitterboxov a paletových nádstavcov.',
    },
    {
      question: 'Ako dlho trvá dodanie?',
      answer: 'Dodanie zabezpečujeme do 24 hodín po celom Slovensku. Pre veľké objednávky môže byť dodanie dohodnuté individuálne.',
    },
    {
      question: 'Aké sú ceny paliet?',
      answer: 'Ceny sa líšia podľa typu a stavu palety. EUR palety nové: od 10€, použité: od 5€, tmavé: od 5€. Jednorázové palety: od 3€. Presné ceny vám pripravíme v individuálnej cenovej ponuke do 2 hodín.',
    },
    {
      question: 'Ponúkate aj výkup paliet?',
      answer: 'Áno, zaoberáme sa aj výkupom paliet. Cena sa stanovuje podľa stavu a typu palety. Kontaktujte nás pre bezplatnú cenovú ponuku.',
    },
    {
      question: 'Máte certifikáty kvality?',
      answer: 'Áno, všetky naše palety spĺňajú najvyššie štandardy kvality a máme ISO certifikáty. EUR palety sú certifikované podľa európskych noriem.',
    },
    {
      question: 'Ponúkate dlhodobý prenájom?',
      answer: 'Áno, ponúkame dlhodobý prenájom euro paliet, KTP boxov a Gitterboxov. Podmienky prenájmu sa dohodnú individuálne podľa vašich potrieb.',
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container-custom max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">Často kladené otázky</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openFaq === index ? 'max-h-96 py-5' : 'max-h-0'
                }`}
              >
                <p className="text-neutral-text-secondary">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

