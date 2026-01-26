'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input' // Correct path assumption? Yes, I just made it.
import { cn } from '@/lib/utils'

export function WaitlistForm() {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return

        setStatus('loading')
        setMessage('')

        try {
            const res = await fetch('/api/waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            })

            const data = await res.json()

            if (!res.ok) throw new Error(data.message || 'Something went wrong')

            setStatus('success')
            setMessage("You're on the list! We'll be in touch soon.")
            setEmail('')
        } catch (error: any) {
            setStatus('error')
            setMessage(error.message)
        }
    }

    return (
        <div className="w-full max-w-md mx-auto space-y-4">
            <form onSubmit={handleSubmit} className="relative flex flex-col sm:flex-row gap-2">
                <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === 'loading' || status === 'success'}
                    className={cn(
                        "h-12 bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground focus:ring-primary/50 transition-all",
                        status === 'error' && "border-red-500 focus:ring-red-500"
                    )}
                    required
                />
                <Button
                    type="submit"
                    size="lg"
                    disabled={status === 'loading' || status === 'success'}
                    className="h-12 min-w-[180px] sm:w-auto px-6"
                >
                    {status === 'loading' ? (
                        'Joining...'
                    ) : (
                        <>
                            Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                    )}
                </Button>
            </form>

            <AnimatePresence mode="wait">
                {status === 'success' && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2 text-green-500 text-sm font-medium justify-center"
                    >
                        <CheckCircle2 className="h-4 w-4" />
                        {message}
                    </motion.div>
                )}
                {status === 'error' && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2 text-red-500 text-sm font-medium justify-center"
                    >
                        <AlertCircle className="h-4 w-4" />
                        {message}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
