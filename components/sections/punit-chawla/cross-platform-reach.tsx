'use client';

import { punitChawlaContent } from '@/lib/content/punit-chawla';
import { Card } from '@/components/ui/card';
import { clsx } from 'clsx';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
      <path d="M10.03 19.104V4.896a1.477 1.477 0 0 1 2.316-1.284l10.675 7.105a1.477 1.477 0 0 1 0 2.567l-10.676 7.106a1.476 1.476 0 0 1-2.316-1.285z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const platformIcons = {
  youtube: YoutubeIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
};

export function CrossPlatformReach() {
  const { crossPlatformReach } = punitChawlaContent;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20 lg:py-24">
        <ScrollReveal delay={100} direction="up" className="max-w-3xl mb-9 lg:mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
            {crossPlatformReach.eyebrow}
          </p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {crossPlatformReach.headline}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground lg:text-base">
            {crossPlatformReach.intro}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="up">
          <StaggeredReveal staggerDelay={150} direction="up" className="grid gap-6 md:grid-cols-3">
            {crossPlatformReach.platforms.map((platform, index) => {
              const Icon = platformIcons[platform.icon as keyof typeof platformIcons];
              return (
                <Card
                  key={index}
                  variant="default"
                  hoverable={false}
                  className="p-6 flex flex-col"
                >
                  <div className="inline-flex items-center justify-center size-12 rounded-xl bg-primary/10 text-primary mb-4">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-serif text-lg md:text-xl font-medium text-foreground">
                    {platform.name}
                  </h3>
                  <p className="mt-2 text-sm font-mono text-primary">
                    {platform.audience}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground flex-1">
                    {platform.content}
                  </p>
                  <Link
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {platform.name} →
                    <ExternalLink className="size-3.5" />
                  </Link>
                </Card>
              );
            })}
          </StaggeredReveal>
        </ScrollReveal>

        <ScrollReveal delay={400} direction="up" className="mt-10 text-center">
          <p className="text-base text-muted-foreground border-t border-border pt-6">
            {crossPlatformReach.closingLine}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
