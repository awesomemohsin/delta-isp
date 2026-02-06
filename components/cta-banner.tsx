'use client'

import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function CTABanner() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5 p-12 overflow-hidden"
        >
          {/* Animated Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl -z-0" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Ready to upgrade your internet?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 text-balance">
                Join thousands of satisfied customers experiencing the Delta ISP difference. Get connected today.
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-8">
                {[
                  'Installation within 24-48 hours',
                  'No contracts, cancel anytime',
                  'Free professional setup',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition-all">
                    Get Started Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="tel:+8809611678064">
                  <Button variant="outline" className="border-primary/50 hover:bg-primary/10 bg-transparent">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us: +880 9611678064
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { value: '99.99%', label: 'Uptime Guarantee' },
                { value: '1Gbps', label: 'Max Speed' },
                { value: '50K+', label: 'Happy Customers' },
                { value: '24/7', label: 'Expert Support' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <motion.div
                    whileInView={{ scale: 1 }}
                    initial={{ scale: 0 }}
                    transition={{ type: 'spring', stiffness: 100 }}
                    className="text-3xl font-bold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
