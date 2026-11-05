/** Homepage copy and labels. Keep factual claims tied to supplied source material. */
export const homeContent = {
  hero: {
    eyebrow: 'Creator marketing built around fit',
    headline: 'Start with the product. Find the creator who makes sense for it.',
    body: 'Reachzy focuses on technology, productivity, software, SaaS and AI. We look at what a product does, who it is for and which creators already make content that gives it a natural place in the conversation.',
    primaryCta: { label: 'Explore for brands', href: '/for-brands', variant: 'primary' },
    secondaryCta: { label: 'Explore for creators', href: '/for-creators', variant: 'ghost' },
  },
  philosophy: {
    eyebrow: 'The idea behind Reachzy',
    headline: 'A large audience is easy to find. The right reason to care is harder.',
    body: [
      'Subscriber count tells you how many people follow a creator.',
      'It does not explain why they follow, what they learn, or whether a product belongs in the content they already choose to watch.',
      'That is where Reachzy starts: with the product, the creator, the audience and the reason a collaboration should exist in the first place.',
    ],
  },
  whatWeDo: {
    eyebrow: 'What we do',
    headline: 'We bring the product and the creator into the same conversation.',
    body: 'A brand shares its product, audience and campaign objective. We research relevant creators, assess the fit and help structure the collaboration. For creators, we bring forward opportunities with the details needed to decide whether they belong on the channel.',
    steps: [
      { title: 'Understand the brief', body: 'Clarify the product, audience, objective, budget and timing.' },
      { title: 'Research creator fit', body: 'Review relevant content, audience context, recent performance and sponsorship suitability.' },
      { title: 'Recommend a format', body: 'Match the product and objective to a format that makes sense for the creator’s content.' },
      { title: 'Structure the collaboration', body: 'Set out deliverables, commercial terms, usage rights and responsibilities before commitment.' },
      { title: 'Coordinate and review', body: 'Keep communication and agreed milestones organised, then review the available campaign results.' },
    ],
  },
  dualPath: {
    eyebrow: 'Two ways to work with Reachzy',
    headline: 'Different starting points. Same attention to fit.',
    brandCard: {
      headline: 'For brands',
      body: 'Bring us the product and the audience you want to reach. We will help evaluate creator fit and shape a campaign proposal you can review.',
      cta: { label: 'Explore brand services', href: '/for-brands', variant: 'primary' },
    },
    creatorCard: {
      headline: 'For creators',
      body: 'Explore how relevant sponsorship opportunities are presented, how commercial details are coordinated and where your decisions remain yours.',
      cta: { label: 'Explore creator partnerships', href: '/for-creators', variant: 'coral' },
    },
  },
  finalCta: {
    headline: 'Tell us the brief. We’ll come back with a creator and a plan.',
    body: 'Share the product, the audience you want to reach and what the campaign should achieve. We can use that context to discuss relevant creator options and a possible scope.',
    cta: { label: 'Start a campaign conversation', href: 'mailto:partnerships@reachzy.space?subject=Campaign%20enquiry', variant: 'primary' },
  },
};
export type HomeContent = typeof homeContent;
