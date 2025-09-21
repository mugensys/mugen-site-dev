'use client';
import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant='primary', size='md', ...props }, ref) => {
    const base = 'inline-flex items-center justify-center rounded-2xl font-medium transition shadow-soft focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed border';
    const variants = {
      primary: 'bg-brand text-white border-transparent hover:opacity-90 focus-visible:ring-2 ring-offset-2 ring-brand',
      secondary: 'bg-transparent text-fg border-border hover:bg-white/60',
      ghost: 'bg-transparent text-fg border-transparent hover:bg-white/70',
    } as const;
    const sizes = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-11 px-5',
      lg: 'h-12 px-6 text-lg',
    } as const;
    return (
      <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props} />
    );
  }
);
Button.displayName = 'Button';
