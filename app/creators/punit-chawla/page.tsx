import type { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { CreatorHero } from '@/components/sections/punit-chawla/creator-hero';
import { CrossPlatformReach } from '@/components/sections/punit-chawla/cross-platform-reach';
import { ContentPositioning } from '@/components/sections/punit-chawla/content-positioning';
import { AudienceCommunity } from '@/components/sections/punit-chawla/audience-community';
import { PreviousCollaborations } from '@/components/sections/punit-chawla/previous-collaborations';
import { PotentialBrandFit } from '@/components/sections/punit-chawla/potential-brand-fit';
import { CollaborationFormats } from '@/components/sections/punit-chawla/collaboration-formats';
import { CollaborationProcess } from '@/components/sections/punit-chawla/collaboration-process';
import { UsageRightsExclusivity } from '@/components/sections/punit-chawla/usage-rights-exclusivity';
import { EventSponsorship } from '@/components/sections/punit-chawla/event-sponsorship';
import { CreatorRoll } from '@/components/sections/punit-chawla/creator-roll';
import { FinalCta } from '@/components/sections/punit-chawla/final-cta';
import { punitChawlaContent } from '@/lib/content/punit-chawla';

export const metadata: Metadata = {
  title: punitChawlaContent.metadata.title,
  description: punitChawlaContent.metadata.description,
  alternates: { canonical: punitChawlaContent.metadata.canonical },
  openGraph: punitChawlaContent.metadata.openGraph,
};

export default function PunitChawlaPage() {
  return (
    <div className="min-h-screen bg-background">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main">
        <CreatorHero />
        <CrossPlatformReach />
        <ContentPositioning />
        <AudienceCommunity />
        <PreviousCollaborations />
        <PotentialBrandFit />
        <CollaborationFormats />
        <CollaborationProcess />
        <UsageRightsExclusivity />
        <EventSponsorship />
        <CreatorRoll />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
