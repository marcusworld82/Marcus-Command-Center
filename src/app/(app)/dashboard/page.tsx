import PageShell from '@/components/ui/PageShell';
import PlaceholderGrid from '@/components/ui/PlaceholderGrid';
import { LayoutDashboard } from 'lucide-react';

export default function DashboardPage() {
  return (
    <PageShell
      icon={LayoutDashboard}
      title="Dashboard"
      description="Your creative command center at a glance."
      accentColor="violet"
    >
      <PlaceholderGrid columns={3} cards={6} />
    </PageShell>
  );
}
