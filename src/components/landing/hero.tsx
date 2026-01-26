'use client'

import { motion } from 'framer-motion'
import { WaitlistForm } from './waitlist-form'

export function Hero() {
    return (
        <section className="relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">

            {/* Background Gradient Blob */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="absolute left-0 top-0 -z-10 h-full w-full bg-[radial-gradient(circle_400px_at_50%_300px,#2563eb22,transparent)]"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 max-w-3xl relative z-10"
            >
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
                    <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                    Early Access - Coming Soon
                </div>

                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70">
                    Sell online without the <br className="hidden sm:block" />
                    <span className="text-primary">complexity.</span>
                </h1>

                <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed">
                    Vendly is the modern e-commerce platform for individuals and small businesses.
                    Manage orders, track sales, and grow your brand from a single, clean dashboard.
                </p>

                <div className="mt-8">
                    <WaitlistForm />
                    <p className="mt-4 text-xs text-muted-foreground">
                        Join 2,000+ others on the waitlist. No spam, ever.
                    </p>
                </div>
            </motion.div>
        </section>
    )
}
