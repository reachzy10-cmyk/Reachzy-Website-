const audience = [
  {
    label: 'Who they are',
    body: 'Freelancers and agency founders, aged 25–40, running client work in automation, AI agents and no-code. They subscribed for technical depth, not general tech news.',
  },
  {
    label: 'What they buy',
    body: 'Hosting, automation platforms, AI model access, CRMs and agent frameworks. The decision is outcome-driven — will this help me ship the project I am being paid for?',
  },
  {
    label: 'Where they are',
    body: 'India, invoicing clients across the US, UK, EU and the Middle East. A software purchase here is a business expense, not a hobby.',
  },
]

export function CreatorAudience() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">
              The audience
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
              People who buy tools as part of doing the work.
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              AI Learners India publishes long-form tutorials in Hindi. The
              audience arrives to build something specific, which is why a tool
              placed inside a build gets evaluated as an option rather than
              scrolled past as an advert.
            </p>
          </div>

          <div className="md:col-span-8">
            <dl className="border-t border-border">
              {audience.map((item) => (
                <div
                  key={item.label}
                  className="grid gap-x-8 gap-y-2 border-b border-border py-7 md:grid-cols-[12rem_1fr]"
                >
                  <dt className="font-serif text-lg text-foreground">
                    {item.label}
                  </dt>
                  <dd className="text-pretty leading-relaxed text-muted-foreground">
                    {item.body}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="border-t border-border pt-4">
                <p className="font-serif text-2xl text-foreground">
                  15,000–20,000
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  views per upload in the first 30 days, with peak videos above
                  70K, 100K and 200K.
                </p>
              </div>
              <div className="border-t border-border pt-4">
                <p className="font-serif text-2xl text-foreground">6–12 months</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  of continued search and recommended traffic after publish, on
                  a channel reporting above-average search click-through.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
