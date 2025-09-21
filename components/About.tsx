'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container-max grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">About Us</h2>
          <div className="mt-4 space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold">Our Vision</h3>
              <p>We’re a dedicated partner for organizations navigating modern IT. With seasoned engineers and a commitment to clear, measurable results, we deliver resilient networks and responsive support that scale with your business across Southern California and beyond.</p>
            </div>
            <div>
              <h3 className="font-semibold">What is “Mugen”?</h3>
              <p><em>Mu·gen</em> (/MOO-gen/) means <strong>infinite</strong> in Japanese—reflecting our belief in continuous improvement and never settling for “good enough.”</p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {['Vendor-neutral', 'Standards-first', 'Measured outcomes'].map((s, i) => (
              <motion.div key={s} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-xl border border-brand-border p-4 text-center text-sm">
                {s}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-brand-border p-6 bg-white shadow-soft">
          <h3 className="font-semibold">Industries & Capabilities</h3>
          <p className="mt-2 text-sm text-gray-700">Hospitality, Retail, Offices, and Small Campus environments. Network design, security, endpoint management, and professional services tailored to your goals.</p>
        </div>
      </div>
    </section>
  )
}
