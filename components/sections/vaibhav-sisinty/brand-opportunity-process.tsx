'use client';

import { vaibhavSisintyContent } from '@/lib/content/vaibhav-sisinty';
import { clsx } from 'clsx';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';
import { Card } from '@/components/ui/card';
import { AlertTriangle, Shield, XCircle, ExternalLink } from 'lucide-react';

export function BrandOpportunityProcess() {
  const { brandOpportunityProcess } = vaibhavSisintyContent;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <ScrollReveal delay={100} direction="up" className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
            {brandOpportunityProcess.eyebrow}
          </p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {brandOpportunityProcess.headline}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground lg:text-base">
            {brandOpportunityProcess.intro}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="up">
          <StaggeredReveal staggerDelay={150} direction="up" className="space-y-4 md:space-y-6 max-w-3xl">
            {brandOpportunityProcess.process.map((step, index) => (
              <Card
                key={index}
                variant="default"
                hoverable={false}
                className="p-6 md:p-8 flex gap-4"
              >
                <div className="flex-shrink-0">
                  {index === 0 && <Shield className="size-6 text-primary" />}
                  {index === 1 && <AlertTriangle className="size-6 text-primary" />}
                  {index === 2 && <XCircle className="size-6 text-primary" />}
                  {index === 3 && <ExternalLink className="size-6 text-primary" />}
                </div>
                <p className="text-base text-foreground leading-relaxed">
                  {step}
                </p>
              </Card>
            ))}
          </StaggeredReveal>
        </ScrollReveal>

        <ScrollReveal delay={400} direction="up" className="mt-10">
          <Card variant="default" hoverable={false} className="p-6 border-amber/30 bg-amber/5 text-amber">
            <div className="flex items-start gap-2">
              <AlertTriangle className="size-4 text-amber mt-0.5 flex-shrink-0" />
              <p className="text-sm text-amber">
                <strong className="text-foreground">Important:</strong> {brandOpportunityProcess.ctaNote}
              </p>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
