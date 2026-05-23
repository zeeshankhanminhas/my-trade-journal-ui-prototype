# Codex Build Plan

This document defines the staged build order for the MY-Trade-Journal UI prototype.

Codex must follow this plan stage by stage.

---

## UI Stage 0 — Repo Preparation

Goal:

Prepare the prototype repo for mobile-first React implementation.

Deliverables:

- README exists
- AGENTS.md exists
- docs copied/adapted
- project rules are clear

Acceptance criteria:

```text
Codex can understand this is a mobile-first React UI prototype without guessing the stack.
```

---

## UI Stage 1 — React / Next.js Scaffold

Goal:

Create the frontend app foundation.

Deliverables:

- Next.js app structure
- TypeScript
- Tailwind CSS
- basic app layout
- route structure
- mock data folder
- reusable component folders

Acceptance criteria:

```text
App runs locally and renders a mobile-first shell without runtime errors.
```

---

## UI Stage 2 — Design Tokens and Core Components

Goal:

Create the reusable UI component system.

Deliverables:

- design tokens
- AppShell
- BottomNav
- PageHeader
- StatusBanner
- MetricCard
- SectionCard
- PrimaryButton
- ActionChip
- FormField
- ProgressBar
- EmptyState
- LockedStateOverlay

Acceptance criteria:

```text
Core components render consistently and can be reused across screens.
```

---

## UI Stage 3 — Trading Components

Goal:

Create trading-specific components.

Deliverables:

- RecommendationCard
- RiskGateCard
- EmotionSelector
- DecisionLabelPill
- ReviewComparisonCard
- AlertInboxItem

Acceptance criteria:

```text
Trading components represent the intelligence workflow without broker execution.
```

---

## UI Stage 4 — Mobile Screens with Mock Data

Goal:

Build the mobile-first screen flow.

Deliverables:

- Dashboard
- Log Setup
- System Recommendation
- Risk Gate
- User Action
- Outcome Review
- Decision Review
- Risk
- Learning
- Signal Inbox placeholder

Acceptance criteria:

```text
All screens render using centralised mock data and bottom navigation.
```

---

## UI Stage 5 — UX Safety States

Goal:

Add protective interaction states.

Deliverables:

- risk locked state
- review-only state
- disabled trade-action paths
- risky emotion warning
- override-required warning
- post-MVP Signal Inbox banner

Acceptance criteria:

```text
The UI visibly protects the user from risky action and reinforces manual execution only.
```

---

## UI Stage 6 — Review and Handoff

Goal:

Review prototype quality and prepare handoff notes.

Deliverables:

- changed files list
- run instructions
- mock data explanation
- UX notes
- remaining work list

Acceptance criteria:

```text
A reviewer can run the app, inspect the flow, and understand what is mock versus real.
```

---

## Build Rule

No broker execution should be added in any stage.

Manual execution only.

No Apps Script, clasp, or Google Sheets logic should be added.
