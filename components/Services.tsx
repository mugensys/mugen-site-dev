'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { motion } from 'framer-motion'

export const Services: React.FC = () => {
  return (
    <section id="services" className="section bg-gray-50">
      <div className="container-max">
        <h2 className="text-2xl md:text-3xl font-bold">Services</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card>
              <CardHeader><CardTitle>Network Infrastructure</CardTitle></CardHeader>
              <CardContent className="text-gray-700 text-sm space-y-2">
                <p>Network design, installation, and optimization • Switching/routing • Wi-Fi surveys & heatmaps (Ekahau) • Firewall & IDS/IPS • VLANs & segmentation • 802.1X/RADIUS • Structured cabling • <strong>Security cameras</strong> & NVR • Network access control (NAC)</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}>
            <Card>
              <CardHeader><CardTitle>Endpoint Computing</CardTitle></CardHeader>
              <CardContent className="text-gray-700 text-sm space-y-2">
                <p>Device provisioning & imaging • MDM/UEM (Intune/Jamf) • Patch & policy management • EDR/AV • Identity & SSO integration • Secure remote access • Productivity suite onboarding • Help desk & SLA reporting</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Card>
              <CardHeader><CardTitle>Professional Services</CardTitle></CardHeader>
              <CardContent className="text-gray-700 text-sm space-y-2">
                <p>Project management • Cloud migration & backups • SD-WAN rollouts • Site readiness & cutovers • Documentation (NetBox/Visio) • Training & knowledge transfer • Compliance readiness (PCI/HIPAA guidance)</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
