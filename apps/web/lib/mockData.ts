import { AlertInboxItem, DashboardMetric, DecisionReview, RiskGateCheck, Setup, SystemRecommendation, UserAction } from './types';
export const dashboardStatus={title:'TRADE ALLOWED',message:'All risk parameters normal. Continue only if setup quality passes.',severity:'trade_allowed' as const};
export const dashboardMetrics:DashboardMetric[]=[
{label:'Risk Used Today',value:'0.85%',helperText:'Limit 2.00%',variant:'warning'},
{label:'Daily Loss Lock',value:'Not Triggered',helperText:'No lock active',variant:'success'},
{label:'Open Reviews',value:'3',helperText:'2 executed, 1 skipped',variant:'neutral'},
{label:'System Follow Rate',value:'78%',helperText:'Last 20 setups',variant:'default'},
{label:'Pending Decisions',value:'2',helperText:'Awaiting outcome',variant:'warning'}
];
export const recentSetups:Setup[]=[{id:'S-2405',referenceAsset:'BTC',executionAsset:'BTCUSDT',setupType:'Gap Continuation',tradeWindow:'09:30-10:30',systemScore:82}];
export const recommendationData:SystemRecommendation={setupScore:82,grade:'A',bias:'Long',recommendation:'wait',allowedRisk:'0.75%',invalidationLevel:5126.25,reason:'Market confirms direction, but spread is elevated.',warnings:['Near resistance','Volume fading']};
export const riskGateChecks:RiskGateCheck[]=[{name:'Daily loss lock',passed:true,detail:'No lock triggered'},{name:'Weekly loss limit',passed:true,detail:'Within range'},{name:'Setup score threshold',passed:true,detail:'82 > 75'},{name:'Spread condition',passed:false,detail:'Elevated spread'},{name:'Fee drag',passed:true,detail:'Acceptable'},{name:'Emotional state',passed:true,detail:'Focused'},{name:'Pending reviews',passed:false,detail:'2 pending reviews'}];
export const userActionExample:UserAction={actionTaken:'Wait for spread compression',followedSystem:true,confidence:'Medium',emotion:'uncertain',plannedEntry:'5134.25',plannedStop:'5108.00',plannedTarget:'5188.00',positionSize:'0.40R',notes:'Will only enter if spread normalizes before window closes.'};
export const decisionReviewData:DecisionReview={marketData:{regime:'Trend Day',spread:'Elevated',volume:'Fading',newsRisk:'Low',note:'Strength present but late-session liquidity is uneven.'},recommendation:recommendationData,userAction:userActionExample,outcome:{entryPrice:'5132.50',exitPrice:'5170.25',positionSize:'0.40R',fees:'4.80',spreadCost:'3.10',grossPnl:'+92.40',netPnl:'+84.50',plannedR:'1.6R',actualR:'1.2R',rMultiple:'1.2',finalOutcome:'TAKEN_GOOD_TRADE'},finalLabel:'GOOD_PROCESS_GOOD_OUTCOME',lesson:'I waited for spread normalization and entered with controlled size.',futureRuleSuggestion:'When spread is elevated but score > 80, prefer reduced-size entries instead of full skip.'};
export const outcomeExecuted=decisionReviewData.outcome;
export const skippedOutcome={didReachTarget:'Yes, after 40 minutes',didHitInvalidation:'No',wouldItHaveWorked:'Yes',wasSkippingCorrect:'Partially',notes:'Skip protected against spread but missed a clean second entry.'};
export const riskData={accountBalance:'$25,400',riskPerTrade:'0.75%',dailyLossLimit:'2.00%',weeklyLossLimit:'5.00%',riskUsedToday:'0.85%',riskUsedThisWeek:'2.60%',currentMode:'Caution Mode'};
export const learningInsights=[['Best Setup Type','Gap Continuation'],['Worst Setup Type','Late Breakout Fade'],['Best Time Window','09:30-10:15'],['Worst Time Window','13:30-14:15'],['System Accuracy','74%'],['User Follow Rate','78%'],['Skipped Good Trades','4'],['Rule Violations','2'],['Net Expectancy','+0.32R']];
export const signalInboxItems:AlertInboxItem[]=[{id:'A-1001',asset:'ETHUSDT',signalType:'Gap breakout',timeReceived:'2026-05-23 09:14',source:'TradingView',payloadStatus:'Review Required',conversionStatus:'New',actionRequired:'Check data quality'}];
