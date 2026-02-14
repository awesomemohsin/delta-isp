'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function PrivacyPage() {
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
                            <ShieldCheck size={14} /> Legal Center
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
                            Privacy <span className="text-primary">Policy</span>
                        </h1>
                        <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs">
                            Last Updated: February 14, 2026
                        </p>
                    </div>

                    {/* Content */}
                    <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-[3rem] p-8 md:p-12 prose prose-invert prose-primary max-w-none shadow-2xl shadow-primary/5">
                        <section className="space-y-6 mb-12">
                            <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3">
                                <Lock className="text-primary" size={24} /> 1. Introduction
                            </h2>
                            <p className="text-muted-foreground leading-relaxed font-medium">
                                Delta Software and Communication Ltd (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you subscribe to our internet services or visit our website.
                            </p>
                        </section>

                        <section className="space-y-6 mb-12">
                            <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3">
                                <Eye className="text-primary" size={24} /> 2. Information We Collect
                            </h2>
                            <ul className="list-disc list-inside text-muted-foreground space-y-3 font-medium">
                                <li>Personal identification information (Name, email address, phone number, NID).</li>
                                <li>Service usage data and technical logs.</li>
                                <li>Billing and payment information.</li>
                                <li>Device information and IP addresses.</li>
                            </ul>
                        </section>

                        <section className="space-y-6 mb-12">
                            <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3">
                                <FileText className="text-primary" size={24} /> 3. How We Use Data
                            </h2>
                            <p className="text-muted-foreground leading-relaxed font-medium">
                                We use the collected data to provide and maintain our services, notify you about changes, provide customer support, and process billing. We do not sell your personal data to third parties.
                            </p>
                        </section>

                        <section className="space-y-6 mb-12">
                            <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3">
                                <ShieldCheck className="text-primary" size={24} /> 4. Data Security
                            </h2>
                            <p className="text-muted-foreground leading-relaxed font-medium">
                                We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </section>

                        <div className="pt-12 border-t border-border/50 text-center">
                            <p className="text-muted-foreground text-sm font-bold uppercase tracking-widest">
                                Contact our legal team at <span className="text-primary">legal@deltasoftwareandcommunication.com</span>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </div>
    )
}
