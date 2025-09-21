'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { motion } from 'framer-motion'

export const Industries: React.FC = () => {
  return (
    <section id="industries" className="section">
      <div className="container-max">
        <h2 className="text-2xl md:text-3xl font-bold">Industries We Serve</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card>
              <CardHeader><CardTitle>Hospitality & Retail</CardTitle></CardHeader>
              <CardContent className="text-gray-700 space-y-2 text-sm">
                <p>Full <strong>high-density</strong> Wi-Fi and wired coverage, designed for peak occupancy</p>
                <p>Seamless roaming for reliable voice, video, and point-of-sale</p>
                <p>Guest access portals and captive portal integrations</p>
                <p><strong>Video surveillance</strong> and smart alerts</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}>
            <Card>
              <CardHeader><CardTitle>Office & Small Campus</CardTitle></CardHeader>
              <CardContent className="text-gray-700 space-y-2 text-sm">
                <p>Stable, secure networks that protect data and keep operations online</p>
                <p>Robust wired and wireless for <strong>employees and guests</strong></p>
                <p>Secure access: <strong>802.1X/RADIUS</strong>, MAB, and segmented guest access</p>
                <p>Advanced <strong>firewall</strong>, <strong>VPN</strong>, and SD-WAN solutions</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
