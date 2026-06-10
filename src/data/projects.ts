export type ProjectImage = {
  src: string;
  alt: string;
  type: "before" | "after";
};

export type FlipProject = {
  type: "flip";
  title: string;
  location?: string;
  heroImage: string;
  purchase: string;
  renovation: string;
  hml: string;
  allIn: string;
  sold: string;
  costs: string;
  profit: string;
  roi: string;
  layout: string;
  highlights: string;
  description: string;
  status: string;
  /** Titles listed here will have financial figures hidden (shown as ••••••) */
  hideFinancials?: boolean;
  images: ProjectImage[];
};

export type BRRRRProject = {
  type: "brrrr";
  title: string;
  location?: string;
  heroImage: string;
  purchase: string;
  renovation: string;
  allIn: string;
  marketValue: string;
  monthlyRent: string;
  monthlyCosts: string;
  cashFlow: string;
  equity: string;
  layout: string;
  highlights: string;
  description: string;
  status: string;
  images: ProjectImage[];
};

export type ComingSoonProject = {
  type: "coming-soon";
  title: string;
  location?: string;
  heroImage: string;
};

export type Project = FlipProject | BRRRRProject | ComingSoonProject;

// ─── ADD NEW PROJECTS HERE ────────────────────────────────────────────────────
// To add a flip:      copy the FlipProject block below and fill in the fields.
// To add a BRRRR:     copy the BRRRRProject block.
// To add coming-soon: add { type: "coming-soon", title, location, heroImage }.
// Images live in /public/projects/ — name them <slug>-before-<room>.jpg etc.
// ─────────────────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    type: "flip",
    title: "6226 W Pennant Dr W",
    heroImage: "/projects/pennant-hero.jpg",
    hideFinancials: true,
    purchase: "$122,000",
    renovation: "$65,000",
    hml: "$14,000",
    allIn: "$201,000",
    sold: "$272,000",
    costs: "$16,000",
    profit: "$55,000",
    roi: "132%",
    layout: "3 bed / 1 bath upgraded to 4 bed / 2 bath",
    highlights:
      "We turned Pennant into a fully renovated, modern home with all-new finishes and meticulous attention to every detail, so it looks and feels completely brand-new.",
    description:
      "3-bed/2-bath with poor layout—bathroom awkwardly placed in living room from a later addition. Rejected by investors and sat on market. We identified layout issues, negotiated a favorable price, and converted half of the huge garage into a spacious master bedroom with unsuited bathroom utilizing existing plumbing from garage. Upgraded to 4-bed/2-bath, transformed original bathroom into laundry room, significantly improving functionality and ARV.",
    status: "Under contract within 5 days",
    images: [
      { src: "/projects/pennant-before-exterior.jpg", alt: "6226 W Pennant Dr - Before Exterior", type: "before" },
      { src: "/projects/pennant-after-exterior.jpg", alt: "6226 W Pennant Dr - After Exterior", type: "after" },
      { src: "/projects/pennant-before-garage-1.jpg", alt: "6226 W Pennant Dr - Before Garage Conversion", type: "before" },
      { src: "/projects/pennant-after-master-bedroom-1.jpg", alt: "6226 W Pennant Dr - After Master Bedroom", type: "after" },
      { src: "/projects/pennant-before-garage-2.jpg", alt: "6226 W Pennant Dr - Before Garage Interior", type: "before" },
      { src: "/projects/pennant-after-master-bedroom-2.jpg", alt: "6226 W Pennant Dr - After Master Bedroom View 2", type: "after" },
      { src: "/projects/pennant-before-garage-3.jpg", alt: "6226 W Pennant Dr - Before Garage with Bath Fixtures", type: "before" },
      { src: "/projects/pennant-after-master-bathroom.jpg", alt: "6226 W Pennant Dr - After Master Bathroom", type: "after" },
      { src: "/projects/pennant-before-bathroom.jpg", alt: "6226 W Pennant Dr - Before Bathroom", type: "before" },
      { src: "/projects/pennant-after-laundry.jpg", alt: "6226 W Pennant Dr - After Laundry Room", type: "after" },
      { src: "/projects/pennant-after-bathroom.jpg", alt: "6226 W Pennant Dr - After Guest Bathroom", type: "after" },
      { src: "/projects/pennant-before-kitchen-1.jpg", alt: "6226 W Pennant Dr - Before Kitchen", type: "before" },
      { src: "/projects/pennant-after-kitchen-1.jpg", alt: "6226 W Pennant Dr - After Kitchen", type: "after" },
      { src: "/projects/pennant-before-kitchen-2.jpg", alt: "6226 W Pennant Dr - Before Kitchen View 2", type: "before" },
      { src: "/projects/pennant-after-kitchen-2.jpg", alt: "6226 W Pennant Dr - After Kitchen View 2", type: "after" },
      { src: "/projects/pennant-after-kitchen-3.jpg", alt: "6226 W Pennant Dr - After Kitchen View 3", type: "after" },
      { src: "/projects/pennant-after-kitchen-dining-1.jpg", alt: "6226 W Pennant Dr - After Kitchen and Dining", type: "after" },
      { src: "/projects/pennant-after-kitchen-dining-2.jpg", alt: "6226 W Pennant Dr - After Kitchen and Dining View 2", type: "after" },
      { src: "/projects/pennant-after-living.jpg", alt: "6226 W Pennant Dr - After Living Room", type: "after" },
      { src: "/projects/pennant-before-bedroom.jpg", alt: "6226 W Pennant Dr - Before Bedroom", type: "before" },
      { src: "/projects/pennant-after-bedroom-1.jpg", alt: "6226 W Pennant Dr - After Bedroom", type: "after" },
      { src: "/projects/pennant-after-bedroom-2.jpg", alt: "6226 W Pennant Dr - After Bedroom View 2", type: "after" },
      { src: "/projects/pennant-after-backyard.jpg", alt: "6226 W Pennant Dr - After Backyard", type: "after" },
      { src: "/projects/pennant-floorplan.jpg", alt: "6226 W Pennant Dr - Original Floor Plan", type: "before" },
    ],
  },
  {
    type: "flip",
    title: "8764 Darlington",
    heroImage: "/projects/darlington-hero-new.jpg",
    hideFinancials: true,
    purchase: "$120,000",
    renovation: "$76,000",
    hml: "Cash Deal",
    allIn: "$196,000",
    sold: "$254,000",
    costs: "$17,500",
    profit: "$40,500",
    roi: "107%",
    layout: "3 bed / 2 bath upgraded to 4 bed / 2 bath",
    highlights:
      "We took Darlington from tired and dated to a fully transformed, all-new, modern home that looks and feels completely brand new and truly move-in ready.",
    description:
      "A key part of our strategy was to improve the home's layout for modern living. We converted the property from a 3-bedroom to a 4-bedroom home and optimized the master suite, and open Kitchen concept significantly increasing its market value and appeal to families.",
    status: "Under contract within 5 days",
    images: [
      { src: "/projects/darlington-before-6.png", alt: "8764 Darlington - Before Exterior", type: "before" },
      { src: "/projects/darlington-after-exterior-1.png", alt: "8764 Darlington - After Exterior", type: "after" },
      { src: "/projects/darlington-before-9.jpg", alt: "8764 Darlington - Before Exterior Front", type: "before" },
      { src: "/projects/darlington-after-exterior-2.jpg", alt: "8764 Darlington - After Exterior Front", type: "after" },
      { src: "/projects/darlington-before-1.png", alt: "8764 Darlington - Before Kitchen", type: "before" },
      { src: "/projects/darlington-after-kitchen.jpg", alt: "8764 Darlington - After Kitchen", type: "after" },
      { src: "/projects/darlington-after-kitchen-2.jpg", alt: "8764 Darlington - After Kitchen View 2", type: "after" },
      { src: "/projects/darlington-after-kitchen-3.jpg", alt: "8764 Darlington - After Kitchen View 3", type: "after" },
      { src: "/projects/darlington-after-kitchen-dining.jpg", alt: "8764 Darlington - After Kitchen and Dining", type: "after" },
      { src: "/projects/darlington-before-2.png", alt: "8764 Darlington - Before Living Room", type: "before" },
      { src: "/projects/darlington-after-living-1.jpg", alt: "8764 Darlington - After Living Room", type: "after" },
      { src: "/projects/darlington-after-living-3.jpg", alt: "8764 Darlington - After Living Room View 2", type: "after" },
      { src: "/projects/darlington-before-5.png", alt: "8764 Darlington - Before Entry", type: "before" },
      { src: "/projects/darlington-after-living-2.jpg", alt: "8764 Darlington - After Open Living Space", type: "after" },
      { src: "/projects/darlington-before-3.png", alt: "8764 Darlington - Before Dining Area", type: "before" },
      { src: "/projects/darlington-after-dining-1.jpg", alt: "8764 Darlington - After Dining Area", type: "after" },
      { src: "/projects/darlington-after-dining-3.jpg", alt: "8764 Darlington - After Dining Area View 2", type: "after" },
      { src: "/projects/darlington-before-3.png", alt: "8764 Darlington - Before Bedroom", type: "before" },
      { src: "/projects/darlington-after-bedroom.jpg", alt: "8764 Darlington - After Master Bedroom", type: "after" },
      { src: "/projects/darlington-before-4.png", alt: "8764 Darlington - Before Bathroom", type: "before" },
      { src: "/projects/darlington-after-bathroom.jpg", alt: "8764 Darlington - After Bathroom", type: "after" },
      { src: "/projects/darlington-floorplan-2d.png", alt: "8764 Darlington - Floor Plan", type: "after" },
      { src: "/projects/darlington-floorplan-3d.png", alt: "8764 Darlington - 3D Layout", type: "after" },
    ],
  },
  {
    type: "brrrr",
    title: "6855 Hafford Lane",
    location: "32244 Jacksonville FL",
    heroImage: "/projects/hafford-hero.jpg",
    purchase: "$150,000",
    renovation: "$40,000",
    allIn: "$190,000",
    marketValue: "$240,000",
    monthlyRent: "$1,600",
    monthlyCosts: "$1,400",
    cashFlow: "$200",
    equity: "$50,000",
    layout: "Block and brick house",
    highlights:
      "Purchased at 75% of market value with light rehab. Achieved positive cash flow with expected appreciation plus built-in equity from the purchase. Successfully refinanced from Hard Money to conventional mortgage after 6 months.",
    description:
      "Block and brick construction in good condition. BRRRR strategy chosen for strong financial metrics. Property rented quickly at $1,600/month, reducing monthly holding costs after refinance. Rehab scope: 2 new bathrooms and cosmetic updates throughout.",
    status: "Rented and refinanced",
    images: [
      { src: "/projects/hafford-before-1.jpg", alt: "6855 Hafford Lane - Before: Fireplace", type: "before" },
      { src: "/projects/hafford-before-2.jpg", alt: "6855 Hafford Lane - Before: Living Room", type: "before" },
      { src: "/projects/hafford-before-3.jpg", alt: "6855 Hafford Lane - Before: Exterior Shed", type: "before" },
      { src: "/projects/hafford-before-4.jpg", alt: "6855 Hafford Lane - Before: Backyard Patio", type: "before" },
      { src: "/projects/hafford-before-5.jpg", alt: "6855 Hafford Lane - Before: Backyard Fence", type: "before" },
      { src: "/projects/hafford-before-6.jpg", alt: "6855 Hafford Lane - Before: Front Exterior", type: "before" },
      { src: "/projects/hafford-before-7.jpg", alt: "6855 Hafford Lane - Before: Window Detail", type: "before" },
      { src: "/projects/hafford-before-8.jpg", alt: "6855 Hafford Lane - Before: Front Yard", type: "before" },
      { src: "/projects/hafford-after-1.jpg", alt: "6855 Hafford Lane - After: Front Exterior", type: "after" },
      { src: "/projects/hafford-after-2.jpg", alt: "6855 Hafford Lane - After: Front Exterior with Tree", type: "after" },
      { src: "/projects/hafford-after-3.jpg", alt: "6855 Hafford Lane - After: Side View", type: "after" },
      { src: "/projects/hafford-after-4.jpg", alt: "6855 Hafford Lane - After: Entry Room", type: "after" },
      { src: "/projects/hafford-after-5.jpg", alt: "6855 Hafford Lane - After: Living Room", type: "after" },
      { src: "/projects/hafford-after-6.jpg", alt: "6855 Hafford Lane - After: Living Room with Fireplace", type: "after" },
      { src: "/projects/hafford-after-7.jpg", alt: "6855 Hafford Lane - After: Kitchen", type: "after" },
      { src: "/projects/hafford-after-8.jpg", alt: "6855 Hafford Lane - After: Kitchen Full View", type: "after" },
      { src: "/projects/hafford-after-9.jpg", alt: "6855 Hafford Lane - After: Bathroom", type: "after" },
      { src: "/projects/hafford-after-10.jpg", alt: "6855 Hafford Lane - After: Bedroom with Closets", type: "after" },
      { src: "/projects/hafford-after-11.jpg", alt: "6855 Hafford Lane - After: Bedroom", type: "after" },
      { src: "/projects/hafford-after-12.jpg", alt: "6855 Hafford Lane - After: Second Bathroom", type: "after" },
      { src: "/projects/hafford-after-13.jpg", alt: "6855 Hafford Lane - After: Backyard View", type: "after" },
      { src: "/projects/hafford-after-14.jpg", alt: "6855 Hafford Lane - After: Backyard Shed", type: "after" },
      { src: "/projects/hafford-after-15.jpg", alt: "6855 Hafford Lane - After: Backyard Patio", type: "after" },
      { src: "/projects/hafford-after-16.jpg", alt: "6855 Hafford Lane - After: Rear Exterior", type: "after" },
      { src: "/projects/hafford-after-17.jpg", alt: "6855 Hafford Lane - After: Backyard with Shed", type: "after" },
      { src: "/projects/hafford-after-18.jpg", alt: "6855 Hafford Lane - After: Backyard with Patio Stones", type: "after" },
    ],
  },
  {
    type: "flip",
    title: "1012 Beckner Avenue",
    location: "Jacksonville, FL 32218",
    heroImage: "/projects/beckner-after-exterior-1.jpg",
    purchase: "TBD",
    renovation: "TBD",
    hml: "TBD",
    allIn: "TBD",
    sold: "$229,900",
    costs: "TBD",
    profit: "TBD",
    roi: "TBD",
    layout: "3 bed / 2 bath · 1,481 sqft",
    highlights: "Fully renovated brick ranch with all-new kitchen, modern bathrooms, new flooring throughout, and an expansive bonus room — completely move-in ready at $229,900.",
    description: "Solid brick ranch in Jacksonville completely transformed from top to bottom. The open-concept kitchen features white shaker cabinets, quartz countertops, stainless steel appliances, and a breakfast bar. Both bathrooms are fully updated with marble-tile showers, LED mirrors, and matte black fixtures. New LVP flooring runs throughout. The home also features a large bonus room — ideal as a second living space, home office, or flex room — plus a private backyard with a storage shed.",
    status: "Active on Market — $229,900",
    images: [
      { src: "/projects/beckner-after-exterior-1.jpg", alt: "1012 Beckner Ave - After Exterior", type: "after" },
      { src: "/projects/beckner-after-exterior-2.jpg", alt: "1012 Beckner Ave - After Exterior Angle", type: "after" },
      { src: "/projects/beckner-after-living-1.jpg", alt: "1012 Beckner Ave - After Living Room", type: "after" },
      { src: "/projects/beckner-after-living-2.jpg", alt: "1012 Beckner Ave - After Living Room View 2", type: "after" },
      { src: "/projects/beckner-after-kitchen-1.jpg", alt: "1012 Beckner Ave - After Kitchen with Breakfast Bar", type: "after" },
      { src: "/projects/beckner-after-kitchen-2.jpg", alt: "1012 Beckner Ave - After Kitchen Full View", type: "after" },
      { src: "/projects/beckner-after-kitchen-dining.jpg", alt: "1012 Beckner Ave - After Kitchen and Dining", type: "after" },
      { src: "/projects/beckner-after-dining.jpg", alt: "1012 Beckner Ave - After Dining Area", type: "after" },
      { src: "/projects/beckner-after-master-bedroom.jpg", alt: "1012 Beckner Ave - After Master Bedroom", type: "after" },
      { src: "/projects/beckner-after-master-bathroom-view.jpg", alt: "1012 Beckner Ave - After Master with En-Suite", type: "after" },
      { src: "/projects/beckner-after-bathroom.jpg", alt: "1012 Beckner Ave - After Bathroom", type: "after" },
      { src: "/projects/beckner-after-bedroom-2.jpg", alt: "1012 Beckner Ave - After Bedroom 2", type: "after" },
      { src: "/projects/beckner-after-bedroom-3.jpg", alt: "1012 Beckner Ave - After Bedroom 3", type: "after" },
      { src: "/projects/beckner-after-bonus-room-1.jpg", alt: "1012 Beckner Ave - After Bonus Room", type: "after" },
      { src: "/projects/beckner-after-bonus-room-2.jpg", alt: "1012 Beckner Ave - After Bonus Room View 2", type: "after" },
      { src: "/projects/beckner-after-rear-1.jpg", alt: "1012 Beckner Ave - After Rear Exterior", type: "after" },
      { src: "/projects/beckner-after-rear-2.jpg", alt: "1012 Beckner Ave - After Rear View", type: "after" },
    ],
  },
  {
    type: "flip",
    title: "1283 Plymouth Pl",
    location: "Jacksonville, FL 32205",
    heroImage: "/projects/plymouth-after-exterior-1.jpg",
    purchase: "$131,000",
    renovation: "TBD",
    hml: "Hard Money — 90% LTV",
    allIn: "TBD",
    sold: "$329,900",
    costs: "TBD",
    profit: "TBD",
    roi: "TBD",
    layout: "3 bed / 2 bath · full gut renovation",
    highlights: "A complete gut renovation transforming a neglected property into a stunning open-concept modern home — new siding, new roof, fully redesigned interior, spa-style master bath, and a gorgeous open kitchen/dining/living floor plan.",
    description: "Purchased below market value, this property required a full renovation from the ground up — new siding, roof, all-new plumbing and electrical, and a completely redesigned floor plan. The result is a bright, modern open-concept layout connecting the living room, dining area, and chef's kitchen. The entry features elegant marble-look tile, the master bathroom has a spa-inspired walk-in shower with body jets and premium marble tile, and every room has new LVP flooring, fresh paint, and ceiling fans. Includes an attached garage and a spacious private backyard.",
    status: "Active on Market — $329,900",
    images: [
      // Exterior
      { src: "/projects/plymouth-before-exterior-1.jpg",  alt: "1283 Plymouth Pl - Before Exterior",                    type: "before" },
      { src: "/projects/plymouth-after-exterior-1.jpg",   alt: "1283 Plymouth Pl - After Exterior",                     type: "after" },
      { src: "/projects/plymouth-before-exterior-2.jpg",  alt: "1283 Plymouth Pl - Before Exterior Angle",              type: "before" },
      { src: "/projects/plymouth-after-exterior-2.jpg",   alt: "1283 Plymouth Pl - After Exterior Angle",               type: "after" },
      // Entry / Foyer
      { src: "/projects/plymouth-before-foyer.jpg",       alt: "1283 Plymouth Pl - Before Entry (gut)",                 type: "before" },
      { src: "/projects/plymouth-after-entry-door.jpg",   alt: "1283 Plymouth Pl - After Entry Door",                   type: "after" },
      { src: "/projects/plymouth-before-foyer.jpg",       alt: "1283 Plymouth Pl - Before Foyer (gut)",                 type: "before" },
      { src: "/projects/plymouth-after-foyer.jpg",        alt: "1283 Plymouth Pl - After Foyer with Marble Tile",       type: "after" },
      // Open concept / Living / Dining
      { src: "/projects/plymouth-before-open-area.jpg",   alt: "1283 Plymouth Pl - Before Open Area (framing)",         type: "before" },
      { src: "/projects/plymouth-after-open-concept.jpg", alt: "1283 Plymouth Pl - After Open Concept Living/Dining/Kitchen", type: "after" },
      { src: "/projects/plymouth-before-dining-area.jpg", alt: "1283 Plymouth Pl - Before Dining Area (framing)",       type: "before" },
      { src: "/projects/plymouth-after-dining-kitchen.jpg", alt: "1283 Plymouth Pl - After Dining and Kitchen",         type: "after" },
      { src: "/projects/plymouth-before-living-area.jpg", alt: "1283 Plymouth Pl - Before Living Area (framing)",       type: "before" },
      { src: "/projects/plymouth-after-dining.jpg",       alt: "1283 Plymouth Pl - After Dining Room",                  type: "after" },
      { src: "/projects/plymouth-before-living-area.jpg", alt: "1283 Plymouth Pl - Before Living Room (framing)",       type: "before" },
      { src: "/projects/plymouth-after-living.jpg",       alt: "1283 Plymouth Pl - After Living Room",                  type: "after" },
      { src: "/projects/plymouth-after-living-2.jpg",     alt: "1283 Plymouth Pl - After Living Room View 2",           type: "after" },
      // Kitchen
      { src: "/projects/plymouth-before-kitchen-area.jpg", alt: "1283 Plymouth Pl - Before Kitchen Area (framing)",    type: "before" },
      { src: "/projects/plymouth-after-kitchen-1.jpg",    alt: "1283 Plymouth Pl - After Kitchen with Bar",             type: "after" },
      { src: "/projects/plymouth-before-kitchen-area.jpg", alt: "1283 Plymouth Pl - Before Kitchen (framing)",         type: "before" },
      { src: "/projects/plymouth-after-kitchen-2.jpg",    alt: "1283 Plymouth Pl - After Kitchen Full View",            type: "after" },
      { src: "/projects/plymouth-after-kitchen-detail.jpg", alt: "1283 Plymouth Pl - After Kitchen Detail",             type: "after" },
      // Master bedroom & bathroom
      { src: "/projects/plymouth-before-master-bedroom.jpg", alt: "1283 Plymouth Pl - Before Master Bedroom (framing)", type: "before" },
      { src: "/projects/plymouth-after-master-bedroom.jpg",  alt: "1283 Plymouth Pl - After Master Bedroom",            type: "after" },
      { src: "/projects/plymouth-before-master-bedroom.jpg", alt: "1283 Plymouth Pl - Before Master Bath (framing)",    type: "before" },
      { src: "/projects/plymouth-after-master-bathroom.jpg", alt: "1283 Plymouth Pl - After Master Bathroom",           type: "after" },
      // Bedrooms
      { src: "/projects/plymouth-before-bedroom-2.jpg",   alt: "1283 Plymouth Pl - Before Bedroom 2 (framing)",        type: "before" },
      { src: "/projects/plymouth-after-bedroom-2.jpg",    alt: "1283 Plymouth Pl - After Bedroom 2",                    type: "after" },
      { src: "/projects/plymouth-before-bedroom-2.jpg",   alt: "1283 Plymouth Pl - Before Bedroom 3 (framing)",        type: "before" },
      { src: "/projects/plymouth-after-bedroom-3.jpg",    alt: "1283 Plymouth Pl - After Bedroom 3",                    type: "after" },
      // Backyard & rear
      { src: "/projects/plymouth-before-backyard.jpg",    alt: "1283 Plymouth Pl - Before Backyard (overgrown)",       type: "before" },
      { src: "/projects/plymouth-after-backyard.jpg",     alt: "1283 Plymouth Pl - After Backyard",                    type: "after" },
      { src: "/projects/plymouth-after-rear.jpg",         alt: "1283 Plymouth Pl - After Rear Exterior",               type: "after" },
      // Floor plan
      { src: "/projects/plymouth-after-floorplan.jpg",    alt: "1283 Plymouth Pl - Floor Plan",                        type: "after" },
    ],
  },
  {
    type: "flip",
    title: "4757 Kingsbury Street",
    location: "Jacksonville, FL 32205",
    heroImage: "/projects/kingsbury-after-exterior-1.jpg",
    purchase: "$100,000",
    renovation: "TBD",
    hml: "Cash Deal",
    allIn: "TBD",
    sold: "$240,000",
    costs: "TBD",
    profit: "TBD",
    roi: "TBD",
    layout: "3 bed / 1.5 bath · full renovation",
    highlights: "A head-to-toe transformation — bold navy blue exterior, fully renovated open-concept interior with white kitchen, stainless steel appliances, stunning blue tile bathroom, and new LVP flooring throughout.",
    description: "Purchased for cash at $100,000 and completely renovated inside and out. The once-tired tan exterior was repainted a striking navy blue with new landscaping and walkway. Inside, walls were opened up to create an airy living/dining flow, the kitchen was fully rebuilt with white shaker cabinets and stainless steel appliances, and the bathroom was redesigned with bold blue subway tile and black matte fixtures.",
    status: "Active on Market — $240,000",
    images: [
      // Exterior
      { src: "/projects/kingsbury-before-exterior-1.jpg", alt: "4757 Kingsbury St - Before Exterior", type: "before" },
      { src: "/projects/kingsbury-after-exterior-1.jpg",  alt: "4757 Kingsbury St - After Exterior",  type: "after" },
      { src: "/projects/kingsbury-after-exterior-2.jpg",  alt: "4757 Kingsbury St - After Exterior Angle", type: "after" },
      // Foyer
      { src: "/projects/kingsbury-before-foyer.jpg",      alt: "4757 Kingsbury St - Before Entry",    type: "before" },
      { src: "/projects/kingsbury-after-foyer.jpg",       alt: "4757 Kingsbury St - After Entry",     type: "after" },
      // Living Room
      { src: "/projects/kingsbury-before-living.jpg",     alt: "4757 Kingsbury St - Before Living Room", type: "before" },
      { src: "/projects/kingsbury-after-living.jpg",      alt: "4757 Kingsbury St - After Living Room",  type: "after" },
      // Dining / Kitchen
      { src: "/projects/kingsbury-before-dining-kitchen.jpg", alt: "4757 Kingsbury St - Before Dining & Kitchen", type: "before" },
      { src: "/projects/kingsbury-after-dining.jpg",      alt: "4757 Kingsbury St - After Dining Room", type: "after" },
      { src: "/projects/kingsbury-after-kitchen.jpg",     alt: "4757 Kingsbury St - After Kitchen",    type: "after" },
      // Master Bedroom
      { src: "/projects/kingsbury-before-master-bedroom.jpg", alt: "4757 Kingsbury St - Before Master Bedroom", type: "before" },
      { src: "/projects/kingsbury-after-master-bedroom.jpg",  alt: "4757 Kingsbury St - After Master Bedroom",  type: "after" },
      // Bathroom
      { src: "/projects/kingsbury-before-bathroom.jpg",   alt: "4757 Kingsbury St - Before Bathroom (gut)", type: "before" },
      { src: "/projects/kingsbury-after-bathroom.jpg",    alt: "4757 Kingsbury St - After Bathroom with Blue Tile", type: "after" },
      // Half Bath
      { src: "/projects/kingsbury-after-half-bath.jpg",   alt: "4757 Kingsbury St - After Half Bath", type: "after" },
      // Bedroom 2
      { src: "/projects/kingsbury-before-bedroom-2.jpg",  alt: "4757 Kingsbury St - Before Bedroom 2", type: "before" },
      { src: "/projects/kingsbury-after-bedroom-2.jpg",   alt: "4757 Kingsbury St - After Bedroom 2",  type: "after" },
    ],
  },
  {
    type: "coming-soon",
    title: "450 S Volusia St",
    location: "Saint Augustine, FL 32084",
    heroImage: "/projects/volusia-coming-soon.jpg",
  },
  {
    type: "coming-soon",
    title: "165 Toledo St",
    location: "Saint Augustine, FL 32084",
    heroImage: "/projects/volusia-coming-soon.jpg",
  },
  {
    type: "flip",
    title: "1550 Parrish Pl",
    location: "32205 Jacksonville FL",
    heroImage: "/projects/parrish-after-exterior.jpg",
    purchase: "$000,000",
    renovation: "$000,000",
    hml: "$000,000",
    allIn: "$000,000",
    sold: "$000,000",
    costs: "$000,000",
    profit: "$000,000",
    roi: "000%",
    layout: "TBD",
    highlights: "Description coming soon.",
    description: "Description coming soon.",
    status: "TBD",
    images: [
      { src: "/projects/parrish-after-exterior.jpg", alt: "1550 Parrish Pl - After Exterior", type: "after" },
      { src: "/projects/parrish-after-entry-1.jpg", alt: "1550 Parrish Pl - After Entry", type: "after" },
      { src: "/projects/parrish-after-entry-2.jpg", alt: "1550 Parrish Pl - After Office/Entry", type: "after" },
      { src: "/projects/parrish-after-kitchen-1.jpg", alt: "1550 Parrish Pl - After Kitchen", type: "after" },
      { src: "/projects/parrish-after-kitchen-2.jpg", alt: "1550 Parrish Pl - After Kitchen View 2", type: "after" },
      { src: "/projects/parrish-after-kitchen-3.jpg", alt: "1550 Parrish Pl - After Kitchen View 3", type: "after" },
      { src: "/projects/parrish-after-bathroom.jpg", alt: "1550 Parrish Pl - After Bathroom", type: "after" },
      { src: "/projects/parrish-after-bedroom.jpg", alt: "1550 Parrish Pl - After Bedroom", type: "after" },
      { src: "/projects/parrish-after-backyard.jpg", alt: "1550 Parrish Pl - After Backyard", type: "after" },
      { src: "/projects/parrish-after-outdoor-bar.jpg", alt: "1550 Parrish Pl - After Outdoor Bar", type: "after" },
    ],
  },
];
