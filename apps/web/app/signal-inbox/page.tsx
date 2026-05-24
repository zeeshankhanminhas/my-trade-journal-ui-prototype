import { AppShell } from '@/components/layout/AppShell';
import { AlertInboxItem } from '@/components/trading/AlertInboxItem';
import { StatusBanner } from '@/components/ui/StatusBanner';
import { signalInboxItems } from '@/lib/mockData';

export default function SignalInboxPage() {
  return (
    <AppShell title='Signal Inbox' subtitle='Post-MVP placeholder only'>
      <StatusBanner
        title='Post-MVP feature'
        message='TradingView alerts are not part of MVP v0.1. All actions are placeholders.'
        severity='needs_review'
      />
      {signalInboxItems.map((item) => (
        <AlertInboxItem key={item.id} item={item} />
      ))}
    </AppShell>
  );
}
