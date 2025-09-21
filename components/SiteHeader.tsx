'use client'

import React, { useEffect, useState } from 'react'
import { useScrollSpy } from './ScrollSpyProvider'
import { cn } from './ui/utils'
import { Menu, X } from 'lucide-react'

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About Us' },
  { id: 'contact', label: 'Contact' },
]

export const SiteHeader: React.FC = () => {
  const { activeId } = useScrollSpy()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setOpen(false)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-brand-border">
      <div className="container-max flex items-center justify-between h-[72px]">
        <a href="#home" className="font-semibold text-lg">Mugen Systems</a>
        <nav data-primary aria-label="Primary" className="hidden md:flex items-center gap-6">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={activeId === item.id ? 'page' : undefined}
              className={cn(
                'text-sm font-medium transition-colors hover:text-gray-900',
                activeId === item.id ? 'text-gray-900' : 'text-gray-600'
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button aria-label="Open menu" className="md:hidden p-2" onClick={() => setOpen((v) => !v)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-brand-border">
          <nav aria-label="Primary" className="container-max py-2 flex flex-col">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={activeId === item.id ? 'page' : undefined}
                className={cn('px-2 py-3 text-base', activeId === item.id ? 'text-gray-900' : 'text-gray-700')}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
