import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { WithContext, Article } from 'schema-dts';

import ArticleTOC from '@/components/ArticleTOC';
import { LdJson } from '@/components/LdJson';

import { postWithSlug } from '@/utils/getPostData';

import { Post } from '@/types/interface';

function generateLdJsonData(data: Post): WithContext<Article> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: data.title,
    image: `https://www.logravel.com${data.openGraph}`,
    author: {
      '@type': 'Person',
      name: '焦冠儒',
    },
    publisher: {
      '@type': 'Organization',
      name: 'LoGravel',
      logo: {
        '@type': 'ImageObject',
        url: `https://www.logravel.com/opengraph-image.png`,
      },
    },
    description: data.description,
    datePublished: new Date(data.date).toISOString(),
    dateModified: new Date(data.date).toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.logravel.com/programs/${data.slug}`,
    },
  };
}

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
    alternates: {
      canonical: `/programs/${data.slug}`,
    },
  };
}

export default async function ProgramBlogLayout({
  children,
  params,
}: Readonly<{ children: ReactNode; params: Promise<{ slug: string }> }>) {
  const { slug } = await params;
  const { data } = postWithSlug(slug);

  return (
    <>
      <LdJson data={generateLdJsonData(data as Post)} />
      <div className="container pt-[calc(64px+40px)] pb-20 lg:flex lg:justify-end lg:gap-5">
        <main className="basis-[85ch]">{children}</main>
        <ArticleTOC
          slug={slug}
          className="hidden lg:sticky lg:top-[120px] lg:block lg:max-h-[calc(100dvh-120px)] lg:basis-[250px] lg:self-start lg:overflow-auto dark:text-white"
        />
      </div>
    </>
  );
}
