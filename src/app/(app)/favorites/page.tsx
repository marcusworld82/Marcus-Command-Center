import PageShell from '@/components/ui/PageShell';
import PlaceholderGrid from '@/components/ui/PlaceholderGrid';
import { Star } from 'lucide-react';

export default function FavoritesPage() {
  return (
    <PageShell
      icon={Star}
      title="Favorites"
      description="Your curated collection of top assets and prompts."
      accentColor="cyan"
    >
      <PlaceholderGrid columns={3} cards={6} />
    </PageShell>
  );
}
