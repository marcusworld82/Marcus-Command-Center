'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

interface PlaceholderGridProps {
  columns?: 1 | 2 | 3;
  cards?: number;
}

const colClass: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3',
};

export default function PlaceholderGrid({
  columns = 3,
  cards = 6,
}: PlaceholderGridProps) {
  return (
    <div className={clsx('grid gap-4', colClass[columns])}>
      {Array.from({ length: cards }).map((_, i) => (
        <PlaceholderCard key={i} index={i} />
      ))}
    </div>
  );
}

function PlaceholderCard({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.35, ease: 'easeOut' }}
      className="glass glass-hover group relative min-h-[160px] cursor-pointer overflow-hidden rounded-2xl p-5"
    >
      {/* Gradient accent top line */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            index % 2 === 0
              ? 'linear-gradient(90deg, transparent, rgba(124,58,237,0.6), transparent)'
              : 'linear-gradient(90deg, transparent, rgba(6,182,212,0.6), transparent)',
        }}
      />

      {/* Skeleton lines */}
      <div className="space-y-3">
        <div className="h-3 w-2/3 animate-pulse rounded-full bg-white/[0.07]" />
        <div className="h-2 w-full animate-pulse rounded-full bg-white/[0.04]" />
        <div className="h-2 w-5/6 animate-pulse rounded-full bg-white/[0.04]" />
      </div>

      {/* Corner accent */}
      <div
        className="absolute bottom-3 right-3 h-6 w-6 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            index % 2 === 0
              ? 'rgba(124,58,237,0.3)'
              : 'rgba(6,182,212,0.3)',
          boxShadow:
            index % 2 === 0
              ? '0 0 12px rgba(124,58,237,0.5)'
              : '0 0 12px rgba(6,182,212,0.5)',
        }}
      />

      {/* Coming soon badge */}
      <div className="absolute bottom-4 left-5">
        <span
          className="rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            color: 'rgba(255,255,255,0.25)',
          }}
        >
          Coming Soon
        </span>
      </div>
    </motion.div>
  );
}
