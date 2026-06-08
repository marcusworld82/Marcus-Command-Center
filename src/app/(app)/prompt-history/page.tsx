import PageShell from '@/components/ui/PageShell';
import PlaceholderGrid from '@/components/ui/PlaceholderGrid';
import { History } from 'lucide-react';

export default function PromptHistoryPage() {
  return (
    <PageShell
      icon={History}
      title="Prompt History"
      description="Review and reuse your previously compiled prompts."
      accentColor="violet"
    >
      <PlaceholderGrid columns={1} cards={4} />
    </PageShell>
  );
}
