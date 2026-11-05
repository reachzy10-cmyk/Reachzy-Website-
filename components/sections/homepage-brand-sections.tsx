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
    body: 'Recent long-form performance and consistency, read against the creator’s own channel history.',
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
    answer: 'We look at audience relevance, recent content and performance context, the creator’s ability to communicate the product, and brand suitability. The exact checks depend on the brief and the information available for that creator.',
  },
  {
    question: 'What does a campaign proposal include?',
    answer: 'A proposal should make the recommended creator and format, deliverables, timing, commercial scope and usage requirements clear before a collaboration is agreed.',
  },
  {
    question: 'Are content usage rights included in a creator’s fee?',
    answer: 'Not automatically. Usage rights, duration, platforms, paid promotion and exclusivity should be discussed and specified separately in the campaign scope.',
  },
  {
    question: 'How is campaign performance measured?',
    answer: 'The relevant KPIs are agreed against the objective before launch. Reporting depends on the platform data and tracking available for the campaign; views, engagement, clicks and conversions are different measures.',
  },
  {
    question: 'Does the featured Creator Roll show every creator?',
    answer: 'No. It is a curated selection of profiles to explore, not a complete directory. A campaign shortlist should be based on the product, audience and requirements in the brief.',
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
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">Creator fit is more than a number</p>
                  <p className="mt-2 max-w-sm font-serif text-2xl leading-tight text-white sm:text-3xl">
                    Context is what makes a recommendation useful.
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-3 text-[11px] text-muted-foreground/70">Illustrative creator-workspace visual</p>
          </ScrollReveal>

          <div className="lg:col-span-7">
            <ScrollReveal delay={110} direction="up">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary sm:text-sm">
                How we assess creator fit
              </p>
              <h2 className="mt-4 max-w-2xl text-balance font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.7rem]">
                A recommendation should have a reason behind it.
              </h2>
              <p className="mt-4 max-w-2xl text-pretty text-sm leading-7 text-muted-foreground md:text-base">
                Follower count is one data point. A useful shortlist considers the audience, the content people return for, the product being promoted and the campaign’s actual objective.
              </p>
            </ScrollReveal>

            <StaggeredReveal staggerDelay={80} initialDelay={100} direction="up" className="mt-7 grid gap-3 sm:grid-cols-2">
              {evaluationPillars.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-xl border border-border bg-background/70 p-4 sm:p-5">
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="size-4" aria-hidden="true" />
                      </span>
                      <h3 className="font-serif text-lg font-medium text-foreground">{item.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.body}</p>
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

export function BrandDeliverablesSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <ScrollReveal delay={70} direction="up">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary sm:text-sm">
                What brands receive
              </p>
              <h2 className="mt-4 max-w-xl text-balance font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.7rem]">
                Clear recommendations. Defined next steps.
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-sm leading-7 text-muted-foreground md:text-base">
                A brand should be able to understand why a creator is being recommended, what the collaboration includes and what needs to be agreed before production begins.
              </p>
            </ScrollReveal>

            <StaggeredReveal staggerDelay={90} initialDelay={90} direction="up" className="mt-7 space-y-5">
              {brandDeliverables.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4">
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/5 text-primary">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-medium text-foreground">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.body}</p>
                    </div>
                  </div>
                );
              })}
            </StaggeredReveal>
          </div>

          <ScrollReveal delay={130} direction="up" className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_20px_70px_rgba(0,0,0,0.24)]">
              <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-5 py-4 sm:px-6">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">Proposal preview</p>
                  <p className="mt-1 font-serif text-xl text-foreground">Creator recommendation</p>
                </div>
                <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                  Sample
                </span>
              </div>
              <div className="space-y-5 p-5 sm:p-7">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-border bg-background p-4">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Campaign objective</p>
                    <p className="mt-2 font-medium text-foreground">Product awareness and consideration</p>
                  </div>
                  <div className="rounded-lg border border-border bg-background p-4">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Recommended format</p>
                    <p className="mt-2 font-medium text-foreground">Educational product integration</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Recommendation should explain</p>
                  <div className="mt-3 space-y-3">
                    {[
                      'Why the creator’s audience is relevant to the product',
                      'How the product can fit naturally into the content',
                      'What deliverables, approvals and usage are included',
                    ].map((line, index) => (
                      <div key={line} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                        <p className="text-sm leading-6 text-foreground/85">{line}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid gap-3 border-t border-border pt-4 sm:grid-cols-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Deliverables</p>
                    <p className="mt-1 text-sm font-medium text-foreground">Specified</p>
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
              <div className="border-t border-border bg-secondary/35 px-5 py-3 sm:px-7">
                <p className="text-[11px] leading-5 text-muted-foreground">
                  Illustrative layout only — not a past client proposal or campaign result.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
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
            A few practical answers to help you decide whether Reachzy is the right starting point for your campaign.
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
