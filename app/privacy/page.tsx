'use client'

import React from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { contactInfo } from '@/lib/homepage-data'

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col font-sans text-slate-900 dark:text-slate-100">
            <Navbar />

            <main className="flex-grow container mx-auto px-6 py-20 max-w-4xl">
                <header className="mb-12 border-b border-slate-100 dark:border-slate-800 pb-8">
                    <h1 className="text-4xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">Privacy Policy</h1>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400 font-medium">
                        <p>Effective Date: 1st January 2026</p>
                        <p>Last Updated: 1st March 2026</p>
                    </div>
                </header>

                <div className="space-y-12 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                    <section>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 uppercase tracking-wide">Information We Collect</h2>
                        <p>
                            We may collect personal information such as your name, email address, phone number, and any details you provide through our website forms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 uppercase tracking-wide">How We Use Information</h2>
                        <p className="mb-4">We use your information to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Provide and improve our services</li>
                            <li>Respond to inquiries</li>
                            <li>Communicate important updates</li>
                            <li>Analyze website performance</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 uppercase tracking-wide">Information Sharing</h2>
                        <p>
                            We do not sell or rent your personal information. We may share information only when required by law.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 uppercase tracking-wide">Data Security</h2>
                        <p>
                            We take reasonable measures to protect your information, but no online system is completely secure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 uppercase tracking-wide">Your Rights</h2>
                        <p>
                            You may request access, correction, or deletion of your personal information by contacting us.
                        </p>
                    </section>

                    <section className="pt-12 border-t border-slate-100 dark:border-slate-800">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6 uppercase tracking-wide text-center lg:text-left">Contact Us</h2>
                        <p className="mb-8 text-slate-500 dark:text-slate-400 text-center lg:text-left">
                            If you have any questions about this Privacy Policy, please contact:
                        </p>

                        <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-4 max-w-2xl mx-auto lg:mx-0">
                            <p className="font-bold text-slate-900 dark:text-white text-xl border-b border-slate-200 dark:border-slate-700 pb-2 mb-4">Delta Software & Communication Limited</p>
                            <div className="space-y-3">
                                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                                    <span className="text-slate-400 dark:text-slate-500 font-medium sm:min-w-24 shrink-0 uppercase text-xs tracking-wider">Email</span>
                                    <a href={`mailto:${contactInfo.email}`} className="text-blue-600 hover:text-blue-700 transition-colors font-semibold">{contactInfo.email}</a>
                                </p>
                                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                                    <span className="text-slate-400 dark:text-slate-500 font-medium sm:min-w-24 shrink-0 uppercase text-xs tracking-wider">Phone</span>
                                    <a href={`tel:${contactInfo.phoneRaw}`} className="text-blue-600 hover:text-blue-700 transition-colors font-semibold">{contactInfo.phone}</a>
                                </p>
                                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                                    <span className="text-slate-400 dark:text-slate-500 font-medium sm:min-w-24 shrink-0 uppercase text-xs tracking-wider">Website</span>
                                    <a href="https://deltasoftwareandcommunication.com/" className="text-blue-600 hover:text-blue-700 transition-colors font-semibold">https://deltasoftwareandcommunication.com/</a>
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    )
}


