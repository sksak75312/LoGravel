import type { MetadataRoute } from 'next';
import { postList } from '@/utils/getPostData';

export default function sitemap(): MetadataRoute.Sitemap {
  /**
   * TODO 從 getPostData 中取得所有 Post List，動態產生每個 Post Sitemap
   */
  const singlePostSitemap: MetadataRoute.Sitemap = postList.map((post) => {
    return {
      url: `https://www.logravel.com/programs/${post.slug}`,
      lastModified: new Date(post.date).toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    };
  });

  return [
    {
      url: 'https://www.logravel.com/',
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.logravel.com/programs',
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...singlePostSitemap,
  ];
}
