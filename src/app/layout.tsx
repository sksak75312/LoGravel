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
    template: '%s | LoGravel',
    default: '分享與紀錄，成為更好的開發人員 | LoGravel',
  },
  description:
    'LoGravel 是一位前端工程師的技術部落格，透過分享與紀錄的方式，讓自己對軟體開發更深入，也希望此網站內容，可以幫助到正在學習的你。在這裡，提供前端ｘ後端實戰、瀏覽器專業知識、演算法探討...等相關內容，部落格不定期更新最新文章，歡迎隨時回來閱讀。',
  keywords: [
    '前端開發',
    'Website專業知識',
    'React',
    'JavaScript',
    'TypeScript',
    'Next',
    '演算法',
    'LeetCode',
    'LoGravel',
  ],
  authors: [
    { name: '焦冠儒' },
    { name: 'EeroChiao', url: 'https://github.com/sksak75312' },
  ],
  creator: 'LoGravel',
  publisher: 'LoGravel',

  metadataBase: new URL('https://www.logravel.com/'),
  alternates: {
    canonical: '/',
  },
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
        {children}
        <GlobalFooter />
      </body>
    </html>
  );
}
