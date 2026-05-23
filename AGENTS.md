# AGENTS.md

## Repository Purpose

This repository is the UI prototype / trial implementation repo for MY-Trade-Journal.

It is used to experiment with the mobile-first React / Next.js interface while preserving the product governance defined in the main architecture repo.

The product is a manual-execution trading intelligence system for:

- setup logging
- market data capture
- system recommendations
- user actions
- outcome review
- decision review
- risk and behaviour tracking
- long-term learning reviews

This project is not an auto-trading bot.

Manual execution only.

---

## Approved Core Stack

The approved implementation stack for this prototype is:

- React / Next.js for frontend
- TypeScript
- Tailwind CSS
- Mock data first if backend is not ready
- Supabase later when schema is accepted
- GitHub for source control and documentation
- Codex as the staged execution agent

Do not reintroduce Google Sheets or Apps Script as the primary implementation path.

---

## Current Prototype Status

Current active phase:

```text
UI Prototype — Mobile-first React foundation
```

This repo may build UI screens with mock data before full backend integration.

Backend/Supabase integration should remain clearly separated and should not be faked inside components.

---

## Core Development Rules

## Rule 1 — Follow the UI prototype scope

Build the mobile-first React UI using the copied governance docs and `README.md` as the product reference.

No developer or AI agent may:

- add broker execution
- add auto-trading
- add leverage or margin features
- add Apps Script
- add clasp
- add Google Sheets logic
- hide API keys in code

---

## Rule 2 — Source of Truth Documents

Codex must treat these files as the current source of truth for this prototype:

- `README.md`
- `docs/DEVELOPMENT_WORKFLOW.md`
- `docs/MVP_SCOPE.md`
- `docs/SECURITY_MODEL.md`
- `docs/UX_FLOW.md`
- `docs/SUPABASE_SCHEMA.md`
- `docs/CODEX_BUILD_PLAN.md`
- `docs/ACCEPTANCE_TESTS.md`

---

## Rule 3 — Manual Execution Only

The system may recommend:

- Trade Allowed
- Wait
- Skip
- Reduce Risk
- Lock
- Exit Review

The system must not execute trades automatically.

The user executes trades manually outside the system.

---

## Rule 4 — Intelligence Core Must Be Preserved

Every setup should support comparison between:

```text
Market Data
vs
System Recommendation
vs
User Action
vs
Final Outcome
```

This comparison is the core of the learning engine.

The UI must clearly support:

- what the market data said
- what the system recommended
- what the user actually did
- whether the user followed the system
- whether the setup was taken or skipped
- whether the taken/skipped setup worked or failed
- final review label
- lesson learned
- future rule suggestion

---

## Rule 5 — MVP Discipline

The prototype should stay small.

Codex must not build:

- advanced analytics
- Telegram alerts
- TradingView webhook implementation
- Python analytics
- complex charting
- broker integrations

until the MVP flow is implemented and reviewed.

---

## Non-Negotiables

The project must not include:

- broker execution
- auto-trading
- CFDs
- margin trading
- leverage
- futures
- options in the first build
- hidden API keys
- hardcoded secrets

All secrets must be stored in environment variables or platform-managed secret storage.
