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
  // Final figures from HAT CRM (2026-11-19).
  // hml = lender fees at closing $4,562 + holding interest $12,003 (7 months)
  // allIn = purchase + $1,691 purchase closing + hml + renovation
  // costs = selling costs (commissions $16,320 + title $2,720) + $0 other holding
  // roi = net profit / total cash invested $43,660
  "6226 W Pennant Dr W": {
    purchase: "$127,000",
    renovation: "$69,870",
    hml: "$16,565",
    allIn: "$215,126",
    sold: "$272,000",
    costs: "$19,040",
    profit: "$37,834",
    roi: "86.7%",
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
  // Rental (BRRRR), figures from HAT CRM (2026-11-19). Renovation $52,000;
  // allIn = 120,000 + 52,000 + 3,426 closing + 4,288 lender fees + 12,905 interest
  // + 2,939 other holding. Market value is the CRM's original estimate (ARV),
  // not a sale or refinance appraisal. Refinance figures not yet supplied.
  "1012 Beckner Avenue": {
    purchase: "$120,000",
    allIn: "$195,558",
    marketValue: "$228,000 (est. ARV)",
    equity: "Pending refinance figures",
    monthlyCosts: "Pending refinance figures",
    cashFlow: "Pending refinance figures",
  },
  // HAT CRM figures (2026-11-19). NOT SOLD: sale price, selling costs, profit
  // and ROI are projections. hml = lender fees $6,233 (incl. $1,700 extension,
  // $500 lender title insurance) + interest $25,500 (15 months).
  // allIn = 131,000 + 2,351 closing + 6,233 + 96,002 + 25,500 + 6,750 other holding.
  // roi = profit / total cash invested $97,836.
  "1283 Plymouth Pl": {
    purchase: "$131,000",
    renovation: "$96,002",
    hml: "$31,733",
    allIn: "$267,836",
    sold: "$298,000 (expected)",
    costs: "$35,211 (expected)",
    profit: "-$5,047 (projected)",
    roi: "-5.2% (projected)",
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
