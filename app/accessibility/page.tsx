'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Accessibility, Target, MessageSquare, Heart } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function AccessibilityPage() {
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
                            <Accessibility size={14} /> Legal Center
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
                            Accessibility <span className="text-primary">Statement</span>
                        </h1>
                        <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs">
                            Delta ISP for Everyone
                        </p>
                    </div>

                    {/* Content */}
                    <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-[3rem] p-8 md:p-12 prose prose-invert prose-primary max-w-none shadow-2xl shadow-primary/5">
                        <section className="space-y-6 mb-12">
                            <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3">
                                <Heart className="text-primary" size={24} /> 1. Our Commitment
                            </h2>
                            <p className="text-muted-foreground leading-relaxed font-medium">
                                Delta Software and Communication Ltd is committed to providing a website that is accessible to the widest possible audience, regardless of technology or ability. We are actively working to increase the accessibility and usability of our website.
                            </p>
                        </section>

                        <section className="space-y-6 mb-12">
                            <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3">
                                <Target className="text-primary" size={24} /> 2. Standards
                            </h2>
                            <p className="text-muted-foreground leading-relaxed font-medium">
                                We endeavor to conform to level Double-A of the World Wide Web Consortium (W3C) Web Content Accessibility Guidelines 2.1. These guidelines explain how to make web content more accessible for people with disabilities.
                            </p>
                        </section>

                        <section className="space-y-6 mb-12">
                            <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3">
                                <MessageSquare className="text-primary" size={24} /> 3. Feedback
                            </h2>
                            <p className="text-muted-foreground leading-relaxed font-medium">
                                We welcome your feedback on the accessibility of our website. If you encounter accessibility barriers, please let us know so we can address them promptly.
                            </p>
                        </section>

                        <div className="pt-12 border-t border-border/50 text-center">
                            <p className="text-muted-foreground text-sm font-bold uppercase tracking-widest">
                                Email accessibility issues to <span className="text-primary">access@deltasoftwareandcommunication.com</span>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </div>
    )
}
