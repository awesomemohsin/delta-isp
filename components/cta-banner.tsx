'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Phone, Globe, Shield, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { stats, ctaFeatures, contactInfo } from '@/lib/homepage-data'
import { DESIGN_VERSION } from '@/lib/site-config'

function FloatingShape({ className, delay = 0, duration = 20 }: { className?: string, delay?: number, duration?: number }) {
  return (
    <motion.div
      initial={{ y: 0, rotate: 0 }}
      animate={{
        y: [0, -100, 0],
        rotate: [0, 360],
        scale: [1, 1.2, 1]
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "linear"
      }}
      className={`absolute opacity-[0.05] rounded-full blur-2xl ${className}`}
    />
  )
}

export function CTABanner() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`relative p-6 md:p-8 overflow-hidden transition-all duration-700 ${DESIGN_VERSION === 'hot'
            ? 'rounded-[2rem] border-2 border-[#EA2630]/20 bg-card/40 backdrop-blur-3xl shadow-[0_40px_100px_-20px_rgba(12,88,164,0.2)]'
            : 'rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5'
            }`}
        >
          {/* Mesh Gradient Foundation */}
          <div className="absolute inset-0 z-0">
            <div className={`absolute top-0 left-0 w-full h-full opacity-60 ${DESIGN_VERSION === 'hot' ? 'bg-gradient-to-br from-[#0C58A4]/10 via-transparent to-[#EA2630]/10' : ''}`} />

            {/* Moving Mesh Blobs */}
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 15, repeat: Infinity }}
              className={`absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full blur-[120px] ${DESIGN_VERSION === 'hot' ? 'bg-[#EA2630]/20' : 'bg-primary/20'}`}
            />
            <motion.div
              animate={{
                x: [0, -80, 0],
                y: [0, -100, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 18, repeat: Infinity }}
              className={`absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] rounded-full blur-[100px] ${DESIGN_VERSION === 'hot' ? 'bg-[#0C58A4]/20' : 'bg-secondary/20'}`}
            />
          </div>

          {/* Floating Geometric Elements */}
          <FloatingShape className="bg-[#EA2630] w-64 h-64 top-10 left-20" duration={25} />
          <FloatingShape className="bg-[#0C58A4] w-96 h-96 bottom-20 right-40" delay={2} duration={30} />
          <FloatingShape className="bg-white w-40 h-40 top-1/2 left-1/2" delay={5} duration={20} />

          {/* Noise Texture Overaly */}
          <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none z-[1]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/5 dark:bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-[0.3em] mb-4">
                <Globe className="w-3.5 h-3.5 text-[#EA2630]" />
                Nationwide Coverage
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-[-0.05em] text-balance leading-[0.95] uppercase italic">
                Ready for <br />
                <span className={DESIGN_VERSION === 'hot' ? "text-[#EA2630] drop-shadow-[0_4px_20px_rgba(234,38,48,0.4)]" : "text-primary"}>True Speed?</span>
              </h2>
              <p className="text-base text-muted-foreground mb-8 text-balance leading-normal font-medium max-w-xl">
                Join the digital revolution with Bangladesh's most reliable internet partner. Your high-speed journey starts here.
              </p>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                {ctaFeatures.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="flex items-center gap-3 text-sm font-black tracking-tighter group/item"
                  >
                    <div className={`w-2.5 h-2.5 rounded-full transition-transform group-hover/item:scale-150 ${DESIGN_VERSION === 'hot' ? 'bg-[#EA2630] shadow-[0_0_10px_#EA2630]' : 'bg-primary'}`} />
                    <span className="uppercase">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button className={`h-14 px-8 rounded-xl font-black text-base transition-all shadow-xl relative overflow-hidden group/btn w-full ${DESIGN_VERSION === 'hot'
                    ? "bg-[#0C58A4] hover:bg-[#084175] text-white hover:shadow-[#0C58A4]/50"
                    : "bg-gradient-to-r from-primary to-secondary hover:shadow-primary/50"
                    }`}>
                    <span className="relative z-10 flex items-center gap-2">
                      GET CONNECTED
                      <Zap className="h-5 w-5 group-hover/btn:rotate-12 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                  </Button>
                </Link>
                <a href={`tel:${contactInfo.phoneRaw}`} className="w-full sm:w-auto block">
                  <Button asChild variant="outline" className="h-14 px-8 rounded-xl border-2 border-[#EA2630] text-[#EA2630] hover:bg-[#EA2630] hover:text-white font-black text-base bg-transparent transition-all shadow-lg group/phone w-full">
                    <span>
                      <Phone className="mr-2 h-5 w-5 group-hover/phone:animate-bounce" />
                      {contactInfo.phone}
                    </span>
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className={`grid grid-cols-2 gap-8 p-6 ${DESIGN_VERSION === 'hot' ? 'bg-[#000000]/5 rounded-[3rem] border border-white/10 shadow-inner' : ''}`}>
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-6 rounded-[2rem] bg-card/40 backdrop-blur-xl border border-white/20 shadow-lg flex flex-col items-center justify-center h-full min-h-[160px]"
                  >
                    <motion.div
                      whileInView={{ scale: 1, opacity: 1 }}
                      initial={{ scale: 0.5, opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 100, delay: 0.6 + (i * 0.1) }}
                      className={`text-3xl md:text-4xl font-black mb-3 tracking-tighter ${DESIGN_VERSION === 'hot' ? 'text-foreground' : 'text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text'
                        }`}
                    >
                      {stat.value}
                    </motion.div>
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground/80 leading-tight">{stat.label}</p>

                    {/* Tiny visual underline */}
                    <div className={`h-1 w-8 mx-auto mt-4 rounded-full ${i % 2 === 0 ? 'bg-[#EA2630]' : 'bg-[#0C58A4]'}`} />
                  </motion.div>
                ))}
              </div>

              {/* Trust Badge */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#EA2630] rounded-full flex items-center justify-center p-6 text-white text-center shadow-2xl rotate-12 group hover:rotate-0 transition-transform hidden xl:flex">
                <Shield className="w-16 h-16 opacity-20 absolute" />
                <span className="text-[10px] font-black uppercase tracking-tight relative z-10 leading-tight">ISO CERTIFIED <br /> SECURITY</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
