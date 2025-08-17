import remarkParse from 'remark-parse';
import { unified } from 'unified';
import { toc } from 'mdast-util-toc';
import type { List } from 'mdast';

import { postWithSlug } from '@/utils/getPostData';
import ArticleTOCClient from './ArticleTOC.client';

/**
 *
 * @param {slug} 當前頁面的動態參數
 * @returns JSX Element，包含呼叫 renderTOC function
 */
export default async function ArticleTOC({
  slug,
  ...props
}: {
  slug: string;
  className: string;
}) {
  /**
   * 動態路由從 postWithSlug function 取得 MDX
   * MDX 檔案轉換成 Mdast(Markdown Abstract Syntax Tree)
   * Mdast 結構轉為 TOC Table of contents
   */
  const { content } = postWithSlug(slug);
  const tree = await unified().use(remarkParse).parse(content);

  const { map } = toc(tree);

  return <ArticleTOCClient map={map as List} {...props} />;
}
