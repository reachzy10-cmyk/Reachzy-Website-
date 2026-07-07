'use client';

import { forBrandsContent } from '@/lib/content/for-brands';
import { Card } from '@/components/ui/card';
import { clsx } from 'clsx';
import { Check } from 'lucide-react';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function FitPhilosophy() {
  const { fitPhilosophy } = forBrandsContent;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <ScrollReveal delay={100} direction="up" className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
            {fitPhilosophy.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {fitPhilosophy.headline}
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground lg:text-base">
            {fitPhilosophy.body}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="up">
          <StaggeredReveal staggerDelay={150} direction="up" className="grid gap-6 md:grid-cols-4">
            {fitPhilosophy.criteria.map((criterion, index) => (
              <Card
                key={index}
                variant="default"
                hoverable
                className="p-6 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
                    <Check className="size-5" />
                  </div>
                </div>
                <p className="text-pretty text-muted-foreground">{criterion}</p>
              </Card>
            ))}
          </StaggeredReveal>
        </ScrollReveal>
      </div>
    </section>
  );
}