import { cn } from '@/lib/utils';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'relative inline-flex items-center justify-center font-sans uppercase tracking-[0.15em] transition-all duration-500 ease-luxury',
        'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-oro',
        'disabled:pointer-events-none disabled:opacity-40',
        {
          sm: 'px-5 py-2.5 text-[10px]',
          md: 'px-8 py-3.5 text-fluid-xs',
          lg: 'px-12 py-5 text-fluid-sm',
        }[size],
        {
          primary:
            'border border-crema bg-crema text-nero hover:bg-transparent hover:text-crema',
          secondary:
            'border border-crema/30 bg-transparent text-crema hover:border-crema hover:bg-crema/5',
          ghost:
            'border-0 bg-transparent text-crema/70 hover:text-crema',
        }[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
