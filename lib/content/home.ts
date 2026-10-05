/**
 * Homepage Content
 * Source: archive/redesign-planning/copy/homepage.md (approved)
 */

export const homeContent = {
  navigation: {
    logo: 'Reachzy',
    links: [
      { label: 'Home', href: '/' },
      { label: 'For Brands', href: '/for-brands' },
      { label: 'For Creators', href: '/for-creators' },
    ],
    cta: {
      label: 'Discuss a Campaign',
      href: 'mailto:partnerships@reachzy.space',
    },
  },

  hero: {
    eyebrow: 'Influencer marketing built around fit',
    headline: 'Start with the product. Find the creator who makes sense for it.',
    body: 'Reachzy is an influencer marketing agency working across brands and creators, with a current focus on technology, productivity, software, SaaS and AI. We help brands discover and approach creators whose content already connects with people who may care about what they sell. We also bring creators sponsorship opportunities that make sense for their content and audience.',
    primaryCta: {
      label: 'Explore For Brands',
      href: '/for-brands',
      variant: 'primary',
    },
    secondaryCta: {
      label: 'Explore For Creators',
      href: '/for-creators',
      variant: 'ghost',
    },
    trustBar: {
      text: 'Current roster: AI Learners India — 160,000+ subscribers, 8.1M lifetime views, Hindi-language AI agents & automation tutorials for freelancers and agency founders.',
      link: {
        label: 'View creator profile',
        href: '/creators/ai-learners-india',
      },
    },
  },

  philosophy: {
    eyebrow: 'The idea behind Reachzy',
    headline: 'A large audience is easy to find. The right reason to care is harder.',
    body: [
      'Subscriber count tells you how many people follow a creator.',
      'It does not tell you why they follow them, what they use, what they buy, or whether your product belongs in the content they come for.',
      'That is where Reachzy starts. We look at the product, the creator, the audience and the reason the collaboration should exist in the first place.',
    ],
  },

  whatWeDo: {
    eyebrow: 'What we do',
    headline: 'We bring the product and the creator into the same conversation.',
    body: 'A brand gives us the product, the audience it wants to reach and what it is trying to achieve. We research creators who make sense for that brief, approach the ones worth talking to, and develop the opportunity with both sides in mind. For creators, the process works from the other direction. We look for sponsorship opportunities that belong in their content, bring them the details, and let them decide whether they want to take it on.',
    steps: [
      { title: 'Read the brief', body: 'Your objective, product, audience and timeline. That is what everything else gets measured against.' },
      { title: 'Recommend the creator and format', body: 'We come back with the creator, the format and the angle — chosen on whether the audience already buys tools like yours.' },
      { title: 'Structure the collaboration', body: 'Deliverables, timeline, usage rights and exclusivity terms, written into one proposal your procurement team can review.' },
      { title: 'Run production', body: 'We brief the creator, share the angle before anything is shot, manage feedback and revisions, and hold the publish date.' },
      { title: 'Report on performance', body: 'Views, watch time, click-through and affiliate numbers after publish, so the next decision runs on data.' },
    ],
  },

  creatorProof: {
    eyebrow: 'Creator proof',
    headline: 'One creator we work with. The numbers are real.',
    creator: {
      name: 'AI Learners India',
      tagline: 'AI agents and automation, taught in Hindi to the people who build with them for clients.',
      description: 'A long-form tutorial channel for Indian freelancers and agency founders working in automation, AI agents, and no-code. Founded and presented by Abhijeet Kalamkar in Pune. 160,000+ subscribers and 8.1M lifetime views, grown without a single paid promotion. Every video is a live build — a tool placed inside one is seen being used, not described.',
      metrics: [
        { value: '160,000+', label: 'Subscribers' },
        { value: '8.1M', label: 'Lifetime views' },
        { value: '4.57 lakh', label: 'Watch hours' },
        { value: '4:39', label: 'Avg view duration' },
        { value: '10.6–11.4%', label: 'Search CTR' },
      ],
      campaigns: [
        {
          brand: 'Hostinger',
          period: 'Ongoing since June 2025',
          metrics: '15,608 unique clicks, 134 conversions, 13 countries. India ~70% of sales.',
        },
        {
          brand: 'GoHighLevel',
          period: 'Nov 2025 – Apr 2026',
          metrics: '3,969 clicks, 871 qualified signups, 21.9% click-to-signup. Signups still arriving 6 months post-publish.',
        },
        {
          brand: 'Blotato',
          period: 'Product launch',
          metrics: '1,008 clicks, 32 paid customers, 3.17% click-to-paid. Launch performance held across quarter.',
        },
      ],
      cta: {
        label: 'View full creator profile',
        href: '/creators/ai-learners-india',
      },
    },
  },

  dualPath: {
    eyebrow: 'Two ways to work with Reachzy',
    headline: 'Different starting points. Same standard.',
    brandCard: {
      headline: 'For brands',
      body: 'You have a product. You need the right creator to show it to the right people. We find the fit, structure the deal, and run it end to end.',
      cta: {
        label: 'Start a campaign',
        href: 'mailto:partnerships@reachzy.space',
        variant: 'primary',
      },
    },
    creatorCard: {
      headline: 'For creators',
      body: 'You make content. You want sponsorship opportunities that fit your channel, with clear terms and your approval before anything moves.',
      cta: {
        label: 'For creators',
        href: '/for-creators',
        variant: 'coral',
      },
    },
  },

  finalCta: {
    headline: 'Tell us the brief. We\'ll come back with a creator and a plan.',
    body: 'Two paragraphs is enough: your tool, the user you want to reach, and what a successful campaign looks like. You get a written proposal with deliverables, timeline, and cost.',
    cta: {
      label: 'Start a campaign',
      href: 'mailto:partnerships@reachzy.space',
      variant: 'primary',
    },
  },

  footer: {
    logo: 'Reachzy',
    tagline: 'An influencer marketing agency running brand collaborations with a small, deliberately chosen roster of creators. Fit first, always.',
    navigation: [
      { label: 'Home', href: '/' },
      { label: 'For Brands', href: '/for-brands' },
      { label: 'For Creators', href: '/for-creators' },
    ],
    contact: 'partnerships@reachzy.space',
    copyright: '© 2026 Reachzy. All rights reserved.',
  },
};

export type HomeContent = typeof homeContent;