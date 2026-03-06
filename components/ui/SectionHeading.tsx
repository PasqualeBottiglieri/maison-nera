import { cn } from '@/lib/utils';
import { MotionReveal } from '@/components/motion/MotionPrimitives';

interface SectionHeadingProps {
  label?: string;
  title: string;
  className?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  label,
  title,
  className,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <MotionReveal
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'text-center',
        className
      )}
    >
      {label && (
        <p className="mb-3 font-mono text-fluid-xs uppercase tracking-[0.2em] text-oro">
          {label}
        </p>
      )}
      <h2 className="font-display text-fluid-3xl font-light text-crema">
        {title}
      </h2>
      <div
        className={cn(
          'mt-4 h-[1px] w-16 bg-oro/40',
          align === 'center' && 'mx-auto'
        )}
      />
    </MotionReveal>
  );
}
