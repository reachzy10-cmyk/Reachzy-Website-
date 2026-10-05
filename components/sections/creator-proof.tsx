'use client';

import { Portrait } from '@/components/ui/portrait';
import { MetricRow } from '@/components/ui/metric-row';
import { CampaignTable } from '@/components/ui/campaign-table';
import { homeContent } from '@/lib/content/home';
import { clsx } from 'clsx';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function CreatorProof() {
  const { creatorProof } = homeContent;
  const { creator } = creatorProof;

  const metrics = creator.metrics.map((m) => ({
    value: m.value,
    label: m.label,
  }));

  const campaigns = creator.campaigns.map((c) => ({
    brand: c.brand,
    period: c.period,
    type: 'Campaign',
    metrics: [
      { label: 'Clicks', value: c.metrics.split(',')[0]?.split(' ')[0] || '', highlight: false },
      { label: 'Conversions', value: c.metrics.split(',')[1]?.trim().split(' ')[0] || '', highlight: true },
    ],
    detail: c.metrics,
  }));

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          {/* Left: Portrait + Key Metrics */}
          <ScrollReveal delay={100} direction="up">
            <div className="lg:col-span-5">
              <Portrait
                src="/creators/ai-learners-india-profile.jpg"
                alt="AI Learners India channel profile — Abhijeet Kalamkar, founder"
                width={480}
                height={600}
                priority
                fill
              />
              <div className="mt-6 space-y-3 text-center md:text-left">
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
                  {creatorProof.eyebrow}
                </p>
                <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground">
                  {creatorProof.headline}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {creator.tagline}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Detailed Metrics + Campaigns */}
          <ScrollReveal delay={200} direction="up">
            <StaggeredReveal staggerDelay={150} direction="up" className="lg:col-span-7 space-y-8">
              {/* Metrics Row */}
              <MetricRow metrics={metrics} />

              {/* Campaigns Table */}
              <div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-4">
                  Published campaign evidence
                </h3>
                <CampaignTable campaigns={campaigns as any} showType={false} />
              </div>

              {/* CTA to full profile */}
              <div className="pt-4 border-t border-border flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Figures from brand affiliate dashboards. Reference calls available on request.
                </p>
                <Button asChild variant="primary" size="md">
                  <Link href={creator.cta.href} className="flex items-center gap-2">
                    {creator.cta.label}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </StaggeredReveal>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
