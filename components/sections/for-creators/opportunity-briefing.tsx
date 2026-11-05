'use client';

import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { FileText, Package, Wallet, CalendarDays, ShieldCheck } from 'lucide-react';

const groups = [
  { icon: Package, title: 'The opportunity', items: ['Brand and product', 'Why the collaboration fits your channel'] },
  { icon: FileText, title: 'The content', items: ['Format and deliverables', 'Key message or demonstration requested'] },
  { icon: Wallet, title: 'The commercial terms', items: ['Compensation and payment terms', 'Usage rights, exclusivity and restrictions'] },
  { icon: CalendarDays, title: 'The schedule', items: ['Content and approval milestones', 'Expected publication window'] },
];

export function OpportunityBriefing() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-14 md:px-8 md:py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
        <ScrollReveal delay={80} direction="up" className="lg:col-span-4"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-coral)]">What you should see</p><h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">Clear deal details. No vague proposals.</h2><p className="mt-4 leading-relaxed text-muted-foreground">A useful opportunity brief gives you enough context to assess the collaboration before deciding whether to continue.</p></ScrollReveal>
        <ScrollReveal delay={140} direction="up" className="lg:col-span-8"><div className="overflow-hidden rounded-xl border border-border bg-card"><div className="flex items-center justify-between border-b border-border px-5 py-4"><div><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-coral)]">Opportunity details</p><h3 className="mt-1 font-serif text-lg text-foreground">What a brief should cover</h3></div><ShieldCheck className="size-5 text-muted-foreground"/></div><div className="grid sm:grid-cols-2">{groups.map(({ icon: Icon, title, items }, index) => <div key={title} className="border-b border-border p-5 last:border-0 sm:odd:border-r"><div className="flex items-center gap-3"><span className="inline-flex size-9 items-center justify-center rounded-lg bg-[var(--accent-coral)]/10 text-[var(--accent-coral)]"><Icon className="size-4"/></span><h3 className="font-serif text-lg text-foreground">{title}</h3></div><ul className="mt-4 space-y-2">{items.map((item) => <li key={item} className="flex gap-2 text-sm text-muted-foreground"><span className="text-[var(--accent-coral)]">—</span>{item}</li>)}</ul></div>)}</div><p className="border-t border-border bg-background/50 px-5 py-3 text-xs text-muted-foreground">Example structure only. A real opportunity should contain its own confirmed details.</p></div></ScrollReveal>
      </div>
    </section>
  );
}
