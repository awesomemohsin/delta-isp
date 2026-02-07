'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gauge, Zap, Activity, ArrowRight, X, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function SpeedTestSection() {
    const [isTesting, setIsTesting] = useState(false)

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-transparent">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="relative group overflow-hidden rounded-[3rem] border border-border bg-card/30 backdrop-blur-xl p-8 md:p-16">
                    {/* Glassmorphism Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50" />
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors duration-700" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Content Side */}
                        <div className="space-y-8 text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6">
                                    <Activity className="w-4 h-4 animate-pulse" />
                                    Network Diagnostics
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-balance">
                                    Check Your <br />
                                    <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">Connection Speed</span>
                                </h2>
                                <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 text-balance leading-relaxed">
                                    Experience the true power of Delta ISP fiber. Verify your real-time download and upload speeds using our optimized test server.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="flex flex-wrap justify-center lg:justify-start gap-4"
                            >
                                {!isTesting ? (
                                    <Button
                                        onClick={() => setIsTesting(true)}
                                        size="lg"
                                        className="h-14 px-8 rounded-full bg-gradient-to-r from-primary to-secondary hover:shadow-2xl hover:shadow-primary/40 transition-all font-bold text-lg group"
                                    >
                                        Start Speed Test
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={() => setIsTesting(false)}
                                        variant="outline"
                                        size="lg"
                                        className="h-14 px-8 rounded-full border-destructive/50 text-destructive hover:bg-destructive/10 bg-transparent font-bold"
                                    >
                                        <X className="mr-2 w-5 h-5" />
                                        Close Test Tool
                                    </Button>
                                )}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50 max-w-md mx-auto lg:mx-0"
                            >
                                <div>
                                    <div className="text-2xl font-black text-primary">99.9%</div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Uptime</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-black text-secondary"> &lt; 5ms</div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Latency</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-black text-blue-500">1 Gbps</div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Max Speed</div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Interactive Gauge / Test Iframe Side */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative flex justify-center w-full min-h-[400px]"
                        >
                            <AnimatePresence mode="wait">
                                {!isTesting ? (
                                    <motion.div
                                        key="gauge"
                                        initial={{ opacity: 0, rotate: -10 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]"
                                    >
                                        {/* Outer Ring */}
                                        <div className="absolute inset-0 rounded-full border-[10px] border-border/20 shadow-inner" />
                                        <div className="absolute inset-4 rounded-full border border-primary/10" />

                                        {/* Moving Hub/Glow */}
                                        <motion.div
                                            animate={{
                                                rotate: [0, 180, 0],
                                                scale: [1, 1.1, 1]
                                            }}
                                            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                                            className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 rounded-full blur-3xl opacity-30"
                                        />

                                        {/* SVG Gauge */}
                                        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(var(--primary),0.3)]">
                                            <path d="M 20 80 A 40 40 0 1 1 80 80" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" className="text-muted-foreground/10" />
                                            <motion.path
                                                d="M 20 80 A 40 40 0 1 1 80 80" fill="none" stroke="url(#speedGradient)" strokeWidth="8" strokeLinecap="round" strokeDasharray="188.5"
                                                initial={{ strokeDashoffset: 188.5 }} whileInView={{ strokeDashoffset: 40 }} transition={{ duration: 2, delay: 0.5, ease: "easeOut" }} viewport={{ once: true }}
                                            />
                                            <defs>
                                                <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="var(--primary)" />
                                                    <stop offset="100%" stopColor="var(--secondary)" />
                                                </linearGradient>
                                            </defs>
                                            <motion.line
                                                x1="50" y1="50" x2="50" y2="15" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round"
                                                initial={{ rotate: -120, transformOrigin: '50% 50%' }} whileInView={{ rotate: 60, transformOrigin: '50% 50%' }} transition={{ duration: 2, delay: 0.5, ease: "easeOut" }} viewport={{ once: true }}
                                            />
                                            <circle cx="50" cy="50" r="4" fill="var(--primary)" className="shadow-lg" />
                                        </svg>

                                        {/* Center UI */}
                                        <div className="absolute inset-0 flex flex-col items-center justify-center pt-48">
                                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 2 }} className="text-center">
                                                <div className="text-3xl md:text-5xl font-black tracking-tighter bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
                                                    READY
                                                </div>
                                            </motion.div>
                                        </div>

                                        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} className="absolute -top-4 left-1/2 -translate-x-1/2 p-3 rounded-2xl bg-background border border-border shadow-xl">
                                            <Gauge className="w-6 h-6 text-primary" />
                                        </motion.div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="test"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="w-full max-w-2xl h-[450px] md:h-[550px] rounded-3xl overflow-hidden bg-card/50 border border-border flex flex-col shadow-2xl relative z-10"
                                    >
                                        <div className="flex items-center justify-between p-4 border-b border-border bg-background/50 backdrop-blur-md">
                                            <div className="flex items-center gap-2">
                                                <RefreshCw className="w-4 h-4 text-primary animate-spin" />
                                                <span className="text-sm font-bold uppercase tracking-wider">Live Speed Test Tool</span>
                                            </div>
                                            <Button size="sm" variant="ghost" onClick={() => setIsTesting(false)} className="hover:bg-destructive/10 hover:text-destructive">
                                                <X className="w-4 h-4" />
                                            </Button>
                                        </div>
                                        <div className="flex-grow bg-[#1a1a1a] relative">
                                            <iframe
                                                src="https://openspeedtest.com/speedtest"
                                                className="w-full h-full border-none"
                                                title="Internet Speed Test"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
