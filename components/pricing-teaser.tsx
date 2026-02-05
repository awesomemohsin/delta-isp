'use client'

import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

const plans = [
  {
    name: 'Starter',
    price: '$39',
    period: '/month',
    description: 'Perfect for light internet users',
    features: ['50 Mbps Download', 'Email Support', 'Basic Support', 'Unlimited Data'],
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    price: '$79',
    period: '/month',
    description: 'Ideal for families and remote workers',
    features: ['300 Mbps Download', '24/7 Support', 'Priority Support', 'Unlimited Data', 'Free Router'],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$149',
    period: '/month',
    description: 'For businesses requiring maximum performance',
    features: ['1 Gbps Download', 'Dedicated Support', 'SLA Guarantee', 'Unlimited Data', 'Free Equipment', 'Advanced Security'],
    cta: 'Contact Sales',
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

export function PricingTeaser() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card/50 via-background to-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Simple, <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Transparent</span> Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Choose the perfect plan for your needs. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`relative h-full rounded-xl border transition-all duration-300 ${
                plan.popular
                  ? 'border-primary bg-gradient-to-b from-primary/10 to-background shadow-lg shadow-primary/20 md:scale-105'
                  : 'border-border bg-card hover:border-primary/50'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-primary to-secondary">Most Popular</Badge>
                </div>
              )}

              <div className="p-8 flex flex-col h-full">
                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={`w-full ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50'
                      : 'border border-primary/50 text-primary hover:bg-primary/10'
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-4">
            Want to see all available options?
          </p>
          <Link href="/pricing">
            <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10 bg-transparent">
              View Full Pricing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
