'use client'

import { motion } from 'framer-motion'
import { BarChart3, Zap, MessageCircle, ShoppingBag, Globe, ShieldCheck } from 'lucide-react'

const features = [
    {
        name: 'Simple Store Builder',
        description: 'Create a professional store in minutes. No coding or design skills required.',
        icon: ShoppingBag,
    },
    {
        name: 'Real-time Analytics',
        description: 'Track your performance with beautiful, easy-to-understand charts and insights.',
        icon: BarChart3,
    },
    {
        name: 'Built-in Chat',
        description: 'Connect with your customers directly. Resolve issues and close sales faster.',
        icon: MessageCircle,
    },
    {
        name: 'AI Recommendations',
        description: 'Automatically suggest products to your customers to increase average order value.',
        icon: Zap,
    },
    {
        name: 'Global Payments',
        description: 'Accept payments from anywhere in the world with secure, integrated processing.',
        icon: Globe,
    },
    {
        name: 'Enterprise Security',
        description: 'Your data and your customers\' data are protected by industry-leading security.',
        icon: ShieldCheck,
    },
]

export function Features() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                        Everything you need to grow
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Focus on your product and customers. We handle the technical heavy lifting.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex flex-col items-start p-6 rounded-2xl bg-background border shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="p-3 rounded-lg bg-primary/10 text-primary mb-4">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold text-xl mb-2">{feature.name}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
