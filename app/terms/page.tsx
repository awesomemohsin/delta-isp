'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Gavel, Scale, AlertTriangle, CheckCircle } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function TermsPage() {
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
                            <Scale size={14} /> Legal Center
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
                            Terms of <span className="text-primary">Service</span>
                        </h1>
                        <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs">
                            Effective Date: February 14, 2026
                        </p>
                    </div>

                    {/* Content */}
                    <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-[3rem] p-8 md:p-12 prose prose-invert prose-primary max-w-none shadow-2xl shadow-primary/5">
                        <section className="space-y-6 mb-12">
                            <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3">
                                <Gavel className="text-primary" size={24} /> 1. Agreement to Terms
                            </h2>
                            <p className="text-muted-foreground leading-relaxed font-medium">
                                By accessing or using the services provided by Delta Software and Communication Ltd, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, you are prohibited from using our services.
                            </p>
                        </section>

                        <section className="space-y-6 mb-12">
                            <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3">
                                <CheckCircle className="text-primary" size={24} /> 2. Service Provision
                            </h2>
                            <p className="text-muted-foreground leading-relaxed font-medium">
                                We provide broadband internet services subject to availability and technical feasibility. We reserve the right to modify or discontinue services with reasonable notice to active subscribers.
                            </p>
                        </section>

                        <section className="space-y-6 mb-12">
                            <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3">
                                <AlertTriangle className="text-primary" size={24} /> 3. Responsible Use
                            </h2>
                            <p className="text-muted-foreground leading-relaxed font-medium">
                                Users agree not to use the service for any illegal activities, including but not limited to unauthorized access to networks, distribution of malware, or activities that compromise network integrity for other users.
                            </p>
                        </section>

                        <section className="space-y-6 mb-12">
                            <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3">
                                <Gavel className="text-primary" size={24} /> 4. Billing & Cancellation
                            </h2>
                            <p className="text-muted-foreground leading-relaxed font-medium">
                                Subscriptions are billed in advance. Cancellation requests must be submitted at least 30 days prior to the desired termination date. Unpaid dues may result in service suspension.
                            </p>
                        </section>

                        <div className="pt-12 border-t border-border/50 text-center">
                            <p className="text-muted-foreground text-sm font-bold uppercase tracking-widest">
                                Failure to comply with terms may result in immediate <span className="text-[#EA2630]">termination of service</span>.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </div>
    )
}
