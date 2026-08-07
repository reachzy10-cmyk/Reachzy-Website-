'use client';

import { Accordion } from '@/components/ui/accordion';
import { forBrandsContent } from '@/lib/content/for-brands';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function Faq() {
  const { faq } = forBrandsContent;
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-16 lg:py-20">
        <ScrollReveal delay={80} direction="up" className="mb-8 max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{faq.eyebrow}</p><h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">{faq.headline}</h2></ScrollReveal>
        <ScrollReveal delay={140} direction="up"><Accordion items={faq.items.map((item) => ({ question: item.question, answer: <p className="text-pretty leading-relaxed">{item.answer}</p> }))} className="max-w-4xl" /></ScrollReveal>
      </div>
    </section>
  );
}
