import Image from 'next/image';
import { MDXRemote, type MDXRemoteOptions } from 'next-mdx-remote-client/rsc';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import { postList, postWithSlug } from '@/utils/getPostData';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function generateStaticParams() {
  return postList.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

/**
 * @description 使用 NodeJS 的 fs 功能取得檔案資料，並透過  MDXRemote 元件渲染畫面
 */

export default async function ProgramBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data, content } = postWithSlug(slug);

  const options: MDXRemoteOptions = {
    mdxOptions: {
      rehypePlugins: [rehypeSlug, rehypeHighlight],
      remarkPlugins: [remarkGfm],
    },
  };

  return (
    <article className="prose dark:prose-invert prose-pre:bg-[#0d1117] prose-h1:mb-2 max-w-full dark:text-white">
      <h1>{data.title}</h1>
      <div className="text-foreground/90">
        <span>
          最後更新：<time dateTime={data.updatedAt}>{data.updatedAt}</time>
        </span>
        ·
        <span>
          發布日期：<time dateTime={data.publishedAt}>{data.publishedAt}</time>
        </span>
      </div>
      <Image src={data.openGraph} alt={data.title} width={1000} height={100} />
      <MDXRemote
        source={content}
        options={options}
        components={{
          Accordion,
          AccordionContent,
          AccordionItem,
          AccordionTrigger,
        }}
      />
    </article>
  );
}
