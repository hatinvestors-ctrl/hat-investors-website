import { Link } from "react-router-dom";
import { BeforeAfterGallery } from "@/components/BeforeAfterGallery";
import { projects } from "@/data/projects";
import type { FlipProject, BRRRRProject } from "@/data/projects";
import { ArrowRight, Lock } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const HIDDEN = <span className="text-white/20 font-semibold select-none tracking-widest">••••••</span>;

function MetricCell({ label, value, hidden = false }: { label: string; value?: string; hidden?: boolean }) {
  return (
    <div className="bg-[hsl(var(--navy-deep))]/50 rounded-xl p-4 border border-white/8 hover:border-[hsl(var(--gold))]/20 transition-colors">
      <p className="text-xs text-white/35 uppercase tracking-wider mb-1.5">{label}</p>
      <p className="text-base font-semibold text-white">{hidden ? HIDDEN : (value ?? "—")}</p>
    </div>
  );
}

const FlipMetrics = ({ project }: { project: FlipProject }) => (
  <div className="space-y-3">
    <div className="grid grid-cols-2 gap-3">
      <MetricCell label="Purchase"          hidden />
      <MetricCell label="Renovation"        value={project.renovation}   hidden={project.hideFinancials} />
      <MetricCell label="HML"               value={project.hml}          hidden={project.hideFinancials} />
      <MetricCell label="All-in Cost"       value={project.allIn}        hidden={project.hideFinancials} />
      <MetricCell label="Sold Price"        hidden />
      <MetricCell label="Selling & Holding" value={project.costs}        hidden={project.hideFinancials} />
      <MetricCell label="Profit"            hidden />
      <MetricCell label="ROI"               hidden />
    </div>
    <div className="flex items-center gap-2 text-[hsl(var(--gold))]/80 text-sm font-medium">
      <Lock className="h-3.5 w-3.5" />
      Contact us for full financial details
    </div>
  </div>
);

const BRRRRMetrics = ({ project: _ }: { project: BRRRRProject }) => (
  <div className="space-y-3">
    <div className="grid grid-cols-2 gap-3">
      {["Purchase Price", "Rehab Cost", "Total Investment", "Market Value",
        "Built-in Equity", "Monthly Rent", "Monthly Costs", "Monthly Cash Flow"].map((label) => (
        <MetricCell key={label} label={label} hidden />
      ))}
    </div>
    <div className="flex items-center gap-2 text-[hsl(var(--gold))]/80 text-sm font-medium">
      <Lock className="h-3.5 w-3.5" />
      Contact us for full financial details
    </div>
  </div>
);

const OurProjects = () => {
  return (
    <div className="min-h-screen">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-navy-deep py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-[hsl(var(--gold))]/5 blur-3xl rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Reveal>
            <span className="gold-line-center mb-6" />
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mt-4 mb-4">
              Our Projects
            </h1>
            <p className="text-lg text-white/65 max-w-2xl mx-auto">
              Discover how we transform distressed properties into beautiful homes —
              creating real value for sellers, neighborhoods, and investors.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── PROJECT LIST ─────────────────────────────────────────── */}
      <section className="bg-warm-white py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-14 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Reveal key={index} delay={50}>
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200/80 bg-white">

                  {/* Coming Soon */}
                  {project.type === "coming-soon" ? (
                    <div className="relative min-h-[400px] flex items-center justify-center">
                      <img
                        src={project.heroImage}
                        alt={`${project.title} - Coming Soon`}
                        className="absolute inset-0 w-full h-full object-cover brightness-40"
                      />
                      <div className="absolute inset-0 bg-[hsl(var(--navy-deep))]/60 bg-grid-pattern opacity-30" />
                      <div className="relative z-10 bg-[hsl(var(--navy-deep))]/90 backdrop-blur-sm border border-[hsl(var(--gold))]/30 rounded-3xl p-10 text-center max-w-md mx-4">
                        <p className="text-[hsl(var(--gold))] text-xs font-bold uppercase tracking-widest mb-3">
                          Flip Project
                        </p>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">{project.title}</h2>
                        <p className="text-white/55 mb-6">{project.location}</p>
                        <span className="btn-gold inline-block px-6 py-3 rounded-xl font-bold">
                          Coming Soon
                        </span>
                      </div>
                    </div>

                  ) : (
                    <>
                      {/* Header grid */}
                      <div className="grid lg:grid-cols-2">
                        <div className="bg-[hsl(var(--navy-mid))] overflow-hidden relative">
                          <img
                            src={project.heroImage}
                            alt={`${project.title} - Main`}
                            className="w-full h-full object-cover min-h-[300px] hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--navy-deep))]/40 to-transparent pointer-events-none" />
                        </div>

                        <div className="bg-[hsl(var(--navy-mid))] p-8 lg:p-10 flex flex-col relative">
                          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
                          <div className="relative z-10 flex flex-col h-full">
                            <p className="text-[hsl(var(--gold))] text-xs font-bold uppercase tracking-widest mb-2">
                              {project.type === "brrrr" ? "BRRRR Project" : "Flip Project"}
                            </p>
                            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-8">
                              {project.title}
                            </h2>

                            {project.type === "brrrr" ? (
                              <BRRRRMetrics project={project} />
                            ) : (
                              <FlipMetrics project={project} />
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Description + Highlights */}
                      <div className="p-8 lg:p-10 border-t border-gray-100 grid md:grid-cols-2 gap-8">
                        {project.description && (
                          <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                              About The Property
                            </h3>
                            <p className="text-gray-600 leading-relaxed">{project.description}</p>
                          </div>
                        )}
                        {project.highlights && (
                          <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                              Project Highlights
                            </h3>
                            <p className="text-gray-600 leading-relaxed">{project.highlights}</p>
                          </div>
                        )}
                      </div>

                      {/* Status */}
                      <div className="px-8 lg:px-10 pb-8">
                        <span className="inline-flex items-center gap-2 bg-[hsl(var(--gold))]/10 border border-[hsl(var(--gold))]/25 text-[hsl(var(--gold))] font-semibold text-sm px-4 py-2 rounded-lg">
                          <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--gold))] pulse-dot" />
                          {project.status}
                        </span>
                      </div>

                      {/* Gallery */}
                      {project.images && project.images.length > 0 && (
                        <div className="bg-[hsl(var(--warm-white))] p-8 lg:p-10 border-t border-gray-100">
                          <BeforeAfterGallery images={project.images} />
                        </div>
                      )}
                    </>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-navy-deep py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[hsl(var(--gold))]/6 blur-3xl rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <Reveal>
            <span className="gold-line-center mb-4" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-4 mb-4">
              Want Us to Look at Your Property?
            </h2>
            <p className="text-white/60 mb-10 max-w-xl mx-auto">
              We're always looking for our next project. Get a fair cash offer with no obligations.
            </p>
            <Link
              to="/sell-your-house"
              className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-xl"
            >
              Get Started <ArrowRight className="h-5 w-5" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default OurProjects;
