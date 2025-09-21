'use client'
import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" data-section aria-labelledby="about-h" className="py-14">
      <div className="container mx-auto grid gap-10 md:grid-cols-2">
        <div>
          <h2 id="about-h" className="mb-4 text-2xl font-semibold">About Us</h2>
          <p className="text-foreground/80">
            Mugen Systems is an independent consulting studio specializing in networks, wireless, and cloud foundations. We partner with IT teams to turn fragile into resilient and slow into streamlined.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            {[{k:'Years', v:'10+'}, {k:'Projects', v:'120+'}, {k:'CSAT', v:'4.9/5'}].map(({k,v}, i) => (
              <motion.div key={k} initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4, delay:i*0.05}}>
                <div className="text-2xl font-semibold">{v}</div>
                <div className="text-sm text-foreground/70">{k}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-border bg-card p-6 shadow-soft prose-compact"
        >
          <h3 className="text-xl font-semibold">What is “Mugen”?</h3>
          <p>
            In Japanese, 無限 (mugen) means <em>infinite</em> or <em>boundless</em>. We bring this philosophy to systems—removing bottlenecks, eliminating single points of failure, and designing for growth.
          </p>
          <p>
            Our process is simple: assess, architect, implement, and transfer. We leave you with documentation your team will actually use.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
