'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Building2, Store } from 'lucide-react';

export default function Industries() {
  return (
    <section aria-labelledby="industries-title" className="section">
      <div className="container">
        <h2 id="industries-title" className="text-2xl md:text-3xl font-bold">Industries We Serve</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card>
              <CardHeader className="flex flex-row items-center gap-3">
                <Store className="h-6 w-6 text-accent" />
                <CardTitle>Hospitality & Retail</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Full <strong>high-density</strong> Wi-Fi and wired coverage, designed for peak occupancy</li>
                  <li>Seamless roaming for reliable voice, video, and point-of-sale</li>
                  <li>Guest access portals and captive portal integrations</li>
                  <li><strong>Video surveillance</strong> and smart alerts</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}>
            <Card>
              <CardHeader className="flex flex-row items-center gap-3">
                <Building2 className="h-6 w-6 text-accent" />
                <CardTitle>Office & Small Campus</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Stable, secure networks that protect data and keep operations online</li>
                  <li>Robust wired and wireless for <strong>employees and guests</strong></li>
                  <li>Secure access: <strong>802.1X/RADIUS</strong>, MAB, and segmented guest access</li>
                  <li>Advanced <strong>firewall</strong>, <strong>VPN</strong>, and SD-WAN solutions</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
