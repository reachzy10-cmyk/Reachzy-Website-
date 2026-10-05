'use client';

import { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';

export interface AccordionItemProps {
  question: string;
  answer: React.ReactNode;
  className?: string;
}

export interface AccordionProps {
  items: AccordionItemProps[];
  allowMultiple?: boolean;
  className?: string;
}

export function AccordionItem({ question, answer, className }: AccordionItemProps) {
  const id = useId();
  const [open, setOpen] = useState(false);

  return (
    <details
      id={id}
      className={clsx('group border-t border-border', className)}
      open={open}
      onToggle={() => setOpen(!open)}
    >
      <summary
        className={clsx(
          'flex items-center justify-between py-6 cursor-pointer list-none',
          'text-lg font-medium text-foreground hover:text-primary transition-colors',
          'focus-visible-ring rounded-md px-2 -ml-2'
        )}
        aria-expanded={open}
      >
        <span className="pr-8">{question}</span>
        <ChevronDown
          className={clsx(
            'size-5 text-muted-foreground flex-shrink-0 transition-transform duration-200',
            open && 'rotate-180'
          )}
          aria-hidden="true"
        />
      </summary>
      <div
        className={clsx(
          'animate-slide-down text-muted-foreground leading-relaxed',
          'pb-6 pt-2'
        )}
      >
        {answer}
      </div>
    </details>
  );
}

export function Accordion({ items, allowMultiple = false, className }: AccordionProps) {
  return (
    <div className={clsx('space-y-0', className)}>
      {items.map((item, index) => (
        <AccordionItem key={index} {...item} />
      ))}
    </div>
  );
}