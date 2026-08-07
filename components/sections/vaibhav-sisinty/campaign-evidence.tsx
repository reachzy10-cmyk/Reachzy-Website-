'use client';

import { vaibhavSisintyContent } from '@/lib/content/vaibhav-sisinty';
import { clsx } from 'clsx';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';
import { Card } from '@/components/ui/card';
import { AlertTriangle, Shield } from 'lucide-react';

export function CampaignEvidence() {
  const { campaignEvidence } = vaibhavSisintyContent;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <ScrollReveal delay={100} direction="up" className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
            {campaignEvidence.eyebrow}
          </p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {campaignEvidence.headline}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground lg:text-base">
            {campaignEvidence.body}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="up">
          <Card variant="default" hoverable={false} className="p-6 md:p-8 border-muted/30 bg-muted/5">
            <div className="flex items-start gap-3">
              <Shield className="size-6 text-muted-foreground flex-shrink-0" />
              <div className="space-y-2">
                <p className="text-base text-foreground">
                  This section is a placeholder for future verified campaign evidence.
                </p>
                <p className="text-sm text-muted-foreground">
                  If and when the creator team provides verified sponsored-campaign case studies with explicit publication permission, this section will be updated to showcase relevant campaign outcomes, reach metrics, and brand results.
                </p>
              </div>
            </div>
          </Card>
        </ScrollReveal>

        <ScrollReveal delay={400} direction="up" className="mt-10">
          <Card variant="default" hoverable={false} className="p-6 border-amber/30 bg-amber/5 text-amber">
            <div className="flex items-start gap-2">
              <AlertTriangle className="size-4 text-amber mt-0.5 flex-shrink-0" />
              <p className="text-sm text-amber">
                <strong className="text-foreground">Publication Note:</strong> {campaignEvidence.publicationNote}
              </p>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
