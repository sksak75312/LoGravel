import Link from 'next/link';

import { cn } from '@/lib/utils';
import { Page } from '@/types/interface';

export default function HamburgerMenu({
  pages,
  isOpen,
  onClick,
}: {
  pages: Page[];
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <nav
      className={cn(
        'border-t-primary border-b-primary bg-background hidden h-screen flex-col items-center justify-start border-t-2 border-b-2',
        { 'flex lg:hidden': isOpen },
      )}
    >
      {pages.map((page) => (
        <Link
          key={page.href}
          href={page.href}
          onClick={onClick}
          className="py-6 text-lg transition-all duration-200"
        >
          {page.text}
        </Link>
      ))}
    </nav>
  );
}
