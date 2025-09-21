'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollSpy } from './ScrollSpyProvider';

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About Us' },
  { id: 'contact', label: 'Contact' },
];

export default function SiteHeader() {
  const { activeId } = useScrollSpy();
  const [open, setOpen] = useState(false);

  // Close on hash change (when navigating)
  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur supports-[backdrop-filter]:bg-bg/60">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="#home" className="font-semibold tracking-tight">Mugen Systems</Link>
        <nav aria-label="Primary" className="hidden md:flex items-center gap-2">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={activeId === item.id ? 'page' : undefined}
              className={`px-3 py-2 rounded-xl hover:bg-white/60 outline-offset-2 ${activeId === item.id ? 'text-brand' : ''}`}
            >
              {item.label}
            </a>
          ))}
          <Button asChild size="sm">
            <a href="#contact">Get a Consultation</a>
          </Button>
        </nav>
        <Button className="md:hidden" variant="secondary" aria-expanded={open} aria-controls="mobile-menu" aria-label="Open menu" onClick={() => setOpen((o) => !o)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      <div id="mobile-menu" hidden={!open} className="md:hidden border-t border-border bg-bg">
        <nav className="container py-2 flex flex-col">
          {NAV.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="px-2 py-3 rounded-xl hover:bg-white/60">{item.label}</a>
          ))}
          <a href="#contact" className="px-2 py-3 font-medium text-brand">Get a Consultation</a>
        </nav>
      </div>
    </header>
  );
}
