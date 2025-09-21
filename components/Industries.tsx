'use client'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { motion } from 'framer-motion'

export function Industries() {
  return (
    <section aria-labelledby="industries" className="py-14">
      <div className="container mx-auto">
        <h2 id="industries" className="mb-8 text-2xl font-semibold">Industries</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[{
            title: 'Higher Ed & Public Sector',
            body: 'Campus‑scale Wi‑Fi, secure remote access, and labs with zero‑trust guardrails.'
          }, {
            title: 'Manufacturing & Warehousing',
            body: 'Deterministic networks for scanners and robots, OTA updates, and RF‑dense environments.'
          }].map((card, i) => (
            <motion.div key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Card>
                <CardHeader><CardTitle className="text-xl">{card.title}</CardTitle></CardHeader>
                <CardContent><p className="text-foreground/80">{card.body}</p></CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
