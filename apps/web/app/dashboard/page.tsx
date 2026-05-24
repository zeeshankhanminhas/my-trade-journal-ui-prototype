import { AppShell } from '@/components/layout/AppShell';
import { DecisionLabelPill } from '@/components/trading/DecisionLabelPill';
import { MetricCard } from '@/components/ui/MetricCard';
import { SectionCard } from '@/components/ui/SectionCard';
import { StatusBanner } from '@/components/ui/StatusBanner';
import { dashboardMetrics, dashboardStatus, recentSetups } from '@/lib/mockData';

export default function DashboardPage() {
  return (
    <AppShell title='Dashboard' subtitle='Risk-first operating view'>
      <StatusBanner title={dashboardStatus.title} message={dashboardStatus.message} severity='trade_allowed' />

      <section className='grid gap-3 sm:grid-cols-2 xl:grid-cols-5'>
        {dashboardMetrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </section>

      <section className='grid gap-3 xl:grid-cols-2'>
        <SectionCard title='Recent Setup'>
          {recentSetups.map((setup) => (
            <p key={setup.id} className='text-sm text-slate-700'>
              {setup.id} • {setup.setupType} • Score {setup.systemScore}
            </p>
          ))}
        </SectionCard>

        <SectionCard title='Recent Decision Labels'>
          <div className='space-y-2'>
            <DecisionLabelPill label='SKIPPED_GOOD_TRADE' />
            <p className='text-sm text-slate-600'>Skipping is a valid disciplined outcome when risk context is unclear.</p>
          </div>
        </SectionCard>
      </section>
    </AppShell>
  );
}
