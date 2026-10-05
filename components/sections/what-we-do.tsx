'use client';

import { homeContent } from '@/lib/content/home';
import { clsx } from 'clsx';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function WhatWeDo() {
  const { whatWeDo } = homeContent;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left: Intro */}
          <ScrollReveal delay={100} direction="up">
            <div className="lg:col-span-4">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
                {whatWeDo.eyebrow}
              </p>
              <h2 className="mt-4 text-balance font-serif text-3xl md:text-4xl leading-tight tracking-tight text-foreground">
                {whatWeDo.headline}
              </h2>
              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground lg:text-base">
                {whatWeDo.body}
              </p>
            </div>
          </ScrollReveal>

          {/* Right: Steps */}
          <ScrollReveal delay={200} direction="up">
            <div className="lg:col-span-8">
              <StaggeredReveal staggerDelay={150} direction="up" className="space-y-12 md:space-y-16">
                {whatWeDo.steps.map((step, index) => (
                  <li
                    key={index}
                    className={clsx(
                      index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'
                    )}
                  >
                    <div className="flex gap-4 md:gap-6">
                      <span className={clsx(
                        'font-mono text-4xl md:text-5xl font-medium text-muted-foreground/30 flex-shrink-0',
                        'mt-1 md:mt-0',
                        'lg:w-20 text-right'
                      )}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </StaggeredReveal>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}