'use client';

import { forwardRef, HTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'metric' | 'creator' | 'pricing' | 'campaign';
  hoverable?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hoverable = true, children, ...props }, ref) => {
    const variants = {
      default: 'bg-card border border-border rounded-xl p-6 md:p-8',
      metric: 'bg-card border border-border rounded-xl p-6 md:p-8 text-center',
      creator: 'bg-card border border-border rounded-xl overflow-hidden',
      pricing: 'bg-card border border-border rounded-xl p-6 md:p-8 flex flex-col h-full',
      campaign: 'bg-card border border-border rounded-xl p-6 md:p-8',
    };

    const hoverStyles = hoverable
      ? 'transition-all duration-300 hover:border-primary/40 hover:shadow-[0_6px_24px_rgba(0,0,0,0.25)] hover:-translate-y-[1px]'
      : 'transition-colors duration-200';

    return (
      <div
        ref={ref}
        className={clsx(variants[variant], hoverStyles, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
