'use client'

import Link from 'next/link'
import Image from 'next/image'
import { DESIGN_VERSION } from '@/lib/site-config'
import { ArrowRight, Award, Users, Globe, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, animate, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { label: 'Happy Customers', value: 60, suffix: 'K+' },
  { label: 'Districts Covered', value: 53, suffix: '' },
  { label: 'Upazilas Covered', value: 149, suffix: '' },
  { label: 'Uptime Record', value: 99.99, suffix: '%', decimals: 2 },
]



const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in every aspect of our service, from network infrastructure to customer support.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We believe in giving back to the communities we serve and supporting local initiatives.',
  },
  {
    icon: Globe,
    title: 'Innovation',
    description: 'We continuously invest in cutting-edge technology to bring the best connectivity solutions.',
  },
  {
    icon: Zap,
    title: 'Reliability',
    description: 'Our mission is to provide fast, reliable internet that our customers can count on 24/7.',
  },
]

function Counter({ value, suffix = '', decimals = 0 }: { value: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(val) {
          if (ref.current) {
            ref.current.textContent = val.toFixed(decimals) + suffix
          }
        },
      })
      return () => controls.stop()
    }
  }, [value, suffix, decimals, isInView])

  return <span ref={ref}>0</span>
}

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

export function AboutPageContent() {
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
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Delta Software and Communication</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Leading the way in internet connectivity with a commitment to speed, reliability, and exceptional customer service.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 p-8 rounded-2xl bg-card border border-border"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center"
            >
              <div
                className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text mb-2"
              >
                <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              </div>
              <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-background border border-primary/20">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              To revolutionize internet connectivity by providing fast, reliable, and affordable services to homes and businesses. We're committed to bridging the digital divide and empowering communities with access to world-class internet infrastructure.
            </p>
            <p className="text-muted-foreground">
              Every connection we provide represents our dedication to enabling innovation, supporting education, and facilitating business growth.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-secondary/10 to-background border border-secondary/20">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground mb-4">
              To become the most trusted internet service provider in the region, recognized for our commitment to customer satisfaction, technological innovation, and community impact.
            </p>
            <p className="text-muted-foreground">
              We envision a world where everyone has access to high-speed internet regardless of their location or circumstances.
            </p>
          </div>
        </motion.div>



        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-xl border border-border bg-card hover:bg-card/80 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary p-0.5 mb-4">
                    <div className="w-full h-full rounded-md bg-background flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl border border-border p-12 mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            Our talented team of network engineers, customer service professionals, and business experts are dedicated to delivering exceptional service every single day.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: 'Md Benzir Rashed Khan',
                role: 'Managing Director',
                dept: 'Leadership',
                image: '/images/md.webp'
              },
              {
                name: 'Md Kawcher Ahmed',
                role: 'Marketing head',
                dept: 'Marketing',
                image: '/images/marketing.webp'
              },
            ].map((member) => (
              <div
                key={member.name}
                className={`p-8 transition-all hover:shadow-xl group text-center ${DESIGN_VERSION === 'hot'
                  ? 'rounded-[2.5rem] border-2 border-primary/10 bg-card/50 hover:bg-card hover:border-primary/30'
                  : 'rounded-2xl border border-border bg-background/50 hover:bg-background'
                  }`}
              >
                <div className={`relative mx-auto mb-6 overflow-hidden transition-all duration-500 ${DESIGN_VERSION === 'hot'
                  ? 'w-56 h-56 rounded-[2rem] ring-8 ring-primary/5 group-hover:ring-primary/10'
                  : 'w-48 h-48 rounded-full ring-4 ring-primary/20 group-hover:ring-primary'
                  }`}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={`object-cover transition-transform duration-700 ${DESIGN_VERSION === 'hot' ? 'group-hover:scale-105' : 'group-hover:scale-110'
                      }`}
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-bold mb-1 uppercase tracking-wider text-sm">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.dept}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Join the Delta Internet Community</h2>
          <p className="text-muted-foreground mb-8">
            Experience the difference that a truly reliable internet provider can make.
          </p>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition-all px-8 py-6">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
