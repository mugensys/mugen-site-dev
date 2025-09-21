'use client';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import MugenOrb from './MugenOrb';

export default function Hero() {
  return (
    <section id="home" data-section label="Home" className="section relative overflow-hidden">
      <a className="sr-only focus:not-sr-only absolute left-4 top-4 z-50 kbd" href="#main">Skip to content</a>
      <div className="absolute inset-0 hero-bg" aria-hidden />
      <div className="container relative">
        <div className="max-w-3xl space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl/tight lg:text-6xl/tight font-extrabold tracking-tight"
          >
            Transforming Businesses through Network & IT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="lead"
          >
            We design and deploy high-speed networks and provide comprehensive IT support so your business runs faster, safer, and smarter. Our vendor-neutral approach means every recommendation serves your goals—not a sales quota.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="flex gap-3"
          >
            <Button asChild size="lg"><a href="#contact">Get a Consultation</a></Button>
            <Button asChild variant="secondary" size="lg"><a href="#services">Our Services</a></Button>
          </motion.div>
          <p className="text-sm text-muted pt-2">Mugen Systems — Infinite possibilities. Practical solutions.</p>
        </div>
      </div>
      <MugenOrb />
    </section>
  );
}
