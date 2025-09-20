import Link from 'next/link';
import { Button } from '@/components/ui/button';

import {
  Github,
  Database,
  Chrome,
  Compass,
  Bug,
  CodeXml,
  Terminal,
  Ampersands,
  Percent,
  ArrowRight,
} from 'lucide-react';

import { PostCard } from '@/components';
import { ListContainer, ListItem } from '@/components/ListLayout';

import { postList } from '@/utils/getPostData';

export default function Home() {
  return (
    <>
      <main>
        <section className="relative h-screen">
          <span className="absolute top-0 left-0 -z-1 block h-full w-full bg-linear-to-br from-[#c7996b33] via-[#f5c7990d] to-transparent"></span>
          <span className="absolute top-24 left-24 h-40 w-40 rounded-full bg-[#c7996b26] blur-3xl"></span>
          {/* <span className="bg-secondary/5 absolute right-24 bottom-24 h-56 w-56 rounded-full blur-2xl"></span> */}
          <Bug className="animate-right-to-left absolute right-0 bottom-1/4 -z-1 -rotate-90 opacity-0" />
          <Github className="text-primary/9 animate-scale-zoom absolute top-1/6 left-1/6" />
          <Database className="text-primary/9 animate-scale-zoom absolute top-1/2 left-1/4" />
          <Chrome className="text-primary/9 animate-scale-zoom absolute bottom-1/6 left-1/12" />
          <Compass className="text-primary/9 animate-scale-zoom absolute right-1/12 bottom-1/12" />
          <CodeXml className="text-primary/9 animate-scale-zoom absolute top-1/12 right-1/5" />
          <Terminal className="text-primary/9 animate-scale-zoom absolute top-60 right-1/3" />
          <Ampersands className="text-primary/9 animate-scale-zoom absolute bottom-60 left-1/3" />
          <Percent className="text-primary/9 animate-scale-zoom absolute right-1/4 bottom-40" />
          <div className="container flex h-screen flex-col items-center justify-center">
            <h2 className="from-primary animate-text-gradient to-primary mb-8 bg-gradient-to-r via-[#ddbe9b] bg-size-[200%_50%] bg-clip-text text-5xl font-bold text-transparent sm:text-6xl md:text-8xl">
              分享、紀錄
            </h2>
            <h3 className="mb-8 flex flex-col gap-y-2 text-2xl tracking-widest sm:block md:text-3xl">
              <span>前端開發．後端開發</span>
              <span className="hidden sm:inline">．</span>
              <span>軟體工程．演算法</span>
            </h3>
            <div className="from-card/80 to-card/60 border-primary/20 bg-background w-full max-w-md rounded-2xl border-1 bg-linear-to-br p-6 shadow-md/30">
              <pre>
                <span className="text-primary">const</span> isTech = true;
              </pre>
              <pre>
                <span className="text-primary">while</span>(LoGravel) {'{'}
              </pre>
              <pre>
                {' '}
                blog.<span className="text-primary">sharing</span>(
                <span className="text-[#f97316]">true</span>);
              </pre>
              <pre>{'}'}</pre>
            </div>
            <div className="mt-8 flex w-full max-w-md md:absolute md:bottom-1/6 md:left-1/2 md:-translate-x-1/2 md:gap-2">
              <Link href="/programs" className="w-full md:w-3/5">
                <Button variant="design" size="lg" className="w-full">
                  閱讀文章
                  <ArrowRight />
                </Button>
              </Link>
              <div className="hidden w-2/5 md:block">
                <Button variant="design" size="lg" className="w-full" disabled>
                  關於我
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="container my-20">
          <div className="relative text-center">
            <h3 className="text-primary mb-20 text-4xl leading-[1.5] font-medium sm:text-5xl">
              最新文章
              <span className="bg-primary absolute -bottom-6 left-1/2 block h-1 w-3/12 -translate-x-1/2 sm:w-2/12 md:w-1/12"></span>
            </h3>
          </div>
          <ListContainer wrap>
            {postList.slice(0, 6).map((post) => {
              return (
                <ListItem key={post.slug}>
                  <PostCard {...post} />
                </ListItem>
              );
            })}
          </ListContainer>
        </section>
      </main>
    </>
  );
}
