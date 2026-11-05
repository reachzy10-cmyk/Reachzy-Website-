'use client';

import { useCallback, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getApprovedCreators } from '@/lib/data/creator-roll';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function HomepageCreatorRoll() {
  const creators = getApprovedCreators();
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(14);

  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    const firstCard = track?.firstElementChild as HTMLElement | null;
    if (!track || !firstCard) return;

    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || '0') || 0;
    const cardStep = firstCard.getBoundingClientRect().width + gap;
    if (cardStep <= 0) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    const nextProgress = maxScroll <= 0 ? 100 : (track.scrollLeft / maxScroll) * 100;
    setScrollProgress(Math.max(14, Math.min(100, nextProgress)));
  }, [creators.length]);

  const move = (direction: -1 | 1) => {
    const track = trackRef.current;
    const firstCard = track?.firstElementChild as HTMLElement | null;
    if (!track || !firstCard) return;

    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || '0') || 0;
    const step = firstCard.getBoundingClientRect().width + gap;
    track.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  return (
    <section id="creator-roll" className="overflow-hidden border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20">
        <ScrollReveal delay={70} direction="up">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary sm:text-sm">
                Selected creator profiles
              </p>
              <h2 className="mt-3 text-balance font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.7rem]">
                A few creators worth exploring.
              </h2>
              <p className="mt-3 max-w-xl text-pretty text-sm leading-7 text-muted-foreground md:text-base">
                Explore selected profiles across technology, AI, productivity and design. This is a starting point, not a complete directory — recommendations depend on the product and campaign brief.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={() => move(-1)}
                className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Show previous creators"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => move(1)}
                className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Show next creators"
              >
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120} direction="up" className="mt-8">
          {creators.length > 0 ? (
            <>
              <div
                ref={trackRef}
                onScroll={handleScroll}
                className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                aria-label="Browse selected creator profiles"
                tabIndex={0}
              >
                {creators.map((creator) => {
                  const isChannelArtwork = creator.publicName === 'AI Learners India';

                  return (
                    <article
                      key={creator.destinationPage}
                      className="w-[84%] shrink-0 snap-start overflow-hidden rounded-xl border border-border bg-card transition-colors duration-200 hover:border-primary/45 sm:w-[47%] lg:w-[31%]"
                    >
                      <Link
                        href={creator.destinationPage}
                        className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
                        aria-label={`Explore ${creator.publicName}'s profile`}
                      >
                        <div className="relative aspect-[5/4] overflow-hidden bg-[#10171b]">
                          {creator.imageAsset ? (
                            <Image
                              src={creator.imageAsset}
                              alt={`${creator.publicName} ${isChannelArtwork ? 'channel artwork' : 'profile photograph'}`}
                              fill
                              sizes="(max-width: 640px) 84vw, (max-width: 1024px) 47vw, 31vw"
                              className={`transition-transform duration-500 group-hover:scale-[1.035] ${
                                isChannelArtwork ? 'object-contain p-4' : 'object-cover'
                              }`}
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center bg-secondary px-6 text-center font-serif text-xl text-foreground">
                              {creator.publicName}
                            </div>
                          )}
                          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/55 to-transparent" aria-hidden="true" />
                          <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                            {creator.primaryPlatform}
                          </span>
                        </div>

                        <div className="flex min-h-[190px] flex-col p-5 sm:p-6">
                          <div className="flex items-start justify-between gap-3">
                            <h3 className="font-serif text-xl font-medium text-foreground transition-colors group-hover:text-primary">
                              {creator.publicName}
                            </h3>
                            <span className="shrink-0 text-right text-[11px] font-medium text-primary">
                              {creator.primaryPlatformAudience}
                            </span>
                          </div>
                          <p className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground/80">
                            {creator.primaryNiche}
                          </p>
                          <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                            {creator.oneLineDescription}
                          </p>
                          <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-sm font-medium text-foreground">
                            <span>Explore profile</span>
                            <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-1" aria-hidden="true" />
                          </div>
                        </div>
                      </Link>
                    </article>
                  );
                })}
              </div>

              <div className="mt-3 flex items-center gap-3" aria-hidden="true">
                <div className="h-1 flex-1 overflow-hidden rounded-full bg-border">
                  <div
                    className="h-full rounded-full bg-primary transition-[width] duration-200"
                    style={{ width: `${scrollProgress}%` }}
                  />
                </div>
                <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Swipe or drag
                </span>
              </div>
            </>
          ) : (
            <p className="rounded-xl border border-border bg-card p-6 text-sm text-muted-foreground">
              Creator profiles will appear here as they are added to the public selection.
            </p>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
