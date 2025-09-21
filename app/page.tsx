'use client'

export const dynamic = 'error'

import React from 'react'
import { SiteHeader } from '@/components/SiteHeader'
import { Hero } from '@/components/Hero'
import { WhyMugen } from '@/components/WhyMugen'
import { Industries } from '@/components/Industries'
import { Services } from '@/components/Services'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { BackToTop } from '@/components/BackToTop'
import { ScrollSpyProvider } from '@/components/ScrollSpyProvider'

export default function Page() {
  return (
    <ScrollSpyProvider sectionIds={['home', 'services', 'about', 'contact']}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-black text-white px-3 py-2 rounded">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <WhyMugen />
        <Industries />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </ScrollSpyProvider>
  )
}
