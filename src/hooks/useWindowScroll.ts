import { useState, useEffect } from 'react';

export default function useWindowScroll() {
  const [userScrollTop, setUserScrollTop] = useState(0);

  useEffect(() => {
    const listenerScroll = () => {
      const { scrollTop } = document.documentElement;

      setUserScrollTop(scrollTop);
    };

    window.addEventListener('scroll', listenerScroll, { passive: true });
    listenerScroll();

    return () => window.removeEventListener('scroll', listenerScroll);
  }, []);

  return {
    userScrollTop,
  };
}
