'use client';

import { forCreatorsContent } from '@/lib/content/for-creators';
import { clsx } from 'clsx';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';
import { Card } from '@/components/ui/card';

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
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground lg:text-base">
            {whatWeActuallyHandle.intro}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="up">
          <StaggeredReveal staggerDelay={150} direction="up" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whatWeActuallyHandle.items.map((item, index) => (
              <Card key={index} variant="default" hoverable={false} className="p-6">
                <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-pretty text-muted-foreground">
                  {item.body}
                </p>
              </Card>
            ))}
          </StaggeredReveal>
        </ScrollReveal>

        <ScrollReveal delay={400} direction="up" className="mt-10 text-center">
          <p className="text-sm text-muted-foreground italic">
            {whatWeActuallyHandle.whenNeeded}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
