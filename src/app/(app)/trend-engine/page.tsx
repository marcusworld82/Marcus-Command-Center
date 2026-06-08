import PageShell from '@/components/ui/PageShell';
import PlaceholderGrid from '@/components/ui/PlaceholderGrid';
import { BarChart3 } from 'lucide-react';

export default function TrendEnginePage() {
  return (
    <PageShell
      icon={BarChart3}
      title="Trend Engine"
      description="Analyze and capitalize on emerging creative trends."
      accentColor="cyan"
    >
      <PlaceholderGrid columns={2} cards={4} />
    </PageShell>
  );
}
