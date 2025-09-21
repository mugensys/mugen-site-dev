import * as React from 'react'
import { cn } from './utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn('w-full rounded-xl border border-brand-border bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-accent-cyan', className)}
      {...props}
    />
  )
)
Input.displayName = 'Input'
