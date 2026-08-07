'use client';

import { techvishalVsbContent } from '@/lib/content/techvishal-vsb';
import { MetricRow } from '@/components/ui/metric-row';
import { Card } from '@/components/ui/card';
import { clsx } from 'clsx';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function ChannelReach() {
  const { channelReach } = techvishalVsbContent;

  // Primary metrics for the MetricRow (top level)
  const primaryMetrics = channelReach.statistics.slice(0, 4).map((m) => ({
    value: m.value,
    label: m.label,
  }));

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-20">
        <ScrollReveal delay={100} direction="up" className="max-w-3xl mb-9 lg:mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
            {channelReach.eyebrow}
          </p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {channelReach.headline}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground lg:text-base">
            {channelReach.intro}
          </p>
        </ScrollReveal>

        {/* Primary Metrics Row */}
        <ScrollReveal delay={200} direction="up" className="mb-9 lg:mb-10">
          <MetricRow metrics={primaryMetrics} gridCols="grid-cols-2 md:grid-cols-4" />
        </ScrollReveal>

        <p className="mt-7 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">{channelReach.dataNote}</p>
      </div>
    </section>
  );
}
