'use client';

import { Menu, Bell, Search, User } from 'lucide-react';

interface TopNavProps {
  onMenuClick: () => void;
  sidebarCollapsed: boolean;
}

export default function TopNav({ onMenuClick }: TopNavProps) {
  return (
    <header
      className="sticky top-0 z-20 flex h-16 items-center justify-between px-4 md:px-6"
      style={{
        background: 'rgba(10,11,16,0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* Left */}
      <div className="flex items-center gap-4">
        {/* Mobile menu toggle */}
        <button
          onClick={onMenuClick}
          className="rounded-xl p-2 text-slate-400 transition-colors hover:bg-white/[0.08] hover:text-white lg:hidden"
          aria-label="Toggle menu"
        >
          <Menu size={20} />
        </button>

        {/* Search bar */}
        <div
          className="hidden items-center gap-2.5 rounded-xl px-4 py-2 text-sm text-slate-500 transition-colors hover:bg-white/[0.08] hover:text-slate-300 sm:flex"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <Search size={15} />
          <span className="hidden md:block">Search anything...</span>
          <kbd
            className="hidden rounded-md px-1.5 py-0.5 text-[10px] text-slate-600 md:block"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        {/* Notifications */}
        <button
          className="relative rounded-xl p-2 text-slate-400 transition-colors hover:bg-white/[0.08] hover:text-white"
          aria-label="Notifications"
        >
          <Bell size={18} />
          <span
            className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full"
            style={{ background: '#7C3AED', boxShadow: '0 0 6px #7C3AED' }}
          />
        </button>

        {/* Avatar */}
        <button
          className="flex h-8 w-8 items-center justify-center rounded-xl text-slate-300 transition-all hover:ring-2 hover:ring-violet-500/50"
          style={{
            background: 'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(6,182,212,0.2))',
            border: '1px solid rgba(124,58,237,0.35)',
          }}
          aria-label="Profile"
        >
          <User size={15} />
        </button>

        {/* Status badge */}
        <div
          className="hidden items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-medium sm:flex"
          style={{
            background: 'rgba(6,182,212,0.1)',
            border: '1px solid rgba(6,182,212,0.2)',
            color: '#06B6D4',
          }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full animate-pulse"
            style={{ background: '#06B6D4' }}
          />
          LIVE
        </div>
      </div>
    </header>
  );
}
