'use client';

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { creators } from '@/lib/content/creators';

export function CreatorRoll() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ x: number; scrollLeft: number; moved: boolean } | null>(null);
  const suppressClickRef = useRef(false);
  const [canPrevious, setCanPrevious] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const update = () => {
      const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
      setCanPrevious(track.scrollLeft > 2);
      setCanNext(track.scrollLeft < maxScroll - 2);
      setProgress(maxScroll ? (track.scrollLeft / maxScroll) * 100 : 100);
    };

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey) return;
      const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      const maxScroll = track.scrollWidth - track.clientWidth;
      const canMove = delta > 0 ? track.scrollLeft < maxScroll - 2 : track.scrollLeft > 2;
      if (!canMove) return;
      event.preventDefault();
      track.scrollLeft += delta;
    };

    update();
    track.addEventListener('scroll', update, { passive: true });
    track.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('resize', update);
    return () => {
      track.removeEventListener('scroll', update);
      track.removeEventListener('wheel', onWheel);
      window.removeEventListener('resize', update);
    };
  }, []);

  const move = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const distance = card ? card.offsetWidth + 16 : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * distance, behavior: 'smooth' });
  };

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    dragRef.current = { x: event.clientX, scrollLeft: event.currentTarget.scrollLeft, moved: false };
    suppressClickRef.current = false;
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag) return;
    const distance = event.clientX - drag.x;
    if (!drag.moved && Math.abs(distance) < 6) return;
    if (!drag.moved) {
      drag.moved = true;
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    event.preventDefault();
    event.currentTarget.scrollLeft = drag.scrollLeft - distance;
  };

  const onPointerEnd = (event: ReactPointerEvent<HTMLDivElement>) => {
    suppressClickRef.current = Boolean(dragRef.current?.moved);
    dragRef.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <section id="creators" aria-labelledby="creators-title" className="scroll-mt-20 overflow-hidden border-t border-border bg-secondary/30">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20">
        <div className="mb-7 flex max-w-[900px] flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-coral)]">Creator profiles</p>
            <h2 id="creators-title" className="mt-3 text-balance">Featured creators</h2>
            <p className="mt-3 text-sm text-muted-foreground">Swipe, scroll or use the arrows to explore their work.</p>
          </div>
          <div className="flex items-center gap-2" aria-label="Featured creator controls">
            <button type="button" onClick={() => move(-1)} disabled={!canPrevious} aria-label="Previous creator" aria-controls="featured-creators-track" className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary disabled:cursor-not-allowed disabled:opacity-40">
              <ArrowLeft className="size-4" />
            </button>
            <button type="button" onClick={() => move(1)} disabled={!canNext} aria-label="Next creator" aria-controls="featured-creators-track" className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary disabled:cursor-not-allowed disabled:opacity-40">
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
        <div
          id="featured-creators-track"
          ref={trackRef}
          role="region"
          aria-label="Featured creator profiles"
          tabIndex={0}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerEnd}
          onPointerCancel={onPointerEnd}
          onClickCapture={(event) => {
            if (!suppressClickRef.current) return;
            event.preventDefault();
            event.stopPropagation();
            suppressClickRef.current = false;
          }}
          className="flex max-w-[900px] gap-4 overflow-x-auto overscroll-x-contain snap-x snap-proximity pb-3 select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {creators.map((creator) => (
            <Link
              key={creator.slug}
              href={`/creators/${creator.slug}`}
              draggable={false}
              className="group flex min-h-[290px] w-[min(75vw,22rem)] shrink-0 snap-start flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/60 focus-visible-ring md:w-[26rem]"
              aria-label={`View ${creator.name}'s creator profile`}
            >
              <div className="flex items-start justify-between gap-4">
                <Image
                  src={creator.image}
                  alt={`${creator.name} channel portrait`}
                  width={80}
                  height={80}
                  draggable={false}
                  className="size-18 rounded-2xl object-cover ring-1 ring-border"
                />
                <ArrowUpRight aria-hidden="true" className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent-coral)]">{creator.niche}</p>
              <h3 className="mt-2 text-2xl">{creator.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{creator.tagline}</p>
              <div className="mt-5 flex items-end justify-between gap-4 border-t border-border pt-4">
                <div>
                  <p className="font-semibold text-foreground">{creator.primaryAudience}</p>
                  <p className="mt-1 text-xs text-muted-foreground">Snapshot · 26 Nov 2026</p>
                </div>
                <span className="shrink-0 text-sm font-semibold text-primary">View profile ↗</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-5 h-1 max-w-[900px] overflow-hidden rounded-full bg-border" aria-hidden="true">
          <div className="h-full rounded-full bg-primary transition-[width] duration-150" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </section>
  );
}
