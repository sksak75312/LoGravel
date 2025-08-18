'use client';

import { ArrowUp } from 'lucide-react';

import { useWindowScroll } from '@/hooks';
import { cn } from '@/lib/utils';

export default function ScrollTop() {
  const { userScrollTop } = useWindowScroll();

  const isVisible = userScrollTop > 100;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={cn(
        'bg-primary text-primary-foreground hover:bg-primary/90 hover:ring-ring fixed right-8 bottom-8 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:ring-offset-2 hover:outline-none focus:ring-2',
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0',
      )}
      aria-label="回到頂部"
    >
      <ArrowUp className="h-6 w-6" />
    </button>
  );
}
