'use client'

import Link from 'next/link'
import { Check, X, ArrowRight, Download, Upload } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useState } from 'react'

export const plans = [
  {
    name: 'Delta Basic',
    speed: '20 Mbps',
    price: 525,
    period: '/month',
    description: 'Perfect for basic browsing and streaming',
    currency: '৳',
    features: [
      { name: '20 Mbps Speed', included: true },
      { name: 'Unlimited Data', included: true },
      { name: '24/7 Support', included: true },
      { name: 'Fiber Optic', included: true },
      { name: 'Public IP', included: false },
      { name: 'Real IP', included: false },
      { name: 'BDIX Connected', included: true },
      { name: '4k Streaming', included: true },
    ],
    cta: 'Get Started',
  },
  {
    name: 'Delta Plus',
    speed: '30 Mbps',
    price: 630,
    period: '/month',
    description: 'Great for small families and HD streaming',
    currency: '৳',
    features: [
      { name: '30 Mbps Speed', included: true },
      { name: 'Unlimited Data', included: true },
      { name: '24/7 Support', included: true },
      { name: 'Fiber Optic', included: true },
      { name: 'Public IP', included: false },
      { name: 'Real IP', included: false },
      { name: 'BDIX Connected', included: true },
      { name: '4k Streaming', included: true },
    ],
    cta: 'Get Started',
  },
  {
    name: 'Delta Power',
    speed: '40 Mbps',
    price: 735,
    period: '/month',
    description: 'Ideal for gaming and multiple devices',
    currency: '৳',
    features: [
      { name: '40 Mbps Speed', included: true },
      { name: 'Unlimited Data', included: true },
      { name: '24/7 Support', included: true },
      { name: 'Fiber Optic', included: true },
      { name: 'Public IP', included: true },
      { name: 'Real IP', included: false },
      { name: 'BDIX Connected', included: true },
      { name: '4k Streaming', included: true },
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Delta Ultra',
    speed: '50 Mbps',
    price: 840,
    period: '/month',
    description: 'Heavy usage and 4K streaming for power users',
    currency: '৳',
    features: [
      { name: '50 Mbps Speed', included: true },
      { name: 'Unlimited Data', included: true },
      { name: '24/7 Support', included: true },
      { name: 'Fiber Optic', included: true },
      { name: 'Public IP', included: true },
      { name: 'Real IP', included: true },
      { name: 'BDIX Connected', included: true },
      { name: '4k Streaming', included: true },
    ],
    cta: 'Get Started',
  },
  {
    name: 'Delta Max',
    speed: '60 Mbps',
    price: 1050,
    period: '/month',
    description: 'Ultimate speed for seamless experience',
    currency: '৳',
    features: [
      { name: '60 Mbps Speed', included: true },
      { name: 'Unlimited Data', included: true },
      { name: '24/7 Support', included: true },
      { name: 'Fiber Optic', included: true },
      { name: 'Public IP', included: true },
      { name: 'Real IP', included: true },
      { name: 'BDIX Connected', included: true },
      { name: '4k Streaming', included: true },
    ],
    cta: 'Get Started',
    popular: true,
    badgeText: "Gamers Choice",
    badgeColor: "#eb262f",
  },
  {
    name: 'Delta Enterprise',
    speed: 'Custom',
    price: 0,
    period: '',
    description: 'Dedicated bandwidth for business needs',
    currency: '৳',
    features: [
      { name: 'Custom Speed', included: true },
      { name: 'Unlimited Data', included: true },
      { name: 'Priority Support', included: true },
      { name: 'SLA Guarantee', included: true },
      { name: 'Dedicated Manager', included: true },
      { name: 'Real IP', included: true },
      { name: 'Redundant Link', included: true },
      { name: '24/7 Monitoring', included: true },
    ],
    cta: 'Contact Sales',
    isEnterprise: true,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Internet Packages
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-balance">
            Choose the perfect plan for your needs. All plans include 99.99% uptime guarantee and 24-hour customer support.
          </p>

          {/* Billing Toggle */}
          <Tabs value={billingPeriod} onValueChange={(v) => setBillingPeriod(v as 'monthly' | 'yearly')} className="w-fit mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="yearly">
                Yearly
                <Badge variant="secondary" className="ml-2">Save 10%</Badge>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mb-16"
        >
          {plans.map((plan) => {
            const displayPrice = billingPeriod === 'yearly' && !plan.isEnterprise
              ? Math.floor(plan.price * 12 * 0.9)
              : plan.price

            return (
              <motion.div
                key={plan.name}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className={`relative h-full rounded-2xl border transition-all duration-300 ${plan.popular
                  ? 'border-primary bg-gradient-to-b from-primary/10 to-background shadow-lg shadow-primary/20 md:scale-105'
                  : 'border-border bg-card hover:border-primary/50'
                  }`}
              >
                {/* Popular Badge */}
                {(plan.popular || plan.badgeText) && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge
                      className={plan.badgeColor ? "" : "bg-gradient-to-r from-primary to-secondary"}
                      style={plan.badgeColor ? { backgroundColor: plan.badgeColor } : {}}
                    >
                      {plan.badgeText || 'Most Popular'}
                    </Badge>
                  </div>
                )}

                <div className="p-8 flex flex-col h-full">
                  {/* Plan Header */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-primary font-semibold mb-2">{plan.speed}</div>
                    <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                    <div className="flex items-baseline gap-1">
                      {plan.isEnterprise ? (
                        <span className="text-3xl font-bold">Contact Sales</span>
                      ) : (
                        <>
                          <span className="text-5xl font-black flex items-baseline gap-[-0.1em]">
                            <span className="text-4xl md:text-5xl tracking-tight">৳</span>
                            {displayPrice}
                          </span>
                          <span className="text-muted-foreground text-sm">{billingPeriod === 'yearly' ? '/year' : '/month'}</span>
                        </>
                      )}
                    </div>
                    {billingPeriod === 'yearly' && !plan.isEnterprise && (
                      <p className="text-xs text-secondary mt-2">
                        <span className="font-bold">৳</span>{Math.floor(displayPrice / 12)}/month billed annually
                      </p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Button
                    asChild
                    className={`w-full mb-8 ${plan.popular
                      ? 'bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50'
                      : 'border border-primary/50 text-primary hover:bg-primary/10'
                      }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    <Link href="/contact">
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>

                  {/* Features */}
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature.name} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground/30 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? 'text-sm' : 'text-sm text-muted-foreground/50'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Feature Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Detailed Comparison</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold min-w-[200px]">Feature</th>
                  {plans.map((plan) => (
                    <th key={plan.name} className="text-center py-4 px-4 font-semibold min-w-[140px]">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Download Speed', icon: <Download className="w-4 h-4 text-primary" />, values: ['20 Mbps', '30 Mbps', '40 Mbps', '50 Mbps', '60 Mbps', 'Custom'] },
                  { label: 'Upload Speed', icon: <Upload className="w-4 h-4 text-primary" />, values: ['20 Mbps', '30 Mbps', '40 Mbps', '50 Mbps', '60 Mbps', 'Custom'] },
                  { label: 'Unlimited Data', values: [true, true, true, true, true, true] },
                  { label: '24/7 Support', values: [true, true, true, true, true, true] },
                  { label: 'Real IP', values: [false, false, false, true, true, true] },
                  { label: 'BDIX Speed', values: ['100 Mbps', '100 Mbps', '100 Mbps', '1 Gbps', '1 Gbps', '10 Gbps'] },
                  { label: 'Installation', values: ['৳1000', '৳1000', '৳500', 'Free', 'Free', 'Custom'] },
                  { label: 'Bufferless YT', values: [true, true, true, true, true, true] },
                  { label: 'Gaming Ping', values: ['Standard', 'Standard', 'Better', 'Good', 'Best', 'Ultra Low'] },
                  { label: 'SLA Guarantee', values: [false, false, false, false, false, '99.9%'] },
                ].map((row, idx) => (
                  <tr key={row.label} className={`border-b border-border ${idx % 2 === 0 ? 'bg-card/30' : ''}`}>
                    <td className="py-4 px-4 font-medium text-sm">
                      <div className="flex items-center gap-2">
                        {row.icon}
                        {row.label}
                      </div>
                    </td>
                    {row.values.map((value, i) => (
                      <td key={`${row.label}-${i}`} className="py-4 px-4 text-center text-sm">
                        {typeof value === 'boolean' ? (
                          value ? (
                            <Check className="w-5 h-5 text-secondary mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />
                          )
                        ) : (
                          value
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-card rounded-xl p-8 border border-border"
        >
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: 'Do you offer any discounts for annual billing?',
                a: 'Yes! Save 10% when you choose annual billing. You\'ll see the savings reflected when you select the yearly option above.',
              },
              {
                q: 'Can I change my plan at any time?',
                a: 'Absolutely. You can upgrade or downgrade your plan anytime. Changes take effect at the start of your next billing cycle.',
              },
              {
                q: 'Is there a contract required?',
                a: 'No contracts required. All our plans are month-to-month. You\'re free to cancel anytime.',
              },
              {
                q: 'What\'s included in installation?',
                a: 'Our technicians will install your modem, router, and run all necessary cables. Setup typically takes 1-2 hours.',
              },
            ].map((faq) => (
              <div key={faq.q}>
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions? Contact our sales team.
          </p>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition-all">
              Talk to Sales
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
