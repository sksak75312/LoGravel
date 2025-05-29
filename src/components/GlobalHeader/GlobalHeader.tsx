import Link from 'next/link';

export default function GlobalHeader() {
  return (
    <header className="sticky top-9 container">
      <div className="mt-9 flex items-center justify-between rounded-full bg-[#fbfbfb] px-8 py-4 shadow-[0_0_3px_rgba(0,0,0,0.50)]">
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
