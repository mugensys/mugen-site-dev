import * as React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        'flex h-11 w-full rounded-2xl border border-border bg-background px-4 text-sm outline-none ring-offset-background placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-brand',
        className
      )}
      {...props}
    />
  )
})
Input.displayName = 'Input'
