'use client'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { motion } from 'framer-motion'
import { ShieldCheck, BadgeCheck, PlugZap } from 'lucide-react'

export function WhyMugen() {
  const items = [
    {
      icon: ShieldCheck,
      title: 'Vendor‑neutral by design',
      body: 'We don’t sell hardware. We align to your outcomes and pick the right tool for the job.'
    },
    {
      icon: BadgeCheck,
      title: 'Documented and transferable',
      body: 'Runbooks, diagrams, and checklists so your team can operate with confidence.'
    },
    {
      icon: PlugZap,
      title: 'Built for reliability',
      body: 'Observable, well‑tested networks with failure domains and graceful degradation.'
    }
  ]

  return (
    <section aria-labelledby="why" className="py-14">
      <div className="container mx-auto">
        <h2 id="why" className="mb-8 text-2xl font-semibold">Why Mugen?</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Icon className="h-5 w-5 text-brand" /> {title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{body}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
