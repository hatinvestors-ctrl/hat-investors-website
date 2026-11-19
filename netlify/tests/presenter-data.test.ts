import { test } from "node:test";
import assert from "node:assert/strict";
import { privateFinancials } from "../lib/presenter-data.ts";
import { projects } from "../../src/data/projects.ts";

const ALWAYS_PRIVATE = {
  flip: ["purchase", "sold", "profit", "roi"],
  brrrr: ["marketValue", "equity", "monthlyCosts", "cashFlow", "allIn"],
} as const;
const PRIVATE_WHEN_HIDDEN = {
  flip: ["renovation", "hml", "allIn", "costs"],
  brrrr: ["purchase"],
} as const;

test("every private entry matches a public project title", () => {
  const titles = new Set(projects.map((p) => p.title));
  for (const key of Object.keys(privateFinancials)) {
    assert.ok(titles.has(key), `no project titled "${key}"`);
  }
});

test("no private field remains in the public data", () => {
  for (const p of projects) {
    if (p.type === "coming-soon") continue;
    const fields = [
      ...ALWAYS_PRIVATE[p.type],
      ...(p.hideFinancials ? PRIVATE_WHEN_HIDDEN[p.type] : []),
    ];
    for (const f of fields) {
      assert.equal((p as Record<string, unknown>)[f], undefined, `${p.title}.${f} is still public`);
      assert.ok(privateFinancials[p.title]?.[f] !== undefined, `${p.title}.${f} missing from private data`);
    }
  }
});

test("Volusia (Coming Soon) private figures reconcile", () => {
  const v = privateFinancials["450 S Volusia St"];
  const n = (s: string) => Number(s.replace(/[^0-9.-]/g, ""));
  assert.equal(projects.find((p) => p.title === "450 S Volusia St")?.type, "coming-soon");
  assert.equal(n(v.allIn), 113500 + 2243 + n(v.renovation) + 4500);
  assert.equal(n(v.profit), Math.round(n(v.sold) - 259900 * 0.115 - n(v.allIn)));
  assert.equal(v.roi, "9.4%");
});

test("values moved verbatim", () => {
  assert.equal(privateFinancials["8764 Darlington"].roi, "107%");
  assert.equal(privateFinancials["6855 Hafford Lane"].marketValue, "$240,000");
  assert.equal(privateFinancials["2058 W 40th St"].purchase, "$71,000");
});
