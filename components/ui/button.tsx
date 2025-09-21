import * as React from 'react'; import { cn } from '@/lib/utils'
export const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & {variant?:'primary'|'ghost'|'outline'}>(({className, variant='primary', ...props}, ref)=>{
  const base='inline-flex items-center justify-center h-11 px-5 rounded-2xl text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] disabled:opacity-50'
  const styles={ primary:'bg-[var(--brand)] text-black hover:opacity-90 shadow-[0_10px_40px_rgba(243,106,16,0.25)]', ghost:'bg-transparent text-white/90 hover:bg-white/5', outline:'border border-[rgba(255,255,255,0.12)] hover:bg-white/5' } as const
  return <button ref={ref} className={cn(base, styles[variant], className)} {...props} />
}); Button.displayName='Button'
