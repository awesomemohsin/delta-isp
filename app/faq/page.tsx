'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Search,
    ChevronDown,
    HelpCircle,
    ArrowRight,
    MessageCircle,
    PhoneCall,
    Facebook,
    MapPin
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { faqData, FAQItem } from '@/lib/faq-data'
import { contactInfo } from '@/lib/homepage-data'
import { DESIGN_VERSION } from '@/lib/site-config'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
}

function FAQAccordion({ item, isOpen, onToggle }: { item: FAQItem, isOpen: boolean, onToggle: () => void }) {
    return (
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'bg-card shadow-lg border-primary/20 scale-[1.01]' : 'bg-card/40 border-border/50'
            } border rounded-2xl mb-4 group`}>
            <button
                onClick={onToggle}
                className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
            >
                <span className={`font-bold transition-colors ${isOpen ? 'text-primary' : 'text-foreground/80 group-hover:text-foreground'}`}>
                    {item.question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                        }`}
                >
                    <ChevronDown size={18} />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
                            {Array.isArray(item.answer) ? (
                                <ul className="space-y-2 list-disc list-inside">
                                    {item.answer.map((line, i) => (
                                        <li key={i}>{line}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>{item.answer}</p>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default function FAQPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [openItems, setOpenItems] = useState<Record<string, boolean>>({})
    const [activeCategory, setActiveCategory] = useState<string>('all')

    const toggleItem = (categoryId: string, index: number) => {
        const key = `${categoryId}-${index}`
        setOpenItems(prev => ({
            ...prev,
            [key]: !prev[key]
        }))
    }

    const filteredData = useMemo(() => {
        // Deep clone-like mapping to ensure no mutations and fresh rendering identities
        return faqData
            .map(category => ({
                ...category,
                items: category.items.filter(item => {
                    const searchLower = searchQuery.toLowerCase().trim()
                    if (!searchLower) return true

                    const questionMatch = item.question.toLowerCase().includes(searchLower)
                    const answerMatch = Array.isArray(item.answer)
                        ? item.answer.some(line => line.toLowerCase().includes(searchLower))
                        : item.answer.toLowerCase().includes(searchLower)

                    return questionMatch || answerMatch
                })
            }))
            .filter(category => {
                const hasItems = category.items.length > 0
                const matchesCategory = activeCategory === 'all' || category.id === activeCategory
                return hasItems && matchesCategory
            })
    }, [searchQuery, activeCategory])

    return (
        <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
            <Navbar />

            {/* Decorative background blurs */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-[#0C58A4]/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#EA2630]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-20 pt-20 pb-20 px-4 sm:px-6 lg:px-8 flex-grow w-full">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16 space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em]">
                        <HelpCircle size={14} /> Knowledge Base
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
                        Frequently Asked <br />
                        <span className={DESIGN_VERSION === 'hot' ? 'text-[#EA2630]' : 'text-primary'}>Questions</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
                        Find quick answers to your questions about our services, setup, billing, and technical support.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto relative group">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
                            <Search size={20} />
                        </div>
                        <Input
                            type="text"
                            placeholder="Search for answers (e.g., speed, billing, router)..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-12 h-14 rounded-2xl bg-card border-border/50 focus:border-primary/50 focus:ring-primary/20 text-lg shadow-xl shadow-primary/5"
                        />
                    </div>
                </motion.div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-12 relative z-30">
                    <Button
                        variant={activeCategory === 'all' ? 'default' : 'outline'}
                        onClick={() => setActiveCategory('all')}
                        className={`rounded-full px-6 font-bold uppercase tracking-widest text-[10px] transition-all hover:scale-105 active:scale-95 ${activeCategory === 'all'
                            ? 'shadow-lg shadow-primary/20 scale-105'
                            : 'hover:bg-primary/5 hover:border-primary/50 dark:hover:bg-primary/10'
                            }`}
                    >
                        All Categories
                    </Button>
                    {faqData.map(cat => (
                        <Button
                            key={cat.id}
                            variant={activeCategory === cat.id ? 'default' : 'outline'}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`rounded-full px-6 font-bold uppercase tracking-widest text-[10px] transition-all hover:scale-105 active:scale-95 ${activeCategory === cat.id
                                ? 'shadow-lg shadow-primary/20 scale-105'
                                : 'hover:bg-primary/5 hover:border-primary/50 dark:hover:bg-primary/10'
                                }`}
                        >
                            {cat.title}
                        </Button>
                    ))}
                </div>

                {/* FAQ Content */}
                <motion.div
                    key={activeCategory + searchQuery} // Force re-animation on filter change
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-16 relative z-20"
                >
                    {filteredData.length > 0 ? (
                        filteredData.map((category) => (
                            <motion.div key={category.id} variants={itemVariants} className="space-y-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="h-1.5 w-12 bg-primary rounded-full" />
                                    <h2 className="text-2xl font-black uppercase tracking-tight">
                                        {category.title}
                                    </h2>
                                </div>
                                <div className="grid grid-cols-1 gap-4">
                                    {category.items.map((item, index) => (
                                        <FAQAccordion
                                            key={`${category.id}-${index}`}
                                            item={item}
                                            isOpen={!!openItems[`${category.id}-${index}`]}
                                            onToggle={() => toggleItem(category.id, index)}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <div className="text-center py-20 bg-card/40 rounded-[3rem] border border-dashed border-border">
                            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="text-muted-foreground" size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">No results found</h3>
                            <p className="text-muted-foreground">Try searching with different keywords or browse categories.</p>
                        </div>
                    )}
                </motion.div>

                {/* Support Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-32 p-10 md:p-16 rounded-[4rem] bg-gradient-to-br from-[#0C58A4] to-[#0C58A4]/90 text-white relative overflow-hidden shadow-2xl shadow-[#0C58A4]/30"
                >
                    {/* Decorative shapes */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl text-white pointer-events-none" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none">
                                Still have <br />
                                <span className="text-[#EA2630] contrast-125">Questions?</span>
                            </h2>
                            <p className="text-white/90 text-lg font-medium">
                                Our support team is available 24/7 to assist you. Whether it&apos;s a technical issue or a billing query, we are here to help.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <a href={`tel:${contactInfo.phoneRaw}`}>
                                    <Button className="bg-white text-[#0C58A4] hover:bg-[#EA2630] hover:text-white rounded-full px-8 py-6 font-black uppercase tracking-widest text-[10px] h-auto shadow-xl transition-all scale-100 hover:scale-105">
                                        <PhoneCall className="mr-2 w-4 h-4" /> Call Hotline
                                    </Button>
                                </a>
                                <Link href="/contact">
                                    <Button className="bg-white/10 text-white hover:bg-white/20 border border-white/20 rounded-full px-8 py-6 font-black uppercase tracking-widest text-[10px] h-auto transition-all backdrop-blur-md scale-100 hover:scale-105">
                                        Contact Us <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: MessageCircle, label: 'WhatsApp', sub: '24/7 Support', href: contactInfo.whatsappLink },
                                { icon: Facebook, label: 'Facebook', sub: 'Instant Update', href: 'https://www.facebook.com/profile.php?id=61568434629601' },
                                { icon: MapPin, label: 'Office', sub: 'Visit Us', href: '/contact' },
                                { icon: HelpCircle, label: 'Guides', sub: 'Self Help', href: '#' },
                            ].map((item, i) => (
                                <a key={i} href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="group">
                                    <div className="p-6 rounded-[2rem] bg-white/10 backdrop-blur-md border border-white/10 group-hover:bg-white/20 transition-all h-full scale-100 group-hover:scale-[1.02]">
                                        <item.icon className="w-8 h-8 mb-4 text-[#EA2630] transition-transform group-hover:scale-110" />
                                        <div className="font-bold uppercase tracking-tight text-white">{item.label}</div>
                                        <div className="text-[10px] uppercase font-black tracking-widest opacity-60 text-white/80">{item.sub}</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </div>
    )
}
