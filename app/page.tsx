import Link from 'next/link'
import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { ProductsSection } from '@/components/sections/ProductsSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { CtaSection } from '@/components/sections/CtaSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <FeaturesSection />
      <CtaSection />
    </>
  )
}

