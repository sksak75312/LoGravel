import { WithContext, WebSite, SearchAction } from 'schema-dts';

import { LdJson } from '@/components/LdJson';

const LdJsonData: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'LoGravel',
  url: 'https://www.logravel.com/',
  alternateName: 'LoGravel', // 網站簡稱或別名
  description:
    'LoGravel 是一位前端工程師的技術部落格，透過分享與紀錄的方式，讓自己對軟體開發更深入，也希望此網站內容，可以幫助到正在學習的你。在這裡，提供前端ｘ後端實戰、瀏覽器專業知識、演算法探討...等相關內容，部落格不定期更新最新文章，歡迎隨時回來閱讀。',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.logravel.com/{search_term_string}',
    'query-input': 'required name=search_term_string',
  } as SearchAction,
  inLanguage: 'zh-TW',
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <LdJson data={LdJsonData}></LdJson>
      {children}
    </>
  );
}
