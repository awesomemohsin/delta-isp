import { Navbar } from '@/components/navbar'
import { BannerSlider } from '@/components/banner-slider'
import { HeroSection } from '@/components/hero-section'
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
import { ServicesOverview } from '@/components/services-overview'
import { PricingTeaser } from '@/components/pricing-teaser'
import { Testimonials } from '@/components/testimonials'
import { CTABanner } from '@/components/cta-banner'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Global Animated Background Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[30%] right-1/4 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] animate-pulse animation-delay-2000" />
        <div className="absolute top-[50%] left-1/3 w-[550px] h-[550px] bg-primary/15 rounded-full blur-[120px] animate-pulse animation-delay-4000" />
        <div className="absolute top-[70%] right-1/3 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[120px] animate-pulse animation-delay-1000" />
        <div className="absolute bottom-[10%] left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <BackgroundBeamsWithCollision className="h-auto md:min-h-[80vh] bg-transparent pb-8">
          <BannerSlider />
        </BackgroundBeamsWithCollision>
        <HeroSection />
        <ServicesOverview />
        <PricingTeaser />
        <Testimonials />
        <CTABanner />
        <Footer />
      </div>
    </main>
  )
}
