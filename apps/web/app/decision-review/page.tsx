import { AppShell } from '@/components/layout/AppShell';
import { DecisionLabelPill } from '@/components/trading/DecisionLabelPill';
import { ReviewComparisonCard } from '@/components/trading/ReviewComparisonCard';
import { SectionCard } from '@/components/ui/SectionCard';
import { decisionReviewData } from '@/lib/mockData';

export default function DecisionReviewPage() {
  return (
    <AppShell title='Decision Review' subtitle='Market Data vs Recommendation vs User Action vs Outcome'>
      <ReviewComparisonCard review={decisionReviewData} />

      <SectionCard title='Final Review Label'>
        <div className='space-y-2'>
          <DecisionLabelPill label={decisionReviewData.finalLabel} />
          <p className='text-sm text-slate-700'>Lesson: {decisionReviewData.lesson}</p>
          <p className='text-sm text-slate-600'>Future rule suggestion: {decisionReviewData.futureRuleSuggestion}</p>
        </div>
      </SectionCard>
    </AppShell>
  );
}
