import { CampaignEvidenceItem } from '@/components/ui/campaign-table';

export const vaibhavSisintyContent = {
  hero: {
    eyebrow: 'Creator profile',
    headline: 'Vaibhav Sisinty',
    tagline: 'Growth marketing, AI, and founder perspectives for builders, marketers, and founders.',
    portrait: '/creators/vaibhav-sisinty-profile.jpg',
    portraitAlt: 'Vaibhav Sisinty',
    metrics: [
      { value: '3.56M+', label: 'Combined Followers (Jul 2026)' },
      { value: '5', label: 'Platforms' },
    ],
    externalLinks: [
      { icon: 'instagram', label: 'Instagram', href: 'https://instagram.com/vaibhavsisinty' },
      { icon: 'youtube', label: 'YouTube', href: 'https://youtube.com/@vaibhavsisinty' },
      { icon: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/vaibhavsisinty' },
      { icon: 'twitter', label: 'X (Twitter)', href: 'https://x.com/vaibhavsisinty' },
      { icon: 'instagram', label: 'Threads', href: 'https://threads.net/@vaibhavsisinty' },
    ],
    cta: {
      label: 'No CTA — Not Authorized',
      href: '#',
      variant: 'ghost',
    },
    sourceNote: 'Audience figures reported in the July 2026 media kit. Confirm current totals before publication.',
  },

  creatorOverview: {
    eyebrow: 'Creator overview',
    headline: 'Growth marketing, AI, and founder perspectives.',
    intro: "Vaibhav Sisinty's media kit positions his content around growth marketing, AI, and the experiences of building and operating businesses. His stated audience includes builders, marketers, and founders worldwide.",
    platforms: [
      {
        name: 'Instagram',
        role: 'Daily growth-marketing Reels, founder takes, and behind-the-build moments.',
      },
      {
        name: 'YouTube',
        role: 'Long-form deep dives on AI and growth. Shorts are a substantial portion of views.',
      },
      {
        name: 'LinkedIn',
        role: 'Content for founders, marketers, and operators.',
      },
      {
        name: 'X / Twitter',
        role: 'Real-time commentary on AI, growth tactics, and marketing.',
      },
      {
        name: 'Threads',
        role: 'Cross-platform community building.',
      },
    ],
    closingLine: 'His platforms serve different content roles while maintaining a consistent focus on practical growth marketing and founder insights.',
  },

  crossPlatformReach: {
    eyebrow: 'Cross-platform reach',
    headline: 'Follower counts reported in the July 2026 media kit.',
    intro: 'These figures are media-kit claims, not independently verified live counts. Refresh them immediately before publication.',
    platforms: [
      {
        name: 'Instagram',
        audience: '2M followers',
        contentRole: 'Primary channel for daily growth-marketing Reels, founder perspectives, and behind-the-build moments.',
        icon: 'instagram',
      },
      {
        name: 'YouTube',
        audience: '735K subscribers',
        contentRole: 'Long-form deep dives on AI and growth; Shorts are a substantial portion of views.',
        icon: 'youtube',
      },
      {
        name: 'LinkedIn',
        audience: '571K followers',
        contentRole: 'Platform for founders, marketers, and operators.',
        icon: 'linkedin',
      },
      {
        name: 'X / Twitter',
        audience: '158K followers',
        contentRole: 'Real-time commentary on AI, growth tactics, and marketing.',
        icon: 'twitter',
      },
      {
        name: 'Threads',
        audience: '100K followers',
        contentRole: 'Cross-platform community building.',
        icon: 'instagram',
      },
    ],
    combined: '3.56M+ combined followers',
    dataNote: 'Follower counts are media-kit figures from July 2026, not independently verified live counts. The combined total may include overlapping audiences across platforms.',
  },

  audienceInsights: {
    eyebrow: 'Audience insights',
    headline: 'Platform-specific audience snapshots from the July 2026 media kit.',
    intro: 'The media kit provides audience demographics and performance figures per platform. The items below require clarification of reporting periods and metric definitions before publication. Dated follower counts are used as primary reach metrics; disputed performance figures are withheld pending verification.',
    platforms: [
      {
        name: 'Instagram — 2M followers',
        geography: [
          { region: 'India', percentage: '77.5%' },
          { region: 'United States', percentage: '5.1%' },
          { region: 'Pakistan', percentage: '2.4%' },
          { region: 'Canada', percentage: '1.4%' },
        ],
        topCities: [
          { city: 'Bengaluru', percentage: '7.8%' },
          { city: 'Mumbai', percentage: '3.4%' },
          { city: 'Delhi', percentage: '3.0%' },
          { city: 'Chennai', percentage: '2.6%' },
        ],
        ageDistribution: [
          { range: '25–34', percentage: '38.4%' },
          { range: '18–24', percentage: '37.2%' },
          { range: '35–44', percentage: '12.2%' },
          { range: '13–17', percentage: '6.7%' },
        ],
        genderDistribution: [
          { label: 'Men', percentage: '79.0%' },
          { label: 'Women', percentage: '20.9%' },
        ],
        performance: {
          postsPerMonth: '45',
          viewsPerMonth: '39.8M',
          avgViewsPerPost: '884K',
          engagementsPerMonth: '770K',
          avgEngagementsPerPost: '17K',
        },
        performanceNote: 'These performance figures need confirmation of the reporting dates and metric definitions because the kit repeats the same KPI values in the YouTube section with a different reporting period. Do not publish these figures without verification.',
      },
      {
        name: 'YouTube — 735K subscribers',
        geography: [
          { region: 'India', percentage: '71.5%' },
          { region: 'United States', percentage: '6.4%' },
          { region: 'Pakistan', percentage: '2.9%' },
          { region: 'Bangladesh', percentage: '1.8%' },
          { region: 'United Kingdom', percentage: '1.6%' },
        ],
        ageDistribution: [
          { range: '25–34', percentage: '33.7%' },
          { range: '35–44', percentage: '25.7%' },
          { range: '18–24', percentage: '22.8%' },
          { range: '45–54', percentage: '11.3%' },
        ],
        genderDistribution: [
          { label: 'Male', percentage: '88.4%' },
          { label: 'Female', percentage: '11.4%' },
        ],
        contentType: [
          { type: 'Shorts', percentage: '68.2%' },
          { type: 'Videos', percentage: '31.4%' },
          { type: 'Posts', percentage: '0.4%' },
          { type: 'Livestreams', percentage: '0.0%' },
        ],
        performanceNote: 'YouTube analytics visuals refer to the last 28 days, while KPI cards refer to 90 days. Label each statistic with its actual period. These are YouTube views-by-geography and viewer analytics, not necessarily the same as subscriber demographics.',
      },
      {
        name: 'LinkedIn — 571K followers',
        metrics: [
          { label: 'Views (90 days)', value: '3M' },
          { label: 'Engagement Rate', value: '1.8%' },
          { label: 'Accounts Reached', value: '1M' },
        ],
        performanceNote: 'The copy refers to 8M+ views in six months, while its KPI card lists 3M views in 90 days. Confirm the periods and definitions before publication.',
      },
      {
        name: 'X / Twitter — 158K followers',
        metrics: [
          { label: 'Impressions (90 days)', value: '28M' },
          { label: 'Engagements', value: '560K' },
        ],
        performanceNote: 'Confirm reporting period and metric definitions.',
      },
      {
        name: 'Threads — 100K followers',
        metrics: [],
        performanceNote: 'Limited analytics available. Confirm reporting period.',
      },
    ],
  },

  professionalBackground: {
    eyebrow: 'Professional background',
    headline: 'Founder, marketer, and growth operator.',
    intro: 'The media kit lists the following professional affiliations. Confirm accuracy and current status before publication.',
    affiliations: [
      { title: 'Founder & CEO', company: 'GrowthSchool', period: '2020 — Present', description: 'Ed-tech platform for growth marketing and product skills.' },
      { title: 'Founder', company: 'CrazyIdea', period: '2016 — 2020', description: 'Early-stage startup studio and marketing agency.' },
      { title: 'Growth Lead', company: 'Klook', period: '2018 — 2019', description: 'Travel booking platform, user acquisition and growth.' },
      { title: 'Marketing Manager', company: 'Uber', period: '2017 — 2018', description: 'Ride-sharing platform, driver and rider growth.' },
    ],
    closingLine: 'Professional background is provided for context. Confirm all titles, dates and affiliations with the creator team before publication.',
  },

  collaborationFormats: {
    eyebrow: 'Quoted rates — internal only',
    headline: 'Quoted sponsorship rates from the creator team (USD).',
    intro: 'These are quoted prices from the creator team\'s email. Currency quoted as USD; reconfirm currency, taxes, usage rights, exclusivity, deliverables, and validity period. Do not convert, discount, bundle, or quote on the creator team\'s behalf without authorization. Do not publish rates publicly.',
    formats: [
      { platform: 'YouTube', format: 'Dedicated video', rate: '$20,000', internalOnly: true },
      { platform: 'YouTube', format: 'Mid-roll / integration', rate: '$12,500', internalOnly: true },
      { platform: 'YouTube', format: 'Shorts', rate: '$7,500', internalOnly: true },
      { platform: 'Instagram', format: 'Reel', rate: '$12,500', internalOnly: true },
      { platform: 'Instagram', format: 'Story', rate: '$7,500', internalOnly: true },
      { platform: 'Instagram', format: 'Static post', rate: '$10,000', internalOnly: true },
      { platform: 'X / Twitter', format: 'Post', rate: '$8,000', internalOnly: true },
      { platform: 'X / Twitter', format: 'Thread', rate: '$8,000', internalOnly: true },
      { platform: 'LinkedIn', format: 'Video post', rate: '$6,000', internalOnly: true },
      { platform: 'LinkedIn', format: 'Static post', rate: '$4,500', internalOnly: true },
    ],
    publicationNote: 'No Threads rate was provided. Currency quoted as USD; reconfirm currency, taxes, usage rights, exclusivity, deliverables, and validity period. Do not convert, discount, bundle, or quote on the creator team\'s behalf without authorization. Do not publish rates publicly.',
  },

  brandOpportunityProcess: {
    eyebrow: 'Brand opportunities',
    headline: 'The creator team evaluates opportunities directly — no intermediary process.',
    intro: 'The creator team explicitly stated that it does not work through intermediaries for brand partnerships. They may evaluate specific opportunities when given the brand name, campaign brief, and budget.',
    process: [
      'Brands should provide the brand name, campaign brief, and budget directly.',
      'The creator team evaluates the opportunity and decides whether to proceed.',
      'Reachzy does not coordinate, negotiate, or manage campaigns on behalf of this creator.',
      'No authorized intermediary relationship or booking process has been established.',
    ],
    ctaNote: 'No CTA is configured for this creator. Do not route brand leads through Reachzy unless written authorization is obtained.',
  },

  campaignEvidence: {
    eyebrow: 'Campaign evidence',
    headline: 'No verified sponsored campaign case studies available for publication.',
    body: 'The source does not establish verified sponsored-campaign case studies, campaign outcomes, or client-approved references. Do not invent a sponsored-content portfolio, named campaign results, reach/click/conversion/ROI data, or testimonials.',
    publicationNote: 'If and when verified campaign evidence becomes available with explicit permission, it may be added. Until then, this section remains a placeholder.',
  },

  creatorRoll: {
    eyebrow: 'Explore more creators',
    headline: 'Looking for a different audience?',
    supportingCopy: 'Explore other creators across technology, AI, productivity, software and related categories to find a relevant fit for your campaign.',
  },

  finalCta: {
    eyebrow: 'Profile status',
    headline: 'This creator profile is an internal draft pending approval.',
    supportingCopy: 'Publication permission, commercial arrangement, and brand-opportunity process for Vaibhav Sisinty have not been confirmed. This page is implemented for review only and must not be published or made indexable until all publication checklist items are satisfied.',
    cta: {
      label: 'Not available',
      href: '#',
    },
    fallbackContact: 'partnerships@reachzy.space',
  },

  metadata: {
    title: 'Vaibhav Sisinty — Reachzy',
    description: 'Vaibhav Sisinty creates content around growth marketing, AI, and founder perspectives for builders, marketers, and founders across Instagram, YouTube, LinkedIn, X, and Threads. Internal draft — not for publication.',
    canonical: '/creators/vaibhav-sisinty',
    openGraph: {
      title: 'Vaibhav Sisinty — Reachzy (Internal Draft)',
      description: 'Growth marketing, AI, and founder perspectives. 3.56M+ combined followers across 5 platforms. Internal draft — not for publication.',
      images: [{ url: '/creators/vaibhav-sisinty-profile.jpg', width: 1200, height: 1500 }],
    },
    robots: 'noindex, nofollow',
  },
};

export type VaibhavSisintyContent = typeof vaibhavSisintyContent;
