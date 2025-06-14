import remarkParse from 'remark-parse';
import { unified } from 'unified';
import { toc } from 'mdast-util-toc';
import type { List, RootContent, ListItem, Text } from 'mdast';

import { postWithSlug } from '@/utils/getPostData';

/**
 * @description 遞迴函式，用於生成 TOC 樣式
 * @param {toc} MDAST
 * @param {isRoot}
 * @returns JSX Element
 */
function renderTOC(toc: List, isRoot = false) {
  if (!toc.children) return null;

  return (
    <ul className={isRoot ? '' : 'pl-4'}>
      {toc.children.map((tocItem: ListItem) => {
        /**
         * paragraph 變數從 tocItem find 類型是否為 paragraph
         * link 變數從 paragraph find 類型是否為 link
         * title 變數從 link children 取得 value
         * url 變數從 link 取得 url 的值
         */
        const paragraph = tocItem.children.find(
          (n: RootContent) => n.type === 'paragraph',
        );
        const link = paragraph!.children.find(
          (n: RootContent) => n.type === 'link',
        );

        const title = (link!.children[0] as Text).value;
        const url = link!.url;

        const subList = tocItem.children.find(
          (n: RootContent) => n.type === 'list',
        );

        return (
          <li key={title}>
            <a href={url}>{title}</a>
            {subList && renderTOC(subList)}
          </li>
        );
      })}
    </ul>
  );
}

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

  return <aside {...props}>{renderTOC(map!, true)}</aside>;
}
