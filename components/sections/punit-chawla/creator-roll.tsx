'use client';

import { punitChawlaContent } from '@/lib/content/punit-chawla';
import { CreatorRoll as SharedCreatorRoll } from '@/components/sections/creator-roll';

export function CreatorRoll() {
  const { creatorRoll } = punitChawlaContent;
  return (
    <SharedCreatorRoll
      excludeRoute="/creators/punit-chawla"
      heading={creatorRoll.headline}
      description={creatorRoll.supportingCopy}
    />
  );
}
