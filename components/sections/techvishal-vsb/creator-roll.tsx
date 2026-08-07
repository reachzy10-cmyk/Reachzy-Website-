'use client';

import { techvishalVsbContent } from '@/lib/content/techvishal-vsb';
import { CreatorRoll as SharedCreatorRoll } from '@/components/sections/creator-roll';

export function CreatorRoll() {
  const { creatorRoll } = techvishalVsbContent;
  return (
    <SharedCreatorRoll
      excludeRoute="/creators/techvishal-vsb"
      heading={creatorRoll.headline}
      description={creatorRoll.supportingCopy}
    />
  );
}
