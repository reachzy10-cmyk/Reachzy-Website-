'use client';

import { forCreatorsContent } from '@/lib/content/for-creators';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';
import { Bot, Code2, Cpu, Workflow } from 'lucide-react';

const icons = [Cpu, Workflow, Code2, Bot];
export function TechnologyCategories() {
  const { categories } = forCreatorsContent;
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-16 lg:py-20">
        <ScrollReveal delay={80} direction="up" className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-coral)]">{categories.eyebrow}</p><h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">{categories.headline}</h2><p className="mt-4 leading-relaxed text-muted-foreground">{categories.intro}</p></ScrollReveal>
        <StaggeredReveal staggerDelay={80} direction="up" className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{categories.items.map((category, index) => { const Icon = icons[index]; return <article key={category.name} className="rounded-xl border border-border bg-card p-5"><Icon className="size-5 text-[var(--accent-coral)]"/><h3 className="mt-4 font-serif text-lg text-foreground">{category.name}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{category.description}</p></article>; })}</StaggeredReveal>
        <p className="mt-5 max-w-4xl text-xs leading-relaxed text-muted-foreground">The categories can overlap. We consider the full context of a creator’s content rather than placing a channel into a single box.</p>
      </div>
    </section>
  );
}
