'use client';

import { Card } from '@/components/ui/card';
import { forCreatorsContent } from '@/lib/content/for-creators';
import { clsx } from 'clsx';
import { Laptop, LayoutDashboard, Code } from 'lucide-react';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function WhoItsFor() {
  const { whoItsFor } = forCreatorsContent;

  const icons = {
    'Tech creators': Laptop,
    'Productivity creators': LayoutDashboard,
    'Software / SaaS creators': Code,
  } as const;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <ScrollReveal delay={100} direction="up" className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--accent-coral)]">
            {whoItsFor.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {whoItsFor.headline}
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground lg:text-base">
            {whoItsFor.body}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="up">
          <StaggeredReveal staggerDelay={150} direction="up" className="grid gap-6 md:grid-cols-3">
            {whoItsFor.categories.map((category, index) => {
              const Icon = icons[category.name as keyof typeof icons];
              return (
                <Card
                  key={index}
                  variant="default"
                  hoverable
                  className="p-6"
                >
                  <div className="inline-flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary mb-4">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                    {category.name}
                  </h3>
                  <p className="text-pretty text-muted-foreground">
                    {category.description}
                  </p>
                </Card>
              );
            })}
          </StaggeredReveal>
        </ScrollReveal>

        <ScrollReveal delay={400} direction="up" className="mt-8 text-center text-sm text-muted-foreground">
          {whoItsFor.footnote}
        </ScrollReveal>
      </div>
    </section>
  );
}
