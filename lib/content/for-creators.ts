/**
 * For Creators Page Content
 * Source: archive/redesign-planning/copy/for-creators.md (approved)
 */

export const forCreatorsContent = {
  navigation: {
    logo: 'Reachzy',
    links: [
      { label: 'Home', href: '/' },
      { label: 'For Brands', href: '/for-brands' },
      { label: 'For Creators', href: '/for-creators' },
    ],
    cta: {
      label: 'Talk to Reachzy',
      href: 'mailto:partnerships@reachzy.space',
    },
  },

  hero: {
    eyebrow: 'For creators',
    headline: 'Brand deals should make sense before they reach your inbox.',
    body: 'Reachzy works with technology-focused creators and brands to develop sponsorship opportunities around the content and audiences that make sense for them. We look for the opportunity first, bring you the details, and let you decide whether it belongs on your channel.',
    primaryCta: {
      label: 'Talk to Reachzy',
      href: 'mailto:partnerships@reachzy.space',
      variant: 'coral',
    },
  },

  whyReachzyExists: {
    eyebrow: 'Why Reachzy exists',
    headline: 'You already spend enough time running the channel.',
    body: [
      'There is the content itself.',
      'Then there are the emails, follow-ups, brand requests, vague proposals, questions about deliverables, and conversations that go nowhere.',
      'Reachzy exists to take some of that work away from the creator side.',
      'We look for sponsorship opportunities, filter them around your content and audience, and bring the ones worth considering to you.',
      'The goal is not to put more offers in your inbox. It is to make the offers that do reach you worth opening.',
    ],
  },

  beforeOpportunity: {
    eyebrow: 'Before an opportunity reaches you',
    headline: 'We filter so you don\'t have to.',
    steps: [
      {
        number: '01',
        title: 'Brand & product research',
        body: 'We identify brands in technology, productivity, SaaS, and AI that are actively looking for creator collaborations.',
      },
      {
        number: '02',
        title: 'Fit assessment',
        body: 'We evaluate whether the product naturally belongs in your content — does your audience already use tools like this? Would a demonstration feel native?',
      },
      {
        number: '03',
        title: 'Deal structure',
        body: 'We clarify format, deliverables, timeline, usage rights, exclusivity, and compensation before the opportunity reaches you.',
      },
      {
        number: '04',
        title: 'Your decision',
        body: 'You receive the full picture. Accept, decline, or ask questions. Nothing moves forward without your approval.',
      },
    ],
  },

  whatYouSee: {
    eyebrow: 'What you see',
    headline: 'Clear deal details. No vague proposals.',
    cards: [
      {
        title: 'Format & Scope',
        items: ['Integration, dedicated, bundle, or retainer', 'Exact deliverables and timeline', 'Creative direction boundaries'],
      },
      {
        title: 'Commercial Terms',
        items: ['Compensation amount and structure', 'Payment schedule', 'Affiliate terms if applicable'],
      },
      {
        title: 'Rights & Control',
        items: ['Usage rights (where, how long)', 'Exclusivity windows', 'Your approval on final cut'],
      },
    ],
  },

  process: {
    eyebrow: 'The process',
    headline: 'Four steps. Your call at every one.',
    steps: [
      {
        number: '01',
        title: 'We identify a fit',
        body: 'We look for brand opportunities that make sense for your content and audience. If we don\'t have a fit, we don\'t reach out.',
      },
      {
        number: '02',
        title: 'You see the opportunity',
        body: 'You receive the relevant details: the brand, the product, what they\'re asking for, the format, the timeline, and the compensation. No vague descriptions.',
      },
      {
        number: '03',
        title: 'You decide',
        body: 'Accept, decline, or ask questions. Nothing moves forward without your approval.',
      },
      {
        number: '04',
        title: 'We coordinate',
        body: 'If you accept, we handle the coordination, contract logistics, and payment follow-up so you can focus on the content.',
      },
    ],
  },

  whoItsFor: {
    eyebrow: 'Who this is for',
    headline: 'Creators whose content connects with products.',
    body: 'Reachzy is built around creators whose content naturally connects with products, tools, and brands. If your audience watches you build, review, or demonstrate software and tools, there\'s likely a fit.',
    categories: [
      {
        name: 'Tech creators',
        description: 'Reviews, comparisons, and coverage of hardware or software products.',
      },
      {
        name: 'Productivity creators',
        description: 'Workflows, tools, systems, and processes that help people work better.',
      },
      {
        name: 'Software / SaaS creators',
        description: 'Tutorials, walkthroughs, and demonstrations of apps and digital tools.',
      },
    ],
    footnote: 'Best fit: content that demonstrates real usage — not just mentions.',
  },

  credibility: {
    eyebrow: 'Creator proof',
    headline: 'AI Learners India',
    tagline: 'AI agents and automation, taught in Hindi to the people who build with them for clients.',
    description: 'A long-form tutorial channel for Indian freelancers and agency founders working in AI agents, automation, and no-code. Founded and presented by Abhijeet Kalamkar in Pune. 160,000+ subscribers and 8.1M lifetime views, grown without paid promotion. Every video is a live build.',
    metrics: [
      { value: '160,000+', label: 'Subscribers' },
      { value: '8.1M', label: 'Lifetime views' },
      { value: '4.57 lakh', label: 'Watch hours' },
    ],
    externalLinks: [
      { label: 'YouTube', href: 'https://www.youtube.com/@AILearnersbyabhijeet', icon: 'youtube' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ailearnersindia/', icon: 'linkedin' },
    ],
    footnote: 'This is the kind of creator Reachzy works with — deep audience trust, technical content, organic growth, real purchasing influence. We\'re not a directory. We\'re selective.',
  },

  finalCta: {
    headline: 'Interested in working with Reachzy?',
    body: 'If you\'re looking for relevant brand opportunities that fit your content, get in touch.',
    cta: {
      label: 'Contact Reachzy',
      href: 'mailto:partnerships@reachzy.space',
      variant: 'coral',
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

export type ForCreatorsContent = typeof forCreatorsContent;