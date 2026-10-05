'use client';

import { Card } from '@/components/ui/card';
import { forCreatorsContent } from '@/lib/content/for-creators';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function WhatYouGet() {
  const { whatYouSee } = forCreatorsContent;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <ScrollReveal delay={100} direction="up" className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--accent-coral)]">
            {whatYouSee.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {whatYouSee.headline}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="up">
          <StaggeredReveal staggerDelay={150} direction="up" className="grid gap-6 md:grid-cols-3">
            {whatYouSee.cards.map((card, index) => (
              <Card key={index} variant="default" className="p-6">
                <h3 className="font-serif text-lg font-medium text-foreground mb-3">
                  {card.title}
                </h3>
                <ul className="space-y-2">
                  {card.items.map((item, iIndex) => (
                    <li key={iIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="font-mono text-primary mt-0.5">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </StaggeredReveal>
        </ScrollReveal>
      </div>
    </section>
  );
}
