import type { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { CreatorHero } from '@/components/sections/pavan-lalwani/creator-hero';
import { ChannelReach } from '@/components/sections/pavan-lalwani/channel-reach';
import { ChannelCoverage } from '@/components/sections/pavan-lalwani/channel-coverage';
import { AudienceInsights } from '@/components/sections/pavan-lalwani/audience-insights';
import { BrandFit } from '@/components/sections/pavan-lalwani/brand-fit';
import { CollaborationFormats } from '@/components/sections/pavan-lalwani/collaboration-formats';
import { CollaborationProcess } from '@/components/sections/pavan-lalwani/collaboration-process';
import { SponsoredExperience } from '@/components/sections/pavan-lalwani/sponsored-experience';
import { CreatorRoll } from '@/components/sections/pavan-lalwani/creator-roll';
import { FinalCta } from '@/components/sections/pavan-lalwani/final-cta';
import { pavanLalwaniContent } from '@/lib/content/pavan-lalwani';

export const metadata: Metadata = {
  title: pavanLalwaniContent.metadata.title,
  description: pavanLalwaniContent.metadata.description,
  alternates: { canonical: pavanLalwaniContent.metadata.canonical },
  openGraph: pavanLalwaniContent.metadata.openGraph,
};

export default function PavanLalwaniPage() {
  return (
    <div className="min-h-screen bg-background">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main">
        <CreatorHero />
        <ChannelReach />
        <ChannelCoverage />
        <AudienceInsights />
        <BrandFit />
        <CollaborationFormats />
        <CollaborationProcess />
        <SponsoredExperience />
        <CreatorRoll />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
