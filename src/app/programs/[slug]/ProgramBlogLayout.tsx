import { ReactNode } from 'react';

import ArticleTOC from '@/components/ArticleTOC';

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
