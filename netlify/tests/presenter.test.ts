import { test } from "node:test";
import assert from "node:assert/strict";
import { signToken, verifyToken } from "../lib/presenter-session.ts";
import handler from "../functions/presenter.ts";

const SECRET = "test-secret-0123456789";
const PASSWORD = "correct horse battery";
const BASE = "http://localhost/.netlify/functions/presenter";

function setEnv() {
  process.env.PRESENTER_PASSWORD = PASSWORD;
  process.env.PRESENTER_SECRET = SECRET;
}

function cookieFrom(res: Response): string {
  const raw = res.headers.get("set-cookie") ?? "";
  return raw.split(";")[0];
}

function login(password: string) {
  return handler(
    new Request(`${BASE}/login`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ password }),
    }),
  );
}

test("valid token verifies", () => {
  const t = signToken(Date.now() + 60_000, SECRET);
  assert.equal(verifyToken(t, SECRET, Date.now()), true);
});

test("tampered, wrong-secret, expired, malformed and missing tokens fail", () => {
  const now = Date.now();
  const t = signToken(now + 60_000, SECRET);
  const [exp, sig] = t.split(".");
  assert.equal(verifyToken(`${Number(exp) + 999999}.${sig}`, SECRET, now), false);
  assert.equal(verifyToken(t, "other-secret", now), false);
  assert.equal(verifyToken(signToken(now - 1, SECRET), SECRET, now), false);
  assert.equal(verifyToken("garbage", SECRET, now), false);
  assert.equal(verifyToken(undefined, SECRET, now), false);
});

test("wrong password is rejected", async () => {
  setEnv();
  const res = await login("nope");
  assert.equal(res.status, 401);
  assert.equal(res.headers.get("set-cookie"), null);
});

test("missing env vars never accept a login", async () => {
  delete process.env.PRESENTER_PASSWORD;
  delete process.env.PRESENTER_SECRET;
  const res = await login("");
  assert.notEqual(res.status, 200);
  const res2 = await login("undefined");
  assert.notEqual(res2.status, 200);
});

test("correct password sets a secure HttpOnly cookie", async () => {
  setEnv();
  const res = await login(PASSWORD);
  assert.equal(res.status, 200);
  const sc = res.headers.get("set-cookie") ?? "";
  assert.match(sc, /^hat_presenter=/);
  assert.match(sc, /HttpOnly/);
  assert.match(sc, /Secure/);
  assert.match(sc, /SameSite=Strict/);
  assert.match(sc, /Max-Age=3600/);
});

test("financials require a valid cookie", async () => {
  setEnv();
  const anon = await handler(new Request(`${BASE}/financials`));
  assert.equal(anon.status, 401);

  const cookie = cookieFrom(await login(PASSWORD));
  const res = await handler(new Request(`${BASE}/financials`, { headers: { cookie } }));
  assert.equal(res.status, 200);
  const body = await res.json();
  assert.equal(body.financials["6226 W Pennant Dr W"].profit, "$42,834");
  assert.equal(body.financials["6226 W Pennant Dr W"].roi, "99.0%");
  assert.match(res.headers.get("set-cookie") ?? "", /Max-Age=3600/);
});

test("expired cookie is rejected", async () => {
  setEnv();
  const cookie = `hat_presenter=${signToken(Date.now() - 1000, SECRET)}`;
  const res = await handler(new Request(`${BASE}/financials`, { headers: { cookie } }));
  assert.equal(res.status, 401);
});

test("logout clears the cookie", async () => {
  setEnv();
  const res = await handler(new Request(`${BASE}/logout`, { method: "POST" }));
  assert.equal(res.status, 200);
  assert.match(res.headers.get("set-cookie") ?? "", /Max-Age=0/);
});
