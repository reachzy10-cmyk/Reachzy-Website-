'use client';

import { useState } from 'react';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';
import { BarChart3, Check, FileText, Megaphone, MousePointerClick, ShieldCheck, Users } from 'lucide-react';

const objectives = [
  { id: 'awareness', label: 'Awareness', format: 'Reach-oriented integration or creator-led introduction', measure: 'Reach, impressions and video views', note: 'The creator and placement should help the right audience notice the product.' },
  { id: 'education', label: 'Product education', format: 'Tutorial, walkthrough or practical demonstration', measure: 'Watch time, meaningful engagement and product-page visits', note: 'Useful when people need context before they can evaluate the product.' },
  { id: 'consideration', label: 'Consideration', format: 'Detailed integration with use cases and comparisons where appropriate', measure: 'Clicks, engaged visits and other agreed actions', note: 'Give interested viewers enough information to compare the product.' },
  { id: 'trials', label: 'Signups / trials', format: 'Product demonstration with a clear, trackable next step', measure: 'Tracked signups, trials and conversions where attribution is available', note: 'Agree the tracking setup and conversion definition before launch.' },
];

export function CampaignPlanner() {
  const [selected, setSelected] = useState('education');
  const current = objectives.find((item) => item.id === selected) ?? objectives[1];
  return (
    <section className="border-b border-border bg-card/20">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-14 md:px-8 md:py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
        <ScrollReveal delay={80} direction="up" className="lg:col-span-4"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Plan around the objective</p><h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">Different goals need different content.</h2><p className="mt-4 leading-relaxed text-muted-foreground">Choose a campaign objective to see an illustrative starting point. The final recommendation depends on your product, audience and brief.</p></ScrollReveal>
        <div className="lg:col-span-8">
          <div className="grid gap-2 sm:grid-cols-2" role="group" aria-label="Campaign objective">
            {objectives.map((item) => <button key={item.id} type="button" onClick={() => setSelected(item.id)} aria-pressed={selected === item.id} className={`rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${selected === item.id ? 'border-primary bg-primary/10 text-foreground' : 'border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground'}`}>{item.label}</button>)}
          </div>
          <div className="mt-3 rounded-xl border border-border bg-background p-5 md:p-6" aria-live="polite">
            <div className="flex items-center justify-between gap-3"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Illustrative recommendation</p><span className="rounded-full border border-border px-2.5 py-1 text-[10px] text-muted-foreground">Not a forecast</span></div>
            <h3 className="mt-4 font-serif text-2xl text-foreground">{current.label}</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2"><div><p className="text-xs text-muted-foreground">Possible content direction</p><p className="mt-1 text-sm leading-relaxed text-foreground">{current.format}</p></div><div><p className="text-xs text-muted-foreground">Relevant measurement</p><p className="mt-1 text-sm leading-relaxed text-foreground">{current.measure}</p></div></div>
            <p className="mt-5 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">{current.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProposalPreview() {
  const rows = [
    ['Campaign objective', 'Introduce a software product to a relevant audience'],
    ['Creator recommendation', 'Profile, audience context and fit rationale'],
    ['Content scope', 'Format, key message and agreed deliverables'],
    ['Commercial scope', 'Creator fee, agency service, usage and other costs'],
    ['Schedule', 'Briefing, review, approvals and publication milestones'],
    ['Measurement', 'KPIs, tracking requirements and reporting scope'],
  ];
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-14 md:px-8 md:py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
        <ScrollReveal delay={80} direction="up" className="lg:col-span-4"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">What you can evaluate</p><h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">A proposal should make the decision easier.</h2><p className="mt-4 leading-relaxed text-muted-foreground">Here is an illustrative view of the information a structured campaign proposal can contain. It is a sample format, not a past client project.</p></ScrollReveal>
        <ScrollReveal delay={140} direction="up" className="lg:col-span-8">
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border px-5 py-4"><div><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">Reachzy / proposal preview</p><p className="mt-1 font-serif text-lg text-foreground">Technology product campaign</p></div><FileText className="size-5 text-muted-foreground" /></div>
            <div className="divide-y divide-border">{rows.map(([label, value], index) => <div key={label} className="grid gap-1 px-5 py-3.5 sm:grid-cols-[11rem_1fr] sm:gap-4"><span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">0{index + 1} · {label}</span><span className="text-sm leading-relaxed text-foreground">{value}</span></div>)}</div>
            <div className="border-t border-border bg-background/60 px-5 py-3 text-xs text-muted-foreground">Illustrative structure only. No brand, creator or campaign outcome is represented.</div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function CommercialClarity() {
  const items = [
    { icon: Users, title: 'Creator compensation', body: 'The fee for the agreed content and deliverables.' },
    { icon: FileText, title: 'Agency service', body: 'The research, communication and coordination included in the agreed scope.' },
    { icon: ShieldCheck, title: 'Usage and exclusivity', body: 'Platforms, duration, category restrictions and paid usage should be stated separately.' },
    { icon: Check, title: 'Approvals and responsibilities', body: 'Who supplies information, reviews content, approves claims and confirms publication.' },
  ];
  return (
    <section className="border-b border-border bg-card/20">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-16 lg:py-20">
        <ScrollReveal delay={80} direction="up" className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Commercial clarity</p><h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">Know what goes into the campaign.</h2><p className="mt-4 leading-relaxed text-muted-foreground">A proposal should separate the creator’s fee from agency services and any additional rights or production requirements. The scope should be clear before a commitment is made.</p></ScrollReveal>
        <StaggeredReveal staggerDelay={80} direction="up" className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{items.map(({ icon: Icon, title, body }) => <article key={title} className="rounded-xl border border-border bg-background p-5"><Icon className="size-5 text-primary"/><h3 className="mt-4 font-serif text-lg text-foreground">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p></article>)}</StaggeredReveal>
      </div>
    </section>
  );
}

export function MeasurementFramework() {
  const rows = [
    ['Awareness', 'Reach, impressions and video views'],
    ['Engagement', 'Relevant interactions and engagement rate'],
    ['Consideration', 'Clicks, engaged visits and product-page actions'],
    ['Acquisition', 'Tracked signups, trials or conversions where attribution is available'],
  ];
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-14 md:px-8 md:py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
        <ScrollReveal delay={80} direction="up" className="lg:col-span-4"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Measurement framework</p><h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">Measure against the reason you ran it.</h2><p className="mt-4 leading-relaxed text-muted-foreground">Agree the objective and available tracking before the campaign. A report should use metrics that match the goal—not a generic dashboard of numbers.</p></ScrollReveal>
        <div className="lg:col-span-8"><div className="overflow-hidden rounded-xl border border-border">{rows.map(([goal, metric], index) => <div key={goal} className="grid gap-1 border-b border-border bg-card p-4 last:border-0 sm:grid-cols-[10rem_1fr] sm:gap-5"><span className="text-sm font-semibold text-foreground">0{index + 1} / {goal}</span><span className="text-sm text-muted-foreground">{metric}</span></div>)}</div><p className="mt-3 text-xs text-muted-foreground">Actual measurement depends on the campaign setup, platform reporting and tracking available.</p></div>
      </div>
    </section>
  );
}
