'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { forBrandsContent } from '@/lib/content/for-brands';
import { clsx } from 'clsx';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function Formats() {
  const { formats } = forBrandsContent;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <ScrollReveal delay={100} direction="up" className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
            {formats.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {formats.headline}
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            {formats.body}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="up">
          <StaggeredReveal staggerDelay={150} direction="up" className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {formats.cards.map((card, index) => (
              <Card
                key={index}
                variant="pricing"
                hoverable
                className={clsx(
                  card.badge === 'Most booked format' && 'border-primary/50 ring-1 ring-primary/20'
                )}
              >
                {card.badge && (
                  <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wide text-primary bg-primary/10 rounded-full mb-4">
                    {card.badge}
                  </span>
                )}
                <h3 className="font-serif text-xl font-medium text-foreground">
                  {card.name}
                </h3>
                <p className="mt-2 font-mono text-3xl font-medium text-foreground">
                  {card.price}
                </p>
                <p className="mt-3 text-pretty text-muted-foreground">
                  {card.description}
                </p>
                <ul className="mt-4 space-y-2 flex-1">
                  {card.details.map((detail, dIndex) => (
                    <li key={dIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="font-mono text-primary mt-0.5">→</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={card.cta.variant as any}
                  size="md"
                  className="mt-6 w-full"
                >
                  <Link href={card.cta.href}>
                    {card.cta.label}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </Card>
            ))}
          </StaggeredReveal>
        </ScrollReveal>

        <ScrollReveal delay={400} direction="up" className="mt-8 text-center text-sm text-muted-foreground">
          {formats.disclaimer}
        </ScrollReveal>
      </div>
    </section>
  );
}