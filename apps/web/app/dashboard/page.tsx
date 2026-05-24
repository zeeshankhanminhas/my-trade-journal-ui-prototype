import { AppShell } from '@/components/layout/AppShell';

type QueueItem = {
  asset: string;
  setup: string;
  score: number;
  recommendation: string;
  status: string;
  action: string;
};

const riskCards = [
  { label: 'Risk Used Today', value: '0.25% / 1.5%', state: 'Safe', tone: 'green' },
  { label: 'Daily Loss Lock', value: 'Not Active', state: 'Clear', tone: 'green' },
  { label: 'Weekly Risk Used', value: '0.9% / 4%', state: 'Normal', tone: 'blue' },
  { label: 'Rule Violations', value: '1', state: 'Watch', tone: 'amber' },
  { label: 'System Follow Rate', value: '72%', state: '+6%', tone: 'green' },
  { label: 'Review Debt', value: '3', state: 'Needs review', tone: 'amber' },
];

const queueItems: QueueItem[] = [
  {
    asset: 'SPY',
    setup: 'Morning Gap',
    score: 82,
    recommendation: 'Wait',
    status: 'Awaiting Action',
    action: 'Review spread condition',
  },
  {
    asset: 'TSLA',
    setup: 'Skipped Volatility Setup',
    score: 76,
    recommendation: 'Skipped',
    status: 'Outcome Review',
    action: 'Outcome review required',
  },
  {
    asset: 'QQQ',
    setup: 'Range Break',
    score: 69,
    recommendation: 'Watch',
    status: 'Awaiting Confirmation',
    action: 'Wait for volume expansion',
  },
];

const learningCards = [
  { label: 'Best Setup Type', value: 'Gap continuation' },
  { label: 'Worst Setup Type', value: 'Late breakout' },
  { label: 'Best Time Window', value: 'First 90 minutes' },
  { label: 'Net Expectancy', value: '+0.42R' },
];

function toneClasses(tone: string) {
  if (tone === 'green') return 'border-emerald-200 bg-emerald-50 text-emerald-700';
  if (tone === 'amber') return 'border-amber-200 bg-amber-50 text-amber-700';
  if (tone === 'red') return 'border-red-200 bg-red-50 text-red-700';
  return 'border-blue-200 bg-blue-50 text-blue-700';
}

function ScoreBadge({ score }: { score: number }) {
  const tone = score >= 80 ? 'bg-emerald-100 text-emerald-700 ring-emerald-200' : score >= 70 ? 'bg-amber-100 text-amber-700 ring-amber-200' : 'bg-slate-100 text-slate-700 ring-slate-200';
  return <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ring-1 ${tone}`}>{score}</span>;
}

export default function DashboardPage() {
  return (
    <AppShell title="Dashboard" subtitle="Risk-first trading control room">
      <div className="space-y-5 md:space-y-6">
        <section className="overflow-hidden rounded-[2rem] border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-5 shadow-sm md:p-7">
          <div className="grid gap-5 xl:grid-cols-[1.2fr_1fr]">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Trade Status</span>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">Manual Execution Only</span>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">No Broker Connection</span>
              </div>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">TRADE ALLOWED</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
                All core risk parameters are normal. Continue only if setup quality, spread, emotion state, and pending reviews pass the gate.
              </p>
              <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
                <span className="font-semibold">Next Required Action:</span> Review 2 skipped setups before taking another full-size trade.
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Risk Mode</p>
                <p className="mt-2 text-2xl font-bold text-slate-950">Normal Mode</p>
                <p className="mt-1 text-xs text-emerald-700">No lock active</p>
              </div>
              <div className="rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Today’s Risk Used</p>
                <p className="mt-2 text-2xl font-bold text-slate-950">0.25% / 1.5%</p>
                <div className="mt-3 h-2 rounded-full bg-slate-100"><div className="h-2 w-[17%] rounded-full bg-emerald-500" /></div>
              </div>
              <div className="rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Open Reviews</p>
                <p className="mt-2 text-2xl font-bold text-slate-950">3</p>
                <p className="mt-1 text-xs text-slate-500">2 skipped, 1 executed</p>
              </div>
              <div className="rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Pending Decisions</p>
                <p className="mt-2 text-2xl font-bold text-slate-950">2</p>
                <p className="mt-1 text-xs text-blue-700">Awaiting action</p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
          {riskCards.map((card) => (
            <div key={card.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{card.label}</p>
              <p className="mt-2 text-xl font-bold text-slate-950">{card.value}</p>
              <span className={`mt-3 inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${toneClasses(card.tone)}`}>{card.state}</span>
            </div>
          ))}
        </section>

        <section className="grid gap-5 xl:grid-cols-[1.45fr_0.9fr]">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-3 border-b border-slate-100 pb-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Main operating queue</p>
                <h3 className="mt-1 text-2xl font-bold text-slate-950">Decision Queue</h3>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                <span className="rounded-full bg-blue-600 px-3 py-1.5 text-white">Awaiting Action 2</span>
                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-600">Outcome Review 1</span>
                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-600">Skipped 2</span>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              {queueItems.map((item) => (
                <div key={`${item.asset}-${item.setup}`} className="grid gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:grid-cols-[1fr_auto_auto] md:items-center">
                  <div>
                    <p className="text-sm font-bold text-slate-950">{item.asset} {item.setup}</p>
                    <p className="mt-1 text-xs text-slate-500">{item.status} • {item.action}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <ScoreBadge score={item.score} />
                    <div>
                      <p className="text-xs text-slate-500">Recommendation</p>
                      <p className="text-sm font-semibold text-slate-900">{item.recommendation}</p>
                    </div>
                  </div>
                  <button className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700">Review</button>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-blue-200 bg-blue-50 p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Highest priority</p>
            <h3 className="mt-2 text-2xl font-bold text-slate-950">Current Setup Focus</h3>
            <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-lg font-bold text-slate-950">SPY Morning Gap Continuation</p>
                  <p className="mt-1 text-sm text-slate-500">First 90 minutes • Gap continuation</p>
                </div>
                <ScoreBadge score={82} />
              </div>
              <div className="mt-4 grid gap-3 text-sm">
                <div className="flex justify-between"><span className="text-slate-500">Bias</span><span className="font-semibold text-emerald-700">Long</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Recommendation</span><span className="font-semibold text-blue-700">Wait</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Allowed Risk</span><span className="font-semibold text-slate-950">0.75%</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Invalidation</span><span className="font-semibold text-slate-950">5126.25</span></div>
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-amber-800"><span className="font-semibold">Warning:</span> Spread elevated</div>
                <div className="rounded-xl border border-blue-200 bg-blue-50 p-3 text-blue-800"><span className="font-semibold">Next:</span> Wait for confirmation</div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-3">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-bold text-slate-950">Behaviour / Discipline</h3>
            <div className="mt-4 space-y-3 text-sm">
              {[
                ['Emotion Risk', 'Medium'],
                ['Last Override', 'Skipped valid setup'],
                ['Follow Rate', '72%'],
                ['Rule Violations', '1'],
                ['Review Debt', '3'],
                ['Current Mode', 'Normal'],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between border-b border-slate-100 pb-2 last:border-0">
                  <span className="text-slate-500">{label}</span>
                  <span className="font-semibold text-slate-950">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-bold text-slate-950">Learning Snapshot</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {learningCards.map((card) => (
                <div key={card.label} className="rounded-2xl bg-slate-50 p-3">
                  <p className="text-xs uppercase tracking-wide text-slate-500">{card.label}</p>
                  <p className="mt-1 font-semibold text-slate-950">{card.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-bold text-slate-950">Performance Summary</h3>
            <p className="mt-1 text-xs text-slate-500">Secondary view. Process comes first.</p>
            <div className="mt-4 space-y-3 text-sm">
              {[
                ['Weekly Net P&L', '+£38.50'],
                ['Average R', '+0.42R'],
                ['Win Rate', '58%'],
                ['Fees + Spread Drag', '£6.40'],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between border-b border-slate-100 pb-2 last:border-0">
                  <span className="text-slate-500">{label}</span>
                  <span className="font-semibold text-slate-950">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
