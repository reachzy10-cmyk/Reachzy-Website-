'use client';

import Image from 'next/image';
import { clsx } from 'clsx';

export interface PortraitProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  fill?: boolean;
  aspectRatio?: string;
}

export function Portrait({
  src,
  alt,
  width = 480,
  height = 600,
  priority = false,
  className,
  fill = false,
  aspectRatio,
}: PortraitProps) {
  const ratio = aspectRatio || `${width}/${height}`;

  return (
    <div
      className={clsx('relative w-full overflow-hidden rounded-2xl bg-secondary', className)}
      style={{ aspectRatio: ratio }}
    >
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 42vw, 520px"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
