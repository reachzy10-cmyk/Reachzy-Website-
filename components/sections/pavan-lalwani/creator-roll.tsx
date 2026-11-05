'use client';

import { pavanLalwaniContent } from '@/lib/content/pavan-lalwani';
import { CreatorRoll as SharedCreatorRoll } from '@/components/sections/creator-roll';

export function CreatorRoll() {
  const { creatorRoll } = pavanLalwaniContent;
  return (
    <SharedCreatorRoll
      excludeRoute="/creators/pavan-lalwani"
      heading={creatorRoll.headline}
      description={creatorRoll.supportingCopy}
    />
  );
}
