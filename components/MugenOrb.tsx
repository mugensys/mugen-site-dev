'use client';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

/** Subtle, scroll-reactive SVG orb.
 * Motion ranges per spec:
 * translateX: -24px → +24px
 * translateY: -16px → +16px
 * rotate: -8deg → +8deg
 * scale: 0.98 → 1.02
 * Guarded by prefers-reduced-motion
 */
export default function MugenOrb() {
  const shouldReduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Map scroll to transforms
  const x = useTransform(scrollYProgress, [0, 1], [-24, 24]);
  const y = useTransform(scrollYProgress, [0, 1], [-16, 16]);
  const r = useTransform(scrollYProgress, [0, 1], [-8, 8]);
  const s = useTransform(scrollYProgress, [0, 1], [0.98, 1.02]);

  if (shouldReduce) {
    return (
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-end">
        <svg width="340" height="340" viewBox="0 0 340 340" className="opacity-70">
          <defs>
            <radialGradient id="g1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(190 95% 40% / 0.35)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <circle cx="170" cy="170" r="160" fill="url(#g1)" />
        </svg>
      </div>
    );
  }

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-end">
      <motion.svg
        width="340" height="340" viewBox="0 0 340 340" className="opacity-70"
        style={{ x, y, rotate: r, scale: s }}
      >
        <defs>
          <radialGradient id="g1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(190 95% 40% / 0.35)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <circle cx="170" cy="170" r="160" fill="url(#g1)" />
      </motion.svg>
    </div>
  );
}
