import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { ProductsSection } from '@/components/sections/ProductsSection'
import { WhyUsSection } from '@/components/sections/WhyUsSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { TrustSection } from '@/components/sections/TrustSection'
import { PalletCalculatorSection } from '@/components/sections/PalletCalculatorSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { CtaSection } from '@/components/sections/CtaSection'
import { LiveChatWidget } from '@/components/ui/LiveChatWidget'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <ProductsSection />
      <HowItWorksSection />
      <TrustSection />
      <PalletCalculatorSection />
      <FAQSection />
      <FeaturesSection />
      <CtaSection />
      <LiveChatWidget />
    </>
  )
}

