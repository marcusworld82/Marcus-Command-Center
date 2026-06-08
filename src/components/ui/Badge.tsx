import clsx from 'clsx';

type BadgeVariant = 'violet' | 'cyan' | 'ghost';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const VARIANTS: Record<BadgeVariant, string> = {
  violet:
    'bg-violet-500/10 text-violet-400 border border-violet-500/25',
  cyan:
    'bg-cyan-500/10 text-cyan-400 border border-cyan-500/25',
  ghost:
    'bg-white/[0.05] text-slate-400 border border-white/[0.08]',
};

export default function Badge({
  children,
  variant = 'ghost',
  className,
}: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold uppercase tracking-wider',
        VARIANTS[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
