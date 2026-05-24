import {
  AlertInboxItem,
  DashboardMetric,
  DecisionReview,
  RiskGateCheck,
  Setup,
  SystemRecommendation,
  UserAction,
} from './types';

export const dashboardStatus = {
  title: 'TRADE ALLOWED',
  message: 'All risk parameters normal. Continue only if setup quality passes.',
  severity: 'trade_allowed' as const,
};

export const dashboardMetrics: DashboardMetric[] = [
  { label: 'Trade Status', value: 'Trade Allowed', helperText: 'Risk gate can proceed after quality check', variant: 'success' },
  { label: 'Account Balance', value: '£1,000', helperText: 'Demo balance for prototype only', variant: 'neutral' },
  { label: 'Risk Used Today', value: '0.25%', helperText: 'Daily cap awareness', variant: 'warning' },
  { label: 'Daily Loss Lock', value: 'Not Active', helperText: 'No lock triggered', variant: 'success' },
  { label: 'Open Reviews', value: '3', helperText: 'Needs outcome tagging', variant: 'neutral' },
  { label: 'System Follow Rate', value: '72%', helperText: 'Last 25 decisions', variant: 'default' },
  { label: 'Pending Decisions', value: '2', helperText: 'Awaiting final label', variant: 'warning' },
  { label: 'Weekly Net P&L', value: '+£38.50', helperText: 'Visible, but not primary focus', variant: 'success' },
  { label: 'Rule Violations', value: '1', helperText: 'Execution discipline warning', variant: 'risk' },
];

export const recentSetups: Setup[] = [
  {
    id: 'S-AAPL-2401',
    date: '2026-05-22',
    referenceAsset: 'AAPL',
    executionAsset: 'AAPL',
    setupType: 'Gap continuation',
    tradeWindow: '09:35-10:20',
    marketRegime: 'Trend day',
    gapDirection: 'up',
    gapSize: '1.1%',
    systemScore: 84,
    recommendation: 'trade_allowed',
    status: 'executed',
  },
  {
    id: 'S-MSFT-2402',
    date: '2026-05-22',
    referenceAsset: 'MSFT',
    executionAsset: 'MSFT',
    setupType: 'Pullback',
    tradeWindow: '10:10-11:00',
    marketRegime: 'Balanced trend',
    gapDirection: 'flat',
    gapSize: '0.2%',
    systemScore: 78,
    recommendation: 'wait',
    status: 'open',
  },
  {
    id: 'S-NVDA-2403',
    date: '2026-05-23',
    referenceAsset: 'NVDA',
    executionAsset: 'NVDA',
    setupType: 'Volatility setup',
    tradeWindow: '11:15-12:00',
    marketRegime: 'High volatility',
    gapDirection: 'up',
    gapSize: '1.8%',
    systemScore: 81,
    recommendation: 'reduce_risk',
    status: 'watch_only',
  },
  {
    id: 'S-SPY-2404',
    date: '2026-05-23',
    referenceAsset: 'SPY',
    executionAsset: 'SPY',
    setupType: 'Morning gap',
    tradeWindow: '09:30-10:00',
    marketRegime: 'Trend day',
    gapDirection: 'down',
    gapSize: '0.9%',
    systemScore: 76,
    recommendation: 'wait',
    status: 'reviewed',
  },
  {
    id: 'S-TSLA-2405',
    date: '2026-05-23',
    referenceAsset: 'TSLA',
    executionAsset: 'TSLA',
    setupType: 'Skipped setup',
    tradeWindow: '13:00-14:00',
    marketRegime: 'Choppy',
    gapDirection: 'flat',
    gapSize: '0.4%',
    systemScore: 80,
    recommendation: 'trade_allowed',
    status: 'skipped',
  },
  {
    id: 'S-QQQ-2406',
    date: '2026-05-23',
    referenceAsset: 'QQQ',
    executionAsset: 'QQQ',
    setupType: 'Range break',
    tradeWindow: '14:10-15:00',
    marketRegime: 'Late-session expansion',
    gapDirection: 'up',
    gapSize: '0.6%',
    systemScore: 74,
    recommendation: 'wait',
    status: 'open',
  },
];

export const recommendationData: SystemRecommendation = {
  setupScore: 82,
  grade: 'A',
  bias: 'Long',
  recommendation: 'wait',
  allowedRisk: '0.75%',
  invalidationLevel: 5126.25,
  reason: 'Market confirms direction, but spread is elevated.',
  warnings: ['Near resistance', 'Volume fading'],
};

export const riskGateChecks: RiskGateCheck[] = [
  { name: 'Daily loss lock', passed: true, detail: 'Passed — lock inactive' },
  { name: 'Weekly loss limit', passed: true, detail: 'Passed — below 4% cap' },
  { name: 'Setup score threshold', passed: true, detail: 'Passed — 82 is above threshold' },
  { name: 'Spread condition', passed: false, detail: 'Warning — spread elevated vs baseline' },
  { name: 'Fee drag', passed: true, detail: 'Passed — fee drag acceptable' },
  { name: 'Emotional state', passed: false, detail: 'Warning — user marked uncertain' },
  { name: 'Pending reviews', passed: false, detail: 'Warning — 2 reviews still pending' },
];

export const riskGateResult = {
  status: 'Wait Recommended',
  message: 'Multiple caution signals present. Prefer WAIT before any new execution.',
  allowedNextAction: 'Wait / Review',
};

export const userActionExample: UserAction = {
  actionTaken: 'Skip',
  followedSystem: false,
  overrideReason: 'Felt uncertain after first pullback',
  confidence: 'Medium',
  emotion: 'uncertain',
  plannedEntry: '5128.50',
  plannedStop: '5119.75',
  plannedTarget: '5146.00',
  positionSize: '£250',
  notes: 'Skipped despite model confidence because early pullback felt unstable.',
};

export const outcomeExecuted = {
  entryPrice: '5128.50',
  exitPrice: '5142.25',
  positionSize: '£250',
  fees: '£1.20',
  spreadCost: '£0.80',
  grossPnl: '£14.50',
  netPnl: '£12.50',
  plannedR: '1.8',
  actualR: '1.4',
  rMultiple: '1.4R',
  finalOutcome: 'Reached target zone before session fade',
};

export const skippedOutcome = {
  didReachTarget: 'Yes',
  didHitInvalidation: 'No',
  wouldItHaveWorked: 'Yes',
  wasSkippingCorrect: 'No',
  notes: 'The skipped setup later moved cleanly to target.',
};

export const decisionReviewData: DecisionReview = {
  marketData: {
    regime: 'Strong',
    spread: 'Moderate',
    volume: 'Supportive',
    newsRisk: 'Low',
    note: 'Strong trend continuation context after opening range reclaim.',
  },
  recommendation: {
    ...recommendationData,
    recommendation: 'trade_allowed',
    reason: 'Trade allowed: setup quality and structure both met threshold.',
  },
  userAction: {
    ...userActionExample,
    actionTaken: 'Skip',
  },
  outcome: {
    ...outcomeExecuted,
    finalOutcome: 'Reached target',
  },
  finalLabel: 'SKIPPED_GOOD_TRADE',
  lesson: 'I skipped a valid setup because I doubted the first move.',
  futureRuleSuggestion:
    'If setup score is above 75 and risk gate passes, consider reduced-size entry instead of full skip.',
};

export const riskData = {
  accountBalance: '£1,000',
  riskPerTrade: '0.5%',
  dailyLossLimit: '1.5%',
  weeklyLossLimit: '4%',
  riskUsedToday: '0.25%',
  riskUsedThisWeek: '0.9%',
  currentMode: 'Normal Mode',
};

export const riskLockedState = {
  currentMode: 'Risk Locked',
  message: 'Daily loss limit reached. No new trades today. Review only.',
};

export const learningInsights = [
  ['Best Setup Type', 'Gap continuation'],
  ['Worst Setup Type', 'Late breakout'],
  ['Best Time Window', 'First 90 minutes'],
  ['Worst Time Window', 'Final hour'],
  ['System Accuracy', '68%'],
  ['User Follow Rate', '72%'],
  ['Skipped Good Trades', '4'],
  ['Rule Violations', '1'],
  ['Net Expectancy', '+0.42R'],
] as const;

export const signalInboxItems: AlertInboxItem[] = [
  {
    id: 'TV-001',
    asset: 'SPY',
    signalType: 'SPY Gap Alert',
    timeReceived: '2026-05-23 09:32',
    source: 'TradingView',
    payloadStatus: 'New',
    conversionStatus: 'New',
    actionRequired: 'Assess setup quality',
  },
  {
    id: 'TV-002',
    asset: 'QQQ',
    signalType: 'QQQ Range Break',
    timeReceived: '2026-05-23 10:18',
    source: 'TradingView',
    payloadStatus: 'Review Required',
    conversionStatus: 'Converted to Setup',
    actionRequired: 'Monitor for confirmation',
  },
  {
    id: 'TV-003',
    asset: 'AAPL',
    signalType: 'AAPL Pullback',
    timeReceived: '2026-05-23 11:05',
    source: 'TradingView',
    payloadStatus: 'Expired',
    conversionStatus: 'Ignored',
    actionRequired: 'No further action',
  },
  {
    id: 'TV-004',
    asset: 'NVDA',
    signalType: 'NVDA Volume Spike',
    timeReceived: '2026-05-23 12:11',
    source: 'TradingView',
    payloadStatus: 'Invalid Payload',
    conversionStatus: 'Duplicate',
    actionRequired: 'Validate payload schema',
  },
  {
    id: 'TV-005',
    asset: 'TSLA',
    signalType: 'TSLA Volatility Warning',
    timeReceived: '2026-05-23 14:42',
    source: 'TradingView',
    payloadStatus: 'Review Required',
    conversionStatus: 'New',
    actionRequired: 'Review against risk mode',
  },
];
