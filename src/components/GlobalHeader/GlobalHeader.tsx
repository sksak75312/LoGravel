import Link from 'next/link';

export default function GlobalHeader() {
  return (
    <header className="sticky top-0 z-[999] bg-[#fbfbfb] shadow-[0_0_3px_rgba(0,0,0,0.50)]">
      <div className="container flex items-center justify-between py-4">
        <Link href="/">
          <h1 className="font-space-grotesk text-[32px] font-bold text-[#2D232E]">
            LoGravel
          </h1>
        </Link>
        <nav className="flex gap-7">
          <Link href="/" className="text-xl text-black">
            首頁
          </Link>
          <Link href="/programs" className="text-xl text-black">
            技術文章
          </Link>
          <Link href="/challenges" className="text-xl text-black">
            刷刷題
          </Link>
        </nav>
        <div className="w-[132px]"></div>
      </div>
    </header>
  );
}
