import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BeforeAfterGallery } from "@/components/BeforeAfterGallery";
import { projects } from "@/data/projects";
import type { FlipProject, BRRRRProject } from "@/data/projects";

const FlipMetrics = ({ project }: { project: FlipProject }) => (
  <div className="space-y-4 mb-6">
    <div className="grid grid-cols-2 gap-4">
      <div>
        <p className="text-sm text-muted-foreground">Purchase</p>
        <p className="font-semibold text-lg text-primary/40 select-none">••••••</p>
      </div>
      <div>
        <p className="text-sm text-muted-foreground">Renovation</p>
        {project.hideFinancials ? (
          <p className="font-semibold text-lg text-primary/40 select-none">••••••</p>
        ) : (
          <p className="font-semibold text-lg">{project.renovation}</p>
        )}
      </div>
      <div>
        <p className="text-sm text-muted-foreground">HML</p>
        {project.hideFinancials ? (
          <p className="font-semibold text-lg text-primary/40 select-none">••••••</p>
        ) : (
          <p className="font-semibold text-lg">{project.hml}</p>
        )}
      </div>
      <div>
        <p className="text-sm text-muted-foreground">All-in Cost</p>
        {project.hideFinancials ? (
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
        {project.hideFinancials ? (
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
  </div>
);

const BRRRRMetrics = ({ project: _ }: { project: BRRRRProject }) => (
  <div className="space-y-4 mb-6">
    <div className="grid grid-cols-2 gap-4">
      {[
        "Purchase Price", "Rehab Cost", "Total Investment", "Market Value",
        "Built-in Equity", "Monthly Rent", "Monthly Costs", "Monthly Cash Flow",
      ].map((label) => (
        <div key={label}>
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="font-semibold text-lg text-primary/40 select-none">••••••</p>
        </div>
      ))}
    </div>
    <p className="text-sm text-primary font-medium italic">Contact Us for Full Details</p>
  </div>
);

const OurProjects = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Projects</h1>
          <p className="text-base md:text-lg max-w-3xl mx-auto opacity-90">
            Discover how we transform distressed properties into beautiful homes, creating value for sellers and investors
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  {project.type === "coming-soon" ? (
                    <div className="relative min-h-[400px]">
                      <img
                        src={project.heroImage}
                        alt={`${project.title} - Coming Soon`}
                        className="w-full h-full object-cover absolute inset-0 brightness-75"
                      />
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
                    </div>
                  ) : (
                    <>
                      {/* Hero Image and Project Details Row */}
                      <div className="grid lg:grid-cols-2 gap-0">
                        <div className="bg-secondary">
                          <img src={project.heroImage} alt={`${project.title} - Main`} className="w-full h-auto" />
                        </div>

                        <div className="p-8 lg:p-10">
                          <p className="text-sm font-semibold text-primary mb-2">
                            {project.type === "brrrr" ? "BRRRR Project:" : "Flip Project:"}
                          </p>
                          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">{project.title}</h2>

                          {project.type === "brrrr" ? (
                            <BRRRRMetrics project={project} />
                          ) : (
                            <FlipMetrics project={project} />
                          )}

                          <div className="space-y-4 border-t border-border pt-6">
                            <div>
                              <p className="text-sm font-bold text-foreground mb-2">About The Property</p>
                              {project.description && (
                                <p className="text-base mt-2 leading-relaxed">{project.description}</p>
                              )}
                            </div>
                            <div>
                              <p className="text-sm font-bold text-foreground mb-2">Project Highlights</p>
                              <p className="text-base leading-relaxed">{project.highlights}</p>
                            </div>
                            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                              <p className="font-semibold text-accent">{project.status}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {project.images && project.images.length > 0 && (
                        <div className="bg-secondary p-8 lg:p-10">
                          <BeforeAfterGallery images={project.images} />
                        </div>
                      )}
                    </>
                  )}
                </CardContent>
              </Card>
            ))}
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
    </div>
  );
};

export default OurProjects;
