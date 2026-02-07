'use client'

import Link from 'next/link'
import { ArrowRight, Award, Users, Globe, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const stats = [
  { label: 'Years in Business', value: '15+' },
  { label: 'Happy Customers', value: '50K+' },
  { label: 'Coverage Areas', value: '45+' },
  { label: 'Uptime Record', value: '99.99%' },
]

const milestones = [
  { year: '2009', title: 'Founded', description: 'Delta Software and Communication founded with a mission to provide reliable internet to underserved communities.' },
  { year: '2012', title: 'First 10K Customers', description: 'Reached 10,000 residential customers across three states.' },
  { year: '2015', title: 'Fiber Network Launch', description: 'Launched our proprietary fiber-optic network reaching 100 Gbps backbone.' },
  { year: '2018', title: 'Enterprise Solutions', description: 'Introduced corporate internet packages with SLA guarantees.' },
  { year: '2021', title: 'Security Suite', description: 'Launched comprehensive network security and threat detection services.' },
  { year: '2024', title: 'Industry Leaders', description: 'Recognized as #1 ISP for customer satisfaction and reliability in the region.' },
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
              <motion.div
                whileInView={{ scale: 1 }}
                initial={{ scale: 0 }}
                transition={{ type: 'spring', stiffness: 100 }}
                className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text mb-2"
              >
                {stat.value}
              </motion.div>
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

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-transparent" />

            {/* Timeline Items */}
            <div className="space-y-8 md:space-y-0">
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`flex gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`p-6 rounded-xl border border-border bg-card hover:bg-card/80 transition-colors ${idx % 2 === 0 ? 'md:ml-auto md:w-5/6' : 'md:mr-auto md:w-5/6'}`}>
                      <p className="text-sm font-semibold text-primary mb-2">{milestone.year}</p>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex justify-center items-start pt-6">
                    <motion.div
                      whileInView={{ scale: 1 }}
                      initial={{ scale: 0 }}
                      transition={{ type: 'spring', stiffness: 100 }}
                      className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary ring-4 ring-background"
                    />
                  </div>

                  {/* Empty Space */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'John Smith', role: 'CEO & Founder', dept: 'Leadership' },
              { name: 'Sarah Johnson', role: 'Chief Technology Officer', dept: 'Engineering' },
              { name: 'Michael Chen', role: 'Head of Customer Success', dept: 'Operations' },
            ].map((member) => (
              <div key={member.name} className="p-6 rounded-xl border border-border bg-background/50 hover:bg-background transition-colors text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary" />
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-primary mb-1">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.dept}</p>
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
          <h2 className="text-2xl font-bold mb-4">Join the Delta ISP Community</h2>
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
