'use client'
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

interface Ctx {
  activeId: string | null
}
const ScrollSpyCtx = createContext<Ctx>({ activeId: null })

export function ScrollSpyProvider({ sectionIds, children }: { sectionIds: string[]; children: React.ReactNode }) {
  const [activeId, setActiveId] = useState<string | null>(sectionIds[0] ?? null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActiveId(visible.target.id as string)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sectionIds])

  const value = useMemo(() => ({ activeId }), [activeId])
  return <ScrollSpyCtx.Provider value={value}>{children}</ScrollSpyCtx.Provider>
}

export function useScrollSpy() {
  return useContext(ScrollSpyCtx)
}
