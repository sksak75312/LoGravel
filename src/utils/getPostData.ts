import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import matter from 'gray-matter';
import { Post } from '@/types/interface';

export default function getPostData() {
  // 取得 content 資料夾裡的所有名稱
  const postCategories = readdirSync(join(process.cwd(), 'content'));

  const postList = postCategories
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
    .flat() as Post[];

  // 重新排列文章順序
  postList.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return { postCategories, postList };
}
