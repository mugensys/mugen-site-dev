'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useScrollSpy } from './ScrollSpyProvider'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const { activeId } = useScrollSpy()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const nav = (
    <ul className="flex flex-col gap-2 p-4 md:p-0 md:flex-row md:items-center md:gap-6">
      {[
        { id: 'home', label: 'Home' },
        { id: 'services', label: 'Services' },
        { id: 'about', label: 'About Us' },
        { id: 'contact', label: 'Contact' }
      ].map((item) => (
        <li key={item.id}>
          <Link
            href={`#${item.id}`}
            className={cn(
              'rounded-xl px-2 py-1 text-sm font-medium hover:opacity-90 focus-visible:outline-none',
              activeId === item.id ? 'text-brand' : 'text-foreground/80'
            )}
            aria-current={activeId === item.id ? 'page' : undefined}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )

  return (
    <header className={cn('sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur', scrolled && 'shadow-soft')}
      role="banner">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link href="#home" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-brand text-brand-foreground">μ</span>
          <span>Mugen Systems</span>
        </Link>
        <nav aria-label="Primary" className="hidden md:block">{nav}</nav>
        <button
          className="md:hidden rounded-xl p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      <div id="mobile-menu" className={cn('md:hidden', open ? 'block' : 'hidden')}>
        {nav}
      </div>
    </header>
  )
}
