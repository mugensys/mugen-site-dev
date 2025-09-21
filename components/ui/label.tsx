import * as React from 'react'; import { cn } from '@/lib/utils'
export const Label = ({className, ...p}: React.LabelHTMLAttributes<HTMLLabelElement>) => (<label className={cn('mb-1 block text-sm font-medium text-white/80', className)} {...p} />)
