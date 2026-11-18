import { createHash, createHmac, timingSafeEqual } from "node:crypto";

export const COOKIE_NAME = "hat_presenter";
export const SESSION_MS = 60 * 60 * 1000;

function hmac(value: string, secret: string): string {
  return createHmac("sha256", secret).update(value).digest("hex");
}

/** Token format: `<expiresAtMs>.<hex HMAC-SHA256 of expiresAtMs>` */
export function signToken(expiresAtMs: number, secret: string): string {
  const exp = String(expiresAtMs);
  return `${exp}.${hmac(exp, secret)}`;
}

export function verifyToken(token: string | undefined, secret: string, nowMs: number): boolean {
  if (!token || !secret) return false;
  const [exp, sig] = token.split(".");
  if (!exp || !sig || !/^\d+$/.test(exp)) return false;
  const expected = Buffer.from(hmac(exp, secret), "hex");
  const given = Buffer.from(sig, "hex");
  if (given.length !== expected.length || !timingSafeEqual(given, expected)) return false;
  return Number(exp) > nowMs;
}

/** Constant-time password comparison (hashing equalises lengths). */
export function passwordMatches(given: string, expected: string): boolean {
  const a = createHash("sha256").update(given).digest();
  const b = createHash("sha256").update(expected).digest();
  return timingSafeEqual(a, b);
}
