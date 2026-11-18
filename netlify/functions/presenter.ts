// Private Presentation Mode — /.netlify/functions/presenter/{login,financials,logout}
import { privateFinancials } from "../lib/presenter-data.ts";
import {
  COOKIE_NAME,
  SESSION_MS,
  passwordMatches,
  signToken,
  verifyToken,
} from "../lib/presenter-session.ts";

const COOKIE_PATH = "/.netlify/functions/presenter";

function json(status: number, body: unknown, cookie?: string): Response {
  const headers: Record<string, string> = {
    "content-type": "application/json",
    "cache-control": "no-store",
  };
  if (cookie) headers["set-cookie"] = cookie;
  return new Response(JSON.stringify(body), { status, headers });
}

function sessionCookie(secret: string): string {
  const token = signToken(Date.now() + SESSION_MS, secret);
  return `${COOKIE_NAME}=${token}; HttpOnly; Secure; SameSite=Strict; Path=${COOKIE_PATH}; Max-Age=${SESSION_MS / 1000}`;
}

function readCookie(req: Request): string | undefined {
  const header = req.headers.get("cookie") ?? "";
  for (const part of header.split(";")) {
    const [name, ...rest] = part.trim().split("=");
    if (name === COOKIE_NAME) return rest.join("=");
  }
  return undefined;
}

export default async function handler(req: Request): Promise<Response> {
  const password = process.env.PRESENTER_PASSWORD;
  const secret = process.env.PRESENTER_SECRET;
  if (!password || !secret) return json(500, { error: "Private mode is not configured" });

  const action = new URL(req.url).pathname.split("/").pop();

  if (action === "login" && req.method === "POST") {
    let given = "";
    try {
      given = String((await req.json())?.password ?? "");
    } catch {
      /* treat as empty password */
    }
    if (!passwordMatches(given, password)) {
      await new Promise((r) => setTimeout(r, 1000)); // slow down guessing
      return json(401, { error: "Incorrect password" });
    }
    return json(200, { ok: true }, sessionCookie(secret));
  }

  if (action === "financials" && req.method === "GET") {
    if (!verifyToken(readCookie(req), secret, Date.now())) {
      return json(401, { error: "Not logged in" });
    }
    return json(200, { financials: privateFinancials }, sessionCookie(secret));
  }

  if (action === "logout" && req.method === "POST") {
    return json(200, { ok: true }, `${COOKIE_NAME}=; HttpOnly; Secure; SameSite=Strict; Path=${COOKIE_PATH}; Max-Age=0`);
  }

  return json(404, { error: "Not found" });
}
