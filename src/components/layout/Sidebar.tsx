'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Sparkles,
  TrendingUp,
  Shield,
  Shirt,
  Package,
  BarChart3,
  Film,
  Code2,
  History,
  Star,
  Settings,
  ChevronLeft,
  X,
  Zap,
} from 'lucide-react';
import clsx from 'clsx';

const NAV_SECTIONS = [
  {
    label: 'Core',
    items: [
      { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    ],
  },
  {
    label: 'Engines',
    items: [
      { href: '/identity-scene-engine', label: 'Identity Scene', icon: Sparkles },
      { href: '/viral-concept-engine', label: 'Viral Concept', icon: TrendingUp },
      { href: '/fashion-dna-engine', label: 'Fashion DNA', icon: Shirt },
      { href: '/prop-engine', label: 'Prop Engine', icon: Package },
      { href: '/trend-engine', label: 'Trend Engine', icon: BarChart3 },
    ],
  },
  {
    label: 'Library',
    items: [
      { href: '/identity-vault', label: 'Identity Vault', icon: Shield },
      { href: '/scene-library', label: 'Scene Library', icon: Film },
      { href: '/favorites', label: 'Favorites', icon: Star },
    ],
  },
  {
    label: 'Prompts',
    items: [
      { href: '/prompt-compiler', label: 'Prompt Compiler', icon: Code2 },
      { href: '/prompt-history', label: 'Prompt History', icon: History },
    ],
  },
  {
    label: 'System',
    items: [
      { href: '/settings', label: 'Settings', icon: Settings },
    ],
  },
];

interface SidebarProps {
  open: boolean;
  collapsed: boolean;
  onClose: () => void;
  onToggleCollapse: () => void;
}

export default function Sidebar({
  open,
  collapsed,
  onClose,
  onToggleCollapse,
}: SidebarProps) {
  const pathname = usePathname();

  const sidebarWidth = collapsed ? 72 : 260;

  return (
    <>
      {/* Desktop sidebar */}
      <motion.aside
        animate={{ width: sidebarWidth }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed left-0 top-0 z-30 hidden h-screen flex-col overflow-hidden lg:flex"
        style={{
          background:
            'linear-gradient(180deg, rgba(15,15,25,0.95) 0%, rgba(10,11,16,0.98) 100%)',
          borderRight: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <SidebarContent
          collapsed={collapsed}
          pathname={pathname}
          onToggleCollapse={onToggleCollapse}
        />
      </motion.aside>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed left-0 top-0 z-30 flex h-screen w-[260px] flex-col overflow-hidden lg:hidden"
            style={{
              background:
                'linear-gradient(180deg, rgba(15,15,25,0.98) 0%, rgba(10,11,16,1) 100%)',
              borderRight: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X size={18} />
            </button>
            <SidebarContent
              collapsed={false}
              pathname={pathname}
              onToggleCollapse={onClose}
            />
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

function SidebarContent({
  collapsed,
  pathname,
  onToggleCollapse,
}: {
  collapsed: boolean;
  pathname: string;
  onToggleCollapse: () => void;
}) {
  return (
    <div className="flex h-full flex-col overflow-y-auto overflow-x-hidden py-4">
      {/* Logo */}
      <div
        className={clsx(
          'mb-6 flex items-center gap-3 px-4',
          collapsed && 'justify-center px-0'
        )}
      >
        <div
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl"
          style={{
            background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
            boxShadow: '0 0 20px rgba(124,58,237,0.4)',
          }}
        >
          <Zap size={18} className="text-white" />
        </div>
        <AnimatePresence>
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-sm font-bold tracking-wider text-white">
                MARCUS
              </p>
              <p
                className="text-[10px] font-semibold tracking-[0.2em]"
                style={{
                  background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                COMMAND CENTER
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Nav sections */}
      <nav className="flex-1 space-y-1 px-2">
        {NAV_SECTIONS.map((section) => (
          <div key={section.label} className="mb-2">
            <AnimatePresence>
              {!collapsed && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mb-1 px-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500"
                >
                  {section.label}
                </motion.p>
              )}
            </AnimatePresence>
            {section.items.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  title={collapsed ? item.label : undefined}
                  className={clsx(
                    'group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200',
                    collapsed && 'justify-center px-0',
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white'
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background:
                          'linear-gradient(135deg, rgba(124,58,237,0.25), rgba(6,182,212,0.12))',
                        border: '1px solid rgba(124,58,237,0.35)',
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex-shrink-0">
                    <Icon
                      size={18}
                      className={clsx(
                        isActive ? 'text-violet-400' : 'text-slate-500 group-hover:text-slate-300'
                      )}
                    />
                  </span>
                  <AnimatePresence>
                    {!collapsed && (
                      <motion.span
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -6 }}
                        transition={{ duration: 0.15 }}
                        className="relative z-10 truncate"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Collapse toggle (desktop only) */}
      <div className="mt-auto border-t border-white/[0.06] p-3">
        <button
          onClick={onToggleCollapse}
          className={clsx(
            'hidden w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-400 transition-all duration-200 hover:bg-white/[0.06] hover:text-white lg:flex',
            collapsed && 'justify-center px-0'
          )}
        >
          <motion.div animate={{ rotate: collapsed ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronLeft size={16} />
          </motion.div>
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -6 }}
                transition={{ duration: 0.15 }}
                className="text-xs"
              >
                Collapse
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
}
