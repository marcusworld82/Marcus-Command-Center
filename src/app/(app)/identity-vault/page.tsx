import PageShell from '@/components/ui/PageShell';
import PlaceholderGrid from '@/components/ui/PlaceholderGrid';
import { Shield } from 'lucide-react';

export default function IdentityVaultPage() {
  return (
    <PageShell
      icon={Shield}
      title="Identity Vault"
      description="Store and manage all identity assets securely."
      accentColor="violet"
    >
      <PlaceholderGrid columns={3} cards={6} />
    </PageShell>
  );
}
