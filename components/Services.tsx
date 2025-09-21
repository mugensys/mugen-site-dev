'use client'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { motion } from 'framer-motion'

export function Services() {
  return (
    <section id="services" data-section aria-labelledby="services-h" className="py-14">
      <div className="container mx-auto">
        <h2 id="services-h" className="mb-8 text-2xl font-semibold">Services</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Network Architecture',
              bullets: [
                'LAN/WAN, SD‑WAN, and segmentation',
                'High‑availability designs and runbooks',
                'Observability and SLOs'
              ]
            },
            {
              title: 'Wireless Excellence',
              bullets: [
                'Predictive + on‑site surveys',
                'RF optimization and tuning',
                'Guest & BYOD that just works'
              ]
            },
            {
              title: 'Cloud & Security',
              bullets: [
                'Migrations with guardrails',
                'Zero‑trust access & identity',
                'Backup and disaster recovery'
              ]
            }
          ].map((svc, i) => (
            <motion.div key={svc.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Card>
                <CardHeader><CardTitle className="text-xl">{svc.title}</CardTitle></CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-2 pl-5 text-foreground/80">
                    {svc.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
