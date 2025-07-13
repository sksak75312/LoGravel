import { ReactNode } from 'react';

export function ListItem({ children }: { children: ReactNode }) {
  return <li className="w-full px-4 pt-8 md:w-1/2 xl:w-1/3">{children}</li>;
}
