import { MDXRemote, type MDXRemoteOptions } from 'next-mdx-remote-client/rsc';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import { postList, postWithSlug } from '@/utils/getPostData';

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
  const { content } = postWithSlug(slug);

  const options: MDXRemoteOptions = {
    mdxOptions: {
      rehypePlugins: [rehypeSlug, rehypeHighlight],
    },
  };

  return (
    <article className="prose prose-pre:bg-[#0d1117] mx-auto max-w-[80ch]">
      <MDXRemote source={content} options={options} />
    </article>
  );
}
