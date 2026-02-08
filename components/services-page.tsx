'use client'

import Link from 'next/link'
import { Wifi, Building2, Zap, Shield, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DESIGN_VERSION } from '@/lib/site-config'
import { motion } from 'framer-motion'

const servicesDetail = [
  {
    icon: Wifi,
    title: 'Home Internet',
    shortDesc: 'Blazing-fast speeds perfect for streaming, gaming, and working from home',
    fullDesc: 'Experience the ultimate home internet experience with our fiber-optic network delivering speeds up to 1 Gbps. No data caps, no throttling, just pure unlimited connectivity.',
    features: [
      'Download speeds up to 1 Gbps',
      'Unlimited data usage',
      'WiFi 6 compatible equipment',
      'No throttling or data caps',
      'Works with smart home devices',
      'Free 24/7 support',
    ],
    color: 'from-blue-400 to-primary',
  },
  {
    icon: Building2,
    title: 'Corporate Internet',
    shortDesc: 'Enterprise-grade connectivity with dedicated bandwidth and SLA guarantees',
    fullDesc: 'Built for modern businesses. Get dedicated bandwidth, redundant connections, and Service Level Agreement guarantees to keep your operations running 24/7.',
    features: [
      'Dedicated bandwidth',
      'Redundant fiber connections',
      '99.99% uptime SLA',
      'Static IP addresses',
      'Priority support',
      'Managed security services',
    ],
    color: 'from-primary to-blue-500',
  },
  {
    icon: Zap,
    title: 'Dedicated Bandwidth',
    shortDesc: 'Guaranteed speeds with priority support. Perfect for bandwidth-heavy applications',
    fullDesc: 'For businesses and power users who need consistent, guaranteed performance. Our dedicated bandwidth service ensures your connection is always prioritized.',
    features: [
      'Guaranteed minimum bandwidth',
      'Priority traffic routing',
      'Consistent speeds 24/7',
      'No congestion periods',
      'Performance monitoring included',
      'Real-time analytics dashboard',
    ],
    color: 'from-secondary to-cyan-400',
  },
  {
    icon: Shield,
    title: 'Network Security',
    shortDesc: 'Advanced DDoS protection, firewalls, and 24/7 security monitoring included',
    fullDesc: 'Protect your business from cyber threats with our comprehensive security suite. Advanced threat detection, DDoS mitigation, and professional monitoring.',
    features: [
      'Advanced firewall protection',
      'DDoS mitigation services',
      '24/7 security monitoring',
      'Intrusion detection systems',
      'Regular security audits',
      'Threat intelligence feeds',
    ],
    color: 'from-cyan-400 to-secondary',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export function ServicesPageContent() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
            Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Comprehensive internet solutions designed to meet every need, from residential to enterprise-level requirements.
          </p>
        </motion.div>

        {/* Services Detail Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {servicesDetail.map((service, idx) => {
            const Icon = service.icon
            const isEven = idx % 2 === 0

            return (
              <motion.div
                key={service.title}
                id={service.title.toLowerCase().replace(/\s+/g, '-')}
                variants={itemVariants}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-20 -mt-20 ${isEven ? '' : 'md:grid-flow-dense'}`}
              >
                {/* Content */}
                <div className={isEven ? 'md:col-span-1' : 'md:col-span-1 md:order-2'}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-0.5 mb-6`}>
                      <div className="w-full h-full rounded-lg bg-background flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{service.fullDesc}</p>

                    {/* Features List */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href={idx < 2 ? "/packages" : "/contact"}>
                      <Button
                        className={`transition-all ${DESIGN_VERSION === 'hot'
                          ? 'h-14 px-8 rounded-2xl bg-[#0C58A4] hover:bg-[#0C58A4]/90 shadow-lg shadow-[#0C58A4]/20'
                          : 'bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50'
                          }`}
                      >
                        {idx < 2 ? "Explore Packages" : "Learn More & Contact"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </motion.div>
                </div>

                {/* Visual Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={isEven ? 'md:col-span-1 md:order-2' : 'md:col-span-1 md:order-1'}
                >
                  <div className={`h-96 rounded-2xl border border-border bg-gradient-to-br ${service.color} p-0.5 relative overflow-hidden group`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/40 to-background/80" />
                    <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-card to-card/50 flex items-center justify-center border border-primary/20">
                      <div className="text-center space-y-4">
                        <motion.div
                          whileInView={{ scale: 1 }}
                          initial={{ scale: 0 }}
                          transition={{ type: 'spring', stiffness: 100 }}
                          className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${service.color} p-0.5`}
                        >
                          <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                            <Icon className="w-12 h-12 text-primary" />
                          </div>
                        </motion.div>
                        <h3 className="font-bold text-lg">{service.title}</h3>
                        <p className="text-sm text-muted-foreground max-w-xs">{service.shortDesc}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-card/50 backdrop-blur-md rounded-[2.5rem] border border-border p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10" />

          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Premium Add-ons</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'OTT Premium Access',
                desc: 'Get access to Bioscope, Hoichoi, and Bongo with your connection.',
                price: '৳150/mo',
                icon: <Zap className="w-5 h-5 text-primary" />,
              },
              {
                title: 'Safe Internet',
                desc: 'Parental controls and malicious site blocking for your family.',
                price: '৳100/mo',
                icon: <Shield className="w-5 h-5 text-primary" />,
              },
              {
                title: 'Public Real IP',
                desc: 'Dedicated Real IP for hosting, gaming, or remote access.',
                price: '৳200/mo',
                icon: <Building2 className="w-5 h-5 text-primary" />,
              },
              {
                title: 'Gaming Boost',
                desc: 'Low latency routing for professional gaming and competitive play.',
                price: '৳150/mo',
                icon: <Zap className="w-5 h-5 text-primary" />,
              },
              {
                title: 'Mesh Wi-Fi System',
                desc: 'Professional mesh router setup for full home coverage.',
                price: 'Starts at ৳2500',
                icon: <Wifi className="w-5 h-5 text-primary" />,
              },
              {
                title: 'BDIX Premium Cache',
                desc: 'Uncapped speeds for local BDIX servers and file sharing.',
                price: 'Free with Plus+',
                icon: <CheckCircle className="w-5 h-5 text-primary" />,
              },
            ].map((addon) => (
              <motion.div
                key={addon.title}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-8 rounded-2xl border border-border bg-background/40 hover:bg-card hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors text-primary font-bold">
                  {addon.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{addon.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-2">{addon.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-black text-primary text-lg">{addon.price}</span>
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-4 h-4 text-secondary" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-muted-foreground mb-8">
            Contact our sales team to find the perfect service solution for your needs.
          </p>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition-all px-8 py-6">
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
