import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';

export default function Hamburger({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <Button
      className="group relative flex h-6 cursor-pointer flex-col items-center justify-center rounded-full bg-transparent p-1 hover:bg-transparent lg:hidden"
      onClick={onClick}
    >
      <div
        className={cn(
          'group-hover:bg-primary group-active:bg-primary absolute top-0 h-[3px] w-7 shrink-0 rotate-0 rounded-full bg-white transition-all duration-200',
          { 'top-1/2 -translate-y-1/2 rotate-45': isOpen },
        )}
      ></div>
      <div
        className={cn(
          'group-hover:bg-primary group-active:bg-primary h-[3px] w-7 shrink-0 rounded-full bg-white transition-all duration-200',
          { 'opacity-0': isOpen },
        )}
      ></div>
      <div
        className={cn(
          'group-hover:bg-primary group-active:bg-primary absolute bottom-0 h-[3px] w-7 shrink-0 rounded-full bg-white transition-all duration-200',
          { 'bottom-1/2 translate-y-1/2 -rotate-45': isOpen },
        )}
      ></div>
    </Button>
  );
}
