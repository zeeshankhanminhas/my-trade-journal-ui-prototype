# Supabase Schema Reference

This document is copied into the UI prototype as a backend reference.

The prototype may use mock data first, but the UI should be shaped around the future Supabase data model.

Supabase Postgres is the intended source of truth for MY-Trade-Journal.

The database must support four core realities:

```text
Market Data
System Recommendation
User Action
Final Outcome
```

---

## Security and Ownership Baseline

MY-Trade-Journal should be treated as a single-user private app first, with future multi-user compatibility.

All user-owned tables should include:

- id
- user_id
- created_at
- updated_at

`user_id` should reference the authenticated Supabase user.

Row Level Security should be enabled on all user-owned tables.

Users should only be able to access their own records.

---

## Core Tables

The UI prototype should model screens and mock data around these future tables:

- profiles
- assets
- setups
- market_data_snapshots
- system_recommendations
- user_actions
- trades
- decision_review_log
- risk_log
- behaviour_log
- learning_reviews

---

## setups

Every market setup, including skipped setups.

Suggested fields:

- id
- user_id
- setup_date
- reference_asset_id
- execution_asset_id
- setup_type
- gap_direction
- gap_size
- trade_window
- market_regime
- volatility_status
- spread_status
- volume_status
- news_risk
- system_score
- system_grade
- system_recommendation
- system_reason
- created_at
- updated_at

---

## system_recommendations

What the system recommended before user action.

Suggested fields:

- id
- user_id
- setup_id
- recommendation
- score
- grade
- allowed_risk_percent
- allowed_risk_amount
- position_size_suggestion
- invalidation_level
- reason
- created_at
- updated_at

---

## user_actions

What the user actually did.

Suggested fields:

- id
- user_id
- setup_id
- action_taken
- followed_system
- override_reason
- emotion_state
- entry_price
- planned_stop
- planned_target
- position_size
- action_time
- notes
- created_at
- updated_at

---

## trades

Executed trades only.

Suggested fields:

- id
- user_id
- setup_id
- user_action_id
- entry_price
- exit_price
- position_size
- account_balance_at_trade
- planned_risk_amount
- planned_risk_percent
- actual_risk_amount
- actual_risk_percent
- planned_risk_reward
- actual_risk_reward
- gross_pnl
- fees
- spread_cost
- fee_drag_percent
- spread_drag_percent
- net_pnl
- planned_r_multiple
- actual_r_multiple
- result_r_multiple
- opened_at
- closed_at
- trade_status
- created_at
- updated_at

---

## decision_review_log

The core learning table.

Suggested fields:

- id
- user_id
- setup_id
- market_data_quality
- system_recommendation
- user_action
- final_outcome
- skipped_trade_outcome
- system_correct
- user_correct
- market_data_confirmed
- final_label
- lesson
- future_rule_suggestion
- reviewed_at
- created_at
- updated_at

---

## risk_log

Risk state and locks.

Suggested fields:

- id
- user_id
- date
- account_balance_start
- account_balance_end
- daily_realised_pnl
- weekly_realised_pnl
- daily_loss_used
- weekly_loss_used
- max_daily_loss
- max_weekly_loss
- daily_loss_limit_amount
- weekly_loss_limit_amount
- risk_mode
- lock_status
- lock_reason
- created_at
- updated_at

---

## behaviour_log

User behaviour and discipline tracking.

Suggested fields:

- id
- user_id
- setup_id
- fomo_trade
- revenge_trade
- early_entry
- late_entry
- overrode_system
- exited_early
- held_too_long
- rule_violation
- behaviour_notes
- created_at
- updated_at

---

## learning_reviews

Periodic system learning summaries.

Suggested fields:

- id
- user_id
- review_period
- setups_reviewed
- best_setup_type
- worst_setup_type
- best_time_window
- worst_time_window
- system_accuracy
- user_follow_rate
- expectancy
- recommendation
- created_at
- updated_at

---

## UI Prototype Rule

The prototype does not need live Supabase integration immediately.

If using mock data, the mock objects should reflect the table names and field concepts above so future integration is easier.

---

## Required Design Principle

Every setup must be reviewable even if no trade was taken.

Skipped setups are part of the intelligence layer.
