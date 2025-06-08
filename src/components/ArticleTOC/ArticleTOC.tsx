import remarkParse from 'remark-parse';
import { unified } from 'unified';
import { toc } from 'mdast-util-toc';
import type { List, RootContent, ListItem, Text } from 'mdast';

import { postWithSlug } from '@/utils/getPostData';

function renderTOC(toc: List, isRoot = false) {
  if (!toc.children) return null;

  return (
    <ul className={isRoot ? '' : 'pl-4'}>
      {toc.children.map((tocItem: ListItem) => {
        // 尋找段落類型
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

export default async function ArticleTOC({
  slug,
  ...props
}: {
  slug: string;
  className: string;
}) {
  const { content } = postWithSlug(slug);
  const tree = await unified().use(remarkParse).parse(content);

  const { map } = toc(tree);

  return <aside {...props}>{renderTOC(map!, true)}</aside>;
}
