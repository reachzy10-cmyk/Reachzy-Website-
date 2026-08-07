/** Public copy for the For Brands page. Avoid unverified client or campaign claims. */
export const forBrandsContent = {
  hero: {
    eyebrow: 'For brands',
    headline: 'Don’t start with the creator. Start with the product.',
    body: 'Before recommending a creator, we look at what your product does, who it is built for and how people discover solutions like yours. We research relevant creators, examine their recent content and sponsorship context, then shape a recommendation around the brief—not simply a list of names.',
    primaryCta: { label: 'Discuss your campaign', href: 'mailto:partnerships@reachzy.space?subject=Campaign%20enquiry', variant: 'primary' },
    secondaryCta: { label: 'Explore creators', href: '/#creator-roll', variant: 'ghost' },
  },
  problem: {
    eyebrow: 'The part that matters',
    headline: 'Finding creators is easy. Knowing which ones deserve a conversation is harder.',
    body: [
      'A large audience does not automatically make a creator right for a software product.',
      'The useful questions come before outreach: what does the creator make, who watches it, why does that audience care, and would your product make sense in that content?',
      'That is the work Reachzy puts behind creator discovery.',
    ],
  },
  fitPhilosophy: {
    eyebrow: 'How we evaluate creator fit',
    headline: 'We look beyond subscriber counts.',
    body: 'A useful recommendation considers the creator’s existing content, the audience context that can be verified, recent performance and whether the product can be explained naturally. No single metric makes the decision on its own.',
    criteria: [
      'Product relevance — the creator already covers related topics or use cases.',
      'Audience context — language, geography and audience characteristics where reliable data is available.',
      'Content performance — recent views, consistency and performance relative to the channel’s own history.',
      'Sponsorship suitability — previous integrations, content quality and fit with the brand.',
    ],
  },
  process: {
    eyebrow: 'How a campaign takes shape',
    headline: 'A clear route from brief to measurement.',
    intro: 'The scope depends on the campaign, but the decisions should be visible before anyone commits.',
    steps: [
      { number: '01', title: 'Understand the brief', body: 'Clarify the product, audience, campaign objective, budget range and timing.' },
      { number: '02', title: 'Research creator fit', body: 'Review relevant content, audience context, recent performance and sponsorship suitability.' },
      { number: '03', title: 'Build the recommendation', body: 'Explain why each creator is relevant and which format could serve the objective.' },
      { number: '04', title: 'Agree the scope', body: 'Set out deliverables, fees, usage rights, responsibilities and approval points.' },
      { number: '05', title: 'Coordinate and review', body: 'Track agreed milestones and review available results against the campaign objective.' },
    ],
  },
  formats: {
    eyebrow: 'Content formats',
    headline: 'The format should fit the product—not the other way around.',
    body: 'The right format depends on what the audience needs to understand and what the creator can demonstrate naturally.',
    cards: [
      { name: 'Integrated mention', description: 'A concise product placement within a relevant video or tutorial.', note: 'Useful when the product fits an existing topic.' },
      { name: 'Dedicated walkthrough', description: 'A focused video showing the product, its use and the problem it addresses.', note: 'Useful when the product needs more explanation.' },
      { name: 'Short-form demonstration', description: 'A focused short video built around one feature, use case or takeaway.', note: 'Useful for a single clear message.' },
      { name: 'Multi-touch campaign', description: 'A planned sequence of content placements across agreed uploads or platforms.', note: 'Useful when a campaign needs continuity.' },
    ],
  },
  faq: {
    eyebrow: 'Questions',
    headline: 'Before you brief us.',
    items: [
      { question: 'What should we include in a brief?', answer: 'Share the product, the audience you want to reach, the campaign objective, the platforms you are considering, your budget range and any timing constraints. A short brief is enough to start a conversation.' },
      { question: 'How are creators shortlisted?', answer: 'We look at content relevance, audience context where data is available, recent channel performance and sponsorship suitability. The recommendation should explain why each creator fits the brief.' },
      { question: 'Are creator fees the full campaign cost?', answer: 'Not necessarily. A proposal should distinguish creator compensation from agency services, production needs, usage rights, exclusivity and any other agreed costs.' },
      { question: 'Are usage rights included?', answer: 'Usage rights depend on the creator, the intended use, platforms and duration. They should be stated separately in the commercial scope rather than assumed.' },
      { question: 'How will performance be measured?', answer: 'The relevant KPIs should be agreed before activation. Depending on the objective and available tracking, these may include views, reach, engagement, clicks, signups or conversions.' },
    ],
  },
  finalCta: {
    headline: 'Tell us what you’re looking to move.',
    body: 'Share the product, audience and campaign objective. We can use that context to discuss relevant creator options and a possible scope.',
    cta: { label: 'Start a campaign conversation', href: 'mailto:partnerships@reachzy.space?subject=Campaign%20enquiry', variant: 'primary' },
    microcopy: 'A clear brief makes the first conversation more useful.',
  },
};
