import type { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { CreatorHero } from '@/components/sections/techvishal-vsb/creator-hero';
import { ChannelCoverage } from '@/components/sections/techvishal-vsb/channel-coverage';
import { AudienceInsights } from '@/components/sections/techvishal-vsb/audience-insights';
import { CollaborationFormats } from '@/components/sections/techvishal-vsb/collaboration-formats';
import { CollaborationProcess } from '@/components/sections/techvishal-vsb/collaboration-process';
import { CreatorRoll } from '@/components/sections/techvishal-vsb/creator-roll';
import { FinalCta } from '@/components/sections/techvishal-vsb/final-cta';
import { techvishalVsbContent } from '@/lib/content/techvishal-vsb';

export const metadata: Metadata = {
  title: techvishalVsbContent.metadata.title,
  description: techvishalVsbContent.metadata.description,
  alternates: { canonical: techvishalVsbContent.metadata.canonical },
  openGraph: techvishalVsbContent.metadata.openGraph,
};

export default function TechVishalVsbPage() {
  return (
    <div className="min-h-screen bg-background">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main">
        <CreatorHero />
        <ChannelCoverage />
        <AudienceInsights />
        <CollaborationFormats />
        <CollaborationProcess />
        <CreatorRoll />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
