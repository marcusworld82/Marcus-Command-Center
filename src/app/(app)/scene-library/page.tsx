import PageShell from '@/components/ui/PageShell';
import PlaceholderGrid from '@/components/ui/PlaceholderGrid';
import { Film } from 'lucide-react';

export default function SceneLibraryPage() {
  return (
    <PageShell
      icon={Film}
      title="Scene Library"
      description="Browse and organize your curated scene collection."
      accentColor="violet"
    >
      <PlaceholderGrid columns={3} cards={9} />
    </PageShell>
  );
}
