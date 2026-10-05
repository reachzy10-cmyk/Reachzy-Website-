const responsibilities = [
  {
    title: 'Read the brief',
    body: 'Your objective, product, audience and timeline. That is what everything else gets measured against.',
  },
  {
    title: 'Recommend the creator and format',
    body: 'We come back with the creator, the format and the angle — chosen on whether the audience already buys tools like yours.',
  },
  {
    title: 'Structure the collaboration',
    body: 'Deliverables, timeline, usage rights and exclusivity terms, written into one proposal your procurement team can review.',
  },
  {
    title: 'Run production',
    body: 'We brief the creator, share the angle before anything is shot, manage feedback and revisions, and hold the publish date.',
  },
  {
    title: 'Report on performance',
    body: 'Views, watch time, click-through and affiliate numbers after publish, so the next decision runs on data.',
  },
]

export function WhatReachzyDoes() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">
              What Reachzy does
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
              We run the collaboration, not just the introduction.
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              One point of contact from brief to report. No upfront fee —
              Reachzy earns from the sponsorship work it brings and manages.
            </p>
          </div>

          <div className="md:col-span-8">
            <ol className="border-t border-border">
              {responsibilities.map((item, i) => (
                <li
                  key={item.title}
                  className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-1 border-b border-border py-6 md:grid-cols-[auto_1fr_2fr] md:gap-x-8"
                >
                  <span className="font-mono text-sm text-muted-foreground">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-base font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="col-span-2 text-pretty leading-relaxed text-muted-foreground md:col-span-1 md:col-start-3">
                    {item.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
