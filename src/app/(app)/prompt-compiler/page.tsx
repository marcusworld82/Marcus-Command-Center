import PageShell from '@/components/ui/PageShell';
import PlaceholderGrid from '@/components/ui/PlaceholderGrid';
import { Code2 } from 'lucide-react';

export default function PromptCompilerPage() {
  return (
    <PageShell
      icon={Code2}
      title="Prompt Compiler"
      description="Build, refine, and compile precision AI prompts."
      accentColor="cyan"
    >
      <PlaceholderGrid columns={1} cards={2} />
    </PageShell>
  );
}
