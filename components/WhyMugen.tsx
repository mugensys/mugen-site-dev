'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { motion } from 'framer-motion'

export const WhyMugen: React.FC = () => {
  return (
    <section id="why-mugen" className="section bg-gray-50">
      <div className="container-max">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold">Vendor-Neutral by Design</h2>
          <p className="mt-3 text-gray-700">
            At Mugen Systems, we don’t sell hardware or take reseller incentives. We sell <strong>expertise</strong>. That keeps every design decision focused on best practices, protocol fit, and deployment strategy—advocating for your IT infrastructure, not a vendor catalog.
          </p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            'Independent architecture & design reviews',
            'Standards-driven configurations and documentation',
            'Lifecycle planning without lock-in',
            'Transparent, measurable outcomes',
          ].map((text, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}>
              <Card>
                <CardHeader><CardTitle className="text-base">Proof Point</CardTitle></CardHeader>
                <CardContent className="text-sm text-gray-700">{text}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
