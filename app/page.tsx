import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { ServicesOverview } from '@/components/services-overview'
import { PricingTeaser } from '@/components/pricing-teaser'
import { Testimonials } from '@/components/testimonials'
import { CTABanner } from '@/components/cta-banner'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesOverview />
      <PricingTeaser />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  )
}
