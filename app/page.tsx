'use client';
export const dynamic = 'error';

import SiteHeader from '@/components/SiteHeader';
import Hero from '@/components/Hero';
import WhyMugen from '@/components/WhyMugen';
import Industries from '@/components/Industries';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { useEffect } from 'react';
import { useScrollSpy } from '@/components/ScrollSpyProvider';

/** Registers all primary sections with the scrollspy context */
function useRegisterSections() {
  const { register } = useScrollSpy();
  useEffect(() => {
    const ids = ['home', 'services', 'about', 'contact'];
    const nodes = ids.map((id) => document.getElementById(id));
    ids.forEach((id, i) => register(id, nodes[i]));
    return () => ids.forEach((id, i) => register(id, null));
  }, [register]);
}

export default function Page() {
  useRegisterSections();

  // Safari smooth scroll fallback (very old)
  useEffect(() => {
    const supportsSmooth = 'scrollBehavior' in document.documentElement.style;
    if (!supportsSmooth) {
      const links = Array.from(document.querySelectorAll('a[href^="#"]')) as HTMLAnchorElement[];
      const handler = (e: Event) => {
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
        if (!href) return;
        const id = href.slice(1);
        const el = document.getElementById(id);
        if (!el) return;
        e.preventDefault();
        const top = el.getBoundingClientRect().top + window.pageYOffset - 64;
        window.scrollTo({ top });
      };
      links.forEach((l) => l.addEventListener('click', handler));
      return () => links.forEach((l) => l.removeEventListener('click', handler));
    }
  }, []);

  return (
    <>
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
    </>
  );
}
