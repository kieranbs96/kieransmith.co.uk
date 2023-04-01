import { joinClassNames } from 'lib/helpers';
import React from 'react';

export default function GridItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <div
      className={joinClassNames([
        'overflow-hidden rounded-3xl transition hover:scale-[1.01] hover:shadow-lg',
        className,
      ])}
    >
      {children}
    </div>
  );
}
