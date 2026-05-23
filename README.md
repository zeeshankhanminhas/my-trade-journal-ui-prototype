# my-trade-journal-ui-prototype
Create a React-ready, mobile-first Figma UX/UI system for a web app called “MY-Trade-Journal”.

This is not a generic trading dashboard.

It is a manual-execution trading intelligence system designed to help the user:
- log trade setups
- receive system recommendations
- pass through risk gates
- record actual user action
- review trade or skipped-trade outcomes
- compare market data vs system recommendation vs user action vs final outcome
- learn from process quality over time

The product must feel like a disciplined trading control room, not a broker app, not a casino-style trading app, and not a crypto hype dashboard.

Core product question:
“Does this setup deserve real risk?”

Important:
- Mobile-first design
- React component-ready structure
- Design system included
- Components must have clear variants and states
- The UI should be easy to later build in React / Next.js + Tailwind + Supabase
- Use realistic UI text and field labels
- Avoid fake lorem ipsum
- Do not include broker execution UI
- Do not include auto-trading UI
- Do not make “BUY” emotionally dominant
- Use safer language such as “Trade Allowed”, “Wait”, “Skip”, “Reduce Risk”, “Lock”, “Exit Review”
- Directional bias can be shown separately as “Bias: Long” or “Bias: Short”

Visual style:
- Premium SaaS product interface
- Calm and analytical
- Light background: #F8FAFC / #F9FAFB
- Primary text: dark navy / near black
- Muted blue accent
- Muted green for safe/completed states
- Muted amber for caution/wait states
- Muted red only for risk lock / rule breach
- Soft grey borders
- Rounded cards
- Subtle shadows
- High spacing discipline
- Strong information hierarchy
- Typography similar to Inter, Geist, or IBM Plex Sans

Create the design as if preparing a real Figma handoff for a React developer.

==================================================
1. DESIGN TOKENS
==================================================

Create a design token section.

Include:

Color tokens:
- bg-default
- bg-muted
- surface-card
- surface-raised
- text-primary
- text-secondary
- text-muted
- border-default
- border-strong
- primary-blue
- primary-blue-soft
- success-green
- success-green-soft
- warning-amber
- warning-amber-soft
- risk-red
- risk-red-soft
- neutral-grey

Typography tokens:
- display-title
- page-title
- section-title
- card-title
- body
- body-small
- caption
- metric-large
- badge-label

Spacing tokens:
- space-1
- space-2
- space-3
- space-4
- space-6
- space-8
- space-12

Radius tokens:
- radius-sm
- radius-md
- radius-lg
- radius-xl
- radius-2xl
- radius-pill

Shadow tokens:
- shadow-card
- shadow-raised
- shadow-focus

State tokens:
- default
- active
- selected
- disabled
- loading
- success
- warning
- risk
- locked
- review-only
- needs-review

==================================================
2. COMPONENT LIBRARY
==================================================

Create a React-ready component library section.

Each component should appear as a reusable Figma component with variants.

Component 1: AppShell
Mobile-first layout with:
- top header
- page title
- status banner slot
- main scrollable content
- bottom navigation

Component 2: BottomNav
Items:
- Dashboard
- Setup
- Action
- Review
- More

Variants:
- active item
- inactive item
- notification badge
- disabled item

Component 3: StatusBanner
Variants:
- Trade Allowed
- Caution Mode
- Risk Locked
- Review Only
- No Clean Setup
- Needs Review

Each banner should include:
- icon
- title
- short message
- state color

Component 4: MetricCard
Variants:
- default
- success
- warning
- risk
- neutral
- locked

Fields:
- label
- value
- helper text
- optional trend
- optional icon

Component 5: SectionCard
Reusable content card with:
- header
- optional action
- body slot
- footer slot

Component 6: RecommendationCard
Fields:
- setup score
- grade
- recommendation
- bias
- allowed risk
- invalidation level
- reason
- warnings

Variants:
- Trade Allowed
- Wait
- Skip
- Reduce Risk
- Lock
- Exit Review

Component 7: RiskGateCard
Shows whether the user can proceed.

Fields:
- gate status
- checks passed
- checks failed
- reason
- allowed next action

Variants:
- Action Allowed
- Reduce Risk Only
- Wait Recommended
- Review Only
- Locked

Component 8: ActionChip
Variants:
- Trade Allowed
- Wait
- Skip
- Reduce Risk
- Lock
- Exit Review

States:
- default
- selected
- disabled

Component 9: FormField
Variants:
- text input
- number input
- select
- textarea
- date/time
- percentage input
- currency input

States:
- default
- focused
- error
- disabled
- filled

Component 10: EmotionSelector
Options:
- Calm
- Focused
- Uncertain
- FOMO
- Frustrated
- Tired
- Revenge-risk

Variants:
- neutral
- caution
- risk

If emotion is FOMO, Frustrated, Tired, or Revenge-risk, display a warning state.

Component 11: DecisionLabelPill
Labels:
- SYSTEM_CORRECT_USER_FOLLOWED
- SYSTEM_CORRECT_USER_IGNORED
- SYSTEM_WRONG_USER_FOLLOWED
- SYSTEM_WRONG_USER_OVERRIDE_WORKED
- SYSTEM_WRONG_USER_OVERRIDE_FAILED
- SKIPPED_GOOD_TRADE
- SKIPPED_BAD_TRADE
- TAKEN_GOOD_TRADE
- TAKEN_BAD_TRADE
- GOOD_PROCESS_GOOD_OUTCOME
- GOOD_PROCESS_BAD_OUTCOME
- BAD_PROCESS_GOOD_OUTCOME
- BAD_PROCESS_BAD_OUTCOME

Component 12: ReviewComparisonCard
Mobile stacked comparison component.

Sections:
- Market Data
- System Recommendation
- User Action
- Final Outcome

This replaces dense four-column tables on mobile.

Component 13: AlertInboxItem
This is post-MVP / future-state.

Fields:
- asset
- signal type
- time received
- alert source
- payload status
- conversion status
- action required

Statuses:
- New
- Converted to Setup
- Ignored
- Duplicate
- Expired
- Invalid Payload
- Review Required

Mark this clearly as:
“Post-MVP: TradingView Signal Inbox”

Component 14: PrimaryButton
Variants:
- primary
- secondary
- ghost
- danger
- disabled
- loading

Component 15: ProgressBar
Variants:
- default
- success
- warning
- risk

Component 16: EmptyState
Use for:
- no setups yet
- no alerts yet
- no reviews pending
- no learning data yet

Component 17: LockedStateOverlay
Used when risk lock is active.

Message:
“Risk locked. New trade actions are disabled. Review only.”

==================================================
3. MOBILE SCREENS
==================================================

Create high-fidelity mobile screens.

Each screen should be realistic enough for React implementation.

Use phone frames or app frames with 390px width style.

Screen 1: Dashboard

Purpose:
Show operating state, not emotional performance.

Top hierarchy:
1. Trade Status
2. Risk Used Today
3. Daily Loss Lock
4. Open Reviews
5. System Follow Rate
6. Pending Decisions

Dashboard should answer:
- Am I allowed to trade?
- Is risk under control?
- Do I have setups to review?
- Did I follow the system recently?
- Is there a clean setup?

Include:
- StatusBanner at top
- metric cards
- pending review card
- recent setup card
- recent decision labels
- small performance summary collapsed lower on the screen

Important:
Account balance and P&L can be visible, but not visually dominant.

Example top banner:
“TRADE ALLOWED”
“All risk parameters normal. Continue only if setup quality passes.”

Alternative locked state:
“RISK LOCKED”
“Daily loss limit reached. No new trades today. Review only.”

Screen 2: Log Setup

Purpose:
Capture the setup before emotion enters.

Sections:
- Asset Context
- Market Context
- Setup Context
- Trade Window
- Notes

Fields:
- Reference Asset
- Execution Asset
- Setup Type
- Gap Direction
- Gap Size
- Market Regime
- Volatility Status
- Spread Status
- Volume Status
- News Risk
- Trade Window Start
- Trade Window End
- Notes

Buttons:
- Save Setup
- Save as Watch Only
- Save as Skipped Setup

UX rule:
Skipping must feel like a valid decision, not a failure.

Screen 3: System Recommendation

Purpose:
Decision aid, not command.

Main card:
- Setup Score: 82/100
- Grade: A
- Bias: Long
- Recommendation: Wait
- Allowed Risk: 0.75%
- Invalidation Level: 5,126.25
- Reason: “Market confirms direction, but spread is elevated.”
- Warnings: “Near resistance”, “Volume fading”

Action chips:
- Trade Allowed
- Wait
- Skip
- Reduce Risk
- Lock
- Exit Review

Add small disclaimer text:
“This is a recommendation, not an execution command.”

Screen 4: Risk Gate

Purpose:
Mandatory gate before user action.

Checks:
- Daily loss lock
- Weekly loss limit
- Setup score threshold
- Spread condition
- Fee drag
- Emotional state
- Pending reviews

Gate result examples:
- Action Allowed
- Reduce Risk Only
- Wait Recommended
- Review Only
- Locked

If locked:
- Disable proceed button
- Show “Review Only”
- Allow only Review, Notes, Learning

Do not allow override of daily loss lock in MVP v0.1.

Screen 5: User Action

Purpose:
Record what the user actually did.

Fields:
- Action Taken
- Followed System? Yes / No
- Override Reason
- Confidence Before Action: Low / Medium / High
- Emotion State
- Planned Entry
- Planned Stop
- Planned Target
- Position Size
- Notes

Emotion Selector:
- Calm
- Focused
- Uncertain
- FOMO
- Frustrated
- Tired
- Revenge-risk

If user selects FOMO, Frustrated, Tired, or Revenge-risk, show warning:
“Your selected state increases execution risk. Recommended action: WAIT or SKIP.”

If user goes against system:
- Override reason required
- Confidence required
- Notes required

Screen 6: Outcome Review

Two tabs:
- Executed Trade
- Skipped Setup

Executed Trade fields:
- Entry Price
- Exit Price
- Position Size
- Fees
- Spread Cost
- Gross P&L
- Net P&L
- Planned R
- Actual R
- R Multiple
- Final Outcome

Skipped Setup fields:
- Did it reach target?
- Did it hit invalidation?
- Would it have worked?
- Was skipping correct?
- Notes

UX message:
“Skipped setups are still useful data.”

Screen 7: Decision Review

This is the signature screen.

Use stacked mobile cards, not a dense table.

Cards:
1. Market Data
2. System Recommendation
3. User Action
4. Final Outcome

Then show:
- Final Label
- Lesson Learned
- Future Rule Suggestion

Example:
Market Data:
- Strong
- Spread acceptable
- Volume above average

System Recommendation:
- Bias: Long
- Recommendation: Trade Allowed
- Allowed Risk: 0.75%

User Action:
- Action: Skip
- Followed system: No
- Emotion: Uncertain

Final Outcome:
- Reached target
- Would have produced +1.8R

Final Label:
SKIPPED_GOOD_TRADE

Lesson:
“I skipped a valid setup because I doubted the first move.”

Future Rule Suggestion:
“If setup score is above 75 and risk gate passes, consider reduced-size entry instead of full skip.”

Screen 8: Risk Screen

Purpose:
Protect the user from themselves.

Cards:
- Account Balance
- Risk Per Trade
- Daily Loss Limit
- Weekly Loss Limit
- Risk Used Today
- Risk Used This Week
- Current Mode

Modes:
- Normal Mode
- Caution Mode
- Recovery Mode
- Risk Locked
- Review Only

Risk locked banner:
“Daily loss limit reached. No new trades today. Review only.”

When locked:
Disable:
- New trade action
- Increased size
- Lock override

Allow:
- Review
- Notes
- Learning

Screen 9: Learning Screen

Keep it evidence-based, not AI magic.

Insight cards:
- Best Setup Type
- Worst Setup Type
- Best Time Window
- Worst Time Window
- System Accuracy
- User Follow Rate
- Skipped Good Trades
- Rule Violations
- Net Expectancy

Message:
“The system suggests improvements. Rule changes require user approval.”

Screen 10: Post-MVP Signal Inbox

This is not part of MVP v0.1, but include as future-state.

Purpose:
Incoming TradingView alerts to watch.

Screen title:
“Signal Inbox”

Show list of incoming alerts:
- Asset
- Signal Type
- Time Received
- Source: TradingView
- Payload Status
- Conversion Status
- Action Required

Statuses:
- New
- Converted to Setup
- Ignored
- Duplicate
- Expired
- Invalid Payload
- Review Required

Primary action:
- Convert to Setup

Secondary actions:
- Ignore
- Mark Duplicate
- View Payload

Banner:
“Post-MVP feature. Manual review required before setup conversion.”

==================================================
4. RESPONSIVE BEHAVIOUR
==================================================

Define how the UI adapts:

Mobile:
- stacked cards
- bottom navigation
- one primary action per screen
- no dense tables
- risk banners visible above fold

Tablet:
- two-column layout
- side panel for recent decisions
- comparison cards can sit side-by-side

Desktop:
- sidebar navigation
- dashboard grid
- four-column decision comparison
- richer analytics tables

==================================================
5. REACT IMPLEMENTATION HINTS
==================================================

Design components as if they will become React components.

Use these component names in annotations:

- AppShell
- BottomNav
- StatusBanner
- MetricCard
- SectionCard
- RecommendationCard
- RiskGateCard
- ActionChip
- FormField
- EmotionSelector
- DecisionLabelPill
- ReviewComparisonCard
- AlertInboxItem
- PrimaryButton
- ProgressBar
- EmptyState
- LockedStateOverlay

Use clear props in annotations where possible.

Examples:
StatusBanner props:
- status
- title
- message
- icon
- severity

RecommendationCard props:
- score
- grade
- bias
- recommendation
- allowedRisk
- invalidationLevel
- reason
- warnings

RiskGateCard props:
- gateStatus
- checksPassed
- checksFailed
- allowedNextAction

DecisionLabelPill props:
- label
- severity
- description

==================================================
6. SAFETY UX RULES
==================================================

The interface must enforce these UX principles:

- Risk status appears before performance.
- Skipping is treated as a valid decision.
- Recommendation language avoids emotional pressure.
- Risk lock disables new trade action.
- User overrides require reason, confidence, and notes.
- Decision Review is the signature screen.
- Mobile uses stacked cards, not dense tables.
- Profit is visible but never the emotional centre of the interface.
- No broker execution exists anywhere.
- The system does not place trades.
- TradingView alerts are post-MVP and must enter through a Signal Inbox, not direct execution.

==================================================
7. FINAL OUTPUT FORMAT
==================================================

Create a polished Figma-style mobile-first product file with:

1. Cover / product overview frame
2. Design tokens frame
3. Component library frame
4. Mobile screen flows
5. Responsive behaviour frame
6. Safety states frame
7. Post-MVP Signal Inbox frame

Make it detailed enough that a React / Next.js developer could use it as a design reference.

Make the design calm, controlled, premium, and highly legible.
