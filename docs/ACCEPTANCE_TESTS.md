# Acceptance Tests

## Purpose

Defines validation requirements for the MY-Trade-Journal UI prototype.

Acceptance tests ensure:

- prototype completion quality
- workflow consistency
- governance enforcement
- implementation stability
- Codex alignment with the mobile-first React direction

No stage is considered complete without passing acceptance tests.

---

## UI Stage 0 — Repo Preparation

## Acceptance Criteria

- README contains the React-ready UI prompt
- `AGENTS.md` exists
- required docs exist
- old Google Sheets / Apps Script direction is not active
- prototype purpose is clear

## Validation

- Codex can identify the approved stack without ambiguity
- no source-of-truth file tells Codex to build Apps Script or Google Sheets
- repo has documented UI build order

---

## UI Stage 1 — React / Next.js Scaffold

## Acceptance Criteria

- Next.js app exists
- TypeScript is enabled
- Tailwind CSS is configured
- basic layout exists
- bottom navigation placeholder exists
- mock data folder exists

## Validation

- app runs locally
- no secrets are hardcoded
- no broker execution exists
- no Apps Script/clasp files are added

---

## UI Stage 2 — Design Tokens and Core Components

## Acceptance Criteria

Core components exist:

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

## Validation

- components render consistently
- state variants are represented
- styling is mobile-first
- colors are calm and risk-aware

---

## UI Stage 3 — Trading Components

## Acceptance Criteria

Trading components exist:

- RecommendationCard
- RiskGateCard
- EmotionSelector
- DecisionLabelPill
- ReviewComparisonCard
- AlertInboxItem

## Validation

- Recommendation language avoids emotional pressure
- RiskGate clearly shows allowed/locked states
- EmotionSelector shows warning state for risky emotions
- DecisionLabelPill supports all decision labels
- AlertInboxItem is marked post-MVP

---

## UI Stage 4 — Mobile Screens with Mock Data

## Acceptance Criteria

Screens exist:

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

## Validation

- routes render without runtime errors
- bottom navigation works
- mock data is centralised
- mobile layout uses stacked cards, not dense tables
- risk status appears before performance

---

## UI Stage 5 — UX Safety States

## Acceptance Criteria

Safety states exist:

- risk locked state
- review-only state
- disabled trade-action paths
- risky emotion warning
- override-required warning
- post-MVP Signal Inbox banner

## Validation

- risk lock visually disables new trade action
- user can still review and learn when locked
- manual execution only is visible
- no broker action button exists

---

## UI Stage 6 — Review and Handoff

## Acceptance Criteria

- changed files are listed
- run instructions are documented
- mock data is explained
- remaining work is listed
- no prohibited files/tools added

## Validation

- reviewer can run the prototype
- reviewer can navigate the MVP flow
- reviewer can tell what is mock vs real

---

## Global Governance Rules

Every stage must:

- define scope
- preserve repo hygiene
- preserve auditability
- avoid broker execution
- avoid auto-trading
- avoid hardcoded secrets
- avoid Apps Script
- avoid clasp
- avoid Google Sheets logic
