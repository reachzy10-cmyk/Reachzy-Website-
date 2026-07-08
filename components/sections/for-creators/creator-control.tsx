'use client';

import { Card } from '@/components/ui/card';
import { forCreatorsContent } from '@/lib/content/for-creators';
import { clsx } from 'clsx';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';
import { ArrowRight, X, HelpCircle } from 'lucide-react';

export function CreatorControl() {
  const { creatorControl } = forCreatorsContent;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <ScrollReveal delay={100} direction="up" className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--accent-coral)]">
            {creatorControl.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {creatorControl.headline}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="up">
          <StaggeredReveal staggerDelay={150} direction="up" className="grid gap-6 md:grid-cols-3">
            {creatorControl.options.map((option, index) => {
              const icons = {
                0: ArrowRight,
                1: X,
                2: HelpCircle,
              };
              const Icon = icons[index as keyof typeof icons];

              return (
                <Card key={index} variant="default" hoverable className="p-6 text-center">
                  <div className="inline-flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary mb-4">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-foreground mb-1">
                    {option.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {option.action}
                  </p>
                </Card>
              );
            })}
          </StaggeredReveal>
        </ScrollReveal>

        <ScrollReveal delay={300} direction="up" className="mt-12 max-w-3xl mx-auto">
          <div className="space-y-4 text-center md:text-left">
            {creatorControl.body.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400} direction="up" className="mt-10 text-center">
          <p className="text-sm text-muted-foreground italic">
            {creatorControl.closingLine}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}