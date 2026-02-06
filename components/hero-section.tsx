'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

const HEADLINE_PHRASES = [
  "Your Gateway to a Faster Bangladesh",
  "Zero Lag. Zero Buffering. Pure Speed.",
  "Connecting Bangladesh at the Speed of Innovation"
]

const DESCRIPTION_PHRASES = [
  "Reliable, high-speed internet solutions delivering uninterrupted connectivity across Bangladesh for homes, businesses, and enterprises.",
  "From Dhaka to the farthest districts, unleash the true power of the internet with our ultra-low latency fiber network.",
  "Experience stable bandwidth, low latency, and professional support—backed by nationwide infrastructure."
]

/**
 * TypewriterText Component
 * Animates text character by character for a typewriter effect.
 */
function TypewriterText({ text }: { text: string }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      key={text}
      className="inline-block"
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.05,
            delay: index * 0.03,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}

export function HeroSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HEADLINE_PHRASES.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/50"
          >
            <Zap size={16} className="text-secondary" />
            <span className="text-sm font-medium text-secondary">Broadband & ICT Solutions</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance flex flex-col items-center gap-4"
          >
            <span className="bg-gradient-to-r from-primary via-blue-400 to-secondary bg-clip-text text-transparent">
              Delta Software and Communication
            </span>
            <div className="h-[1.2em] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-foreground text-3xl md:text-5xl lg:text-6xl"
                >
                  <TypewriterText text={HEADLINE_PHRASES[index]} />
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.h1>

          {/* Subheading / Description Carousel */}
          <div className="h-[5rem] md:h-[4rem] flex flex-col items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance"
              >
                {DESCRIPTION_PHRASES[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col md:flex-row justify-center gap-4 pt-4"
          >
            <Link href="/contact">
              <Button className="w-full md:w-auto bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition-all px-8 py-6 text-base">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="w-full md:w-auto px-8 py-6 text-base border-primary/50 hover:bg-primary/10 bg-transparent">
                Our Services
              </Button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="pt-8 flex flex-col md:flex-row justify-center items-center gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span>Nationwide Network</span>
            </div>
            <div className="hidden md:flex w-px h-6 bg-border" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span>Fiber Optic Technology</span>
            </div>
            <div className="hidden md:flex w-px h-6 bg-border" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span>24/7 Priority Support</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
