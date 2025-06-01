import type { Metadata } from 'next';
import { Noto_Sans_TC, Noto_Serif_TC, Space_Grotesk } from 'next/font/google';
import '@/styles/globals.css';

import GlobalHeader from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';

const notoSansTc = Noto_Sans_TC({
  variable: '--font-noto-sans-tc',
  subsets: ['latin'],
  weight: 'variable',
});

const notoSerifTc = Noto_Serif_TC({
  variable: '--font-noto-serif-tc',
  subsets: ['latin'],
  weight: 'variable',
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: 'variable',
});

export const metadata: Metadata = {
  title: {
    template: 'LoGravel | %s',
    default: 'LoGravel | 分享與紀錄，成為更好的開發人員',
  },
  description:
    'LoGravel 是一位前端工程師的技術部落格，透過分享、紀錄的方式，讓自己對軟體開發更深入，也希望透過本網站內容，可以幫助到正在學習的你。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body
        className={`${notoSansTc.variable} ${notoSerifTc.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <GlobalHeader />
        <main className="container">{children}</main>
        <GlobalFooter />
      </body>
    </html>
  );
}
