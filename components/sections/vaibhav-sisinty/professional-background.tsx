'use client';

import { vaibhavSisintyContent } from '@/lib/content/vaibhav-sisinty';
import { clsx } from 'clsx';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';
import { Card } from '@/components/ui/card';
import { Briefcase, Building2, AlertTriangle } from 'lucide-react';

export function ProfessionalBackground() {
  const { professionalBackground } = vaibhavSisintyContent;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <ScrollReveal delay={100} direction="up" className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
            {professionalBackground.eyebrow}
          </p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {professionalBackground.headline}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground lg:text-base">
            {professionalBackground.intro}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="up">
          <StaggeredReveal staggerDelay={150} direction="up" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {professionalBackground.affiliations && professionalBackground.affiliations.map((affiliation, index) => (
              <Card
                key={index}
                variant="default"
                hoverable={false}
                className="p-6 md:p-8 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
                    <Briefcase className="size-5" />
                  </div>
                  <h3 className="font-serif text-lg md:text-xl font-medium text-foreground">
                    {affiliation.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground font-medium mb-2">{affiliation.company}</p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {affiliation.description}
                </p>
                <p className="text-xs text-muted-foreground mt-2">{affiliation.period}</p>
              </Card>
            ))}
          </StaggeredReveal>
        </ScrollReveal>

        <ScrollReveal delay={400} direction="up" className="mt-10">
          <Card variant="default" hoverable={false} className="p-6 border-amber/30 bg-amber/5 text-amber">
            <div className="flex items-start gap-2">
              <AlertTriangle className="size-4 text-amber mt-0.5 flex-shrink-0" />
              <p className="text-sm text-amber">
                <strong className="text-foreground">Verification Required:</strong> {professionalBackground.closingLine}
              </p>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
