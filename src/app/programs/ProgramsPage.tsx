import type { Metadata } from 'next';

import { ListContainer, ListItem } from '@/components/ListLayout';
import { PostCard } from '@/components/PostCard';
import { postList } from '@/utils/getPostData';

export const metadata: Metadata = {
  title:
    '技術文章列表，Frontend、Backend、TypeScript、NodeJs、React、Vue 各種 Web 開發相關',
};

export default function ProgramsPage() {
  return (
    <main className="container">
      <section className="my-20">
        <ListContainer wrap>
          {postList.map((post) => {
            return (
              <ListItem key={post.slug}>
                <PostCard
                  date={post.date}
                  title={post.title}
                  content={post.description}
                  image={post.openGraph}
                  href={post.slug}
                  hashtag={post.keywords}
                />
              </ListItem>
            );
          })}
        </ListContainer>
      </section>
    </main>
  );
}
