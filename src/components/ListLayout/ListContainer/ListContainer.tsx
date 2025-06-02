import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function ListContainer({
  children,
  className,
  wrap = false,
}: {
  children: ReactNode;
  className?: string;
  wrap?: boolean;
}) {
  return (
    <ul className={cn('-mx-4 -mt-8 flex', className, { 'flex-wrap': wrap })}>
      {children}
    </ul>
  );
}
