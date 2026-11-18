# Private Presentation Mode Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Password-protected private mode that reveals the hidden project numbers on Our Projects, with the numbers removed from the public bundle.

**Architecture:** Hidden values move from `src/data/projects.ts` into a server-only module bundled into one Netlify Function. The function issues an HMAC-signed HttpOnly cookie on login and returns the values only to a valid cookie. A small React context fetches them when private mode is on and `OurProjects.tsx` shows them in the existing `MetricCell`s.

**Tech Stack:** Vite + React 18 + TS, Netlify Functions (v2 `Request`/`Response` handler), Node `crypto`, Node 24 built-in test runner (`node --test`, native TS type stripping). No new dependencies.

**Spec:** `docs/superpowers/specs/2026-11-19-private-presentation-mode-design.md`

## Global Constraints
- No visual change to any existing page for public visitors.
- No number changed: values move verbatim.
- No new npm dependencies.
- Env vars: `PRESENTER_PASSWORD`, `PRESENTER_SECRET`. Cookie name `hat_presenter`. Session 60 minutes, sliding.
- Function URL base: `/.netlify/functions/presenter`.
- No production deploy, no push, without Tomer's approval.

## Review Focus
- Server env vars missing → login must fail closed (500/401), never accept any password. Test in Task 1.
- Tampered or expired cookie → 401. Test in Task 1.
- Public visitor (no flag) → zero requests to the function, page identical to today. Checked in Task 4 by built-bundle grep and manual check.
- Session expires while page open → numbers go back to `••••••` and controls disappear, no error screen. Task 3.
- Project title in private data with no match in `projects.ts` (typo) → silently missing value. Test in Task 2 that every private key matches a public title.

---

### Task 1: Server — session helpers, private data, function

**Files:**
- Create: `netlify/lib/presenter-session.ts`, `netlify/lib/presenter-data.ts`, `netlify/functions/presenter.ts`
- Test: `netlify/tests/presenter.test.ts`
- Modify: `package.json` (script `"test:server": "node --test netlify/tests/"`)

**Interfaces:**
- Produces: `signToken(expiresAtMs: number, secret: string): string`; `verifyToken(token: string | undefined, secret: string, nowMs: number): boolean` (format `<expiresAtMs>.<hex hmac>`; constant-time compare).
- Produces: `export const privateFinancials: Record<string, Record<string, string>>` keyed by exact project title.
- Produces: `export default async function handler(req: Request): Promise<Response>` routing on path suffix `/login` (POST JSON `{password}`), `/financials` (GET), `/logout` (POST). Success login → 200 `{ok:true}` + `Set-Cookie: hat_presenter=…; HttpOnly; Secure; SameSite=Strict; Path=/.netlify/functions/presenter; Max-Age=3600`. Financials → 200 `{financials}` + renewed cookie. Logout → 200 + `Max-Age=0`.

- [ ] Write tests: valid token verifies; tampered sig, wrong secret, expired, malformed, undefined → false. Handler: wrong password → 401; missing env → not 200; correct password → 200 with `HttpOnly` cookie; `/financials` without cookie → 401; with login cookie → 200 and `financials["6226 W Pennant Dr W"].profit === "$55,000"`; expired cookie → 401; logout → `Max-Age=0`.
- [ ] Run `npm run test:server` → FAIL (modules missing).
- [ ] Implement. Failed login waits ~1s before 401. Password compare via `timingSafeEqual` on SHA-256 digests.
- [ ] Run `npm run test:server` → PASS.
- [ ] Commit.

### Task 2: Move hidden values out of `projects.ts`

**Files:** Modify `src/data/projects.ts`, `netlify/lib/presenter-data.ts`; Test: `netlify/tests/presenter-data.test.ts`

Fields moved (exactly the cells rendered `••••••` today):
- Flip: `purchase`, `sold`, `profit`, `roi` always; `renovation`, `hml`, `allIn`, `costs` when `hideFinancials`.
- BRRRR: `marketValue`, `equity`, `monthlyCosts`, `cashFlow`, `allIn` always; `purchase` when `hideFinancials`.
Types: those fields become optional (`?: string`).

- [ ] Write test: every key of `privateFinancials` is a title in `projects`; for each project, none of its always-private fields remain in `projects.ts`; spot values `8764 Darlington.roi === "107%"`, `6855 Hafford Lane.marketValue === "$240,000"`, `2058 W 40th St.purchase === "$71,000"`.
- [ ] Run → FAIL. Move values verbatim. Run → PASS. `npx tsc --noEmit -p tsconfig.app.json` clean.
- [ ] Commit.

### Task 3: Client — presenter context, `/admin` page, controls

**Files:** Create `src/lib/presenter.tsx`, `src/pages/Admin.tsx`, `src/components/PresenterControls.tsx`; Modify `src/App.tsx` (provider, `/admin` route, controls).

**Interfaces:**
- Produces: `usePresenter(): { active: boolean; showNumbers: boolean; financials: Record<string, Record<string,string>> | null; login(password: string): Promise<boolean>; logout(): Promise<void>; toggleNumbers(): void }`.
- localStorage keys: `hat_presenter_on` ("1"), `hat_presenter_last` (ms of last activity), `hat_presenter_show` ("0"/"1", default show).
- Behaviour: fetch financials on mount only when flag set; 401 → clear state. Activity events (pointerdown, keydown, scroll, throttled) update last-activity; check each minute; >60 min idle → `logout()`. While active, re-fetch every 10 minutes.
- `Admin.tsx`: password field + button styled with existing `bg-navy-deep`, `btn-gold`; wrong password shows "Incorrect password"; success → navigate `/our-projects`.
- `PresenterControls`: fixed bottom-right pill, renders only when `active`: "Hide Numbers"/"Show Numbers", "Exit Private Mode".
- [ ] Implement; `npx tsc --noEmit -p tsconfig.app.json` clean; commit.

### Task 4: Wire Our Projects + verification

**Files:** Modify `src/pages/OurProjects.tsx`.

- Each hidden `MetricCell` gets `value = project.X ?? private[title]?.X` and `hidden = publicHidden && !(active && showNumbers)`. Markup otherwise unchanged.
- [ ] Implement; type-check; `npm run build`.
- [ ] Bundle check: `grep -r` in `dist/` for `$55,000`, `132%`, `$122,000`, `$272,000`, `$240,000`, `$71,000` → no matches.
- [ ] Local run with `netlify dev` + `.env.local` test password: curl checks (401 unauthenticated, 200 after login, 401 after logout); browser check public view unchanged, private view shows numbers, toggle and exit work.
- [ ] Commit.
