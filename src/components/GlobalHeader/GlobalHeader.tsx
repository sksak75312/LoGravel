import Link from 'next/link';

type Page = {
  href: string;
  text: string;
};

const pages: Page[] = [
  {
    href: '/',
    text: '首頁',
  },
  {
    href: '/programs',
    text: '技術文章',
  },
];

export default function GlobalHeader() {
  return (
    <header className="sticky top-0 z-[999] bg-[#fbfbfb] shadow-[0_0_3px_rgba(0,0,0,0.50)]">
      <div className="container flex items-center justify-between py-2">
        <Link
          href="/"
          className="transition-transform duration-300 hover:scale-[1.1]"
        >
          <h1 className="font-space-grotesk text-[32px] font-bold text-[#2D232E]">
            LoGravel
          </h1>
        </Link>
        <nav className="flex gap-7">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="text-xl text-black transition-all duration-200 hover:opacity-50"
            >
              {page.text}
            </Link>
          ))}
        </nav>
        <div className="w-[132px]"></div>
      </div>
    </header>
  );
}
