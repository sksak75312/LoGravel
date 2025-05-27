import Link from 'next/link';

export default function GlobalHeader() {
  return (
    <header className="container">
      <div className="flex items-center justify-between px-8 py-4 mt-9 rounded-full shadow-[0_0_3px_rgba(0,0,0,0.50)] sticky top-9">
        <Link href="/">
          <h1 className="font-space-grotesk text-[32px] font-bold text-[#2D232E]">
            LoGravel
          </h1>
        </Link>
        <nav className="flex gap-7">
          <Link href="/" className="text-xl">
            首頁
          </Link>
          <Link href="programs" className="text-xl">
            技術文章
          </Link>
          <Link href="challenges" className="text-xl">
            刷刷題
          </Link>
        </nav>
        <div className="w-[132px]"></div>
      </div>
    </header>
  );
}
