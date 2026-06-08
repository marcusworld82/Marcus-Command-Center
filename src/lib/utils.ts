import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ROUTES = [
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/identity-scene-engine', label: 'Identity Scene Engine' },
  { path: '/viral-concept-engine', label: 'Viral Concept Engine' },
  { path: '/identity-vault', label: 'Identity Vault' },
  { path: '/fashion-dna-engine', label: 'Fashion DNA Engine' },
  { path: '/prop-engine', label: 'Prop Engine' },
  { path: '/trend-engine', label: 'Trend Engine' },
  { path: '/scene-library', label: 'Scene Library' },
  { path: '/prompt-compiler', label: 'Prompt Compiler' },
  { path: '/prompt-history', label: 'Prompt History' },
  { path: '/favorites', label: 'Favorites' },
  { path: '/settings', label: 'Settings' },
] as const;

export type RoutePath = (typeof ROUTES)[number]['path'];
