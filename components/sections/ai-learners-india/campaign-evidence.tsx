'use client';

import { CampaignTable } from '@/components/ui/campaign-table';
import { aiLearnersIndiaContent } from '@/lib/content/ai-learners-india';
import { clsx } from 'clsx';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function CampaignEvidence() {
  const { campaignEvidence } = aiLearnersIndiaContent;

  const campaigns = campaignEvidence.campaigns.map((c) => ({
    brand: c.brand,
    period: c.period,
    type: c.type,
    metrics: c.metrics.map((m) => ({
      label: m.label,
      value: m.value,
      highlight: false,
    })),
    detail: c.detail,
    note: campaignEvidence.description,
  }));

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <ScrollReveal delay={100} direction="up" className="max-w-3xl mb-12 lg:mb-16">
          <h2 className="text-balance font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {campaignEvidence.headline}
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground lg:text-base">
            {campaignEvidence.description}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="up">
          <CampaignTable campaigns={campaigns as any} />
        </ScrollReveal>
      </div>
    </section>
  );
}
