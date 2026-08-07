'use client';

import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';
import { ArrowUpRight, BarChart3, FileCheck2, Search, ShieldCheck } from 'lucide-react';

const pillars = [
  { icon: Search, title: 'Research before outreach', body: 'Review the creator’s existing content, audience context and recent performance.' },
  { icon: FileCheck2, title: 'A reasoned recommendation', body: 'Explain why the creator and format make sense for the product and campaign objective.' },
  { icon: ShieldCheck, title: 'Clear commercial scope', body: 'Set out deliverables, usage rights, responsibilities and approval points before commitment.' },
  { icon: BarChart3, title: 'Measure the right thing', body: 'Agree on relevant KPIs before the campaign, then review the data that is available.' },
];

export function HomepageApproach() {
  return (
    <section className="border-b border-border bg-card/20">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <ScrollReveal delay={80} direction="up" className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">How we evaluate fit</p>
            <h2 className="mt-4 text-balance font-serif text-3xl leading-tight text-foreground md:text-4xl">More creators isn’t a strategy. Better selection is.</h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">A useful recommendation should be explainable. These are the questions we put behind creator discovery.</p>
            <a href="/for-brands" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">See how we work with brands <ArrowUpRight className="size-4" /></a>
          </ScrollReveal>
          <div className="lg:col-span-8">
            <StaggeredReveal staggerDelay={90} direction="up" className="grid gap-3 sm:grid-cols-2">
              {pillars.map(({ icon: Icon, title, body }, index) => (
                <article key={title} className="rounded-xl border border-border bg-background p-5 md:p-6">
                  <div className="flex items-center justify-between"><span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Icon className="size-5" /></span><span className="font-mono text-xs text-muted-foreground">0{index + 1}</span></div>
                  <h3 className="mt-5 font-serif text-xl text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </article>
              ))}
            </StaggeredReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
