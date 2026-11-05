/**
 * Creator Roll Data
 * Single source of truth for creator cards shown in the Creator Roll section.
 * Parsed from /reference/creator_roll_list.md
 * Only creators with public_profile_status === 'approved' should be rendered publicly.
 */

export interface CreatorRollEntry {
  publicName: string;
  primaryNiche: string;
  oneLineDescription: string;
  primaryPlatform: string;
  primaryPlatformAudience: string;
  combinedAudience: string;
  imageAsset: string | null;
  verifiedSocialProfileUrl: string | null;
  destinationPage: string;
  statsLastVerified: string;
  notes: string;
  publicProfileStatus: 'approved' | 'pending_creator_permission' | 'excluded';
}

// Raw data from creator_roll_list.md
const rawCreatorData: CreatorRollEntry[] = [
  {
    publicName: 'Pavan Lalwani',
    primaryNiche: 'AI tools, data analytics, Excel, Power BI and productivity',
    oneLineDescription: 'Practical tutorials that help learners and professionals build useful data, analytics and productivity skills.',
    primaryPlatform: 'YouTube',
    primaryPlatformAudience: '339.9K subscribers',
    combinedAudience: 'Not provided',
    imageAsset: '/creators/pavan-lalwani-profile.jpg',
    verifiedSocialProfileUrl: null,
    destinationPage: '/creators/pavan-lalwani',
    statsLastVerified: '2026-10-08 media kit; refresh before public launch',
    notes: 'Audience figure is from the supplied media kit and should be refreshed before publication. Do not present the media kit\'s 28-day channel analytics as typical per-video views.',
    publicProfileStatus: 'approved',
  },
  {
    publicName: 'Punit Chawla',
    primaryNiche: 'UX/UI design, web design and design tools',
    oneLineDescription: 'Design-focused tutorials and content covering UX/UI, web design and practical tools for creators and designers.',
    primaryPlatform: 'YouTube',
    primaryPlatformAudience: '179K+ subscribers',
    combinedAudience: 'Approximately 305K+ across YouTube, Instagram and LinkedIn, based on public profile checks October 2026; verify before publication',
    imageAsset: '/creators/punit-chawla.jpeg',
    verifiedSocialProfileUrl: null,
    destinationPage: '/creators/punit-chawla',
    statsLastVerified: 'Public profile checks October 2026; supplied rate card',
    notes: 'Do not imply verified audience demographics or average views; those were not supplied. Combined total is approximate platform followers, not unique individuals.',
    publicProfileStatus: 'approved',
  },
  {
    publicName: 'TechVishal VSB',
    primaryNiche: 'Hindi technology, smartphone reviews and practical tech tips',
    oneLineDescription: 'Hindi-language tech content covering smartphone reviews, phone features, apps and useful technology tips.',
    primaryPlatform: 'YouTube',
    primaryPlatformAudience: 'Approximately 191K subscribers',
    combinedAudience: 'Not provided',
    imageAsset: '/creators/techvishal-vsb.jpg',
    verifiedSocialProfileUrl: null,
    destinationPage: '/creators/techvishal-vsb',
    statsLastVerified: 'Third-party snapshot circa July 2026; refresh before publication',
    notes: 'Subscriber count requires fresh verification. No reliable average views, audience demographics, or sponsorship outcomes have been confirmed.',
    publicProfileStatus: 'approved',
  },
  {
    publicName: 'AI Learners India',
    primaryNiche: 'AI agents, automation, no-code for freelancers & agency founders',
    oneLineDescription: 'Hindi-language tutorials teaching AI agents and automation to Indian freelancers and agency founders who build for clients.',
    primaryPlatform: 'YouTube',
    primaryPlatformAudience: '160,000+ subscribers',
    combinedAudience: 'Not provided',
    imageAsset: '/creators/ai-learners-india-profile.jpg',
    verifiedSocialProfileUrl: null,
    destinationPage: '/creators/ai-learners-india',
    statsLastVerified: 'YouTube Studio, April 2026',
    notes: 'Channel-reported figures. All growth is organic — no paid promotion.',
    publicProfileStatus: 'approved',
  },
];

// Excluded creator (not for public display)
export const excludedCreator = {
  publicName: 'Vaibhav Sisinty',
  status: 'excluded' as const,
  reason: 'His team explicitly stated that they do not work through intermediaries for brand partnerships. Do not display him in the Creator Roll or actively pitch him through Reachzy unless the team\'s position and a workable commercial arrangement are resolved, with permission for public profile use.',
  destinationPage: '/creators/vaibhav-sisinty',
};

/**
 * Get only approved creators for public display
 * Implementation rule: pending_creator_permission and excluded entries must not render on the public website
 */
export function getApprovedCreators(): CreatorRollEntry[] {
  return rawCreatorData.filter((creator) => creator.publicProfileStatus === 'approved');
}

/**
 * Get all creators (for internal/admin use)
 */
export function getAllCreators(): CreatorRollEntry[] {
  return rawCreatorData;
}

/**
 * Get creator by destination page
 */
export function getCreatorByDestination(destinationPage: string): CreatorRollEntry | undefined {
  return rawCreatorData.find((c) => c.destinationPage === destinationPage);
}

/**
 * Check if a creator should be publicly visible
 */
export function isCreatorPubliclyVisible(creator: CreatorRollEntry): boolean {
  return creator.publicProfileStatus === 'approved';
}

export { rawCreatorData as allCreatorData };
