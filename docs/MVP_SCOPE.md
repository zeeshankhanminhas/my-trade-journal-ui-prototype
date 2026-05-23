# MVP Scope

This document defines the first buildable UI prototype for MY-Trade-Journal.

The purpose of the prototype is not to automate trading.

The purpose is to prove the mobile-first intelligence loop:

```text
Setup logged
→ system recommendation shown
→ risk gate checked
→ user action recorded
→ outcome reviewed
→ decision labelled
```

---

## UI Prototype Goal

Build the smallest mobile-first interface that can answer:

```text
Did the setup deserve risk?
Did the system recommend correctly?
Did the user follow or override the system?
What happened after the decision?
What should be learned?
```

---

## In Scope

The prototype includes:

- React / Next.js app scaffold
- mobile-first layout
- bottom navigation
- reusable component system
- mock data
- dashboard screen
- log setup screen
- system recommendation screen
- risk gate screen
- user action screen
- outcome review screen
- decision review screen
- risk screen
- learning screen
- post-MVP Signal Inbox placeholder

---

## Out of Scope

The prototype does not include:

- broker execution
- auto-trading
- live Supabase integration unless schema is already ready
- TradingView webhook implementation
- Telegram alerts
- Python analytics
- machine learning
- advanced backtesting
- public multi-user product features
- payment system
- complex charting

---

## Prototype Screens

The prototype should include:

1. Dashboard
2. Log Setup
3. System Recommendation
4. Risk Gate
5. User Action
6. Outcome Review
7. Decision Review
8. Risk
9. Learning
10. Signal Inbox placeholder

---

## Prototype Success Criteria

The prototype is successful when:

- all required mobile screens render
- bottom navigation works
- design tokens are consistent
- core components are reusable
- mock data is centralised
- risk-first hierarchy is visible
- recommendation language avoids emotional pressure
- risk lock visually disables new trade action
- Decision Review is the signature screen
- Signal Inbox is clearly marked post-MVP
- no trade execution exists
- no secrets are hardcoded

---

## First 50 Setups Rule

Before adding advanced automation, the user should log at least 50 setups manually or semi-manually.

The purpose is to validate:

- setup fields
- recommendation fields
- user action fields
- outcome fields
- decision labels
- workflow clarity

Do not build complex learning features before the data structure has been tested with real setups.

---

## Scaling Rule

Only after the prototype flow works cleanly should the project move toward:

- live Supabase integration
- TradingView webhook
- Telegram alerts
- Python analytics
- advanced learning review
- deeper dashboarding

The system must earn complexity through clean data.
