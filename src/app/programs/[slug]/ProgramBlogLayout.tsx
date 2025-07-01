import type { Metadata } from 'next';
import { ReactNode } from 'react';

import ArticleTOC from '@/components/ArticleTOC';
import { postWithSlug } from '@/utils/getPostData';

/**
 * @description 因為是動態取得 Metadata 資訊，所以需要使用 Next 提供的 generateMetadata function
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { data } = postWithSlug(slug);

  return {
    title: data.title,
    description: data.description,
    keywords: [...data.keywords],
    openGraph: {
      images: [data.openGraph],
    },
  };
}

export default async function ProgramBlogLayout({
  children,
  params,
}: Readonly<{ children: ReactNode; params: Promise<{ slug: string }> }>) {
  const { slug } = await params;

  return (
    <div className="container flex justify-end gap-5 pt-10 pb-20">
      <main className="basis-[85ch]">{children}</main>
      <ArticleTOC
        slug={slug}
        className="sticky top-[120px] max-h-[calc(100dvh-120px)] basis-[250px] self-start overflow-auto"
      />
    </div>
  );
}
