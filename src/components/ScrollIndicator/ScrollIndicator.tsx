'use client';

import { useState, useEffect } from 'react';

export default function ScrollIndicator() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const listenerScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      const canScrollHeight = scrollHeight - clientHeight;

      setPercent((scrollTop / canScrollHeight) * 100);
    };

    window.addEventListener('scroll', listenerScroll, { passive: true });
    listenerScroll();

    return () => window.removeEventListener('scroll', listenerScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 z-[999] h-0.5 w-full">
        <span
          className="bg-primary block h-full w-full"
          style={{ translate: `${percent - 100}%` }}
        ></span>
      </div>
    </>
  );
}
