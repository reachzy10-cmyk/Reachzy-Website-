import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { creators, getCreator } from '@/lib/content/creators';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return creators.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const creator = getCreator(slug);
  if (!creator) return { title: 'Creator not found — IMPRIO', robots: { index: false, follow: false } };
  return {
    title: `${creator.name} — Creator Profile | IMPRIO`,
    description: `${creator.name}: ${creator.tagline} Explore channels, selected work and collaboration formats.`,
    alternates: { canonical: `/creators/${creator.slug}` },
    robots: { index: false, follow: false },
  };
}

export default async function CreatorPage({ params }: Props) {
  const { slug } = await params;
  const creator = getCreator(slug);
  if (!creator) notFound();

  const enquiryHref = `mailto:partnerships@imprio.org?subject=${encodeURIComponent(`Campaign enquiry: ${creator.name}`)}`;

  return (
    <div className="min-h-screen bg-background">
      <a href="#main" className="skip-link">Skip to main content</a>
      <SiteHeader />
      <main id="main">
        <section className="border-b border-border">
          <div className="mx-auto w-full max-w-7xl px-6 py-12 md:px-8 md:py-20">
            <Link href="/#creators" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="size-4" /> All creators
            </Link>
            <div className="mt-9 grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-coral)]">Creator profile · {creator.niche}</p>
                <h1 className="mt-4 text-balance">{creator.name}</h1>
                <p className="mt-5 max-w-2xl font-serif text-xl leading-snug text-foreground md:text-2xl">{creator.tagline}</p>
                <p className="mt-5 max-w-2xl text-base text-muted-foreground">{creator.summary}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={enquiryHref} className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
                    Ask about this creator <ArrowRight className="size-4" />
                  </a>
                  <a href={creator.socials[0].href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground hover:bg-secondary">
                    Visit channel <ArrowUpRight className="size-4" />
                  </a>
                </div>
                <p className="mt-5 text-xs text-muted-foreground">{creator.audienceNote}. Audience figures change over time.</p>
              </div>
              <div className="mx-auto w-full max-w-sm">
                <div className="overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-xl shadow-black/10">
                  <Image src={creator.image} alt={`Portrait used on ${creator.name}'s YouTube channel`} width={900} height={900} priority className="aspect-square w-full rounded-2xl object-cover" />
                  <div className="flex items-center justify-between gap-3 px-3 pb-2 pt-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Primary channel</p>
                      <p className="mt-1 text-lg font-semibold">{creator.primaryAudience}</p>
                    </div>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">YouTube</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="creator-fit" className="border-b border-border">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 md:px-8 md:py-20 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">The creator and the content</p>
              <h2 id="creator-fit" className="mt-3 text-balance">Where a product fits naturally.</h2>
              <p className="mt-5 max-w-xl text-muted-foreground">{creator.brandFit}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {creator.topics.map((topic, index) => (
                <div key={topic} className="rounded-xl border border-border bg-card p-5">
                  <span className="text-xs font-semibold text-[var(--accent-coral)]">0{index + 1}</span>
                  <h3 className="mt-3 font-sans text-lg font-semibold">{topic}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="creator-channels" className="border-b border-border bg-secondary/20">
          <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Across the channels</p>
            <h2 id="creator-channels" className="mt-3">Explore the audience and the work.</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {creator.socials.map((social) => (
                <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" className="group flex min-h-32 flex-col justify-between rounded-xl border border-border bg-card p-5 hover:border-primary/60">
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-semibold">{social.label}</span>
                    <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary" />
                  </div>
                  <span className="mt-6 text-sm text-muted-foreground">{social.audience ?? 'Explore profile'}</span>
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Public audience snapshot: 26 November 2026. Platform followers are not unique people.</p>
          </div>
        </section>

        <section aria-labelledby="creator-work" className="border-b border-border">
          <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">See the work</p>
            <h2 id="creator-work" className="mt-3">Content speaks for itself.</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {creator.examples.map((example) => (
                <a key={example.href} href={example.href} target="_blank" rel="noopener noreferrer" className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 hover:border-primary/60">
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent-coral)]">{example.kind}</span>
                    <ArrowUpRight className="size-4 shrink-0 text-muted-foreground group-hover:text-primary" />
                  </div>
                  <h3 className="mt-6 text-xl">{example.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{example.note}</p>
                  <span className="mt-6 text-sm font-semibold text-primary">Watch content ↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="creator-experience" className="border-b border-border bg-secondary/20">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-14 md:px-8 md:py-20 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Product experience</p>
              <h2 id="creator-experience" className="mt-3">Selected brand and product work.</h2>
            </div>
            <div>
              <p className="text-muted-foreground">{creator.experience}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {creator.experienceLinks.map((example) => (
                  <a key={example.href} href={example.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium hover:border-primary/60">
                    {example.label}<ArrowUpRight className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="creator-rates" className="border-b border-border">
          <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Collaboration formats</p>
              <h2 id="creator-rates" className="mt-3">Indicative creator rates.</h2>
              <p className="mt-4 text-muted-foreground">Choose a format that gives the product a useful place in the creator’s content. Final scope and commercial terms are confirmed for each brief.</p>
            </div>
            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {creator.rates.map((rate) => (
                <div key={`${rate.platform}-${rate.format}`} className="flex items-start justify-between gap-6 rounded-xl border border-border bg-card p-5 md:p-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent-coral)]">{rate.platform}</p>
                    <h3 className="mt-2 font-sans text-lg font-semibold">{rate.format}</h3>
                    {rate.detail && <p className="mt-2 text-sm text-muted-foreground">{rate.detail}</p>}
                  </div>
                  <p className="shrink-0 font-semibold text-foreground">{rate.price}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 max-w-3xl text-xs leading-relaxed text-muted-foreground">{creator.rateNote}</p>
          </div>
        </section>

        <section className="bg-primary/5">
          <div className="mx-auto w-full max-w-7xl px-6 py-14 text-center md:px-8 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Start with the brief</p>
            <h2 className="mx-auto mt-3 max-w-3xl text-balance">Could {creator.name} make sense for your product?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">Tell us what you are building, who you want to reach and the format you have in mind. We can discuss fit and confirm the details before anything moves forward.</p>
            <a href={enquiryHref} className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
              Ask about {creator.name} <ArrowRight className="size-4" />
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
