'use client'
import { Button } from './ui/button'
import { MugenOrb } from './MugenOrb'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  const prefersReduced = useReducedMotion()
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto grid gap-10 py-24 md:grid-cols-2 md:gap-16">
        <div className="prose-compact">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Network & IT consulting that scales with you.
          </h1>
          <p className="mt-4 text-lg text-foreground/80">
            We design resilient networks, optimize wireless experiences, and de‑risk cloud migrations—vendor‑neutral, outcome‑driven, and right‑sized for your team.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Book a consult <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="ghost" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore services
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 text-center text-sm">
            <div>
              <div className="text-2xl font-semibold">99.99%</div>
              <div className="text-foreground/70">Target uptime</div>
            </div>
            <div>
              <div className="text-2xl font-semibold">30–50%</div>
              <div className="text-foreground/70">Faster Wi‑Fi</div>
            </div>
            <div>
              <div className="text-2xl font-semibold"><span className="align-top text-base">≤</span>14 days</div>
              <div className="text-foreground/70">To first value</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <MugenOrb />
          {!prefersReduced && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <p className="text-sm text-foreground/80">
                "Mugen" (無限) means <strong>boundless</strong>. We bring that mindset to every architecture and engagement.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
