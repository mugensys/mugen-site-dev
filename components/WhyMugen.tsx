'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ShieldCheck, BookText, Workflow, BarChart3 } from 'lucide-react';

export default function WhyMugen() {
  const items = [
    { icon: ShieldCheck, text: 'Independent architecture & design reviews' },
    { icon: BookText, text: 'Standards-driven configurations and documentation' },
    { icon: Workflow, text: 'Lifecycle planning without lock-in' },
    { icon: BarChart3, text: 'Transparent, measurable outcomes' },
  ] as const;

  return (
    <section id="why" aria-labelledby="why-title" className="section">
      <div className="container">
        <div className="max-w-3xl">
          <h2 id="why-title" className="text-2xl md:text-3xl font-bold">Vendor-Neutral by Design</h2>
          <p className="lead mt-3">
            At Mugen Systems, we don’t sell hardware or take reseller incentives. We sell <strong>expertise</strong>. That keeps every design decision focused on best practices, protocol fit, and deployment strategy—advocating for your IT infrastructure, not a vendor catalog.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          {items.map((it, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i*0.05 }}>
              <Card>
                <CardHeader className="flex flex-row items-center gap-3">
                  <it.icon className="h-6 w-6 text-accent" aria-hidden />
                  <CardTitle className="text-base">{it.text}</CardTitle>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
