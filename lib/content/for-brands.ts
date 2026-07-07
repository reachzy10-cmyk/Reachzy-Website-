/**
 * For Brands Page Content
 * Source: archive/redesign-planning/copy/for-brands.md (approved)
 */

export const forBrandsContent = {
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
    eyebrow: 'For brands',
    headline: 'Don\'t start with the creator. Start with the product.',
    body: 'Reachzy helps technology brands find creators whose content, audience and experience give the product a genuine reason to be there. We research creators, start the conversations, and develop sponsorship opportunities around the product rather than simply handing over a list of names.',
    primaryCta: {
      label: 'Send a brief',
      href: 'mailto:partnerships@reachzy.space',
      variant: 'primary',
    },
    secondaryCta: {
      label: 'See a real creator profile',
      href: '/creators/ai-learners-india',
      variant: 'ghost',
    },
  },

  problem: {
    eyebrow: 'The part that matters',
    headline: 'Finding creators is easy. Knowing which ones deserve a conversation is harder.',
    body: [
      'A creator can have 500,000 subscribers and still be completely wrong for a software product.',
      'The useful questions come before the outreach:',
      'What does this creator actually make?',
      'Who watches it?',
      'Why do those people care?',
      'Would your product make sense in that content?',
      'Has the creator already worked with products in this world?',
      'That is the work Reachzy puts behind creator discovery.',
    ],
  },

  process: {
    eyebrow: 'How we look at a campaign',
    headline: 'We start with the product, then work backwards to the creator.',
    intro: 'A campaign begins with understanding what the brand is actually selling and who it needs to reach.',
    steps: [
      {
        number: '01',
        title: 'The product',
        body: 'What it does, who it\'s for, what makes it different, and what a successful campaign looks like.',
      },
      {
        number: '02',
        title: 'The audience',
        body: 'Not demographics — purchasing behavior. What tools do they already use? What problems are they solving for clients?',
      },
      {
        number: '03',
        title: 'The creator fit',
        body: 'Content that demonstrates real usage, not mentions. An audience that buys tools as part of their work. Organic growth verifying the audience is there for the content, not the sponsorships.',
      },
      {
        number: '04',
        title: 'The format',
        body: 'Integration (60–90s in a tutorial), dedicated video (15–25 min build), bundle, or retainer. Chosen on what the product needs, not what\'s easiest to sell.',
      },
      {
        number: '05',
        title: 'The proposal',
        body: 'Deliverables, timeline, usage rights, exclusivity, payment schedule — in one document your procurement team can review. 48 business hours.',
      },
    ],
  },

  fitPhilosophy: {
    eyebrow: 'How we think about fit',
    headline: 'We match on purchasing behavior, not demographics.',
    body: 'A creator\'s audience buys hosting because they deploy client projects. They buy automation platforms because they build workflows for paying clients. They buy AI model access because they\'re shipping agents. The content demonstrates the tool in a real workflow — so the viewer evaluates it as an option, not an advert.',
    criteria: [
      'Content demonstrates real usage — not just mentions',
      'Audience purchases tools as part of doing the work',
      'Channel grows organically (verifies audience is there for content)',
      'Creator maintains editorial control (preserves trust)',
    ],
  },

  creatorProof: {
    eyebrow: 'Creator proof',
    headline: 'Our current roster. One creator. Verified numbers.',
    creator: {
      name: 'AI Learners India',
      tagline: 'AI agents and automation, taught in Hindi to the people who build with them for clients.',
      audience: {
        who: 'Freelancers and agency founders, 25–40, running client work in automation, AI agents, and no-code. They subscribed for technical depth, not general tech news.',
        whatTheyBuy: 'Hosting, automation platforms, AI model access, CRMs, agent frameworks. The decision is outcome-driven — will this help me ship the project I\'m being paid for?',
        where: 'India, invoicing clients across the US, UK, EU, and the Middle East. A software purchase here is a business expense, not a hobby.',
      },
      metrics: [
        { value: '160,000+', label: 'Subscribers' },
        { value: '8.1M', label: 'Lifetime views' },
        { value: '4.57 lakh', label: 'Lifetime watch hours' },
        { value: '4:39', label: 'Avg view duration' },
        { value: '10.6–11.4%', label: 'Search CTR' },
      ],
      campaigns: [
        {
          brand: 'Hostinger',
          period: 'Ongoing since June 2025',
          type: 'Integration',
          metrics: [
            { label: 'Unique clicks', value: '15,608', highlight: true },
            { label: 'Conversions', value: '134', highlight: false },
            { label: 'Countries', value: '13', highlight: false },
          ],
          detail: 'India ~70% of sales, followed by US, UK, EU, Middle East',
          note: 'Figures from brand affiliate dashboards. Reference calls available on request.',
        },
        {
          brand: 'GoHighLevel',
          period: 'Nov 2025 – Apr 2026',
          type: 'Integration',
          metrics: [
            { label: 'Clicks', value: '3,969', highlight: false },
            { label: 'Qualified signups', value: '871', highlight: true },
            { label: 'Click-to-signup', value: '21.9%', highlight: true },
          ],
          detail: 'Signups still arriving 6 months post-publish',
          note: 'Figures from brand affiliate dashboards. Reference calls available on request.',
        },
        {
          brand: 'Blotato',
          period: 'Product launch',
          type: 'Dedicated Video',
          metrics: [
            { label: 'Clicks', value: '1,008', highlight: false },
            { label: 'Paid customers', value: '32', highlight: true },
            { label: 'Click-to-paid', value: '3.17%', highlight: true },
          ],
          detail: 'Launch performance held across quarter',
          note: 'Figures from brand affiliate dashboards. Reference calls available on request.',
        },
      ],
      cta: {
        label: 'View full creator profile',
        href: '/creators/ai-learners-india',
      },
    },
  },

  formats: {
    eyebrow: 'Formats and rates',
    headline: 'Four ways to work together, published up front.',
    body: 'Rates are the channel\'s published starting prices in USD. INR equivalents available on request for accounting. Final quotes depend on scope, exclusivity, and timing.',
    disclaimer: 'Starting rates published by the channel, August 2026. Final quotes depend on scope, exclusivity, and timing.',
    cards: [
      {
        name: 'Integration',
        price: 'From $600',
        description: '60–90 second placement inside a tutorial. Script input welcome. Final cut kept by creator.',
        details: ['Pinned comment + first line of description', '30-day performance report'],
        badge: 'Most booked format',
        cta: { label: 'Select', href: 'mailto:partnerships@reachzy.space?subject=Integration%20Inquiry', variant: 'primary' },
      },
      {
        name: 'Dedicated Video',
        price: 'From $1,200',
        description: '15–25 minute video with your product as the subject, built live into a real workflow.',
        details: ['Cross-promotion to channel\'s other communities', '6+ months of search traffic'],
        cta: { label: 'Select', href: 'mailto:partnerships@reachzy.space?subject=Dedicated%20Video%20Inquiry', variant: 'primary' },
      },
      {
        name: 'Bundle',
        price: 'From $2,500',
        description: 'One dedicated video, two integrations in follow-up uploads, cross-promotion on Instagram, LinkedIn, Discord.',
        details: ['Built for launches and sustained pushes'],
        cta: { label: 'Select', href: 'mailto:partnerships@reachzy.space?subject=Bundle%20Inquiry', variant: 'primary' },
      },
      {
        name: 'Monthly Retainer',
        price: 'From $3,250/mo',
        description: 'Four integrations/month with priority scheduling. Minimum three months.',
        details: ['Affiliate terms negotiable on top'],
        cta: { label: 'Inquire', href: 'mailto:partnerships@reachzy.space?subject=Retainer%20Inquiry', variant: 'ghost' },
      },
    ],
  },

  faq: {
    eyebrow: 'Questions',
    headline: 'Questions brands usually ask.',
    items: [
      {
        question: 'Can we see the script before it goes live?',
        answer: 'Yes. The angle and key talking points are shared before production, and one revision round is included before the video is shot. Final creative direction stays with the creator — that\'s what keeps the audience trusting what they watch.',
      },
      {
        question: 'How quickly can a video go out?',
        answer: 'An integration usually fits a two-week window inside an already-scheduled upload. A dedicated video typically needs three to four weeks — the build and scripting take real time. Mention your deadline in the brief and you\'ll get a straight yes or no in the reply.',
      },
      {
        question: 'How do you measure whether the campaign worked?',
        answer: '30-day report: views, watch time, click-through, affiliate conversions where they apply. Retainer clients get a monthly rollup. Signups separated by UTM vs. direct traffic so you see what\'s attributable.',
      },
      {
        question: 'Will you work with our competitors?',
        answer: 'Not during an active retainer, and not within 30 days of a one-off dedicated video. For integrations, any directly competing brand is disclosed before signing. Category exclusivity can be written into a retainer.',
      },
      {
        question: 'Do you do affiliate-only deals?',
        answer: 'Rarely, and only for tools already used on the channel with a strong conversion record. Most brands run a hybrid: base fee covering production + affiliate share rewarding performance.',
      },
      {
        question: 'What if AI Learners India is not the right fit?',
        answer: 'We say so, and point you somewhere better suited to the brief. A campaign that doesn\'t fit isn\'t worth running for either side.',
      },
    ],
  },

  finalCta: {
    headline: 'Send the brief. We\'ll come back with a creator and a plan.',
    body: 'Two paragraphs is enough. You get a written proposal with deliverables, timeline, and cost within 48 business hours.',
    cta: {
      label: 'Start a campaign',
      href: 'mailto:partnerships@reachzy.space',
      variant: 'primary',
    },
    microcopy: 'partnerships@reachzy.space',
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

export type ForBrandsContent = typeof forBrandsContent;
