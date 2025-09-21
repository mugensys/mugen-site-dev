'use client'

import React from 'react'
import { Button } from './ui/button'
import { ChevronDown, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { MugenOrb } from './MugenOrb'

export const Hero: React.FC = () => {
  return (
    <section id="home" className="section">
      <div className="container-max grid md:grid-cols-2 gap-10 items-center hero-bg">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight"
          >
            Transforming Businesses through Network & IT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-gray-700 text-lg"
          >
            We design and deploy high-speed networks and provide comprehensive IT support so your business runs faster, safer, and smarter. Our vendor-neutral approach means every recommendation serves your goals—not a sales quota.
          </motion.p>
          <div className="mt-8 flex items-center gap-3">
            <Button asChild>
              <a href="#contact" className="flex items-center">
                Get a Consultation <ArrowUpRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#services">Our Services</a>
            </Button>
          </div>
          <p className="mt-3 text-sm text-gray-500">Mugen Systems — Infinite possibilities. Practical solutions.</p>
          <div className="mt-10 text-gray-600 flex items-center gap-2">
            <ChevronDown className="h-5 w-5" aria-hidden="true" />
            <span>Scroll to explore</span>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <MugenOrb />
        </div>
      </div>
    </section>
  )
}
