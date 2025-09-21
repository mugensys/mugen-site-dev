'use client'

import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'

type Ctx = {
  activeId: string | null
}

const ScrollSpyCtx = createContext<Ctx>({ activeId: null })
export function useScrollSpy() {
  return useContext(ScrollSpyCtx)
}

interface Props {
  children: React.ReactNode
  sectionIds: string[]
}

export const ScrollSpyProvider: React.FC<Props> = ({ children, sectionIds }) => {
  const [activeId, setActiveId] = useState<string | null>(sectionIds[0] ?? null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const opts: IntersectionObserverInit = { root: null, rootMargin: '0px', threshold: 0.5 }
    const handler: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id')
          if (id) setActiveId(id)
        }
      })
    }
    const obs = new IntersectionObserver(handler, opts)
    observerRef.current = obs
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [sectionIds.join('|')])

  // Smooth-scroll fallback for Safari/older
  useEffect(() => {
    const nav = document.querySelector('nav[data-primary]')
    if (!nav) return
    const onClick = (e: Event) => {
      const t = e.target as HTMLElement
      if (t && t.closest('a[href^="#"]')) {
        const a = t.closest('a') as HTMLAnchorElement
        const id = a.getAttribute('href')?.slice(1)
        if (id) {
          const el = document.getElementById(id)
          if (el) {
            e.preventDefault()
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            history.replaceState(null, '', `#${id}`)
          }
        }
      }
    }
    nav.addEventListener('click', onClick)
    return () => nav.removeEventListener('click', onClick)
  }, [])

  const value = useMemo(() => ({ activeId }), [activeId])
  return <ScrollSpyCtx.Provider value={value}>{children}</ScrollSpyCtx.Provider>
}
