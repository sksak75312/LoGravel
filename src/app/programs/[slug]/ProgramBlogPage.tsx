import Image from 'next/image';
import { MDXRemote, type MDXRemoteOptions } from 'next-mdx-remote-client/rsc';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
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
 * TODO 使用 NodeJS 的 fs 功能取得檔案資料，並透過  MDXRemote 元件渲染畫面
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
    },
  };

  return (
    <article className="prose dark:prose-invert prose-pre:bg-[#0d1117] max-w-full">
      <h1>{data.title}</h1>
      <span>
        最後更新日期：<time>{data.date}</time>
      </span>
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
