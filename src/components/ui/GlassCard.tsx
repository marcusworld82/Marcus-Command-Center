'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import clsx from 'clsx';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  glow?: 'violet' | 'cyan' | 'none';
  hover?: boolean;
  className?: string;
}

const GLOW = {
  violet: '0 0 30px rgba(124,58,237,0.18), 0 0 60px rgba(124,58,237,0.06)',
  cyan: '0 0 30px rgba(6,182,212,0.18), 0 0 60px rgba(6,182,212,0.06)',
  none: 'none',
};

export default function GlassCard({
  children,
  glow = 'none',
  hover = false,
  className,
  style,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={clsx(
        'glass rounded-2xl',
        hover && 'glass-hover cursor-pointer',
        className
      )}
      style={{
        boxShadow: GLOW[glow],
        ...style,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
