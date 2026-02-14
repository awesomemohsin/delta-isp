'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Cookie, Info, Shield, Settings } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function CookiePage() {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
            <Navbar />

            <div className="max-w-4xl mx-auto relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex-grow w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-12"
                >
                    {/* Header */}
                    <div className="text-center space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em]">
                            <Cookie size={14} /> Legal Center
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
                            Cookie <span className="text-primary">Policy</span>
                        </h1>
                        <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs">
                            Last Revised: February 14, 2026
                        </p>
                    </div>

                    {/* Content */}
                    <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-[3rem] p-8 md:p-12 prose prose-invert prose-primary max-w-none shadow-2xl shadow-primary/5">
                        <section className="space-y-6 mb-12">
                            <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3">
                                <Info className="text-primary" size={24} /> 1. What Are Cookies?
                            </h2>
                            <p className="text-muted-foreground leading-relaxed font-medium">
                                Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences and improve your browsing experience.
                            </p>
                        </section>

                        <section className="space-y-6 mb-12">
                            <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3">
                                <Shield className="text-primary" size={24} /> 2. Types of Cookies We Use
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground font-medium">
                                <div className="p-6 rounded-2xl bg-background/50 border border-border/50">
                                    <h3 className="text-white font-bold mb-2 uppercase text-sm">Essential Cookies</h3>
                                    <p className="text-xs">Required for core site functionality like session management and security.</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-background/50 border border-border/50">
                                    <h3 className="text-white font-bold mb-2 uppercase text-sm">Analytics Cookies</h3>
                                    <p className="text-xs">Help us understand how visitors interact with the site so we can improve it.</p>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-6 mb-12">
                            <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3">
                                <Settings className="text-primary" size={24} /> 3. Managing Cookies
                            </h2>
                            <p className="text-muted-foreground leading-relaxed font-medium">
                                You can control and manage cookies through your browser settings. Please note that disabling essential cookies may impact the functionality of our website.
                            </p>
                        </section>

                        <div className="pt-12 border-t border-border/50 text-center">
                            <p className="text-muted-foreground text-sm font-bold uppercase tracking-widest">
                                By continuing to use our site, you consent to our use of cookies.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </div>
    )
}
