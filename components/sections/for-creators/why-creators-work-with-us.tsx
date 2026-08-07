'use client';

import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';
import { CalendarClock, Handshake, MessageSquareText, Wallet } from 'lucide-react';

const responsibilities = [
  { icon: MessageSquareText, title: 'Brand communication', body: 'Keep the conversation moving and make the important details clear.' },
  { icon: Handshake, title: 'Commercial terms', body: 'Discuss compensation, deliverables, usage rights and agreed restrictions.' },
  { icon: CalendarClock, title: 'Campaign coordination', body: 'Track timelines, agreed milestones and communication as the collaboration moves forward.' },
  { icon: Wallet, title: 'Payment follow-up', body: 'Help keep payment-related communication visible after the agreed work is completed.' },
];

export function WhyCreatorsWorkWithUs() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-16 lg:py-20">
        <ScrollReveal delay={80} direction="up" className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-coral)]">Why creators work with us</p><h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">You keep running the channel. We coordinate more of the deal.</h2><p className="mt-4 leading-relaxed text-muted-foreground">There is more to a sponsorship than placing a brand in a video. The commercial details, communication and timing all need attention. Reachzy helps coordinate that work while you decide what belongs on your channel.</p></ScrollReveal>
        <StaggeredReveal staggerDelay={80} direction="up" className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{responsibilities.map(({ icon: Icon, title, body }) => <article key={title} className="rounded-xl border border-border bg-card p-5"><Icon className="size-5 text-[var(--accent-coral)]"/><h3 className="mt-4 font-serif text-lg text-foreground">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p></article>)}</StaggeredReveal>
      </div>
    </section>
  );
}
