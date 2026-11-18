# Private Presentation Mode — Design

**Date:** 2026-11-19 · **Status:** Approved by Tomer (spec given in conversation)

## Intent
When presenting the live site to investors or partners, Tomer wants the Our Projects
page to show the real financial numbers instead of `••••••`. Public visitors must never
be able to get those numbers — not on the page, not in the browser code.

## Goals
- `/admin` → enter password → Our Projects shows all hidden numbers.
- Small **Show/Hide Numbers** button and **Exit Private Mode** button, visible only in private mode.
- Stays logged in across navigation/refresh; expires after 60 minutes of inactivity.
- Hidden numbers removed from the public JavaScript bundle and served only after login.

## Non-goals / anti-goals
- No redesign: pages, cards, images, layout stay exactly as they are.
- No database, CRM, dashboard, user accounts, or new financial fields/calculations.
- No new dependencies.
- Not changing any number.

## Constraints
- Netlify static site (Vite + React), builds from `main` via GitHub App.
- GitHub repo is being made private by Tomer (numbers are in git history).
- No production deploy without Tomer's approval.

## Approaches considered
1. **Shared password + Netlify Function serving private numbers (chosen).** Small, no deps, real protection.
2. Client-side password check with numbers in the bundle — rejected: numbers stay readable in browser code.
3. Per-person links or real accounts — rejected: only Tomer presents; more than needed.

## Design
**Which numbers are private** — exactly the cells that render as `••••••` today:
- Flip: `purchase`, `sold`, `profit`, `roi` (always); `renovation`, `hml`, `allIn`, `costs` (when `hideFinancials`).
- BRRRR: `marketValue`, `equity`, `monthlyCosts`, `cashFlow` (always); `purchase` (when `hideFinancials`).
- BRRRR `allIn` is never displayed; it moves to the private file too (no UI change).

**Data split**
- `src/data/projects.ts` keeps everything else; the private fields become optional and are removed.
- `netlify/functions/presenter-data.ts` (server-only) holds the moved values, keyed by project title, copied verbatim.

**Server** — one function `netlify/functions/presenter.ts`, reached at `/.netlify/functions/presenter/*`
(this path is never caught by the SPA redirect):
- `POST /login {password}` — constant-time compare with env `PRESENTER_PASSWORD`; on success sets cookie
  `hat_presenter=<expiry>.<HMAC-SHA256>` (secret: env `PRESENTER_SECRET`), `HttpOnly; Secure; SameSite=Strict`,
  60-minute lifetime. On failure: 401 after a ~1s delay.
- `GET /financials` — valid unexpired cookie → returns the private values and renews the cookie for 60 minutes; else 401.
- `POST /logout` — clears the cookie.

**Client**
- `src/lib/presenter.tsx`: small React context. Calls the server only if a localStorage flag says private mode
  is on (public visitors make no extra requests). Tracks activity; after 60 minutes with none → logout.
  While active, re-fetches every ~10 minutes to keep the server session alive.
- `/admin` page: one password field + button, using existing site styles. Success → `/our-projects`.
- Floating pill (bottom corner, private mode only): Show/Hide Numbers, Exit Private Mode.
- `OurProjects.tsx`: same markup; when private mode is on and numbers are shown, the hidden cells display the private value.

## Left to the builder / calls made
- "Contact us for full financial details" line stays as is (no design change).
- `/admin` is not linked from anywhere on the site.
- Setting `PRESENTER_PASSWORD` and `PRESENTER_SECRET` in Netlify is done at deploy time, with Tomer.
