'use client';

import { pavanLalwaniContent } from '@/lib/content/pavan-lalwani';
import { Card } from '@/components/ui/card';
import { clsx } from 'clsx';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';
import { Bot, BarChart3, Table, LayoutDashboard, Cpu, Zap } from 'lucide-react';

const categoryIcons = {
  'AI tools and software': Bot,
  'Data analytics and business intelligence': BarChart3,
  'Productivity and developer tools': Table,
  'Learning platforms and educational technology': LayoutDashboard,
};

export function BrandFit() {
  const { brandFit } = pavanLalwaniContent;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20 lg:py-24">
        <ScrollReveal delay={100} direction="up" className="max-w-3xl mb-9 lg:mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
            {brandFit.eyebrow}
          </p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {brandFit.headline}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground lg:text-base">
            {brandFit.intro}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="up">
          <StaggeredReveal staggerDelay={100} direction="up" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {brandFit.topics.map((topic, index) => {
              const Icon = categoryIcons[topic.title as keyof typeof categoryIcons] || Zap;
              return (
                <Card
                  key={index}
                  variant="default"
                  hoverable
                  className="p-6 flex flex-col h-full"
                >
                  <div className="inline-flex items-center justify-center size-12 rounded-xl bg-primary/10 text-primary mb-4">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-serif text-lg md:text-xl font-medium text-foreground">
                    {topic.title}
                  </h3>
                  <p className="mt-3 text-pretty leading-relaxed text-muted-foreground flex-1">
                    {topic.description}
                  </p>
                </Card>
              );
            })}
          </StaggeredReveal>
        </ScrollReveal>

        <ScrollReveal delay={400} direction="up" className="mt-10">
          <p className="text-base text-muted-foreground border-t border-border pt-6 text-center">
            {brandFit.closingLine}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
