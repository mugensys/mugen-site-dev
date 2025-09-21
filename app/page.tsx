'use client'
export const dynamic = 'error'

import { useEffect } from 'react'
import { ScrollSpyProvider } from '@/components/ScrollSpyProvider'
import { SiteHeader } from '@/components/SiteHeader'
import { Hero } from '@/components/Hero'
import { WhyMugen } from '@/components/WhyMugen'
import { Industries } from '@/components/Industries'
import { Services } from '@/components/Services'
import { About } from '@/components/About'
import { Footer } from '@/components/Footer'
import { BackToTop } from '@/components/BackToTop'

export default function Page() {
  // Smooth-scroll fallback for browsers that ignore CSS smooth scroll on hash links
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target) return
      const anchor = target.closest('a') as HTMLAnchorElement | null
      if (anchor && anchor.hash && anchor.getAttribute('href')?.startsWith('#')) {
        const id = anchor.hash.replace('#', '')
        const el = document.getElementById(id)
        if (el) {
          e.preventDefault()
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          history.replaceState(null, '', `#${id}`)
        }
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  const sections = ['home', 'services', 'about', 'contact']

  return (
    <ScrollSpyProvider sectionIds={sections}>
      <SiteHeader />
      <main id="home" data-section>
        <Hero />
        <WhyMugen />
        <Industries />
        <Services />
        <About />
      </main>
      <Footer />
      <BackToTop />
    </ScrollSpyProvider>
  )
}
