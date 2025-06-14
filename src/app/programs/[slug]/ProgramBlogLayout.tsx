import { ReactNode } from 'react';

import ArticleTOC from '@/components/ArticleTOC';

export default async function ProgramBlogLayout({
  children,
  params,
}: Readonly<{ children: ReactNode; params: { slug: string } }>) {
  const { slug } = await params;

  return (
    <div className="container flex justify-end gap-5 pt-10 pb-20">
      <main>{children}</main>
      <ArticleTOC
        slug={slug}
        className="sticky top-[120px] max-h-[calc(100dvh-120px)] max-w-[312px] self-start overflow-auto"
      />
    </div>
  );
}
