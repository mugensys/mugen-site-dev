'use client'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function MugenOrb() {
  const prefersReduced = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const x = useTransform(scrollYProgress, [0, 1], [-24, 24])
  const y = useTransform(scrollYProgress, [0, 1], [-16, 16])
  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 8])
  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1.02])

  const Svg = (
    <svg viewBox="0 0 200 200" role="img" aria-label="Animated decorative orb" className="h-[260px] w-full max-w-[360px]">
      <defs>
        <radialGradient id="g" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--brand))" stopOpacity="0.9" />
          <stop offset="100%" stopColor="hsl(var(--brand))" stopOpacity="0.1" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="90" fill="url(#g)" />
      <path d="M30 110 C 70 40, 130 160, 170 90" fill="none" stroke="hsl(var(--brand))" strokeWidth="2" strokeOpacity="0.6" />
    </svg>
  )

  return (
    <div ref={ref} className="flex items-center justify-center">
      {prefersReduced ? (
        Svg
      ) : (
        <motion.div style={{ x, y, rotate, scale }}>
          {Svg}
        </motion.div>
      )}
    </div>
  )
}
