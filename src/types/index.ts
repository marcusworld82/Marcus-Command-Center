export type AccentColor = 'violet' | 'cyan';

export type NavItem = {
  href: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

export type NavSection = {
  label: string;
  items: NavItem[];
};

export type PageMeta = {
  title: string;
  description?: string;
  accent?: AccentColor;
};
