'use client'

import React, { useCallback, useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import useEmblaCarousel from 'embla-carousel-react'


const banners = [
    '/images/banner1.webp',
    '/images/banner2.webp',
    '/images/banner3.webp',
    '/images/banner4.webp',
    '/images/banner5.webp',
    '/images/banner6.webp',
]

export function BannerSlider() {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const intervalRef = useRef<NodeJS.Timeout>(null)
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        duration: 30,
    })

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    const resetAutoplay = useCallback(() => {
        if (!emblaApi) return
        if (intervalRef.current) clearInterval(intervalRef.current)
        intervalRef.current = setInterval(() => {
            emblaApi.scrollNext()
        }, 5000)
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return

        onSelect()
        emblaApi.on('select', onSelect)
        emblaApi.on('reInit', onSelect)

        resetAutoplay()

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
            emblaApi.off('select', onSelect)
        }
    }, [emblaApi, onSelect, resetAutoplay])

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

    const scrollTo = useCallback((index: number) => {
        if (emblaApi) {
            emblaApi.scrollTo(index)
            resetAutoplay()
        }
    }, [emblaApi, resetAutoplay])

    return (
        <section className="relative w-full overflow-hidden bg-transparent py-2 md:py-4">
            <div className="max-w-7xl mx-auto px-4 relative group z-10">
                <div className="embla overflow-hidden rounded-2xl border border-border" ref={emblaRef}>
                    <div className="embla__container flex">
                        {banners.map((src, index) => (
                            <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 relative aspect-video">
                                <Image
                                    src={src}
                                    alt={`Banner ${index + 1}`}
                                    fill
                                    priority={index === 0}
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Arrows - Increased gap and always visible on desktop */}
                <div className="absolute inset-y-0 -left-6 -right-6 md:-left-12 md:-right-12 flex items-center justify-between pointer-events-none z-10">
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-background/80 backdrop-blur-md border-primary/20 pointer-events-auto hover:bg-primary hover:text-white transition-all hover:scale-110 shadow-lg hidden md:flex"
                        onClick={scrollPrev}
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-background/80 backdrop-blur-md border-primary/20 pointer-events-auto hover:bg-primary hover:text-white transition-all hover:scale-110 shadow-lg hidden md:flex"
                        onClick={scrollNext}
                    >
                        <ChevronRight className="h-6 w-6" />
                    </Button>
                </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
                {banners.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={`transition-all duration-300 rounded-full ${selectedIndex === index
                            ? "w-10 h-1.5 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]"
                            : "w-2 h-1.5 bg-primary/20 hover:bg-primary/40"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}
