import { WebSite, Article } from 'schema-dts';

type LdJsonFormatter = WebSite | Article;

/**
 * @description 以下程式碼使用 Next 提供的寫法
 * @param {data}
 * @returns
 */

export default function LdJson({ data }: { data: LdJsonFormatter }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}
