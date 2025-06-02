import { ReactNode } from 'react';

export function ListItem({ children }: { children: ReactNode }) {
  return <li className="px-4 pt-8 md:w-1/3">{children}</li>;
}
