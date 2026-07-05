import { useState } from "react";
import { Link } from "react-router-dom";
import { BeforeAfterGallery } from "@/components/BeforeAfterGallery";
import { projects } from "@/data/projects";
import type { FlipProject, BRRRRProject } from "@/data/projects";
import { ArrowRight, Lock, Home, TrendingUp, Layers } from "lucide-react";
import { Reveal } from "@/components/Reveal";

type FilterTab = "all" | "flip" | "brrrr";

const TABS: { id: FilterTab; label: string; icon: React.ReactNode }[] = [
  { id: "all",   label: "All Projects", icon: <Layers className="h-4 w-4" /> },
  { id: "flip",  label: "Flips",        icon: <TrendingUp className="h-4 w-4" /> },
  { id: "brrrr", label: "Rentals",      icon: <Home className="h-4 w-4" /> },
];

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
      <Lock className="h-3.5 w-3.5" /> Contact us for full financial details
    </div>
  </div>
);

const BRRRRMetrics = ({ project }: { project: BRRRRProject }) => (
  <div className="space-y-3">
    {/* Always show rent — it's the headline number */}
    <div className="bg-[hsl(var(--gold))]/10 border border-[hsl(var(--gold))]/25 rounded-xl p-4 flex items-center justify-between">
      <p className="text-sm text-[hsl(var(--gold))] font-semibold uppercase tracking-wider">Monthly Rent</p>
      <p className="text-2xl font-heading font-black text-white">{project.monthlyRent}</p>
    </div>
    <div className="grid grid-cols-2 gap-3">
      <MetricCell label="Purchase Price"   hidden={project.hideFinancials} value={project.purchase} />
      <MetricCell label="Value-Add Work"   hidden={false} value={project.renovation} />
      <MetricCell label="Market Value"     hidden />
      <MetricCell label="Built-in Equity"  hidden />
      <MetricCell label="Monthly Costs"    hidden />
      <MetricCell label="Monthly Cash Flow" hidden />
    </div>
    {project.pairedWith && (
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-white/50">
        <Home className="h-3.5 w-3.5 text-[hsl(var(--gold))]" />
        Side-by-side with <span className="text-white/70 font-medium ml-1">{project.pairedWith}</span>
      </div>
    )}
    <div className="flex items-center gap-2 text-[hsl(var(--gold))]/80 text-sm font-medium">
      <Lock className="h-3.5 w-3.5" /> Contact us for full financial details
    </div>
  </div>
);

const OurProjects = () => {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");

  const filteredProjects = projects.filter(p => {
    if (activeTab === "all") return true;
    if (activeTab === "flip") return p.type === "flip" || p.type === "coming-soon";
    if (activeTab === "brrrr") return p.type === "brrrr";
    return true;
  });

  const rentalProjects = projects.filter(p => p.type === "brrrr") as BRRRRProject[];
  const flipCount = projects.filter(p => p.type === "flip" || p.type === "coming-soon").length;
  const rentalCount = rentalProjects.length;

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
            <p className="text-lg text-white/65 max-w-2xl mx-auto mb-10">
              Discover how we transform distressed properties into beautiful homes —
              and build a growing portfolio of rental income.
            </p>

            {/* Portfolio summary pills */}
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[hsl(var(--gold))]/15 border border-[hsl(var(--gold))]/30">
                <TrendingUp className="h-4 w-4 text-[hsl(var(--gold))]" />
                <span className="text-white font-semibold text-sm">{flipCount} Flips</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-500/15 border border-green-500/30">
                <Home className="h-4 w-4 text-green-400" />
                <span className="text-white font-semibold text-sm">{rentalCount} Rentals</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/8 border border-white/15">
                <span className="text-white/70 text-sm">${rentalCount * 1350}/mo rental income</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FILTER TABS ──────────────────────────────────────────── */}
      <div className="bg-[hsl(var(--navy-mid))] border-b border-[hsl(var(--navy-light))] sticky top-20 z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex gap-1 py-3">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-[hsl(var(--gold))] text-white shadow-md"
                    : "text-white/55 hover:text-white hover:bg-white/8"
                }`}
              >
                {tab.icon}
                {tab.label}
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  activeTab === tab.id ? "bg-white/20 text-white" : "bg-white/10 text-white/40"
                }`}>
                  {tab.id === "all" ? projects.filter(p => p.type !== "coming-soon").length + projects.filter(p=>p.type==="coming-soon").length :
                   tab.id === "flip" ? projects.filter(p => p.type === "flip" || p.type === "coming-soon").length :
                   projects.filter(p => p.type === "brrrr").length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── RENTAL PAIR CALLOUT (visible on All + Rentals tab) ───── */}
      {(activeTab === "all" || activeTab === "brrrr") && (
        <div className="bg-warm-white border-b border-gray-200">
          <div className="container mx-auto px-4 lg:px-8 py-6 max-w-6xl">
            <Reveal>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-green-50 border border-green-200">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                  <Home className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-green-800">Side-by-Side Portfolio Acquisition — W 40th St, Jacksonville 32209</p>
                  <p className="text-xs text-green-600 mt-0.5">Two adjacent properties purchased together · Both rented at $1,350/mo · Combined $2,700/mo rental income · Refinancing Q3 2026</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      )}

      {/* ── PROJECT LIST ─────────────────────────────────────────── */}
      <section className="bg-warm-white py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-14 max-w-6xl mx-auto">
            {filteredProjects.map((project, index) => (
              <Reveal key={`${project.title}-${index}`} delay={50}>
                <div className={`rounded-3xl overflow-hidden shadow-2xl border bg-white ${
                  project.type === "brrrr"
                    ? "border-green-200 ring-1 ring-green-100"
                    : "border-gray-200/80"
                }`}>

                  {/* Rental type badge */}
                  {project.type === "brrrr" && (
                    <div className="bg-green-600 px-6 py-2 flex items-center gap-2">
                      <Home className="h-4 w-4 text-white" />
                      <span className="text-white text-xs font-bold uppercase tracking-widest">Rental Property · BRRRR Strategy</span>
                    </div>
                  )}

                  {/* Coming Soon */}
                  {project.type === "coming-soon" ? (
                    <div className="relative min-h-[400px] flex items-center justify-center">
                      <img src={project.heroImage} alt={project.title} className="absolute inset-0 w-full h-full object-cover brightness-40" />
                      <div className="absolute inset-0 bg-[hsl(var(--navy-deep))]/60 bg-grid-pattern opacity-30" />
                      <div className="relative z-10 bg-[hsl(var(--navy-deep))]/90 backdrop-blur-sm border border-[hsl(var(--gold))]/30 rounded-3xl p-10 text-center max-w-md mx-4">
                        <p className="text-[hsl(var(--gold))] text-xs font-bold uppercase tracking-widest mb-3">Flip Project</p>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">{project.title}</h2>
                        <p className="text-white/55 mb-6">{project.location}</p>
                        <span className="btn-gold inline-block px-6 py-3 rounded-xl font-bold">Coming Soon</span>
                      </div>
                    </div>

                  ) : (
                    <>
                      {/* Header grid */}
                      <div className="grid lg:grid-cols-2">
                        {/* Hero image or placeholder */}
                        <div className={`overflow-hidden relative min-h-[280px] ${project.type === "brrrr" ? "bg-green-900" : "bg-[hsl(var(--navy-mid))]"}`}>
                          {/* Check if heroImage likely exists — for new rentals show placeholder */}
                          <img
                            src={project.heroImage}
                            alt={project.title}
                            className="w-full h-full object-cover min-h-[280px] hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = "none";
                              (e.target as HTMLImageElement).nextElementSibling?.classList.remove("hidden");
                            }}
                          />
                          {/* Fallback placeholder */}
                          <div className="hidden absolute inset-0 flex flex-col items-center justify-center gap-3">
                            <Home className="h-16 w-16 text-white/20" />
                            <p className="text-white/40 text-sm font-medium">Photos Coming Soon</p>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                        </div>

                        {/* Metrics panel */}
                        <div className={`p-8 lg:p-10 flex flex-col relative ${project.type === "brrrr" ? "bg-[#0d2218]" : "bg-[hsl(var(--navy-mid))]"}`}>
                          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
                          <div className="relative z-10 flex flex-col h-full">
                            <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${project.type === "brrrr" ? "text-green-400" : "text-[hsl(var(--gold))]"}`}>
                              {project.type === "brrrr" ? "Rental / BRRRR" : "Flip Project"}
                            </p>
                            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">{project.title}</h2>
                            {project.location && <p className="text-white/40 text-sm mb-6">{project.location}</p>}

                            {project.type === "brrrr"
                              ? <BRRRRMetrics project={project as BRRRRProject} />
                              : <FlipMetrics project={project as FlipProject} />
                            }
                          </div>
                        </div>
                      </div>

                      {/* Description + Highlights */}
                      <div className="p-8 lg:p-10 border-t border-gray-100 grid md:grid-cols-2 gap-8">
                        {project.description && (
                          <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">About The Property</h3>
                            <p className="text-gray-600 leading-relaxed">{project.description}</p>
                          </div>
                        )}
                        {project.highlights && (
                          <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Project Highlights</h3>
                            <p className="text-gray-600 leading-relaxed">{project.highlights}</p>
                          </div>
                        )}
                      </div>

                      {/* Status */}
                      <div className="px-8 lg:px-10 pb-8">
                        <span className={`inline-flex items-center gap-2 font-semibold text-sm px-4 py-2 rounded-lg ${
                          project.type === "brrrr"
                            ? "bg-green-50 border border-green-200 text-green-700"
                            : "bg-[hsl(var(--gold))]/10 border border-[hsl(var(--gold))]/25 text-[hsl(var(--gold))]"
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full pulse-dot ${project.type === "brrrr" ? "bg-green-500" : "bg-[hsl(var(--gold))]"}`} />
                          {project.status}
                        </span>
                      </div>

                      {/* Before/After Gallery */}
                      {project.images && project.images.length > 0 && (
                        <div className="bg-[hsl(var(--warm-white))] p-8 lg:p-10 border-t border-gray-100">
                          <BeforeAfterGallery images={project.images} />
                        </div>
                      )}

                      {/* Photo placeholder for new rentals */}
                      {project.images && project.images.length === 0 && (
                        <div className="border-t border-gray-100 p-8 lg:p-10">
                          <p className="text-xs font-bold uppercase tracking-widest text-gray-300 mb-4">Photos</p>
                          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                            {[...Array(6)].map((_, i) => (
                              <div key={i} className="aspect-square rounded-xl bg-gray-100 border-2 border-dashed border-gray-200 flex items-center justify-center">
                                <Home className="h-5 w-5 text-gray-300" />
                              </div>
                            ))}
                          </div>
                          <p className="text-xs text-gray-400 mt-3">Photos coming soon</p>
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
            <Link to="/sell-your-house" className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-xl">
              Get Started <ArrowRight className="h-5 w-5" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default OurProjects;
