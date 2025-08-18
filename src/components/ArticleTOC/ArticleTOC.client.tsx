'use client';

import { useState, useEffect } from 'react';
import type { List, ListItem, RootContent, Text } from 'mdast';
import { cn } from '@/lib/utils';

/**
 * @description 遞迴函式，用於生成 TOC 樣式，並根據 activeId 高亮顯示
 * @param {toc} MDAST
 * @param {activeId} 當前作用中的標題 ID
 * @param {isRoot}
 * @returns JSX Element
 */
function renderTOC(toc: List, activeId: string, isRoot = false) {
  if (!toc.children) return null;

  return (
    <ul className={isRoot ? '' : 'pl-4'}>
      {toc.children.map((tocItem: ListItem) => {
        const paragraph = tocItem.children.find(
          (n: RootContent) => n.type === 'paragraph',
        );
        const link = paragraph?.children.find(
          (n: RootContent) => n.type === 'link',
        );

        if (!link || !('children' in link) || !('url' in link)) return null;

        const title = (link.children[0] as Text)?.value ?? '';
        const url = link.url ?? '';
        const id = url.startsWith('#') ? url.substring(1) : '';

        const subList = tocItem.children.find(
          (n: RootContent) => n.type === 'list',
        );

        return (
          <li key={title} className="">
            <a
              href={url}
              className={cn(
                'hover:text-secondary transition-colors',
                activeId === id ? 'text-secondary' : 'text-slate-400',
              )}
            >
              {title}
            </a>
            {subList && renderTOC(subList as List, activeId)}
          </li>
        );
      })}
    </ul>
  );
}

export default function ArticleTOCClient({
  map,
  ...props
}: {
  map: List;
  className?: string;
}) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll('h2[id], h3[id], h4[id], h5[id], h6[id]'),
    );

    const handleScroll = () => {
      const topOffset = 150; // 考慮到 sticky header 的高度
      let currentActiveId = '';
      for (const heading of headingElements) {
        if ((heading as HTMLElement).offsetTop <= window.scrollY + topOffset) {
          currentActiveId = heading.id;
        } else {
          break;
        }
      }
      setActiveId(currentActiveId);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始檢查

    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // 空依賴陣列，確保只在 mount 時執行一次

  if (!map) return null;

  return <aside {...props}>{renderTOC(map, activeId, true)}</aside>;
}
