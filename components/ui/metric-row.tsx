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
    <div className={clsx('flex min-w-0 flex-col items-center gap-1 text-center', className)}>
      {icon && <div className="mb-1 text-primary">{icon}</div>}
      <div className="whitespace-nowrap font-mono text-[clamp(1.05rem,2.7vw,2.15rem)] font-medium leading-tight tracking-tight text-foreground">{value}</div>
      <div className="text-[0.65rem] font-medium uppercase leading-snug tracking-[0.08em] text-muted-foreground sm:text-xs">{label}</div>
    </div>
  );
}

export interface MetricRowProps {
  metrics: MetricProps[];
  className?: string;
  gridCols?: string;
}

export function MetricRow({ metrics, className, gridCols }: MetricRowProps) {
  return (
    <div className={clsx('grid min-w-0 gap-x-4 gap-y-6 md:gap-x-6 md:gap-y-8', gridCols || 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4', className)}>
      {metrics.map((metric, index) => <Metric key={`${metric.label}-${index}`} {...metric} />)}
    </div>
  );
}
