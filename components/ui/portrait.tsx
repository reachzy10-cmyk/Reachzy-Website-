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
}

export function Portrait({
  src,
  alt,
  width = 480,
  height = 600,
  priority = false,
  className,
  fill = false,
}: PortraitProps) {
  const aspectRatio = width / height;

  return (
    <div
      className={clsx(
        'relative overflow-hidden rounded-xl',
        fill ? 'w-full aspect-[4/5]' : `w-full aspect-[${aspectRatio}]`,
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        priority={priority}
        sizes={fill ? '(max-width: 768px) 100vw, 40vw' : undefined}
        className={clsx(
          'object-cover transition-transform duration-500 ease-out',
          fill ? 'hover:scale-[1.015]' : ''
        )}
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
}