import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function PostCard({
  date,
  hashtag,
  title,
  content,
  href,
  image,
}: {
  date: string;
  hashtag: string[];
  title: string;
  content: string;
  href: string;
  image: string;
}) {
  return (
    <Link
      href={`programs/${href}`}
      className="group flex h-full flex-col overflow-hidden rounded-[1.25rem] shadow-[0_0_2px_1px_rgba(0,0,0,0.20)] transition-all duration-300 hover:shadow-[0_0_4px_2px_rgba(0,0,0,0.20)]"
    >
      <Image src={image} alt={title} width={416} height={250} />
      <div className="flex h-full grow flex-col p-4">
        <div className="mb-2 flex items-center justify-between text-[#484848]">
          <span className="text-base">{date}</span>
          <div className="flex gap-2">
            {hashtag.slice(0, 2).map((tag) => (
              <span className="text-xl" key={tag}>
                #{tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-6 flex grow flex-col">
          <h4 className="mb-2 text-[28px] font-bold">{title}</h4>
          <p
            className="overflow-hidden text-base text-[#484848]"
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: '2',
            }}
          >
            {content}
          </p>
        </div>
        <Button className="ml-auto cursor-pointer rounded-full border-1 border-black bg-white text-black group-hover:bg-zinc-900 group-hover:text-white">
          閱讀全文
        </Button>
      </div>
    </Link>
  );
}
