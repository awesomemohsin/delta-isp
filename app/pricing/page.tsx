import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PricingPage } from '@/components/pricing-page'

export const metadata: Metadata = {
  title: 'Pricing',
}

export default function Pricing() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PricingPage />
      <Footer />
    </main>
  )
}
