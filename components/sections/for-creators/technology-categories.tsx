'use client';

import { forCreatorsContent } from '@/lib/content/for-creators';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';
import { Bot, Code2, Cpu, Workflow } from 'lucide-react';

const icons = [Cpu, Workflow, Code2, Bot];
export function TechnologyCategories() {
  const { technologyCategories } = forCreatorsContent;
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-16 lg:py-20">
        <ScrollReveal delay={80} direction="up" className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-creator)]">{technologyCategories.eyebrow}</p><h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">{technologyCategories.headline}</h2><p className="mt-4 leading-relaxed text-muted-foreground">{technologyCategories.intro}</p></ScrollReveal>
        <StaggeredReveal staggerDelay={80} direction="up" className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{technologyCategories.categories.map((category, index) => { const Icon = icons[index % icons.length]; return <article key={category.name} className="rounded-xl border border-border bg-card p-5"><Icon className="size-5 text-[var(--accent-creator)]"/><h3 className="mt-4 font-serif text-lg text-foreground">{category.name}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{category.description}</p></article>; })}</StaggeredReveal>
        <p className="mt-5 max-w-4xl text-xs leading-relaxed text-muted-foreground">{technologyCategories.closingParagraph}</p>
      </div>
    </section>
  );
}
