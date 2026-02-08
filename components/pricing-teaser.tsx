'use client'

import React, { useCallback, useEffect } from 'react'
import Link from 'next/link'
import { Check, ArrowRight, ChevronLeft, ChevronRight, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import useEmblaCarousel from 'embla-carousel-react'
import { plans } from '@/components/pricing-page'
import { DESIGN_VERSION } from '@/lib/site-config'

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
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  })

  const intervalRef = React.useRef<NodeJS.Timeout>(null)

  const resetAutoplay = useCallback(() => {
    if (!emblaApi) return
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000)
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    resetAutoplay()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [emblaApi, resetAutoplay])

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev()
      resetAutoplay()
    }
  }, [emblaApi, resetAutoplay])

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext()
      resetAutoplay()
    }
  }, [emblaApi, resetAutoplay])

  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Simple, <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Transparent</span> Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Choose the perfect plan for your needs. Explore our high-speed fiber internet packages.
          </p>
        </motion.div>

        {/* Slider Controls */}
        <div className="absolute top-1/2 -left-8 -right-8 md:-left-16 md:-right-16 z-10 flex justify-between pointer-events-none translate-y-8 md:translate-y-0">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-background/80 backdrop-blur-sm border-primary/20 pointer-events-auto hover:bg-primary/10 transition-colors hidden md:flex"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-background/80 backdrop-blur-sm border-primary/20 pointer-events-auto hover:bg-primary/10 transition-colors hidden md:flex"
            onClick={scrollNext}
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </Button>
        </div>

        {/* Carousel Container */}
        <div className="embla overflow-hidden px-2" ref={emblaRef}>
          <div className="embla__container flex">
            {plans.map((plan, index) => (
              <div key={plan.name} className="embla__slide flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] p-4">
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={DESIGN_VERSION === 'hot' ? { y: -8, scale: 1.03 } : { y: -8 }}
                  className={`relative h-full transition-all duration-300 flex flex-col ${DESIGN_VERSION === 'hot'
                    ? `rounded-[2rem] border-t-4 backdrop-blur-md ${plan.popular
                      ? 'border-t-[#EA2630] border-x border-b border-[#EA2630]/20 bg-card/80 shadow-[0_20px_40px_-15px_rgba(234,38,48,0.15)]'
                      : 'border-t-[#0C58A4] border-x border-b border-border bg-card/60 hover:shadow-[0_20px_40px_-15px_rgba(12,88,164,0.15)]'
                    }`
                    : `rounded-2xl border ${plan.popular
                      ? 'border-primary bg-gradient-to-b from-primary/10 to-background shadow-lg shadow-primary/20'
                      : 'border-border bg-card hover:border-primary/50'
                    }`
                    }`}
                >
                  {/* Badge */}
                  {(plan.popular || plan.badgeText) && (
                    <div className={`absolute left-1/2 transform -translate-x-1/2 z-10 ${DESIGN_VERSION === 'hot' ? '-top-3' : '-top-4'}`}>
                      <Badge
                        className={DESIGN_VERSION === 'hot' ? "px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-lg" : (plan.badgeColor ? "" : "bg-gradient-to-r from-primary to-secondary")}
                        style={DESIGN_VERSION === 'hot'
                          ? { backgroundColor: plan.popular ? '#EA2630' : '#0C58A4', color: '#FFFFFF' }
                          : (plan.badgeColor ? { backgroundColor: plan.badgeColor } : {})}
                      >
                        {plan.badgeText || (plan.popular ? 'Most Popular' : 'Best Value')}
                      </Badge>
                    </div>
                  )}

                  <div className="p-8 flex flex-col h-full relative z-0">
                    {/* Plan Header */}
                    <div className={DESIGN_VERSION === 'hot' ? "mb-8" : "mb-6"}>
                      <h3 className={DESIGN_VERSION === 'hot' ? "text-sm font-bold tracking-widest uppercase mb-2" : "text-2xl font-bold mb-2 text-black"} style={DESIGN_VERSION === 'hot' ? { color: '#0C58A4' } : {}}>
                        {plan.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        {DESIGN_VERSION === 'hot' && <Zap className="w-5 h-5" style={{ color: '#EA2630' }} />}
                        <div
                          className={DESIGN_VERSION === 'hot' ? "text-4xl font-black italic tracking-tighter" : "text-primary font-semibold"}
                          style={DESIGN_VERSION === 'hot' ? { color: '#EA2630' } : {}}
                        >
                          {plan.speed}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{plan.description}</p>

                      <div className={DESIGN_VERSION === 'hot' ? "flex items-baseline gap-1 bg-muted/30 p-4 rounded-2xl border border-border/50" : "flex items-baseline gap-1"}>
                        {plan.isEnterprise ? (
                          <span className={DESIGN_VERSION === 'hot' ? "text-2xl font-bold text-black italic" : "text-3xl font-bold text-black"}>Contact Sales</span>
                        ) : (
                          <>
                            <span
                              className={DESIGN_VERSION === 'hot' ? "text-4xl font-black flex items-baseline gap-1" : "text-4xl font-black flex items-baseline gap-[-0.1em] text-black"}
                              style={DESIGN_VERSION === 'hot' ? { color: '#000000' } : {}}
                            >
                              <span className={DESIGN_VERSION === 'hot' ? "text-2xl" : "text-3xl md:text-4xl"}>৳</span>
                              {plan.price}
                            </span>
                            <span className="text-muted-foreground text-sm">/month</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="mb-8 flex-grow">
                      {DESIGN_VERSION === 'hot' && <div className="text-xs font-bold text-[#999A9B] uppercase tracking-widest mb-4">Included Features</div>}
                      <ul className="space-y-4">
                        {plan.features.slice(0, 4).map((feature) => (
                          <li key={feature.name} className="flex items-center gap-3 text-sm group/item">
                            <div className={DESIGN_VERSION === 'hot' ? `p-1 rounded-full ${plan.popular ? 'bg-[#EA2630]/10' : 'bg-[#0C58A4]/10'}` : ""}>
                              <Check
                                className={DESIGN_VERSION === 'hot' ? "w-3 h-3" : "w-4 h-4 text-secondary flex-shrink-0 mt-0.5"}
                                style={DESIGN_VERSION === 'hot' ? { color: plan.popular ? '#EA2630' : '#0C58A4' } : {}}
                              />
                            </div>
                            <span className={`text-black font-medium line-clamp-1 group-hover/item:translate-x-1 transition-transform ${DESIGN_VERSION === 'hot' ? '' : 'text-muted-foreground'}`} style={DESIGN_VERSION === 'hot' ? {} : { color: '#999A9B' }}>
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Button
                      asChild
                      className={`w-full h-14 rounded-2xl text-base font-bold transition-all duration-300 ${DESIGN_VERSION === 'hot'
                          ? ""
                          : plan.popular
                            ? 'bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 text-white'
                            : 'border border-primary/50 text-primary hover:bg-primary/10'
                        }`}
                      style={DESIGN_VERSION === 'hot' ? {
                        background: plan.popular
                          ? 'linear-gradient(135deg, #EA2630 0%, #B21C24 100%)'
                          : 'transparent',
                        border: plan.popular ? 'none' : '2px solid #0C58A4',
                        color: plan.popular ? '#FFFFFF' : '#0C58A4',
                        boxShadow: plan.popular ? '0 10px 20px -5px rgba(234,38,48,0.4)' : 'none'
                      } : {}}
                    >
                      <Link href="/contact" className="hover:gap-3 transition-all">
                        {plan.cta}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex justify-center gap-4 mt-8 md:hidden">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-primary/20 hover:bg-primary/10"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-5 w-5 text-primary" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-primary/20 hover:bg-primary/10"
            onClick={scrollNext}
          >
            <ChevronRight className="h-5 w-5 text-primary" />
          </Button>
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/packages">
            <Button variant="link" size="lg" className="text-primary hover:gap-3 transition-all">
              View All Packages and Features
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
