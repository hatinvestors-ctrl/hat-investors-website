import { test } from "node:test";
import assert from "node:assert/strict";
import { privateFinancials } from "../lib/presenter-data.ts";
import { projects } from "../../src/data/projects.ts";

const ALWAYS_PRIVATE = {
  flip: ["purchase", "cashInvested", "sold", "profit", "roi"],
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

test("ROI = profit / cash invested (1 decimal) on every flip box with figures", () => {
  const n = (s: string) => Number(s.replace(/[^0-9.-]/g, ""));
  let checked = 0;
  for (const [title, v] of Object.entries(privateFinancials)) {
    if (v.cashInvested === undefined) continue;
    if (!/\d/.test(v.cashInvested) || !/\d/.test(v.profit ?? "")) {
      assert.equal(v.roi, "TBD", `${title}: ROI shown without cash invested/profit`);
      continue;
    }
    assert.equal(v.roi, `${(n(v.profit) / n(v.cashInvested) * 100).toFixed(1)}%`, `${title}: ROI does not reconcile`);
    checked++;
  }
  assert.equal(checked, 6);
});

test("supplied cash invested figures", () => {
  const c = (t: string) => privateFinancials[t].cashInvested;
  assert.equal(c("6226 W Pennant Dr W"), "$43,265");
  assert.equal(c("1283 Plymouth Pl"), "$77,836");
  assert.equal(c("165 Toledo St"), "$49,240");
  assert.equal(c("1550 Parrish Pl"), "$59,468");
  assert.equal(c("450 S Volusia St"), "$210,243");
  assert.equal(c("8764 Darlington"), "$196,000");
  assert.equal(c("4757 Kingsbury Street"), "TBD");
});

test("values moved verbatim", () => {
  assert.equal(privateFinancials["8764 Darlington"].roi, "20.7%");
  assert.equal(privateFinancials["6855 Hafford Lane"].marketValue, "$240,000");
  assert.equal(privateFinancials["2058 W 40th St"].purchase, "$71,000");
});
