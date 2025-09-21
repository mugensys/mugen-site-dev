import * as React from 'react'
import { cn } from '@/lib/utils'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        'flex min-h-[120px] w-full rounded-2xl border border-border bg-background p-4 text-sm outline-none ring-offset-background placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-brand',
        className
      )}
      {...props}
    />
  )
})
Textarea.displayName = 'Textarea'
