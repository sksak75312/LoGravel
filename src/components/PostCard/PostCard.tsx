import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Tag } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Post } from '@/types/interface';

export default function PostCard({
  title,
  description,
  updatedAt,
  keywords,
  openGraph,
  slug,
  category,
}: Post) {
  return (
    <Link
      href={`/programs/${slug}`}
      className="group bg-background inset-shadow-md hover:outline-primary flex h-full w-full flex-col overflow-hidden rounded-2xl border-1 bg-linear-to-br from-[#c7996b33] via-[#f5c7990d] to-transparent transition-all duration-300 hover:scale-[1.03] hover:outline-1"
    >
      <div className="relative h-full overflow-hidden md:min-h-[200px] md:basis-1 lg:min-h-[250px] xl:min-h-[215px]">
        <Image
          src={openGraph}
          alt={title}
          width={416}
          height={250}
          className="h-full w-full object-cover transition-all duration-300 group-hover:scale-[1.05]"
        />
        <Badge variant="design" className="absolute top-3 left-3 rounded-full">
          {category}
        </Badge>
      </div>
      <div className="flex h-full grow flex-col px-5 py-8 md:basis-2">
        <span className="mb-4 flex items-center gap-x-2 text-base">
          <Calendar size={14} className="text-sm" />
          <time dateTime={updatedAt}>{updatedAt}</time>
        </span>
        <div className="mb-10 flex grow flex-col">
          <h4 className="mb-4 text-2xl font-bold text-white">{title}</h4>
          <p
            className="mb-3 overflow-hidden text-base"
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: '3',
            }}
          >
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {keywords.slice(0, 3).map((tag) => (
              <Badge variant="outline" key={tag}>
                <span className="flex items-center gap-1 text-xs">
                  <Tag size={12} />
                  {tag}
                </span>
              </Badge>
            ))}
          </div>
        </div>
        <Button size="sm" variant="design">
          閱讀全文
        </Button>
      </div>
    </Link>
  );
}
