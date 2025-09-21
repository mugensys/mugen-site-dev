import * as React from 'react'
import { cn } from './utils'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn('w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent-cyan min-h-[120px]', className)}
      {...props}
    />
  )
)
Textarea.displayName = 'Textarea'
