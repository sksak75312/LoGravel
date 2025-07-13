'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import { Hamburger, HamburgerMenu } from '@/components';
import { useWindowScroll } from '@/hooks';
import { cn } from '@/lib/utils';
import { Page } from '@/types/interface';

const pages: Page[] = [
  {
    href: '/',
    text: '首頁',
  },
  {
    href: '/programs',
    text: '技術文章',
  },
];

export default function GlobalHeader() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { userScrollTop } = useWindowScroll();

  const handleOpen = () => {
    setIsOpen((pre) => !pre);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <header
      className={cn('fixed top-0 left-0 z-[998] w-full transition-all', {
        'border-primary/8 border-b-[1px] bg-black/9 backdrop-blur-xs':
          userScrollTop > 0,
      })}
    >
      <div className="container flex items-center justify-between py-2">
        <Link href="/" className="group transition-transform hover:scale-105">
          <h1 className="font-space-grotesk text-primary group-hover:text-shadow-center text-[32px] font-bold transition-all duration-300">
            LoGravel
          </h1>
        </Link>
        <nav className="hidden lg:flex lg:gap-7">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="hover:text-primary text-lg transition-all duration-200"
            >
              {page.text}
            </Link>
          ))}
        </nav>
        <div className="flex justify-end lg:min-w-[132px]">
          <Hamburger isOpen={isOpen} onClick={handleOpen} />
        </div>
      </div>
      <HamburgerMenu pages={pages} isOpen={isOpen} onClick={handleOpen} />
    </header>
  );
}
