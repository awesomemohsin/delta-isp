'use client'

import Link from 'next/link'
import Image from 'next/image'
import { DESIGN_VERSION } from '@/lib/site-config'
import { stats } from '@/lib/homepage-data'
import { ArrowRight, Award, Users, Globe, Zap, Target, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, animate, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'



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

function StatCard({ value, label, index }: { value: string, label: string, index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [displayValue, setDisplayValue] = useState("0")

  useEffect(() => {
    if (isInView) {
      const numericPart = value.replace(/[^0-9.]/g, '')
      const suffix = value.replace(/[0-9.]/g, '')
      const target = parseFloat(numericPart)

      if (!isNaN(target)) {
        const controls = animate(0, target, {
          duration: 2,
          ease: "easeOut",
          delay: index * 0.1,
          onUpdate(value) {
            setDisplayValue(
              target % 1 === 0
                ? Math.floor(value).toString() + suffix
                : value.toFixed(2) + suffix
            )
          },
        })
        return () => controls.stop()
      } else {
        setDisplayValue(value)
      }
    }
  }, [isInView, value, index])

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`p-10 transition-all duration-500 text-center flex flex-col items-center justify-center relative overflow-hidden group ${DESIGN_VERSION === 'hot'
        ? 'rounded-[3rem] border-2 border-[#0C58A4]/20 bg-card/40 backdrop-blur-xl shadow-2xl hover:border-[#EA2630]/40 dark:border-white/10 dark:hover:border-[#EA2630]/60'
        : 'rounded-2xl border border-border bg-card'
        }`}
    >
      {/* Dynamic Background Elements for Hot Theme */}
      {DESIGN_VERSION === 'hot' && (
        <>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#EA2630]/30 to-transparent group-hover:via-[#EA2630] transition-all duration-500" />
          <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-[#0C58A4]/10 rounded-full blur-3xl group-hover:bg-[#0C58A4]/20 transition-colors duration-700" />
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#EA2630]/10 rounded-full blur-3xl group-hover:bg-[#EA2630]/20 transition-colors duration-700" />
        </>
      )}

      <div className={`text-4xl md:text-5xl font-black mb-3 tracking-tighter transition-all group-hover:scale-110 ${DESIGN_VERSION === 'hot' ? 'text-[#0C58A4] drop-shadow-[0_2px_10px_rgba(12,88,164,0.15)]' : 'text-primary'
        }`}>
        {displayValue}
      </div>
      <div className="text-[8px] md:text-[9px] text-muted-foreground uppercase tracking-[0.4em] font-black opacity-60 group-hover:opacity-100 group-hover:text-[#EA2630] transition-all">
        {label}
      </div>
    </motion.div>
  )
}

export function AboutPageContent() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EA2630]/10 border border-[#EA2630]/20 text-[#EA2630] text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            <Zap size={14} /> Our Journey
          </div>
          <h1 className="flex flex-col items-center gap-2 mb-6 uppercase text-balance">
            <span className="text-2xl md:text-5xl font-black tracking-tighter opacity-80">About</span>
            <span className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] ${DESIGN_VERSION === 'hot'
              ? "text-[#0C58A4]"
              : "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              }`}>
              Delta Software & Communication Ltd
            </span>
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto text-balance font-medium leading-relaxed opacity-80 mb-12">
            Pioneering the next generation of connectivity with innovative solutions and an unwavering commitment to reliability across Bangladesh.
          </p>
        </motion.div>

        {/* Stats Section with Cards and Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-32"
        >
          {stats.map((stat, index) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} index={index} />
          ))}
        </motion.div>

        {/* Detailed Brand Story Section */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
          >
            <div className="lg:col-span-5 space-y-8 sticky top-32">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none uppercase">
                  Our <br />
                  <span className={DESIGN_VERSION === 'hot' ? 'text-[#EA2630]' : 'text-primary'}>Legacy</span>
                </h2>
              </div>
              <div className="relative p-8 rounded-[3rem] bg-gradient-to-br from-[#0C58A4]/5 to-transparent border border-[#0C58A4]/10 shadow-sm overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#0C58A4]/5 rounded-full blur-3xl" />
                <p className="text-lg md:text-xl font-medium text-foreground/80 leading-relaxed italic relative z-10">
                  &quot;Driving digital transformation and empowering connectivity for a smarter, more connected Bangladesh.&quot;
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-medium">
                  <span className="italic font-bold text-foreground">Delta Software and Communication Ltd.</span> is a leading nationwide Internet Service Provider (ISP) in Bangladesh...
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-medium">
                  We are deeply committed to our <span className="italic text-foreground font-bold">customers, vendors, and partners</span>, ensuring transparency, reliability, and long-term collaboration in every aspect of our service. Our operations are <span className="text-[#EA2630] font-black bg-[#EA2630]/5 px-2 rounded-md">fully domestic</span>, enabling us to maintain strong control over service quality, compliance, and customer experience across the country.
                </p>
              </div>

              <div className="p-1 rounded-[3.5rem] bg-gradient-to-tr from-[#0C58A4]/20 via-transparent to-[#EA2630]/20">
                <div className="p-8 md:p-12 rounded-[3.5rem] bg-card/60 backdrop-blur-3xl space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-[1.5rem] bg-[#0C58A4] flex items-center justify-center text-white shadow-xl shadow-[#0C58A4]/30 rotate-3">
                      <Globe size={32} />
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tight">Infrastructure Core</h3>
                  </div>
                  <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-medium">
                    <p>
                      Supported by Bangladesh&apos;s best <span className="italic text-foreground font-bold">NTTN, IIG</span>, and an experienced <span className="font-bold text-[#0C58A4]">technology team</span>, we ensure high performance, stable connectivity, and dependable network support.
                    </p>
                    <p>
                      Delta Software & Communication Ltd. always prioritizes and prefers <span className="text-foreground font-bold underline decoration-[#0C58A4] decoration-4 underline-offset-8">our own infrastructure</span>...
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 flex flex-wrap gap-4">
                {['Reliability', 'Transparency', 'Domestic Control', 'Innovation'].map((tag) => (
                  <span key={tag} className="px-6 py-2 rounded-full border border-border bg-muted/30 text-[10px] uppercase font-black tracking-widest opacity-60">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>


        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
        >
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0C58A4]/5 to-background border border-[#0C58A4]/20 dark:border-white/10 hover:border-[#0C58A4]/40 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Target size={120} />
            </div>
            <h2 className="text-2xl font-black mb-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-[#0C58A4] flex items-center justify-center text-white text-base shadow-lg shadow-[#0C58A4]/20">
                <Target size={20} />
              </span>
              Mission
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground transition-colors relative z-10">
              To deliver reliable and high-quality internet and communication services to residential and corporate clients through our own infrastructure and advanced technologies; ensuring stable performance with expert technical support; and building long-term, trust-based relationships with customers, vendors, and partners.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#EA2630]/5 to-background border border-[#EA2630]/20 dark:border-white/10 hover:border-[#EA2630]/40 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Eye size={120} />
            </div>
            <h2 className="text-2xl font-black mb-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-[#EA2630] flex items-center justify-center text-white text-base shadow-lg shadow-[#EA2630]/20">
                <Eye size={20} />
              </span>
              🌟 Vision
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground transition-colors relative z-10">
              To be a leading, trusted, and technology-driven infrastructure company delivering fast, secure, and uninterrupted connectivity nationwide.
            </p>
          </div>
        </motion.div>



        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black mb-3">Core Values</h2>
            <div className={`h-1 w-20 mx-auto rounded-full ${DESIGN_VERSION === 'hot' ? 'bg-[#EA2630]' : 'bg-primary'}`} />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          >
            {values.map((value) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="p-8 rounded-3xl border border-border dark:border-white/10 bg-card/30 hover:bg-card hover:border-[#0C58A4]/40 transition-all group"
                >
                  <div className={`w-14 h-14 rounded-2xl ${DESIGN_VERSION === 'hot' ? 'bg-[#0C58A4]/10 text-[#0C58A4]' : 'bg-primary/10 text-primary'} flex items-center justify-center mb-6 shadow-xl transition-all group-hover:rotate-12 group-hover:bg-[#0C58A4]/20`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-black text-lg mb-3 uppercase tracking-tight">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium">{value.description}</p>
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
          className={`p-10 mb-16 border relative overflow-hidden ${DESIGN_VERSION === 'hot' ? 'rounded-[3.5rem] bg-card/20 border-[#0C58A4]/10 shadow-inner' : 'rounded-3xl bg-card border-border'
            }`}
        >
          {/* Subtle bg glow */}
          {DESIGN_VERSION === 'hot' && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#0C58A4]/1 cursor-none pointer-events-none blur-[100px]" />
          )}

          <h2 className="text-2xl md:text-3xl font-black text-center mb-8 tracking-tight">Our Leadership</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">
            {[
              {
                name: 'Md Benzir Rashed Khan',
                role: 'Managing Director',
                dept: 'Leadership',
                image: '/images/md.webp'
              },
              {
                name: 'Md Kawcher Ahmed',
                role: 'Marketing Head',
                dept: 'Marketing',
                image: '/images/marketing.webp'
              },
            ].map((member) => (
              <div
                key={member.name}
                className={`p-10 transition-all hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] group flex flex-col md:flex-row items-center gap-10 ${DESIGN_VERSION === 'hot'
                  ? 'rounded-[3.5rem] border border-white/5 bg-background/40 backdrop-blur-md hover:border-[#EA2630]/20'
                  : 'rounded-3xl border border-border bg-background'
                  }`}
              >
                <div className={`relative flex-shrink-0 overflow-hidden transition-all duration-700 ${DESIGN_VERSION === 'hot'
                  ? 'w-48 h-48 rounded-[2.5rem] ring-8 ring-primary/5 group-hover:ring-primary/10 group-hover:scale-105'
                  : 'w-40 h-40 rounded-full'
                  }`}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl lg:text-3xl font-black tracking-tighter mb-2">{member.name}</h3>
                  <p className={`font-black uppercase tracking-[0.2em] text-sm mb-4 ${DESIGN_VERSION === 'hot' ? 'text-[#EA2630]' : 'text-primary'}`}>{member.role}</p>
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest opacity-60">Department: {member.dept}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center py-10"
        >
          <h2 className="text-xl md:text-2xl font-black mb-4">Ready to Connect?</h2>
          <Link href="/contact">
            <Button className={`transition-all px-10 py-6 font-black uppercase tracking-widest text-xs h-auto ${DESIGN_VERSION === 'hot'
              ? 'rounded-full bg-[#0C58A4] hover:bg-[#EA2630] shadow-xl hover:shadow-[#EA2630]/20'
              : 'rounded-xl bg-primary hover:bg-secondary'
              }`}>
              Get Delta Internet Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div >
  )
}
