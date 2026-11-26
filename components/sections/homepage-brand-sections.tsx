'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Search,
  ShieldCheck,
  Target,
  Users,
  Video,
} from 'lucide-react';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

const evaluationPillars = [
  {
    icon: Users,
    title: 'Audience relevance',
    body: 'Who watches the creator, what they care about, and whether the product belongs in that context.',
  },
  {
    icon: BarChart3,
    title: 'Performance context',
    body: 'Recent long-form performance and consistency, read against the creator\'s own channel history.',
  },
  {
    icon: Video,
    title: 'Content suitability',
    body: 'Whether the creator can explain, demonstrate or integrate the product naturally.',
  },
  {
    icon: ShieldCheck,
    title: 'Brand suitability',
    body: 'Content history, sponsorship fit, category conflicts and the boundaries a campaign needs.',
  },
];

const brandDeliverables = [
  {
    icon: Search,
    title: 'A researched shortlist',
    body: 'Relevant creator profiles with the information available to assess each option.',
  },
  {
    icon: Target,
    title: 'A fit recommendation',
    body: 'Why each creator may suit the product, audience and campaign objective.',
  },
  {
    icon: FileText,
    title: 'A scoped proposal',
    body: 'Suggested format, deliverables, timeline, commercial terms and usage requirements.',
  },
  {
    icon: ClipboardCheck,
    title: 'Campaign coordination',
    body: 'A clear path for briefing, communication, approvals and publication tracking.',
  },
];

const campaignPrinciples = [
  {
    icon: ShieldCheck,
    title: 'Clear responsibilities',
    body: 'Agree who supplies the brief, reviews content, approves claims and confirms publication before work begins.',
  },
  {
    icon: FileText,
    title: 'Defined commercial scope',
    body: 'Set out deliverables, creator fees, agency services, usage rights and any additional costs separately.',
  },
  {
    icon: BarChart3,
    title: 'Measurement from the brief',
    body: 'Choose campaign KPIs before activation and review the metrics that match the objective and available tracking.',
  },
];

const faqs = [
  {
    question: 'What information should a brand include in its brief?',
    answer: 'Start with the product, the audience you want to reach, the campaign objective, preferred platforms, launch window and indicative budget. Include any mandatory claims or category restrictions that the creator needs to know.',
  },
  {
    question: 'How are creators evaluated?',
    answer: 'We look at audience relevance, recent content and performance context, the creator\'s ability to communicate the product, and brand suitability. The exact checks depend on the brief and the information available for that creator.',
  },
  {
    question: 'What does a campaign proposal include?',
    answer: 'A proposal should make the recommended creator and format, deliverables, timing, commercial scope and usage requirements clear before a collaboration is agreed.',
  },
  {
    question: 'Are content usage rights included in a creator\'s fee?',
    answer: 'Not automatically. Usage rights, duration, platforms, paid promotion and exclusivity should be discussed and specified separately in the campaign scope.',
  },
  {
    question: 'How is campaign performance measured?',
    answer: 'The relevant KPIs are agreed against the objective before launch. Reporting depends on the platform data and tracking available for the campaign; views, engagement, clicks and conversions are different measures.',
  },
];

export function CreatorFitSection() {
  return (
    <section className="border-b border-border bg-card/25">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <ScrollReveal delay={80} direction="up" className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-card">
              <div className="relative aspect-[5/4] sm:aspect-[4/3]">
                <Image
                  src="/homepage/creator-studio.webp"
                  alt="A creator studio with camera, microphone and editing workstation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="text-[10px] uppercase tracking-wider text-primary/90">Creator fit evaluation</p>
                  <h3 className="mt-2 font-serif text-2xl text-white sm:text-3xl">Every recommendation starts with fit.</h3>
                </div>
              </div>
              <div className="grid gap-4 p-5 sm:p-6 sm:grid-cols-4">
                {evaluationPillars.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="border-l-2 border-primary/30 pl-4">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="size-4.5" aria-hidden="true" />
                      </span>
                      <h4 className="mt-3 font-medium text-white sm:text-lg">{item.title}</h4>
                      <p className="mt-1 text-[13px] leading-5 text-white/70">{item.body}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          <div className="lg:col-span-7">
            <StaggeredReveal staggerDelay={90} initialDelay={120} direction="up" className="grid gap-6 md:grid-cols-2">
              {brandDeliverables.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-xl border border-border bg-background p-5 sm:p-6">
                    <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-serif text-xl font-medium text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
                  </div>
                );
              })}
            </StaggeredReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProposalPreviewSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20">
        <ScrollReveal delay={60} direction="up" className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary sm:text-sm">
            What a proposal looks like
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.7rem]">
            One document. Every decision visible.
          </h2>
          <p className="mt-4 text-pretty text-sm leading-7 text-muted-foreground md:text-base">
            A proposal should make the recommended creator, format, deliverables, commercial scope and usage requirements clear before a collaboration is agreed.
          </p>
        </ScrollReveal>

        <StaggeredReveal staggerDelay={80} initialDelay={100} direction="up" className="mt-9 grid gap-6 md:grid-cols-12">
          <ScrollReveal delay={140} direction="up" className="md:col-span-7">
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="border-b border-border px-5 py-4 sm:px-7">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-9 rounded-full bg-primary/10" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-foreground">IMPRIO</p>
                      <p className="text-xs text-muted-foreground">Campaign proposal — illustrative</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Creator fit</p>
                      <p className="mt-1 text-sm font-medium text-foreground">Scored</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Format</p>
                      <p className="mt-1 text-sm font-medium text-foreground">Integrated</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Timeline</p>
                      <p className="mt-1 text-sm font-medium text-foreground">3 weeks</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Commercial scope</p>
                      <p className="mt-1 text-sm font-medium text-foreground">Itemised</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Measurement</p>
                      <p className="mt-1 text-sm font-medium text-foreground">Objective-led</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t border-border bg-secondary/35 px-5 py-3 sm:px-7">
                <p className="text-[11px] leading-5 text-muted-foreground">
                  Illustrative layout only — not a past client proposal or campaign result.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="md:col-span-5">
            <StaggeredReveal staggerDelay={80} initialDelay={160} direction="up" className="space-y-4">
              {brandDeliverables.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-xl border border-border bg-background p-5 sm:p-6">
                    <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-serif text-xl font-medium text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
                  </div>
                );
              })}
            </StaggeredReveal>
          </div>
        </StaggeredReveal>
      </div>
    </section>
  );
}

export function CampaignClaritySection() {
  return (
    <section className="border-b border-border bg-card/25">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20">
        <ScrollReveal delay={60} direction="up" className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary sm:text-sm">
            Before a campaign goes live
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.7rem]">
            Clear terms make better collaborations.
          </h2>
          <p className="mt-4 text-pretty text-sm leading-7 text-muted-foreground md:text-base">
            The important details should be agreed early — so brands and creators know what is expected from both sides.
          </p>
        </ScrollReveal>

        <StaggeredReveal staggerDelay={100} initialDelay={80} direction="up" className="mt-9 grid gap-4 md:grid-cols-3">
          {campaignPrinciples.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-xl border border-border bg-background p-5 sm:p-6">
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-serif text-xl font-medium text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
              </div>
            );
          })}
        </StaggeredReveal>
      </div>
    </section>
  );
}

export function BrandFaqSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-14 md:px-8 md:py-20 lg:grid-cols-12 lg:gap-12">
        <ScrollReveal delay={70} direction="up" className="lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary sm:text-sm">
            Brand questions
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            Useful details before you brief us.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
            A few practical answers to help you decide whether IMPRIO is the right starting point for your campaign.
          </p>
          <Link href="/for-brands" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground">
            Explore services for brands
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </ScrollReveal>

        <div className="lg:col-span-8">
          <StaggeredReveal staggerDelay={70} direction="up" className="divide-y divide-border border-y border-border">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left marker:hidden">
                  <span className="font-serif text-lg font-medium text-foreground sm:text-xl">{faq.question}</span>
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-open:border-primary group-open:text-primary" aria-hidden="true">
                    <span className="text-lg leading-none group-open:hidden">+</span>
                    <span className="hidden text-lg leading-none group-open:inline">−</span>
                  </span>
                </summary>
                <p className="max-w-2xl pt-3 pr-10 text-sm leading-7 text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </StaggeredReveal>
        </div>
      </div>
    </section>
  );
}
