'use client';

import { pavanLalwaniContent } from '@/lib/content/pavan-lalwani';
import { MetricRow } from '@/components/ui/metric-row';
import { Card } from '@/components/ui/card';
import { clsx } from 'clsx';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function ChannelReach() {
  const { channelReach } = pavanLalwaniContent;

  // Primary metrics for the MetricRow (top level)
  const primaryMetrics = channelReach.statistics.slice(0, 4).map((m) => ({
    value: m.value,
    label: m.label,
  }));

  // Detailed metrics for card grid
  const detailedMetrics = channelReach.statistics.slice(4).map((m) => ({
    value: m.value,
    label: m.label,
    context: m.context,
  }));

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20 lg:py-24">
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
          <MetricRow metrics={primaryMetrics} />
        </ScrollReveal>

        {/* Detailed Statistics Grid */}
        <ScrollReveal delay={300} direction="up">
          <StaggeredReveal staggerDelay={100} direction="up" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {detailedMetrics.map((metric, index) => (
              <Card
                key={index}
                variant="metric"
                hoverable={false}
                className="p-6 text-left"
              >
                <div className="font-mono text-3xl md:text-4xl font-medium text-foreground">
                  {metric.value}
                </div>
                <div className="mt-1 text-sm uppercase tracking-wide font-medium text-muted-foreground">
                  {metric.label}
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  {metric.context}
                </p>
              </Card>
            ))}
          </StaggeredReveal>
        </ScrollReveal>

        {/* Data Note */}
        <ScrollReveal delay={500} direction="up" className="mt-10">
          <p className="text-sm text-muted-foreground border-t border-border pt-4">
            {channelReach.dataNote}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
