'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { aiLearnersIndiaContent } from '@/lib/content/ai-learners-india';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function FinalCta() {
  const { finalCta } = aiLearnersIndiaContent;
  return (
    <section className="border-t border-border bg-primary/5">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 text-center md:px-8 md:py-20">
        <ScrollReveal direction="up" className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Creator enquiry</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground md:text-4xl">{finalCta.headline}</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{finalCta.body}</p>
          <Button asChild variant="primary" size="lg" className="mt-8">
            <Link href={finalCta.cta.href} className="inline-flex items-center gap-2">{finalCta.cta.label}<ArrowRight className="size-4" /></Link>
          </Button>
          <p className="mt-5 text-xs text-muted-foreground">{finalCta.microcopy}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
