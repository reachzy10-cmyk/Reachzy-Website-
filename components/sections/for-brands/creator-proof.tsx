'use client';

import { Portrait } from '@/components/ui/portrait';
import { MetricRow } from '@/components/ui/metric-row';
import { CampaignTable } from '@/components/ui/campaign-table';
import { Button } from '@/components/ui/button';
import { forBrandsContent } from '@/lib/content/for-brands';
import { clsx } from 'clsx';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function CreatorProof() {
  const { creatorProof } = forBrandsContent;
  const { creator } = creatorProof;

  const metrics = creator.metrics.map((m) => ({
    value: m.value,
    label: m.label,
  }));

  // Campaigns now have the correct structure with metrics as an array of CampaignMetric
  const campaigns = creator.campaigns;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <ScrollReveal delay={100} direction="up" className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
            {creatorProof.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {creatorProof.headline}
          </h2>
        </ScrollReveal>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          {/* Left: Portrait + Quick Metrics */}
          <ScrollReveal delay={200} direction="up">
            <div className="lg:col-span-5">
              <Portrait
                src="/creators/ai-learners-india-profile.jpg"
                alt="AI Learners India channel profile — Abhijeet Kalamkar, founder"
                width={480}
                height={600}
                priority
                fill
              />
              <div className="mt-6 space-y-2 text-center md:text-left">
                <h3 className="font-serif text-2xl font-medium text-foreground">
                  {creator.name}
                </h3>
                <p className="text-sm text-primary font-medium">{creator.tagline}</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Audience + Deep Metrics + Campaigns */}
          <ScrollReveal delay={300} direction="up">
            <StaggeredReveal staggerDelay={150} direction="up" className="lg:col-span-7 space-y-8">
              {/* Audience */}
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-medium text-foreground">Audience</h3>
                <p className="text-pretty text-muted-foreground">{creator.audience.who}</p>
                <p className="text-pretty text-muted-foreground">{creator.audience.whatTheyBuy}</p>
                <p className="text-pretty text-muted-foreground">{creator.audience.where}</p>
              </div>

              {/* Detailed Metrics */}
              <div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-4">Channel metrics</h3>
                <MetricRow metrics={metrics} />
              </div>

              {/* Campaigns Table */}
              <div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-4">Campaign evidence</h3>
                <CampaignTable campaigns={campaigns} showType={true} />
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
