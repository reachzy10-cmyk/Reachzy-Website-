'use client';

import { Card } from '@/components/ui/card';
import { forCreatorsContent } from '@/lib/content/for-creators';
import { clsx } from 'clsx';
import { Laptop, LayoutDashboard, Code, Bot } from 'lucide-react';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function TechnologyCategories() {
  const { technologyCategories } = forCreatorsContent;

  const icons = {
    Tech: Laptop,
    Productivity: LayoutDashboard,
    'Software & SaaS': Code,
    AI: Bot,
  } as const;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <ScrollReveal delay={100} direction="up" className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--accent-coral)]">
            {technologyCategories.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {technologyCategories.headline}
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground lg:text-base">
            {technologyCategories.intro}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="up">
          <StaggeredReveal staggerDelay={150} direction="up" className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {technologyCategories.categories.map((category, index) => {
              const Icon = icons[category.name as keyof typeof icons];
              return (
                <Card key={index} variant="default" hoverable className="p-6">
                  <div className="inline-flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary mb-4">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </Card>
              );
            })}
          </StaggeredReveal>
        </ScrollReveal>

        <ScrollReveal delay={300} direction="up" className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {technologyCategories.closingParagraph}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}