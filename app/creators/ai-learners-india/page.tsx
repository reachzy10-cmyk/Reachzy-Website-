import type { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { CreatorHero } from '@/components/sections/ai-learners-india/creator-hero';
import { CreatorBackground } from '@/components/sections/ai-learners-india/creator-background';
import { ContentPerformance } from '@/components/sections/ai-learners-india/content-performance';
import { CampaignEvidence } from '@/components/sections/ai-learners-india/campaign-evidence';
import { CollaborationProcess } from '@/components/sections/ai-learners-india/collaboration-process';
import { CreatorFaq } from '@/components/sections/ai-learners-india/creator-faq';
import { FinalCta } from '@/components/sections/final-cta';

export const metadata: Metadata = {
  title: 'AI Learners India — Reachzy',
  description:
    'AI Learners India: 160,000+ subscribers, 8.1M lifetime views, 4.57 lakh watch hours. Audience, top content, campaign evidence, collaboration formats and process.',
  alternates: { canonical: '/creators/ai-learners-india' },
  openGraph: {
    title: 'AI Learners India — Reachzy',
    description:
      'A Hindi-language AI agents and automation channel for Indian freelancers and agency founders, with published campaign evidence.',
    images: [{ url: '/creators/ai-learners-india-profile.jpg', width: 1200, height: 1500 }],
  },
};

export default function AiLearnersIndiaPage() {
  return (
    <div className="min-h-screen bg-background">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main">
        <CreatorHero />
        <CreatorBackground />
        <ContentPerformance />
        <CampaignEvidence />
        <CollaborationProcess />
        <CreatorFaq />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
