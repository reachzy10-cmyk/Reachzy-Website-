import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal'

export function ForCreatorsHero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-8 md:py-28">
        <ScrollReveal delay={100} direction="up" className="max-w-3xl">
          <StaggeredReveal staggerDelay={120} direction="up">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">
              FOR CREATORS
            </p>
            <h1 className="mt-5 text-balance font-serif text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Relevant brand opportunities, without the chase.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Reachzy helps creators find sponsorship opportunities that fit their content, audience, and style — with the details clear before they decide.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="mailto:partnerships@reachzy.space"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Contact Reachzy
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              partnerships@reachzy.space
            </p>
          </StaggeredReveal>
        </ScrollReveal>
      </div>
    </section>
  )
}