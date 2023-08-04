import React from 'react';
import { cn } from '~/lib/utils';

export default function GridItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-3xl transition hover:scale-[1.01] hover:shadow-lg',
        className
      )}
    >
      {children}
    </div>
  );
}
