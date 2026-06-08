import PageShell from '@/components/ui/PageShell';
import PlaceholderGrid from '@/components/ui/PlaceholderGrid';
import { Shirt } from 'lucide-react';

export default function FashionDNAEnginePage() {
  return (
    <PageShell
      icon={Shirt}
      title="Fashion DNA Engine"
      description="Decode and encode your brand's fashion identity."
      accentColor="cyan"
    >
      <PlaceholderGrid columns={2} cards={4} />
    </PageShell>
  );
}
