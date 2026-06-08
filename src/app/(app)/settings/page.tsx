import PageShell from '@/components/ui/PageShell';
import PlaceholderGrid from '@/components/ui/PlaceholderGrid';
import { Settings } from 'lucide-react';

export default function SettingsPage() {
  return (
    <PageShell
      icon={Settings}
      title="Settings"
      description="Configure your command center experience."
      accentColor="violet"
    >
      <PlaceholderGrid columns={1} cards={3} />
    </PageShell>
  );
}
