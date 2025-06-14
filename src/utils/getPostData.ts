import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { cache } from 'react';
import matter from 'gray-matter';
import { Post } from '@/types/interface';

// 取得 content 資料夾裡的所有名稱
export const postCategories = readdirSync(join(process.cwd(), 'content'));

// 取得所有文章列表
export const postList = postCategories
  .map((dir) => {
    // 取得特定資料夾裡的檔案
    const fileName = readdirSync(join(process.cwd(), 'content', dir));

    // 使用 matter 取得 metadata 中的資料
    const fileData = fileName.map((file) => {
      return matter(readFileSync(join(process.cwd(), 'content', dir, file)))
        .data;
    });
    return fileData;
  })
  // 重新排列文章順序
  .flat()
  .sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  ) as Post[];

export const postWithSlug = cache((slug: string) => {
  const findPost = postList.find((post) => post.slug === slug);
  return matter(
    readFileSync(
      join(
        process.cwd(),
        'content',
        findPost!.category,
        `${findPost!.slug}.mdx`,
      ),
    ),
  );
});
