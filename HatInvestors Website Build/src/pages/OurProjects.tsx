import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BeforeAfterGallery } from "@/components/BeforeAfterGallery";
const OurProjects = () => {
  const projects = [{
    title: "6226 W Pennant Dr W",
    heroImage: "/projects/pennant-hero.jpg",
    purchase: "$122,000",
    renovation: "$65,000",
    hml: "$14,000",
    allIn: "$201,000",
    sold: "$272,000",
    costs: "$16,000",
    profit: "$55,000",
    roi: "132%",
    layout: "3 bed / 1 bath upgraded to 4 bed / 2 bath",
    highlights: "We turned Pennant into a fully renovated, modern home with all-new finishes and meticulous attention to every detail, so it looks and feels completely brand-new.",
    description: "3-bed/2-bath with poor layout—bathroom awkwardly placed in living room from a later addition. Rejected by investors and sat on market. We identified layout issues, negotiated a favorable price, and converted half of the huge garage into a spacious master bedroom with unsuited bathroom utilizing existing plumbing from garage. Upgraded to 4-bed/2-bath, transformed original bathroom into laundry room, significantly improving functionality and ARV.",
    status: "Under contract within 5 days",
    images: [{
      src: "/projects/pennant-before-exterior.jpg",
      alt: "6226 W Pennant Dr - Before Exterior",
      type: "before" as const
    }, {
      src: "/projects/pennant-after-exterior.jpg",
      alt: "6226 W Pennant Dr - After Exterior",
      type: "after" as const
    }, {
      src: "/projects/pennant-before-garage-1.jpg",
      alt: "6226 W Pennant Dr - Before Garage Conversion",
      type: "before" as const
    }, {
      src: "/projects/pennant-after-master-bedroom-1.jpg",
      alt: "6226 W Pennant Dr - After Master Bedroom",
      type: "after" as const
    }, {
      src: "/projects/pennant-before-garage-2.jpg",
      alt: "6226 W Pennant Dr - Before Garage Interior",
      type: "before" as const
    }, {
      src: "/projects/pennant-after-master-bedroom-2.jpg",
      alt: "6226 W Pennant Dr - After Master Bedroom View 2",
      type: "after" as const
    }, {
      src: "/projects/pennant-before-garage-3.jpg",
      alt: "6226 W Pennant Dr - Before Garage with Bath Fixtures",
      type: "before" as const
    }, {
      src: "/projects/pennant-after-master-bathroom.jpg",
      alt: "6226 W Pennant Dr - After Master Bathroom",
      type: "after" as const
    }, {
      src: "/projects/pennant-before-bathroom.jpg",
      alt: "6226 W Pennant Dr - Before Bathroom",
      type: "before" as const
    }, {
      src: "/projects/pennant-after-laundry.jpg",
      alt: "6226 W Pennant Dr - After Laundry Room",
      type: "after" as const
    }, {
      src: "/projects/pennant-after-bathroom.jpg",
      alt: "6226 W Pennant Dr - After Guest Bathroom",
      type: "after" as const
    }, {
      src: "/projects/pennant-before-kitchen-1.jpg",
      alt: "6226 W Pennant Dr - Before Kitchen",
      type: "before" as const
    }, {
      src: "/projects/pennant-after-kitchen-1.jpg",
      alt: "6226 W Pennant Dr - After Kitchen",
      type: "after" as const
    }, {
      src: "/projects/pennant-before-kitchen-2.jpg",
      alt: "6226 W Pennant Dr - Before Kitchen View 2",
      type: "before" as const
    }, {
      src: "/projects/pennant-after-kitchen-2.jpg",
      alt: "6226 W Pennant Dr - After Kitchen View 2",
      type: "after" as const
    }, {
      src: "/projects/pennant-after-kitchen-3.jpg",
      alt: "6226 W Pennant Dr - After Kitchen View 3",
      type: "after" as const
    }, {
      src: "/projects/pennant-after-kitchen-dining-1.jpg",
      alt: "6226 W Pennant Dr - After Kitchen and Dining",
      type: "after" as const
    }, {
      src: "/projects/pennant-after-kitchen-dining-2.jpg",
      alt: "6226 W Pennant Dr - After Kitchen and Dining View 2",
      type: "after" as const
    }, {
      src: "/projects/pennant-after-living.jpg",
      alt: "6226 W Pennant Dr - After Living Room",
      type: "after" as const
    }, {
      src: "/projects/pennant-before-bedroom.jpg",
      alt: "6226 W Pennant Dr - Before Bedroom",
      type: "before" as const
    }, {
      src: "/projects/pennant-after-bedroom-1.jpg",
      alt: "6226 W Pennant Dr - After Bedroom",
      type: "after" as const
    }, {
      src: "/projects/pennant-after-bedroom-2.jpg",
      alt: "6226 W Pennant Dr - After Bedroom View 2",
      type: "after" as const
    }, {
      src: "/projects/pennant-after-backyard.jpg",
      alt: "6226 W Pennant Dr - After Backyard",
      type: "after" as const
    }, {
      src: "/projects/pennant-floorplan.jpg",
      alt: "6226 W Pennant Dr - Original Floor Plan",
      type: "before" as const
    }]
  }, {
    title: "8764 Darlington",
    heroImage: "/projects/darlington-hero-new.jpg",
    purchase: "$120,000",
    renovation: "$76,000",
    hml: "Cash Deal",
    allIn: "$196,000",
    sold: "$254,000",
    costs: "$17,500",
    profit: "$40,500",
    roi: "107%",
    layout: "3 bed / 2 bath upgraded to 4 bed / 2 bath",
    highlights: "We took Darlington from tired and dated to a fully transformed, all-new, modern home that looks and feels completely brand new and truly move-in ready.",
    description: "A key part of our strategy was to improve the home's layout for modern living. We converted the property from a 3-bedroom to a 4-bedroom home and optimized the master suite, and open Kitchen concept significantly increasing its market value and appeal to families.",
    status: "Under contract within 5 days",
    images: [{
      src: "/projects/darlington-before-6.png",
      alt: "8764 Darlington - Before Exterior",
      type: "before" as const
    }, {
      src: "/projects/darlington-after-exterior-1.png",
      alt: "8764 Darlington - After Exterior",
      type: "after" as const
    }, {
      src: "/projects/darlington-before-9.jpg",
      alt: "8764 Darlington - Before Exterior Front",
      type: "before" as const
    }, {
      src: "/projects/darlington-after-exterior-2.jpg",
      alt: "8764 Darlington - After Exterior Front",
      type: "after" as const
    }, {
      src: "/projects/darlington-before-1.png",
      alt: "8764 Darlington - Before Kitchen",
      type: "before" as const
    }, {
      src: "/projects/darlington-after-kitchen.jpg",
      alt: "8764 Darlington - After Kitchen",
      type: "after" as const
    }, {
      src: "/projects/darlington-after-kitchen-2.jpg",
      alt: "8764 Darlington - After Kitchen View 2",
      type: "after" as const
    }, {
      src: "/projects/darlington-after-kitchen-3.jpg",
      alt: "8764 Darlington - After Kitchen View 3",
      type: "after" as const
    }, {
      src: "/projects/darlington-after-kitchen-dining.jpg",
      alt: "8764 Darlington - After Kitchen and Dining",
      type: "after" as const
    }, {
      src: "/projects/darlington-before-2.png",
      alt: "8764 Darlington - Before Living Room",
      type: "before" as const
    }, {
      src: "/projects/darlington-after-living-1.jpg",
      alt: "8764 Darlington - After Living Room",
      type: "after" as const
    }, {
      src: "/projects/darlington-after-living-3.jpg",
      alt: "8764 Darlington - After Living Room View 2",
      type: "after" as const
    }, {
      src: "/projects/darlington-before-5.png",
      alt: "8764 Darlington - Before Entry",
      type: "before" as const
    }, {
      src: "/projects/darlington-after-living-2.jpg",
      alt: "8764 Darlington - After Open Living Space",
      type: "after" as const
    }, {
      src: "/projects/darlington-before-3.png",
      alt: "8764 Darlington - Before Dining Area",
      type: "before" as const
    }, {
      src: "/projects/darlington-after-dining-1.jpg",
      alt: "8764 Darlington - After Dining Area",
      type: "after" as const
    }, {
      src: "/projects/darlington-after-dining-3.jpg",
      alt: "8764 Darlington - After Dining Area View 2",
      type: "after" as const
    }, {
      src: "/projects/darlington-before-3.png",
      alt: "8764 Darlington - Before Bedroom",
      type: "before" as const
    }, {
      src: "/projects/darlington-after-bedroom.jpg",
      alt: "8764 Darlington - After Master Bedroom",
      type: "after" as const
    }, {
      src: "/projects/darlington-before-4.png",
      alt: "8764 Darlington - Before Bathroom",
      type: "before" as const
    }, {
      src: "/projects/darlington-after-bathroom.jpg",
      alt: "8764 Darlington - After Bathroom",
      type: "after" as const
    }, {
      src: "/projects/darlington-floorplan-2d.png",
      alt: "8764 Darlington - Floor Plan",
      type: "after" as const
    }, {
      src: "/projects/darlington-floorplan-3d.png",
      alt: "8764 Darlington - 3D Layout",
      type: "after" as const
    }]
  }, {
    title: "6855 Hafford Lane",
    location: "32244 Jacksonville FL",
    heroImage: "/projects/hafford-hero.jpg",
    projectType: "BRRRR",
    purchase: "$150,000",
    renovation: "$40,000",
    allIn: "$190,000",
    marketValue: "$240,000",
    monthlyRent: "$1,600",
    monthlyCosts: "$1,400",
    cashFlow: "$200",
    equity: "$50,000",
    layout: "Block and brick house",
    highlights: "Purchased at 75% of market value with light rehab. Achieved positive cash flow with expected appreciation plus built-in equity from the purchase. Successfully refinanced from Hard Money to conventional mortgage after 6 months.",
    description: "Block and brick construction in good condition. BRRRR strategy chosen for strong financial metrics. Property rented quickly at $1,600/month, reducing monthly holding costs after refinance. Rehab scope: 2 new bathrooms and cosmetic updates throughout.",
    status: "Rented and refinanced",
    images: [{
      src: "/projects/hafford-before-1.jpg",
      alt: "6855 Hafford Lane - Before: Fireplace",
      type: "before" as const
    }, {
      src: "/projects/hafford-before-2.jpg",
      alt: "6855 Hafford Lane - Before: Living Room",
      type: "before" as const
    }, {
      src: "/projects/hafford-before-3.jpg",
      alt: "6855 Hafford Lane - Before: Exterior Shed",
      type: "before" as const
    }, {
      src: "/projects/hafford-before-4.jpg",
      alt: "6855 Hafford Lane - Before: Backyard Patio",
      type: "before" as const
    }, {
      src: "/projects/hafford-before-5.jpg",
      alt: "6855 Hafford Lane - Before: Backyard Fence",
      type: "before" as const
    }, {
      src: "/projects/hafford-before-6.jpg",
      alt: "6855 Hafford Lane - Before: Front Exterior",
      type: "before" as const
    }, {
      src: "/projects/hafford-before-7.jpg",
      alt: "6855 Hafford Lane - Before: Window Detail",
      type: "before" as const
    }, {
      src: "/projects/hafford-before-8.jpg",
      alt: "6855 Hafford Lane - Before: Front Yard",
      type: "before" as const
    }, {
      src: "/projects/hafford-after-1.jpg",
      alt: "6855 Hafford Lane - After: Front Exterior",
      type: "after" as const
    }, {
      src: "/projects/hafford-after-2.jpg",
      alt: "6855 Hafford Lane - After: Front Exterior with Tree",
      type: "after" as const
    }, {
      src: "/projects/hafford-after-3.jpg",
      alt: "6855 Hafford Lane - After: Side View",
      type: "after" as const
    }, {
      src: "/projects/hafford-after-4.jpg",
      alt: "6855 Hafford Lane - After: Entry Room",
      type: "after" as const
    }, {
      src: "/projects/hafford-after-5.jpg",
      alt: "6855 Hafford Lane - After: Living Room",
      type: "after" as const
    }, {
      src: "/projects/hafford-after-6.jpg",
      alt: "6855 Hafford Lane - After: Living Room with Fireplace",
      type: "after" as const
    }, {
      src: "/projects/hafford-after-7.jpg",
      alt: "6855 Hafford Lane - After: Kitchen",
      type: "after" as const
    }, {
      src: "/projects/hafford-after-8.jpg",
      alt: "6855 Hafford Lane - After: Kitchen Full View",
      type: "after" as const
    }, {
      src: "/projects/hafford-after-9.jpg",
      alt: "6855 Hafford Lane - After: Bathroom",
      type: "after" as const
    }, {
      src: "/projects/hafford-after-10.jpg",
      alt: "6855 Hafford Lane - After: Bedroom with Closets",
      type: "after" as const
    }, {
      src: "/projects/hafford-after-11.jpg",
      alt: "6855 Hafford Lane - After: Bedroom",
      type: "after" as const
    }, {
      src: "/projects/hafford-after-12.jpg",
      alt: "6855 Hafford Lane - After: Second Bathroom",
      type: "after" as const
    }, {
      src: "/projects/hafford-after-13.jpg",
      alt: "6855 Hafford Lane - After: Backyard View",
      type: "after" as const
    }, {
      src: "/projects/hafford-after-14.jpg",
      alt: "6855 Hafford Lane - After: Backyard Shed",
      type: "after" as const
    }, {
      src: "/projects/hafford-after-15.jpg",
      alt: "6855 Hafford Lane - After: Backyard Patio",
      type: "after" as const
    }, {
      src: "/projects/hafford-after-16.jpg",
      alt: "6855 Hafford Lane - After: Rear Exterior",
      type: "after" as const
    }, {
      src: "/projects/hafford-after-17.jpg",
      alt: "6855 Hafford Lane - After: Backyard with Shed",
      type: "after" as const
    }, {
      src: "/projects/hafford-after-18.jpg",
      alt: "6855 Hafford Lane - After: Backyard with Patio Stones",
      type: "after" as const
    }]
  }, {
    title: "450 S Volusia St",
    location: "Saint Augustine, FL 32084",
    heroImage: "/projects/volusia-coming-soon.jpg",
    comingSoon: true
  }, {
    title: "1012 Beckner Avenue",
    location: "Jacksonville, FL 32218",
    heroImage: "/projects/beckner-coming-soon.jpg",
    comingSoon: true
  }, {
    title: "1283 Plymouth Pl",
    location: "32205 Jacksonville FL",
    heroImage: "/projects/plymouth-coming-soon.jpg",
    comingSoon: true
  }, {
    title: "4757 Kingsbury",
    location: "32205 Jacksonville FL",
    heroImage: "/projects/kingsbury-coming-soon.jpg",
    comingSoon: true
  }, {
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
    images: [{
      src: "/projects/parrish-after-exterior.jpg",
      alt: "1550 Parrish Pl - After Exterior",
      type: "after" as const
    }, {
      src: "/projects/parrish-after-entry-1.jpg",
      alt: "1550 Parrish Pl - After Entry",
      type: "after" as const
    }, {
      src: "/projects/parrish-after-entry-2.jpg",
      alt: "1550 Parrish Pl - After Office/Entry",
      type: "after" as const
    }, {
      src: "/projects/parrish-after-kitchen-1.jpg",
      alt: "1550 Parrish Pl - After Kitchen",
      type: "after" as const
    }, {
      src: "/projects/parrish-after-kitchen-2.jpg",
      alt: "1550 Parrish Pl - After Kitchen View 2",
      type: "after" as const
    }, {
      src: "/projects/parrish-after-kitchen-3.jpg",
      alt: "1550 Parrish Pl - After Kitchen View 3",
      type: "after" as const
    }, {
      src: "/projects/parrish-after-bathroom.jpg",
      alt: "1550 Parrish Pl - After Bathroom",
      type: "after" as const
    }, {
      src: "/projects/parrish-after-bedroom.jpg",
      alt: "1550 Parrish Pl - After Bedroom",
      type: "after" as const
    }, {
      src: "/projects/parrish-after-backyard.jpg",
      alt: "1550 Parrish Pl - After Backyard",
      type: "after" as const
    }, {
      src: "/projects/parrish-after-outdoor-bar.jpg",
      alt: "1550 Parrish Pl - After Outdoor Bar",
      type: "after" as const
    }]
  }];
  return <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Projects</h1>
          <p className="text-base md:text-lg max-w-3xl mx-auto opacity-90">Discover how we transform distressed properties into beautiful homes, creating value for sellers and investors</p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {projects.map((project, index) => <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  {project.comingSoon ?
              // Coming Soon Project
              <div className="relative min-h-[400px]">
                      <img src={project.heroImage} alt={`${project.title} - Coming Soon`} className="w-full h-full object-cover absolute inset-0 brightness-75" />
                      <div className="relative p-12 text-center min-h-[400px] flex flex-col items-center justify-center">
                        <div className="bg-background/95 backdrop-blur-sm border-2 border-primary rounded-lg p-8 max-w-md shadow-xl">
                          <p className="text-sm font-semibold text-primary mb-3">Flip Project:</p>
                           <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">{project.title}</h2>
                          <p className="text-base text-muted-foreground mb-6">{project.location}</p>
                          <div className="inline-block bg-accent text-accent-foreground px-6 py-3 rounded-lg">
                            <p className="font-bold text-lg">Coming Soon</p>
                          </div>
                        </div>
                      </div>
                    </div> : <>
                      {/* Hero Image and Project Details Row */}
                      <div className="grid lg:grid-cols-2 gap-0">
                        {/* Hero Image */}
                        <div className="bg-secondary">
                          <img src={project.heroImage} alt={`${project.title} - Main`} className="w-full h-auto" />
                        </div>

                        {/* Project Details */}
                        <div className="p-8 lg:p-10">
                          <p className="text-sm font-semibold text-primary mb-2">
                            {project.projectType === "BRRRR" ? "BRRRR Project:" : "Flip Project:"}
                          </p>
                          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">{project.title}</h2>

                          {/* Financial Breakdown */}
                          {project.projectType === "BRRRR" ?
                    // BRRRR Project Metrics
                    <div className="space-y-4 mb-6">
                              <div className="grid grid-cols-2 gap-4">
                              <div>
                                  <p className="text-sm text-muted-foreground">Purchase Price</p>
                                  <p className="font-semibold text-lg text-primary/40 select-none">••••••</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Rehab Cost</p>
                                  <p className="font-semibold text-lg text-primary/40 select-none">••••••</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Total Investment</p>
                                  <p className="font-semibold text-lg text-primary/40 select-none">••••••</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Market Value</p>
                                  <p className="font-semibold text-lg text-primary/40 select-none">••••••</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Built-in Equity</p>
                                  <p className="font-semibold text-lg text-primary/40 select-none">••••••</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Monthly Rent</p>
                                  <p className="font-semibold text-lg text-primary/40 select-none">••••••</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Monthly Costs</p>
                                  <p className="font-semibold text-lg text-primary/40 select-none">••••••</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Monthly Cash Flow</p>
                                  <p className="font-semibold text-lg text-primary/40 select-none">••••••</p>
                                </div>
                              </div>
                              <p className="text-sm text-primary font-medium italic">Contact Us for Full Details</p>
                            </div> :
                    // Flip Project Metrics
                    <div className="space-y-4 mb-6">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <p className="text-sm text-muted-foreground">Purchase</p>
                                  <p className="font-semibold text-lg text-primary/40 select-none">••••••</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Renovation</p>
                                  {(project.title === "6226 W Pennant Dr W" || project.title === "8764 Darlington") ? (
                                    <p className="font-semibold text-lg text-primary/40 select-none">••••••</p>
                                  ) : (
                                    <p className="font-semibold text-lg">{project.renovation}</p>
                                  )}
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">HML</p>
                                  {(project.title === "6226 W Pennant Dr W" || project.title === "8764 Darlington") ? (
                                    <p className="font-semibold text-lg text-primary/40 select-none">••••••</p>
                                  ) : (
                                    <p className="font-semibold text-lg">{project.hml}</p>
                                  )}
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">All-in Cost</p>
                                  {(project.title === "6226 W Pennant Dr W" || project.title === "8764 Darlington") ? (
                                    <p className="font-semibold text-lg text-primary/40 select-none">••••••</p>
                                  ) : (
                                    <p className="font-semibold text-lg">{project.allIn}</p>
                                  )}
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Sold Price</p>
                                  <p className="font-semibold text-lg text-primary/40 select-none">••••••</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Selling & Holding Cost</p>
                                  {(project.title === "6226 W Pennant Dr W" || project.title === "8764 Darlington") ? (
                                    <p className="font-semibold text-lg text-primary/40 select-none">••••••</p>
                                  ) : (
                                    <p className="font-semibold text-lg">{project.costs}</p>
                                  )}
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Profit</p>
                                  <p className="font-semibold text-lg text-primary/40 select-none">••••••</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">ROI</p>
                                  <p className="font-semibold text-lg text-primary/40 select-none">••••••</p>
                                </div>
                              </div>
                              <p className="text-sm text-primary font-medium italic">Contact Us for Full Details</p>
                            </div>}

                          {/* Project Info */}
                          <div className="space-y-4 border-t border-border pt-6">
                            <div>
                              <p className="text-sm font-bold text-foreground mb-2">
                                About The Property         
                              </p>
                              {project.description && <p className="text-base mt-2 leading-relaxed">
                                  {project.description}
                                </p>}
                            </div>

                            <div>
                              <p className="text-sm font-bold text-foreground mb-2">
                                Project Highlights
                              </p>
                              <p className="text-base leading-relaxed">{project.highlights}</p>
                            </div>

                            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                              <p className="font-semibold text-accent">{project.status}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Before & After Gallery - Full Width Below */}
                      {project.images && project.images.length > 0 && <div className="bg-secondary p-8 lg:p-10">
                          <BeforeAfterGallery images={project.images} />
                        </div>}
                    </>}
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Want us to take a look at your property?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for our next project. Get a fair cash offer with no obligations.
          </p>
          <Link to="/sell-your-house">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </div>;
};
export default OurProjects;