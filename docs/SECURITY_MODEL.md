# Security Model

MY-Trade-Journal is a private manual-execution trading intelligence system.

This prototype must protect user data, avoid accidental trade automation, and keep all credentials out of the frontend and repository.

---

## Security Position

Default posture:

```text
Single-user private app first.
Future multi-user compatibility.
```

The prototype may use mock data, but it must not introduce unsafe patterns that would be dangerous later.

---

## Core Security Principles

- No broker credentials should be stored.
- No API keys should be committed.
- No `.env` files should be committed.
- No trading execution credentials are allowed.
- Supabase service-role keys must never be exposed to the frontend.
- If Supabase is added later, Row Level Security should be enabled on user-owned tables.
- User-owned records should include `user_id` when backend integration begins.

---

## Frontend Security

The React / Next.js frontend may later use:

- Supabase anon key
- public project URL

The frontend must not contain:

- service-role key
- Telegram bot token
- TradingView webhook secret
- broker credentials
- private API keys

---

## Mock Data Rule

If backend is not ready, use mock data only.

Mock data must live in a clearly named file such as:

```text
lib/mockData.ts
```

Do not scatter mock data across components.

Do not include real account details, real API keys, or real credentials in mock data.

---

## Trading Safety

The system must not execute trades automatically.

The system may recommend:

- Trade Allowed
- Wait
- Skip
- Reduce Risk
- Lock
- Exit Review

The user executes trades manually outside the system.

No broker execution API should be added during the current architecture.

---

## Locked State Safety

When risk lock is active, the UI should:

- disable new trade action
- allow review only
- allow notes
- allow learning screen access
- prevent lock override in MVP v0.1

---

## Secret Handling

Never commit:

- `.env`
- `.env.local`
- API keys
- bot tokens
- service-role keys
- private credentials

Use environment variables or platform-managed secrets only when real integration begins.

---

## Prototype Security Acceptance Criteria

The prototype is not complete until:

- no secrets are committed
- no broker execution exists
- no Apps Script/clasp/Google Sheets files are added
- mock data is centralised
- service-role keys are absent
- manual execution is visible in the UI
- risk lock visibly disables new trade action
