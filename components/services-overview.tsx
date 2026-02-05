'use client'

import Link from 'next/link'
import { Wifi, Building2, Zap, Shield, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Wifi,
    title: 'Home Internet',
    description: 'Blazing-fast speeds perfect for streaming, gaming, and working from home with no data caps.',
    href: '/services',
    color: 'from-blue-400 to-primary',
  },
  {
    icon: Building2,
    title: 'Corporate Internet',
    description: 'Enterprise-grade connectivity with dedicated bandwidth and SLA guarantees for businesses.',
    href: '/services',
    color: 'from-primary to-blue-500',
  },
  {
    icon: Zap,
    title: 'Dedicated Bandwidth',
    description: 'Guaranteed speeds with priority support. Perfect for bandwidth-heavy applications.',
    href: '/services',
    color: 'from-secondary to-cyan-400',
  },
  {
    icon: Shield,
    title: 'Network Security',
    description: 'Advanced DDoS protection, firewalls, and 24/7 security monitoring included.',
    href: '/services',
    color: 'from-cyan-400 to-secondary',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

export function ServicesOverview() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-card/50">
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
            Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Comprehensive internet solutions tailored for every need, from residential to enterprise.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group h-full"
              >
                <Link href={service.href}>
                  <div className="h-full p-6 rounded-xl border border-border bg-card hover:bg-card/80 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                    {/* Icon Background */}
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} p-0.5 mb-4 group-hover:scale-110 transition-transform`}>
                      <div className="w-full h-full rounded-md bg-card flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-grow">{service.description}</p>

                    {/* Link */}
                    <div className="flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/services">
            <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10 bg-transparent">
              Explore All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
