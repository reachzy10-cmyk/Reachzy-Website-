'use client';

import Link from 'next/link';
import { ArrowRight, Boxes, CircleDot, Package, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { homeContent } from '@/lib/content/home';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'coral' | undefined;

export function Hero() {
  const { hero } = homeContent;

  return (
    <section className="border-b border-border">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-14 md:px-8 md:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="lg:col-span-7">
          <StaggeredReveal staggerDelay={110} initialDelay={80} direction="up">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary md:text-sm">{hero.eyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-balance font-serif text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4.4rem]">
              {hero.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              {hero.body}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild variant={hero.primaryCta.variant as ButtonVariant} size="lg">
                <Link href={hero.primaryCta.href}>{hero.primaryCta.label}<ArrowRight className="size-4" /></Link>
              </Button>
              <Button asChild variant={hero.secondaryCta.variant as ButtonVariant} size="lg">
                <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-2" aria-label="Reachzy focus areas">
              {['Technology', 'AI & automation', 'Software & SaaS', 'Productivity'].map((item) => (
                <span key={item} className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground">{item}</span>
              ))}
            </div>
          </StaggeredReveal>
        </div>

        <ScrollReveal delay={220} direction="up" className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-5 md:p-6">
            <div className="absolute -right-12 -top-12 size-40 rounded-full border border-primary/20" aria-hidden="true" />
            <div className="relative flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">The fit comes first</p>
                <h2 className="mt-2 font-serif text-2xl text-foreground">A better reason to collaborate.</h2>
              </div>
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary"><CircleDot className="size-5" /></span>
            </div>
            <div className="relative mt-7 space-y-3">
              <div className="flex items-center gap-4 rounded-xl border border-border bg-background/80 p-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"><Package className="size-5" /></span>
                <div className="min-w-0"><p className="text-sm font-semibold text-foreground">The product</p><p className="mt-1 text-xs text-muted-foreground">What it does and who needs it.</p></div>
              </div>
              <div className="ml-8 h-5 border-l border-dashed border-primary/50" />
              <div className="flex items-center gap-4 rounded-xl border border-border bg-background/80 p-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"><Users className="size-5" /></span>
                <div className="min-w-0"><p className="text-sm font-semibold text-foreground">The creator</p><p className="mt-1 text-xs text-muted-foreground">Who already explains or uses related tools.</p></div>
              </div>
              <div className="ml-8 h-5 border-l border-dashed border-primary/50" />
              <div className="flex items-center gap-4 rounded-xl border border-primary/30 bg-primary/5 p-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"><Boxes className="size-5" /></span>
                <div className="min-w-0"><p className="text-sm font-semibold text-foreground">The collaboration</p><p className="mt-1 text-xs text-muted-foreground">A format and message with a natural fit.</p></div>
              </div>
            </div>
            <p className="relative mt-5 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">No inflated roster claims. No audience-size shortcut. Start with the brief.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
