'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import clsx from 'clsx';

interface PageShellProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  accentColor?: 'violet' | 'cyan';
  children: React.ReactNode;
  actions?: React.ReactNode;
}

const ACCENT = {
  violet: {
    iconBg: 'from-violet-600/30 to-violet-900/10',
    iconColor: 'text-violet-400',
    border: 'border-violet-500/30',
    glow: '0 0 30px rgba(124,58,237,0.15)',
    badge: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  },
  cyan: {
    iconBg: 'from-cyan-600/30 to-cyan-900/10',
    iconColor: 'text-cyan-400',
    border: 'border-cyan-500/30',
    glow: '0 0 30px rgba(6,182,212,0.15)',
    badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

export default function PageShell({
  icon: Icon,
  title,
  description,
  accentColor = 'violet',
  children,
  actions,
}: PageShellProps) {
  const accent = ACCENT[accentColor];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Page header */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="flex items-center gap-4">
          <div
            className={clsx(
              'flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br',
              accent.iconBg
            )}
            style={{
              border: `1px solid`,
              borderColor: accent.border.replace('border-', ''),
              boxShadow: accent.glow,
            }}
          >
            <Icon size={22} className={accent.iconColor} />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              {title}
            </h1>
            {description && (
              <p className="mt-0.5 text-sm text-slate-400">{description}</p>
            )}
          </div>
        </div>
        {actions && <div className="flex gap-2">{actions}</div>}
      </motion.div>

      {/* Divider */}
      <motion.div
        variants={itemVariants}
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(124,58,237,0.3), rgba(6,182,212,0.2), transparent)',
        }}
      />

      {/* Content */}
      <motion.div variants={itemVariants}>{children}</motion.div>
    </motion.div>
  );
}
