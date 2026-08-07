'use client';

import Link from 'next/link';
import { ArrowRight, FileText, Search, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { forBrandsContent } from '@/lib/content/for-brands';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function ForBrandsHero() {
  const { hero } = forBrandsContent;
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-14 md:px-8 md:py-20 lg:grid-cols-12 lg:gap-12 lg:py-24">
        <div className="lg:col-span-7"><StaggeredReveal staggerDelay={100} initialDelay={70} direction="up">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{hero.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-balance font-serif text-4xl leading-[1.08] text-foreground sm:text-5xl md:text-6xl lg:text-[4.3rem]">{hero.headline}</h1>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">{hero.body}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild variant="primary" size="lg"><Link href={hero.primaryCta.href}>{hero.primaryCta.label}<ArrowRight className="size-4" /></Link></Button>
            <Button asChild variant="secondary" size="lg"><Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link></Button>
          </div>
        </StaggeredReveal></div>
        <ScrollReveal delay={180} direction="up" className="lg:col-span-5">
          <div className="rounded-2xl border border-border bg-card p-5 md:p-6">
            <div className="flex items-center justify-between"><div><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">Campaign thinking</p><h2 className="mt-2 font-serif text-2xl text-foreground">Start with a better question.</h2></div><span className="font-mono text-xs text-muted-foreground">01 / 03</span></div>
            <div className="mt-6 space-y-3">
              <div className="flex gap-3 rounded-lg border border-border bg-background p-4"><Search className="mt-0.5 size-5 shrink-0 text-primary"/><div><p className="text-sm font-semibold text-foreground">What does the product solve?</p><p className="mt-1 text-xs text-muted-foreground">Understand the use case before searching for a creator.</p></div></div>
              <div className="flex gap-3 rounded-lg border border-border bg-background p-4"><Target className="mt-0.5 size-5 shrink-0 text-primary"/><div><p className="text-sm font-semibold text-foreground">Who needs to understand it?</p><p className="mt-1 text-xs text-muted-foreground">Define the audience and the action the campaign should support.</p></div></div>
              <div className="flex gap-3 rounded-lg border border-primary/30 bg-primary/5 p-4"><FileText className="mt-0.5 size-5 shrink-0 text-primary"/><div><p className="text-sm font-semibold text-foreground">What would make the fit credible?</p><p className="mt-1 text-xs text-muted-foreground">Connect product, creator content and campaign format.</p></div></div>
            </div>
            <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">A planning framework—not a campaign result or performance forecast.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
