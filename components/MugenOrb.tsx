'use client'

import React from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

export const MugenOrb: React.FC = () => {
  const shouldReduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress, [0, 1], [-24, 24])
  const y = useTransform(scrollYProgress, [0, 1], [-16, 16])
  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 8])
  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1.02])

  const orb = (
    <svg width="240" height="240" viewBox="0 0 240 240" role="img" aria-label="Decorative orb">
      <defs>
        <radialGradient id="g" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(6, 182, 212, 0.9)" />
          <stop offset="100%" stopColor="rgba(6, 182, 212, 0.1)" />
        </radialGradient>
      </defs>
      <circle cx="120" cy="120" r="110" fill="url(#g)" />
      <circle cx="90" cy="90" r="40" fill="rgba(255,122,26,0.6)" />
    </svg>
  )

  if (shouldReduce) {
    return <div className="pointer-events-none select-none">{orb}</div>
  }

  return (
    <motion.div style={{ x, y, rotate, scale }} className="pointer-events-none select-none">
      {orb}
    </motion.div>
  )
}
