'use client';

import { Button } from '@/components/ui/button';
import { homeContent } from '@/lib/content/home';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'coral' | undefined;

export function DualPath() {
  const { dualPath } = homeContent;
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-16 lg:py-20">
        <ScrollReveal delay={80} direction="up">
          <div className="mx-auto mb-9 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{dualPath.eyebrow}</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground md:text-4xl">{dualPath.headline}</h2>
          </div>
        </ScrollReveal>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="flex h-full flex-col rounded-xl border border-primary/30 bg-card p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">01 / Brand side</p>
            <h3 className="mt-4 font-serif text-2xl text-foreground">{dualPath.brandCard.headline}</h3>
            <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{dualPath.brandCard.body}</p>
            <Button asChild variant={dualPath.brandCard.cta.variant as ButtonVariant} size="md" className="mt-6 w-full justify-between sm:w-auto"><Link href={dualPath.brandCard.cta.href}>{dualPath.brandCard.cta.label}<ArrowRight className="size-4" /></Link></Button>
          </article>
          <article className="flex h-full flex-col rounded-xl border border-[var(--accent-coral)]/30 bg-card p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent-coral)]">02 / Creator side</p>
            <h3 className="mt-4 font-serif text-2xl text-foreground">{dualPath.creatorCard.headline}</h3>
            <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{dualPath.creatorCard.body}</p>
            <Button asChild variant={dualPath.creatorCard.cta.variant as ButtonVariant} size="md" className="mt-6 w-full justify-between sm:w-auto"><Link href={dualPath.creatorCard.cta.href}>{dualPath.creatorCard.cta.label}<ArrowRight className="size-4" /></Link></Button>
          </article>
        </div>
      </div>
    </section>
  );
}
