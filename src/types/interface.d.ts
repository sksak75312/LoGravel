export interface Post {
  title: string;
  description: string;
  date: string;
  keywords: string[];
  openGraph: string;
  slug: string;
  category: string;
}

export interface Page {
  href: string;
  text: string;
}
