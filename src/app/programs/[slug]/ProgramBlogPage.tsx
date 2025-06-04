import { MDXRemote } from 'next-mdx-remote-client/rsc';
import { postList, postWithSlug } from '@/utils/getPostData';

export function generateStaticParams() {
  return postList.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export default async function ProgramBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { content } = postWithSlug(slug);

  return (
    <main className="container pt-10 pb-20">
      <article className="prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white mx-auto max-w-[80ch]">
        <MDXRemote source={content} />
      </article>
    </main>
  );
}
