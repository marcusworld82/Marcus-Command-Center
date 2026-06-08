import PageShell from '@/components/ui/PageShell';
import PlaceholderGrid from '@/components/ui/PlaceholderGrid';
import { Package } from 'lucide-react';

export default function PropEnginePage() {
  return (
    <PageShell
      icon={Package}
      title="Prop Engine"
      description="Build and manage creative props and assets."
      accentColor="violet"
    >
      <PlaceholderGrid columns={3} cards={6} />
    </PageShell>
  );
}
