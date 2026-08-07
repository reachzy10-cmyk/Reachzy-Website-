'use client';

import { Button } from '@/components/ui/button';
import { forBrandsContent } from '@/lib/content/for-brands';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function ForBrandsFinalCta() {
  const { finalCta } = forBrandsContent;
  return (
    <section className="border-t border-border bg-primary/5">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-16 lg:py-20">
        <ScrollReveal delay={80} direction="up" className="mx-auto max-w-3xl text-center"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Start with the brief</p><h2 className="mt-4 text-balance font-serif text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl">{finalCta.headline}</h2><p className="mt-4 leading-relaxed text-muted-foreground">{finalCta.body}</p><Button asChild variant="primary" size="lg" className="mt-8"><Link href={finalCta.cta.href}>{finalCta.cta.label}<ArrowRight className="size-4" /></Link></Button><p className="mt-4 text-xs text-muted-foreground">{finalCta.microcopy}</p></ScrollReveal>
      </div>
    </section>
  );
}
