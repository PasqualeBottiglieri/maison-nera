import { cn } from '@/lib/utils';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  reverse?: boolean;
}

export function Marquee({
  children,
  className,
  speed = 30,
  reverse = false,
}: MarqueeProps) {
  return (
    <div
      className={cn('overflow-hidden', className)}
      style={{ ['--marquee-duration' as string]: `${speed}s` }}
    >
      <div
        className={cn(
          'flex w-max animate-marquee',
          reverse && '[animation-direction:reverse]'
        )}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
