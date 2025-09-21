'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section">
      <div className="container grid gap-8 lg:grid-cols-2">
        <div>
          <h2 id="about-title" className="text-2xl md:text-3xl font-bold">About Us</h2>
          <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lead mt-3">
            <strong>Our Vision</strong><br/>
            We’re a dedicated partner for organizations navigating modern IT. With seasoned engineers and a commitment to clear, measurable results, we deliver resilient networks and responsive support that scale with your business across Southern California and beyond.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="mt-4">
            <strong>What is “Mugen”?</strong><br/>
            <em>Mu·gen</em> (/MOO-gen/) means <strong>infinite</strong> in Japanese—reflecting our belief in continuous improvement and never settling for “good enough.”
          </motion.p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {['99.9% Uptime-minded', 'Southern California', 'Vendor-neutral'].map((label, i) => (
            <motion.div key={label} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.05 }} className="rounded-2xl border border-border bg-card p-5 text-center">
              <div className="text-2xl font-bold">{label.split(' ')[0]}</div>
              <div className="text-xs mt-1 text-muted">{label.split(' ').slice(1).join(' ') || 'Badge'}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
