# Development Workflow

This repository is the UI prototype / trial implementation repo for MY-Trade-Journal.

It uses the same product rules as the main architecture repo, but its immediate purpose is to build and test the mobile-first React / Next.js interface.

This repository does not use Google Apps Script, clasp, or Google Sheets as the active implementation path.

---

## Current Active Stage

```text
UI Prototype — Mobile-first React foundation
```

The next implementation task is to create the React / Next.js mobile-first UI using mock data where required.

Supabase integration should come later unless schema and environment configuration are already available.

---

## Approved Development Stack

- GitHub for source control
- React / Next.js for frontend
- TypeScript
- Tailwind CSS
- Mock data first if backend is not ready
- Supabase later for database/auth integration
- Codex as the staged execution agent

---

## Do Not Use

The following commands and tools are not part of this repo:

```bash
clasp push
clasp pull
clasp deploy
```

Do not add:

- `.clasp.json`
- `appsscript.json`
- `apps-script/`
- Google Sheets schema files
- Apps Script backend files
- broker execution APIs

---

## Standard Git Workflow

Before making changes:

```bash
git status
git pull origin main
```

After making changes:

```bash
git status
git add .
git commit -m "Describe the change clearly"
git push origin main
```

---

## UI Prototype Workflow

Expected work:

- create Next.js app structure
- create Tailwind design tokens
- create reusable components
- create mobile-first screens
- centralise mock data
- keep backend integration separate
- preserve manual execution rules

The prototype should not build:

- broker execution
- auto-trading
- Apps Script backend
- Google Sheets workflows
- live TradingView webhook implementation
- Telegram alerts
- Python analytics

---

## Required Documents to Read Before UI Build

Codex or any developer must read:

- `AGENTS.md`
- `README.md`
- `docs/MVP_SCOPE.md`
- `docs/SECURITY_MODEL.md`
- `docs/UX_FLOW.md`
- `docs/SUPABASE_SCHEMA.md`
- `docs/CODEX_BUILD_PLAN.md`
- `docs/ACCEPTANCE_TESTS.md`

---

## Prototype Acceptance Criteria

The prototype is acceptable when:

- mobile-first routes render without runtime errors
- bottom navigation works
- all core MVP screens exist
- mock data is centralised
- no broker execution exists
- no secrets are hardcoded
- no Apps Script/clasp/Google Sheets files are added
- manual execution is visible in the UI
- risk lock state visually disables new trade action
- Signal Inbox is clearly marked post-MVP

---

## Safety Rules

This system must remain manual-execution only.

The system may recommend:

- Trade Allowed
- Wait
- Skip
- Reduce Risk
- Lock
- Exit Review

The system must not place trades.

No broker API integration should be added in the current architecture.
