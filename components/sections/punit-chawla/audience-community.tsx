'use client';

import { punitChawlaContent } from '@/lib/content/punit-chawla';
import { Card } from '@/components/ui/card';
import { clsx } from 'clsx';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function AudienceCommunity() {
  const { audienceCommunity } = punitChawlaContent;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20 lg:py-24">
        <ScrollReveal delay={100} direction="up" className="max-w-3xl mb-9 lg:mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
            {audienceCommunity.eyebrow}
          </p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {audienceCommunity.headline}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground lg:text-base">
            {audienceCommunity.intro}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="up" className="grid gap-8 md:grid-cols-2 mb-9 lg:mb-10">
          {/* Audience Roles */}
          <div>
            <h3 className="font-serif text-xl font-medium text-foreground">Audience Roles</h3>
            <ul className="mt-4 space-y-2">
              {audienceCommunity.audienceRoles.map((role, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="size-1.5 rounded-full bg-primary" />
                  {role}
                </li>
              ))}
            </ul>
          </div>

          {/* Audience Locations */}
          <div>
            <h3 className="font-serif text-xl font-medium text-foreground">Key Locations</h3>
            <ul className="mt-4 space-y-2">
              {audienceCommunity.audienceLocations.map((location, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="size-1.5 rounded-full bg-primary" />
                  {location}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300} direction="up" className="mb-8">
          <p className="text-sm text-muted-foreground border-t border-border pt-4">
            {audienceCommunity.audienceNote}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={400} direction="up" className="text-center">
          <p className="text-base text-muted-foreground border-t border-border pt-6">
            {audienceCommunity.closingLine}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
