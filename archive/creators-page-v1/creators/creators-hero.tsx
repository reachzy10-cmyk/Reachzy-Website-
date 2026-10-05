import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CreatorsHero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-8 md:py-28">
        <div className="animate-rise max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">
            Creators
          </p>
          <h1 className="mt-5 text-balance font-serif text-4xl leading-[1.08] tracking-tight text-foreground md:text-5xl">
            The roster is one creator: AI Learners India.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            That means the recommendation you get is specific. You can see who
            the audience is, how the channel performs, what a placement costs
            and how a collaboration runs — before you send a brief.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/creators/ai-learners-india"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Full creator profile
            </Link>
            <Link
              href="mailto:partnerships@reachzy.space"
              className="inline-flex items-center justify-center rounded-md border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Start a campaign
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
