'use client';

import { Accordion } from '@/components/ui/accordion';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const items = [
  { question: 'Do I have to accept every opportunity?', answer: 'No. You decide whether an opportunity is relevant and whether you want to continue the conversation.' },
  { question: 'Does working with Reachzy require exclusivity?', answer: 'Exclusivity should never be assumed. Any category restriction or exclusivity term must be discussed and agreed as part of the specific collaboration.' },
  { question: 'How are sponsorship rates discussed?', answer: 'The creator’s fee and requested deliverables are discussed in the context of the brief. Any usage rights or additional requirements should be identified separately.' },
  { question: 'Who handles communication with the brand?', answer: 'Reachzy can coordinate the commercial conversation and campaign details for opportunities it is authorised to handle.' },
  { question: 'Can I ask questions or decline?', answer: 'Yes. You can ask for more information, discuss the terms or decline before making a commitment.' },
];

export function CreatorFaq() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-16 lg:py-20">
        <ScrollReveal delay={80} direction="up" className="mb-8 max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-coral)]">Useful to know</p><h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">Questions creators may have.</h2></ScrollReveal>
        <ScrollReveal delay={140} direction="up"><Accordion items={items.map((item) => ({ question: item.question, answer: <p className="leading-relaxed">{item.answer}</p> }))} className="max-w-4xl" /></ScrollReveal>
      </div>
    </section>
  );
}
