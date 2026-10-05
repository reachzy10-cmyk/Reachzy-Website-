import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const metrics = [
  { label: 'Subscribers', value: '160,000+' },
  { label: 'Lifetime views', value: '8.1M' },
  { label: 'Search CTR', value: '10.6–11.4%' },
  { label: 'Avg view duration', value: '4:39' },
]

export function FeaturedCreator() {
  return (
    <section id="creators" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">
            Current roster
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            AI Learners India
          </h2>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border bg-secondary">
              <Image
                src="/creators/ai-learners-india-profile.jpg"
                alt="AI Learners India channel profile — Abhijeet Kalamkar, founder"
                fill
                priority
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-7 md:pl-4">
            <p className="font-serif text-2xl leading-snug text-foreground md:text-3xl">
              AI agents and automation, taught in Hindi to people who build for
              clients.
            </p>

            <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                AI Learners India is a long-form tutorial channel for Indian
                freelancers and agency founders — the people building
                automation, AI agents and no-code projects for paying clients.
              </p>
              <p>
                Abhijeet Kalamkar has spent the last year building the channel
                to 160,000+ subscribers and 8.1 million lifetime views, grown
                without a single paid promotion. Every video is a live build, so
                a tool placed inside one is seen being used, not described.
              </p>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="border-t border-border pt-4">
                  <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {metric.label}
                  </dt>
                  <dd className="mt-2 font-serif text-2xl text-foreground">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-4 text-xs text-muted-foreground">
              Channel-reported figures, YouTube Studio, April 2026.
            </p>

            <Link
              href="/creators/ai-learners-india"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              View the full creator profile
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
