'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle2, CreditCard, Smartphone, HelpCircle, ArrowRight, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const paymentMethods = [
    {
        name: 'bKash',
        brandColor: '#D12053',
        logo: '/images/bkash-logo.svg',
        description: 'Pay securely using your bKash wallet. Fast, easy and reliable.',
        steps: [
            'Digital Payment Receipt',
            'Instant Bill Confirmation',
            'Zero Transaction Fees'
        ],
        color: 'from-pink-500/10 to-pink-600/5',
        borderColor: 'border-pink-500/20',
        poster: '/images/bkash.webp'
    },
    {
        name: 'Nagad',
        brandColor: '#F7941D',
        logo: '/images/nagad-logo.svg',
        description: 'Pay your bills anytime, anywhere with Nagad digital wallet.',
        steps: [
            'Official Payment Gateway',
            'Real-time Verification',
            'Official ISP Partner'
        ],
        color: 'from-orange-500/10 to-red-600/5',
        borderColor: 'border-orange-500/20',
        poster: '/images/nagad.webp'
    }
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
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
    },
}

export function PayBillContent() {
    return (
        <div className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6 font-space-mono">
                        <CreditCard size={14} className="text-primary" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Official Payment Portal</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-bold mb-6 text-balance leading-tight">
                        Securely <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Pay Your Bill</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance font-medium">
                        Stay connected with high-speed internet through our verified payment integrations.
                    </p>
                </motion.div>

                {/* Partnership Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
                >
                    {paymentMethods.map((method) => (
                        <motion.div
                            key={method.name}
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            className={`relative overflow-hidden rounded-[2.5rem] border ${method.borderColor} bg-card/50 backdrop-blur-sm transition-all duration-500 group`}
                        >
                            <div className="p-8 lg:p-12 flex flex-col h-full">
                                {/* Official Logo Partnership Visual */}
                                <div className="flex items-center justify-center gap-6 mb-10 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="relative w-16 h-16 drop-shadow-xl">
                                        <Image src="/images/delta-logo.svg" alt="Delta" fill className="object-contain" />
                                    </div>
                                    <X className="text-muted-foreground/30 w-5 h-5" />
                                    <div className="relative w-28 h-12 lg:w-32 lg:h-14">
                                        <Image src={method.logo} alt={method.name} fill className="object-contain filter drop-shadow-md" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-grow text-center">
                                    <h2 className="text-2xl font-bold mb-4">{method.name} Direct Pay</h2>
                                    <p className="text-muted-foreground mb-8 text-sm lg:text-base px-4">
                                        {method.description}
                                    </p>

                                    <div className="grid grid-cols-1 gap-3 max-w-sm mx-auto mb-10">
                                        {method.steps.map((step) => (
                                            <div key={step} className="flex items-center gap-3 bg-secondary/10 p-3 rounded-xl border border-secondary/20">
                                                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                                                <span className="text-sm font-semibold">{step}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <Button
                                    className="w-full h-16 rounded-[1.25rem] font-bold text-lg bg-foreground text-background hover:bg-primary hover:text-white transition-all duration-300 shadow-xl shadow-primary/10"
                                >
                                    Proceed to Payment
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Pay from App Section (Manual Payment Overview) - VERTICAL STACK */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative rounded-[3rem] bg-secondary/5 border border-border p-8 lg:p-20 overflow-hidden"
                >
                    {/* Header */}
                    <div className="text-center mb-16 relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Pay from <span className="text-primary italic">App</span></h2>
                        <p className="text-muted-foreground max-w-xl mx-auto font-medium">
                            Prefer paying through your mobile app? Use these step-by-step guides for a manual payment overview.
                        </p>
                    </div>

                    {/* Large Banners - VERTICAL LIST */}
                    <div className="flex flex-col gap-20 relative z-10">
                        {paymentMethods.map((method) => (
                            <div key={method.name} className="space-y-8">
                                <div className="flex items-center justify-between px-4 max-w-4xl mx-auto">
                                    <h3 className="text-2xl font-bold flex items-center gap-3">
                                        <Smartphone size={24} className="text-primary" />
                                        {method.name} Application Guide
                                    </h3>
                                    <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground/60 bg-secondary/20 px-4 py-1.5 rounded-full">Manual Pay</span>
                                </div>
                                <div className="group relative max-w-4xl mx-auto aspect-[4/5] sm:aspect-[16/10] overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-2xl">
                                    <Image
                                        src={method.poster}
                                        alt={`${method.name} Payment Guide`}
                                        fill
                                        className="object-contain opacity-100 group-hover:scale-[1.02] transition-all duration-1000 p-4"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]" />
                </motion.div>

                {/* Troubleshooting */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-24 text-center"
                >
                    <div className="inline-flex items-center gap-4 bg-card p-6 rounded-full border border-border shadow-lg">
                        <HelpCircle size={24} className="text-primary" />
                        <p className="text-sm font-medium">Need help? WhatsApp us at <span className="text-primary font-bold">+880 1958113265</span></p>
                        <a
                            href="https://wa.me/8801958113265"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button size="sm" className="rounded-full bg-secondary/20 text-foreground hover:bg-primary hover:text-white transition-all">
                                Support Chat
                            </Button>
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
