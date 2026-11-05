'use client';

import { forBrandsContent } from '@/lib/content/for-brands';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { ArrowUpRight } from 'lucide-react';

export function Problem() {
  const { problem } = forBrandsContent;
  const questions = ['What does this creator actually make?', 'Who watches it, and what can we verify about that audience?', 'Would the product make sense in that content?', 'Can the creator explain or demonstrate it credibly?'];
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid w-full max-w-7xl gap-9 px-6 py-14 md:px-8 md:py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
        <ScrollReveal delay={80} direction="up" className="lg:col-span-5"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{problem.eyebrow}</p><h2 className="mt-4 text-balance font-serif text-3xl leading-tight text-foreground md:text-4xl">{problem.headline}</h2></ScrollReveal>
        <ScrollReveal delay={150} direction="up" className="lg:col-span-7"><p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">{problem.body[0]}</p><div className="mt-5 divide-y divide-border border-y border-border">{questions.map((question, index) => <div key={question} className="flex items-start gap-4 py-3.5"><span className="font-mono text-xs text-primary">0{index + 1}</span><p className="text-sm text-foreground md:text-base">{question}</p><ArrowUpRight className="ml-auto size-4 shrink-0 text-muted-foreground" /></div>)}</div><p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">{problem.body[2]}</p></ScrollReveal>
      </div>
    </section>
  );
}
