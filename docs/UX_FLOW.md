# UX Flow

MY-Trade-Journal should feel like a disciplined trading decision cockpit, not a generic CRUD dashboard.

The mobile-first user journey must preserve the core intelligence loop:

```text
Market Data
→ System Recommendation
→ Risk Gate
→ User Action
→ Final Outcome
→ Decision Review
→ Learning
```

---

## Primary Mobile User Journey

## 1. Dashboard

Purpose:
Show the current operating state.

The dashboard should answer:

- Is the system ready to trade?
- Is risk locked?
- Are there setups awaiting review?
- Did the user follow the system recently?
- Is capital being protected?

Core sections:

- trade status banner
- risk used today
- daily loss lock
- open reviews
- system follow-rate snapshot
- pending decisions
- recent setups
- recent decision labels

Performance can be visible, but it must not be the emotional centre of the screen.

---

## 2. Log Setup

Purpose:
Capture a setup even if no trade is taken.

Required UX principle:

```text
No setup should be lost just because the user skipped it.
```

The setup form should capture:

- reference asset
- execution asset
- setup type
- gap direction
- gap size
- market regime
- volatility status
- spread status
- volume status
- news risk
- trade window
- notes

Skipping must feel valid, not like failure.

---

## 3. System Recommendation

Purpose:
Record what the system recommended before user action.

The screen should show:

- setup score
- setup grade
- directional bias
- recommendation
- allowed risk
- invalidation level
- reason
- warnings

Supported recommendation actions:

- Trade Allowed
- Wait
- Skip
- Reduce Risk
- Lock
- Exit Review

The screen should clearly state:

```text
This is a recommendation, not an execution command.
```

---

## 4. Risk Gate

Purpose:
Act as a mandatory safety checkpoint before user action.

The risk gate should check:

- daily loss lock
- weekly loss limit
- setup score threshold
- spread condition
- fee drag
- emotional state
- pending reviews

Possible states:

- Action Allowed
- Reduce Risk Only
- Wait Recommended
- Review Only
- Locked

If locked, the UI should allow only:

- review
- notes
- learning

Do not allow lock override in MVP v0.1.

---

## 5. User Action

Purpose:
Record what the user actually did.

The user action screen should capture:

- action taken
- followed system: yes/no
- override reason
- confidence before action
- emotion state
- planned entry
- planned stop
- planned target
- position size
- notes

Important:

A user override is not automatically bad. It must be reviewed against outcome and process quality.

If the user selects a risky emotion state, the UI should show a caution warning.

---

## 6. Outcome Review

Purpose:
Record what actually happened.

For executed trades, capture:

- entry price
- exit price
- position size
- fees
- spread cost
- gross P&L
- net P&L
- planned R
- actual R
- R multiple
- final outcome

For skipped setups, capture:

- skipped setup outcome
- whether target would have been reached
- whether invalidation would have been hit
- whether skip decision was correct
- notes

Skipped setups are valuable data.

---

## 7. Decision Review

Purpose:
Assign the final learning label.

On mobile, use stacked cards instead of dense tables.

The review screen should compare:

```text
Market Data
vs
System Recommendation
vs
User Action
vs
Final Outcome
```

Final label examples:

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

Decision Review is the signature screen of the product.

---

## 8. Risk

Purpose:
Protect the user from themselves.

Show:

- account balance
- risk per trade
- daily loss limit
- weekly loss limit
- risk used today
- risk used this week
- current mode

Modes:

- Normal Mode
- Caution Mode
- Recovery Mode
- Risk Locked
- Review Only

When locked, disable new trade action paths.

---

## 9. Learning

Purpose:
Show patterns after enough data exists.

Early-stage learning should be simple:

- best setup type
- worst setup type
- best time window
- worst time window
- system accuracy
- user follow rate
- skipped good trades
- rule violations
- net expectancy

The system must not silently change trading rules.

Rule changes require user approval.

---

## 10. Signal Inbox

Purpose:
Future post-MVP TradingView alert review.

This is not part of MVP v0.1.

Incoming alerts should enter through a Signal Inbox, not direct execution.

Statuses:

- New
- Converted to Setup
- Ignored
- Duplicate
- Expired
- Invalid Payload
- Review Required

---

## UX Principles

- Risk status appears before performance.
- Show the next required action clearly.
- Avoid emotional profit-chasing language.
- Recommendation language avoids emotional pressure.
- Make Skip and Wait feel like valid outcomes.
- Make every setup reviewable.
- Separate system recommendation from user action.
- Separate outcome from process quality.
- Keep trading execution outside the system.
- Mobile uses stacked cards, not dense tables.
