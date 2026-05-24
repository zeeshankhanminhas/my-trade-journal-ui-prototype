export type TradeStatus = 'trade_allowed' | 'caution' | 'risk_locked' | 'review_only';
export type RecommendationAction = 'trade_allowed' | 'wait' | 'skip' | 'reduce_risk' | 'lock' | 'exit_review';
export type RiskMode = 'normal' | 'caution' | 'recovery' | 'locked' | 'review_only';
export type EmotionState = 'calm' | 'focused' | 'uncertain' | 'fomo' | 'frustrated' | 'tired' | 'revenge_risk';
export type DecisionLabel =
  | 'SYSTEM_CORRECT_USER_FOLLOWED'
  | 'SYSTEM_CORRECT_USER_IGNORED'
  | 'SYSTEM_WRONG_USER_FOLLOWED'
  | 'SYSTEM_WRONG_USER_OVERRIDE_WORKED'
  | 'SYSTEM_WRONG_USER_OVERRIDE_FAILED'
  | 'SKIPPED_GOOD_TRADE'
  | 'SKIPPED_BAD_TRADE'
  | 'TAKEN_GOOD_TRADE'
  | 'TAKEN_BAD_TRADE'
  | 'GOOD_PROCESS_GOOD_OUTCOME'
  | 'GOOD_PROCESS_BAD_OUTCOME'
  | 'BAD_PROCESS_GOOD_OUTCOME'
  | 'BAD_PROCESS_BAD_OUTCOME';

export type Setup = {
  id: string;
  date?: string;
  referenceAsset: string;
  executionAsset: string;
  setupType: string;
  tradeWindow: string;
  marketRegime?: string;
  gapDirection?: 'up' | 'down' | 'flat';
  gapSize?: string;
  systemScore: number;
  recommendation?: RecommendationAction;
  status?: 'open' | 'watch_only' | 'skipped' | 'executed' | 'reviewed';
};

export type MarketDataSnapshot = {
  regime: string;
  spread: string;
  volume: string;
  newsRisk: string;
  note: string;
};

export type SystemRecommendation = {
  setupScore: number;
  grade: string;
  bias: string;
  recommendation: RecommendationAction;
  allowedRisk: string;
  invalidationLevel: number;
  reason: string;
  warnings: string[];
};

export type UserAction = {
  actionTaken: string;
  followedSystem: boolean;
  overrideReason?: string;
  confidence: 'Low' | 'Medium' | 'High';
  emotion: EmotionState;
  plannedEntry: string;
  plannedStop: string;
  plannedTarget: string;
  positionSize: string;
  notes: string;
};

export type TradeOutcome = {
  entryPrice: string;
  exitPrice: string;
  positionSize: string;
  fees: string;
  spreadCost: string;
  grossPnl: string;
  netPnl: string;
  plannedR: string;
  actualR: string;
  rMultiple: string;
  finalOutcome?: string;
  skippedSummary?: string;
};

export type DecisionReview = {
  marketData: MarketDataSnapshot;
  recommendation: SystemRecommendation;
  userAction: UserAction;
  outcome: TradeOutcome;
  finalLabel: DecisionLabel;
  lesson: string;
  futureRuleSuggestion: string;
};

export type AlertInboxItem = {
  id: string;
  asset: string;
  signalType: string;
  timeReceived: string;
  source: 'TradingView';
  payloadStatus: 'New' | 'Expired' | 'Invalid Payload' | 'Review Required';
  conversionStatus: 'New' | 'Converted to Setup' | 'Ignored' | 'Duplicate';
  actionRequired: string;
};

export type DashboardMetric = {
  label: string;
  value: string;
  helperText: string;
  trend?: string;
  variant: 'default' | 'success' | 'warning' | 'risk' | 'neutral' | 'locked';
};

export type RiskGateCheck = {
  name: string;
  passed: boolean;
  detail: string;
};
