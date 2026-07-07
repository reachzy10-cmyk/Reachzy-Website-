'use client';

import { forwardRef, ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'coral';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center gap-2 font-medium rounded-md transition-all duration-200 focus-visible-ring disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]';

    const variants = {
      primary: 'bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-[1px] shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:border-primary/20 border border-transparent',
      secondary: 'border border-border bg-transparent text-foreground hover:bg-secondary hover:border-primary hover:text-primary',
      ghost: 'text-muted-foreground hover:text-foreground hover:bg-secondary',
      coral: 'bg-[var(--accent-coral)] text-[var(--accent-coral-foreground)] hover:bg-[var(--accent-coral)]/90 hover:-translate-y-[1px] shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:border-[var(--accent-coral)]/30 border border-transparent',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const buttonStyles = clsx(baseStyles, variants[variant], sizes[size], className);

    if (asChild) {
      // Simple asChild implementation: render child with button styles and props
      // Assumes single child element (e.g., Link)
      return (
        <span ref={ref} className={buttonStyles} {...props}>
          {children}
        </span>
      );
    }

    return (
      <button ref={ref} className={buttonStyles} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';