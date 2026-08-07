'use client';

import { Button } from '@/components/ui/button';
import { forCreatorsContent } from '@/lib/content/for-creators';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function ForCreatorsFinalCta() {
  const { finalCta } = forCreatorsContent;
  const subject = encodeURIComponent('Creator partnership enquiry — [Channel name]');
  const body = encodeURIComponent(`Hi Reachzy,

I would like to learn more about relevant sponsorship opportunities.

Channel name:
Primary niche:
Typical sponsorship formats:
Typical sponsorship rates (optional):
Channel URL:

Best,
[Your name]`);
  const mailto = `mailto:partnerships@reachzy.space?subject=${subject}&body=${body}`;
  return (
    <section className="border-t border-[var(--accent-coral)]/20 bg-[var(--accent-coral)]/5">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-16 lg:py-20"><ScrollReveal delay={80} direction="up" className="mx-auto max-w-3xl text-center"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-coral)]">Start a conversation</p><h2 className="mt-4 text-balance font-serif text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl">{finalCta.headline}</h2><p className="mt-4 leading-relaxed text-muted-foreground">{finalCta.body}</p><Button asChild variant="coral" size="lg" className="mt-8"><a href={mailto}>{finalCta.cta.label}<ArrowRight className="size-4" /></a></Button><p className="mt-4 text-xs text-muted-foreground">{finalCta.microcopy}</p></ScrollReveal></div>
    </section>
  );
}
