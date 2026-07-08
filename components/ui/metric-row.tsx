'use client';

import { ReactNode } from 'react';
import { clsx } from 'clsx';

export interface MetricProps {
  value: string;
  label: string;
  icon?: ReactNode;
  className?: string;
}

export function Metric({ value, label, icon, className }: MetricProps) {
  return (
    <div className={clsx('flex flex-col items-center gap-1', className)}>
      {icon && <div className="text-primary mb-1">{icon}</div>}
      <div className="font-mono text-3xl md:text-4xl font-medium text-foreground">
        {value}
      </div>
      <div className="text-sm uppercase tracking-wide font-medium text-muted">
        {label}
      </div>
    </div>
  );
}

export interface MetricRowProps {
  metrics: MetricProps[];
  className?: string;
}

export function MetricRow({ metrics, className }: MetricRowProps) {
  return (
    <div
      className={clsx(
        'grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8',
        className
      )}
    >
      {metrics.map((metric, index) => (
        <Metric key={index} {...metric} />
      ))}
    </div>
  );
}
