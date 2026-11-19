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
    marketValue: "$228,000",
    equity: "Pending refinance figures",
    monthlyCosts: "Pending refinance figures",
    cashFlow: "Pending refinance figures",
  },
  // REVISED SCENARIO (2026-11-19): renovation reduced by $20,000 (96,002 -> 76,002),
  // not yet confirmed as an actual expense reduction. NOT SOLD: sale price, selling
  // costs, profit and ROI are projections. hml = lender fees $6,233 (incl. $1,700
  // extension, $500 lender title insurance) + interest $25,500 (15 months).
  // allIn = 131,000 + 2,351 closing + 6,233 + 76,002 + 25,500 + 6,750 other holding.
  // roi = profit / total cash invested $77,836 (reno cash gap 43,902 -> 23,902).
  // Not displayed: annualized ROI 15.4% (x12/15); break-even $281,665
  // ((all-in + $10,000 other selling) / (1 - 7% commissions - title 4,351/298,000));
  // cash returned $92,789.
  "1283 Plymouth Pl": {
    purchase: "$131,000",
    renovation: "$76,002",
    hml: "$31,733",
    allIn: "$247,836",
    sold: "$298,000",
    costs: "$35,211",
    profit: "$14,953",
    roi: "19.2%",
  },
  "4757 Kingsbury Street": {
    purchase: "$100,000",
    sold: "$240,000",
    profit: "TBD",
    roi: "TBD",
  },
  // REVISED SCENARIO (2026-11-19): purchase and renovation are revised assumptions,
  // not confirmed actual costs. Sale price and selling costs are actual.
  // hml = lender fees $5,247 + interest $15,391 (7 months), unchanged.
  // allIn = 210,000 + 6,501 closing + 5,247 + 35,000 + 15,391 (+ $0 other holding).
  // costs = selling costs 7% (commissions 18,840 + title 3,140).
  // roi = profit / cash invested $59,468 (10% down 21,000 + reno gap 11,329
  // [35,000 - 23,671 lender reno funding] + 5,247 + 6,501 + 15,391).
  // Not displayed: annualized ROI 57.3%; break-even $292,623 (all-in / 0.93);
  // cash returned $79,349.
  // Superseded ACTUAL results (record only): purchase $218,000, renovation $46,414,
  // all-in $291,553, profit $467, ROI 0.7% on $71,682 cash, break-even $313,498.
  "1550 Parrish Pl": {
    purchase: "$210,000",
    renovation: "$35,000",
    hml: "$20,638",
    allIn: "$272,139",
    sold: "$314,000",
    costs: "$21,980",
    profit: "$19,881",
    roi: "33.4%",
  },
  // Coming Soon card: these show only in Private Presentation Mode.
  // Figures supplied 2026-11-19. 100% cash, no lender fees or interest.
  // NOT SOLD: $259,900 is the current scenario. allIn = 113,500 + 2,243 closing
  // + 90,000 + 4,500 holding (10 x 450). Selling = 8% listing + 2.5% buyer + 1%
  // title = 29,888.50 (shown rounded); profit 19,769 and ROI 9.4% are computed
  // from the unrounded amount, so the boxes differ by $1 from rounded subtraction.
  "450 S Volusia St": {
    purchase: "$113,500",
    renovation: "$90,000",
    hml: "Cash Deal",
    allIn: "$210,243",
    sold: "$259,900",
    costs: "$29,889",
    profit: "$19,769",
    roi: "9.4%",
  },
  // HAT CRM figures (2026-11-19). NOT CONFIRMED SOLD: sale price, selling costs,
  // profit and ROI are expected results. REVISED ASSUMPTION: renovation reduced
  // by $5,000 (50,000 -> 45,000), not yet confirmed as an actual expense.
  // hml = lender fees $4,800 + interest $15,800 (8 months).
  // allIn = 175,000 + 1,500 closing + 4,800 + 45,000 + 15,800 + 4,640 other holding.
  // roi = profit / cash invested $49,240 (reno cash gap 10,000 -> 5,000).
  // Not displayed: annualized ROI 100.1%; break-even $264,742; cash returned $82,100.
  "165 Toledo St": {
    purchase: "$175,000",
    renovation: "$45,000",
    hml: "$20,600",
    allIn: "$246,740",
    sold: "$300,000",
    costs: "$20,400",
    profit: "$32,860",
    roi: "66.7%",
  },
};
