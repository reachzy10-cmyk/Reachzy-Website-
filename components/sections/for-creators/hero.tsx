'use client';

import Link from 'next/link';
import { ArrowRight, BadgeCheck, FileText, Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { forCreatorsContent } from '@/lib/content/for-creators';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function ForCreatorsHero() {
  const { hero } = forCreatorsContent;
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-14 md:px-8 md:py-20 lg:grid-cols-12 lg:gap-12 lg:py-24">
        <div className="lg:col-span-7"><StaggeredReveal staggerDelay={100} initialDelay={70} direction="up"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-coral)]">{hero.eyebrow}</p><h1 className="mt-5 max-w-4xl text-balance font-serif text-4xl leading-[1.08] text-foreground sm:text-5xl md:text-6xl lg:text-[4.1rem]">{hero.headline}</h1><p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">{hero.body}</p><div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"><Button asChild variant="coral" size="lg"><Link href="mailto:partnerships@reachzy.space?subject=Creator%20partnership%20enquiry">Talk to Reachzy<ArrowRight className="size-4" /></Link></Button><Button asChild variant="secondary" size="lg"><Link href="#creator-roll">Explore creators</Link></Button></div></StaggeredReveal></div>
        <ScrollReveal delay={170} direction="up" className="lg:col-span-5"><div className="rounded-2xl border border-border bg-card p-5 md:p-6"><div className="flex items-center justify-between"><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-coral)]">Opportunity preview</p><span className="text-[10px] text-muted-foreground">Illustrative</span></div><h2 className="mt-3 font-serif text-2xl text-foreground">A sponsorship brief should answer the basics.</h2><div className="mt-6 space-y-4"><div className="flex gap-3"><FileText className="mt-0.5 size-5 shrink-0 text-[var(--accent-coral)]"/><div><p className="text-sm font-semibold text-foreground">Brand and product</p><p className="mt-1 text-xs text-muted-foreground">Who is behind the opportunity and what is being promoted.</p></div></div><div className="flex gap-3"><BadgeCheck className="mt-0.5 size-5 shrink-0 text-[var(--accent-coral)]"/><div><p className="text-sm font-semibold text-foreground">Why your channel</p><p className="mt-1 text-xs text-muted-foreground">Why the product is relevant to your content and audience.</p></div></div><div className="flex gap-3"><Handshake className="mt-0.5 size-5 shrink-0 text-[var(--accent-coral)]"/><div><p className="text-sm font-semibold text-foreground">Terms and next step</p><p className="mt-1 text-xs text-muted-foreground">Deliverables, compensation, timing and usage rights.</p></div></div></div><p className="mt-6 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">You should have enough context to decide whether to continue the conversation.</p></div></ScrollReveal>
      </div>
    </section>
  );
}
