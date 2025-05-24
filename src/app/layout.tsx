import type { Metadata } from 'next';
import { Noto_Sans_TC, Noto_Serif_TC } from 'next/font/google';
import '@/styles/globals.css';

const notoSansTc = Noto_Sans_TC({
  variable: '--font-noto-sans-tc',
  subsets: ['latin'],
});

const notoSerifTc = Noto_Serif_TC({
  variable: '--font-noto-serif-tc',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'LoGravel | 分享與紀錄，成為更好的開發人員',
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
        className={`${notoSansTc.variable} ${notoSerifTc.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
