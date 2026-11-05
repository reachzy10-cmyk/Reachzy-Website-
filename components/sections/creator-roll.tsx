'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { getApprovedCreators, type CreatorRollEntry } from '@/lib/data/creator-roll';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

interface CreatorRollProps {
  excludeRoute?: string;
  heading?: string;
  description?: string;
  ctaHref?: string | null;
  ctaLabel?: string;
}

export function CreatorRoll({
  excludeRoute,
  heading = 'A few creators worth exploring.',
  description = 'Explore selected profiles across technology, software, productivity and AI. Each creator brings a different perspective and content style.',
  ctaHref = null,
  ctaLabel = 'Discuss a campaign',
}: CreatorRollProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const creators = getApprovedCreators().filter((creator) => creator.destinationPage !== excludeRoute);

  const move = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.querySelector<HTMLElement>('[data-creator-card]');
    const step = (first?.offsetWidth ?? 300) + 20;
    track.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  const updateProgress = () => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.querySelector<HTMLElement>('[data-creator-card]');
    if (!first) return;
    const step = first.offsetWidth + 20;
    setActiveIndex(Math.min(creators.length - 1, Math.round(track.scrollLeft / step)));
  };

  return (
    <section id="creator-roll" className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-16 lg:py-20">
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <ScrollReveal delay={80} direction="up" className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Selected creator profiles</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground md:text-4xl">{heading}</h2>
            <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">{description}</p>
          </ScrollReveal>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => move(-1)} className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label="Previous creators"><ArrowLeft className="size-4" /></button>
            <button type="button" onClick={() => move(1)} className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label="Next creators"><ArrowRight className="size-4" /></button>
          </div>
        </div>

        <div ref={trackRef} onScroll={updateProgress} className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label="Creator profiles">
          {creators.map((creator) => <CreatorCard key={creator.destinationPage} creator={creator} />)}
        </div>

        <div className="mt-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-1.5" aria-label={`Creator carousel position ${activeIndex + 1} of ${creators.length}`}>
            {creators.map((creator, index) => <span key={creator.destinationPage} className={`h-1 rounded-full transition-all ${index === activeIndex ? 'w-7 bg-primary' : 'w-2 bg-border'}`} />)}
          </div>
          <p className="text-xs text-muted-foreground">Swipe or drag to explore</p>
        </div>

        {ctaHref && <div className="mt-7"><Link href={ctaHref} className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">{ctaLabel}<ArrowUpRight className="size-4" /></Link></div>}
      </div>
    </section>
  );
}

function CreatorCard({ creator }: { creator: CreatorRollEntry }) {
  return (
    <article data-creator-card className="group w-[82%] shrink-0 snap-start overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/40 sm:w-[46%] lg:w-[31.5%]">
      <Link href={creator.destinationPage} className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary" aria-label={`View ${creator.publicName} profile`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
          {creator.imageAsset ? <img src={creator.imageAsset} alt={`${creator.publicName} profile`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" /> : <div className="flex h-full items-center justify-center"><span className="font-serif text-2xl text-muted-foreground">{creator.publicName.split(' ').map((part) => part[0]).slice(0, 2).join('')}</span></div>}
        </div>
        <div className="p-5 md:p-6">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground"><span>{creator.primaryPlatform}</span><span aria-hidden="true">·</span><span className="text-primary">{creator.primaryPlatformAudience}</span></div>
          <h3 className="mt-3 font-serif text-xl text-foreground">{creator.publicName}</h3>
          <p className="mt-2 min-h-[3.5rem] text-sm leading-relaxed text-muted-foreground">{creator.oneLineDescription}</p>
          <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-sm font-medium text-foreground group-hover:text-primary"><span>View profile</span><ArrowUpRight className="size-4" /></div>
        </div>
      </Link>
    </article>
  );
}
