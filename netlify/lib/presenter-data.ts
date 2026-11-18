// ─── PRIVATE PROJECT NUMBERS ────────────────────────────────────────────────
// Server-only. These values are NOT in the public website code; they are sent
// only after logging in at /admin (Private Presentation Mode).
//
// Keys must match the project `title` in src/data/projects.ts exactly.
// Fields here are the ones shown as •••••• to public visitors.
// ─────────────────────────────────────────────────────────────────────────────

export type PrivateFinancials = Record<string, Record<string, string>>;

export const privateFinancials: PrivateFinancials = {
  // ── RENTALS ────────────────────────────────────────────────────────────────
  "2058 W 40th St": {
    purchase: "$71,000",
    allIn: "TBD",
    marketValue: "TBD",
    monthlyCosts: "TBD",
    cashFlow: "TBD",
    equity: "TBD",
  },
  "2050 W 40th St": {
    purchase: "$67,000",
    allIn: "TBD",
    marketValue: "TBD",
    monthlyCosts: "TBD",
    cashFlow: "TBD",
    equity: "TBD",
  },
  "9129 Tamworth Rd": {
    purchase: "Acquired below market",
    allIn: "TBD",
    marketValue: "TBD — targeting high appraisal post-renovation",
    monthlyCosts: "TBD",
    cashFlow: "TBD",
    equity: "TBD",
  },
  "6855 Hafford Lane": {
    allIn: "$190,000",
    marketValue: "$240,000",
    monthlyCosts: "$1,400",
    cashFlow: "$200",
    equity: "$50,000",
  },

  // ── FLIPS ──────────────────────────────────────────────────────────────────
  "6226 W Pennant Dr W": {
    purchase: "$122,000",
    renovation: "$65,000",
    hml: "$14,000",
    allIn: "$201,000",
    sold: "$272,000",
    costs: "$16,000",
    profit: "$55,000",
    roi: "132%",
  },
  "8764 Darlington": {
    purchase: "$120,000",
    renovation: "$76,000",
    hml: "Cash Deal",
    allIn: "$196,000",
    sold: "$254,000",
    costs: "$17,500",
    profit: "$40,500",
    roi: "107%",
  },
  "1012 Beckner Avenue": {
    purchase: "TBD",
    sold: "$229,900",
    profit: "TBD",
    roi: "TBD",
  },
  "1283 Plymouth Pl": {
    purchase: "$131,000",
    sold: "$329,900",
    profit: "TBD",
    roi: "TBD",
  },
  "4757 Kingsbury Street": {
    purchase: "$100,000",
    sold: "$240,000",
    profit: "TBD",
    roi: "TBD",
  },
  "1550 Parrish Pl": {
    purchase: "$000,000",
    sold: "$000,000",
    profit: "$000,000",
    roi: "000%",
  },
  "165 Toledo St": {
    purchase: "TBD",
    renovation: "TBD",
    hml: "TBD",
    allIn: "TBD",
    sold: "TBD",
    costs: "TBD",
    profit: "TBD",
    roi: "TBD",
  },
};
