'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Router, Laptop, Briefcase } from 'lucide-react';

export default function Services() {
  const groups = [
    {
      title: 'Network Infrastructure',
      icon: Router,
      bullets: [
        'Network design, installation, and optimization • Switching/routing • Wi-Fi surveys & heatmaps (Ekahau) • Firewall & IDS/IPS • VLANs & segmentation • 802.1X/RADIUS • Structured cabling • Security cameras & NVR • Network access control (NAC)',
      ],
    },
    {
      title: 'Endpoint Computing',
      icon: Laptop,
      bullets: [
        'Device provisioning & imaging • MDM/UEM (Intune/Jamf) • Patch & policy management • EDR/AV • Identity & SSO integration • Secure remote access • Productivity suite onboarding • Help desk & SLA reporting',
      ],
    },
    {
      title: 'Professional Services',
      icon: Briefcase,
      bullets: [
        'Project management • Cloud migration & backups • SD-WAN rollouts • Site readiness & cutovers • Documentation (NetBox/Visio) • Training & knowledge transfer • Compliance readiness (PCI/HIPAA guidance)',
      ],
    },
  ] as const;

  return (
    <section id="services" aria-labelledby="services-title" className="section">
      <div className="container">
        <h2 id="services-title" className="text-2xl md:text-3xl font-bold">Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {groups.map((g, i) => (
            <motion.div key={g.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.05 }}>
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center gap-3">
                  <g.icon className="h-6 w-6 text-accent" />
                  <CardTitle>{g.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-sm text-muted">
                    {g.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
