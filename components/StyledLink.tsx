import Link from 'next/link';
import React from 'react';
import { cn } from '~/lib/utils';

export default function StyledLink({
  href,
  className,
  children,
  ...rest
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      className={cn(
        'font-medium text-sky-200 hover:text-sky-300 focus-visible:text-sky-300',
        className
      )}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  );
}
