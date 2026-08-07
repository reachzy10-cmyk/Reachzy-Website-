'use client';

import { aiLearnersIndiaContent } from '@/lib/content/ai-learners-india';
import { CreatorRoll as BaseCreatorRoll } from '@/components/sections/creator-roll';

export function CreatorRoll() {
  const { creatorRoll } = aiLearnersIndiaContent;

  return (
    <BaseCreatorRoll
      excludeRoute="/creators/ai-learners-india"
      heading={creatorRoll.headline}
      description={creatorRoll.supportingCopy}
    />
  );
}
