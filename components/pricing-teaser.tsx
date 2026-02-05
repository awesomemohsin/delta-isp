'use client'

import React, { useCallback, useEffect } from 'react'
import Link from 'next/link'
import { Check, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import useEmblaCarousel from 'embla-carousel-react'
import { plans } from '@/components/pricing-page'

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

  useEffect(() => {
    if (!emblaApi) return
    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
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
                  whileHover={{ y: -8 }}
                  className={`relative h-full rounded-2xl border transition-all duration-300 flex flex-col ${plan.popular
                    ? 'border-primary bg-gradient-to-b from-primary/10 to-background shadow-lg shadow-primary/20'
                    : 'border-border bg-card hover:border-primary/50'
                    }`}
                >
                  {/* Badge */}
                  {(plan.popular || plan.badgeText) && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge
                        className={plan.badgeColor ? "" : "bg-gradient-to-r from-primary to-secondary"}
                        style={plan.badgeColor ? { backgroundColor: plan.badgeColor } : {}}
                      >
                        {plan.badgeText || 'Most Popular'}
                      </Badge>
                    </div>
                  )}

                  <div className="p-8 flex flex-col h-full">
                    {/* Plan Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <div className="text-primary font-semibold mb-2">{plan.speed}</div>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{plan.description}</p>
                      <div className="flex items-baseline gap-1">
                        {plan.isEnterprise ? (
                          <span className="text-3xl font-bold">Contact Sales</span>
                        ) : (
                          <>
                            <span className="text-4xl font-bold">{plan.currency}{plan.price}</span>
                            <span className="text-muted-foreground text-sm">/month</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Features Snippet */}
                    <ul className="space-y-3 mb-8 flex-grow">
                      {plan.features.slice(0, 4).map((feature) => (
                        <li key={feature.name} className="flex items-start gap-3 text-sm">
                          <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground line-clamp-1">{feature.name}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button
                      asChild
                      className={`w-full ${plan.popular
                        ? 'bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 text-white'
                        : 'border border-primary/50 text-primary hover:bg-primary/10'
                        }`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      <Link href="/contact">
                        {plan.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
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
          <Link href="/pricing">
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
