'use client';

import { Card } from '@/components/ui/card';
import { forCreatorsContent } from '@/lib/content/for-creators';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function WhatWeActuallyHandle() {
  const { whatWeActuallyHandle } = forCreatorsContent;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <ScrollReveal delay={100} direction="up" className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--accent-coral)]">
            {whatWeActuallyHandle.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {whatWeActuallyHandle.headline}
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground lg:text-base">
            {whatWeActuallyHandle.intro}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="up">
          <StaggeredReveal staggerDelay={100} direction="up" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whatWeActuallyHandle.items.map((item, index) => (
              <Card key={index} variant="default" className="p-6">
                <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.body}
                </p>
              </Card>
            ))}
          </StaggeredReveal>
        </ScrollReveal>

        <ScrollReveal delay={300} direction="up" className="mt-12 max-w-3xl">
          <p className="text-sm text-muted-foreground italic text-center">
            {whatWeActuallyHandle.whenNeeded}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}