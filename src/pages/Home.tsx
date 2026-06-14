import { Link } from "react-router-dom";
import { Home, TrendingUp, Users, DollarSign, Clock, Shield, ArrowRight, CheckCircle2, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const STATS = [
  { value: "10+",   label: "Properties Transformed", icon: <Home className="h-5 w-5" /> },
  { value: "$3M+",  label: "Total Project Value",     icon: <DollarSign className="h-5 w-5" /> },
  { value: "132%",  label: "Best ROI Achieved",       icon: <TrendingUp className="h-5 w-5" /> },
  { value: "14",    label: "Avg. Days to Close",      icon: <Clock className="h-5 w-5" /> },
];

const WHAT_WE_DO = [
  {
    icon: <Home className="h-7 w-7" />,
    title: "Fix & Flip",
    desc: "We purchase distressed properties, renovate them to modern standards, and sell them to families looking for quality homes at affordable prices.",
    tag: "Most Popular",
  },
  {
    icon: <TrendingUp className="h-7 w-7" />,
    title: "BRRRR / Rentals",
    desc: "Buy, Rehab, Rent, Refinance, Repeat. We build a portfolio of quality rental properties that provide long-term value to communities.",
    tag: null,
  },
  {
    icon: <Users className="h-7 w-7" />,
    title: "Wholesale & Creative Finance",
    desc: "We connect motivated sellers with qualified buyers and offer flexible financing solutions that work for everyone involved.",
    tag: null,
  },
];

const HOW_IT_WORKS = [
  { step: "01", title: "Submit Your Property", desc: "Fill out our simple form with your property details. It takes less than 2 minutes." },
  { step: "02", title: "We Visit & Analyze",   desc: "Our team reviews your property and schedules a convenient time to visit." },
  { step: "03", title: "Receive a Cash Offer", desc: "Get a fair, no-obligation cash offer typically within 24–48 hours." },
  { step: "04", title: "Pick a Date & Get Paid",desc: "Choose your closing date. We handle the paperwork — you get paid." },
];

const WHY_US = [
  { icon: <Home className="h-6 w-6" />,   title: "Local Market Expertise",     desc: "Deep knowledge of Florida real estate markets and neighborhoods." },
  { icon: <Shield className="h-6 w-6" />, title: "Transparent Process",         desc: "Clear communication and honest numbers at every step." },
  { icon: <Users className="h-6 w-6" />,  title: "No Pressure, No Obligation",  desc: "Get an offer with zero commitment required from you." },
  { icon: <Clock className="h-6 w-6" />,  title: "Fast Close",                  desc: "Close in as few as 14 days — on your schedule, not ours." },
];

const COLLAGE = [
  { src: "/collage/parrish-living.jpg",         alt: "Parrish Living Room",   span: "col-span-2 row-span-2" },
  { src: "/collage/pennant-kitchen.jpg",         alt: "Pennant Kitchen",       span: "col-span-1" },
  { src: "/collage/parrish-bathroom.jpg",        alt: "Parrish Bathroom",      span: "col-span-1" },
  { src: "/collage/pennant-bathroom.jpg",        alt: "Pennant Bathroom",      span: "col-span-1" },
  { src: "/collage/parrish-exterior.jpg",        alt: "Parrish Exterior",      span: "col-span-1" },
  { src: "/collage/parrish-dining.jpg",          alt: "Parrish Dining",        span: "col-span-2" },
  { src: "/collage/parrish-floorplan-2d.png",    alt: "Parrish Floorplan",     span: "col-span-1" },
  { src: "/projects/darlington-after-kitchen-2.jpg", alt: "Darlington Kitchen",span: "col-span-1" },
  { src: "/collage/pennant-open-concept.jpg",    alt: "Pennant Open Concept",  span: "col-span-2" },
  { src: "/collage/parrish-kitchen.jpg",         alt: "Parrish Kitchen",       span: "col-span-1" },
  { src: "/collage/pennant-living-alt.jpg",      alt: "Pennant Living Room",   span: "col-span-1" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-navy-deep">
        {/* Background photo */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: "url('/projects/darlington-after-living-1.jpg')",
            animation: "fadeIn 1.2s ease-out both",
          }}
        />
        <div className="absolute inset-0 overlay-navy-left" />

        {/* Decorative floating rings */}
        <div className="absolute top-1/4 right-8 w-72 h-72 rounded-full border border-[hsl(var(--gold))]/10 animate-spin-slow pointer-events-none" />
        <div className="absolute top-1/3 right-20 w-40 h-40 rounded-full border border-[hsl(var(--gold))]/15 animate-spin-slow pointer-events-none" style={{ animationDirection: "reverse", animationDuration: "14s" }} />
        <div className="absolute bottom-32 right-1/4 w-20 h-20 rounded-full bg-[hsl(var(--gold))]/5 animate-float pointer-events-none" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
          <div className="max-w-3xl">

            {/* Badge */}
            <div className="animate-fade-up delay-100 inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-[hsl(var(--gold))]/50 bg-[hsl(var(--gold))]/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[hsl(var(--gold))] pulse-dot" />
              <span className="text-xs font-semibold tracking-widest text-[hsl(var(--gold))] uppercase">
                Jacksonville, FL · Real Estate Investment
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-up delay-200 text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-[1.05]">
              We Transform<br />
              <span className="text-gradient-gold">Properties.</span><br />
              We Create Value.
            </h1>

            <p className="animate-fade-up delay-300 text-lg md:text-xl text-white/70 max-w-xl leading-relaxed mb-10">
              Jacksonville's trusted real estate investment partner. We buy distressed properties,
              renovate them fully, and deliver consistent returns for sellers and investors alike.
            </p>

            <div className="animate-fade-up delay-400 flex flex-wrap gap-4">
              <Link to="/sell-your-house" className="btn-gold inline-flex items-center gap-2 px-8 py-4 text-base rounded-xl">
                Get My Cash Offer
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/our-projects" className="btn-outline-white inline-flex items-center gap-2 px-8 py-4 text-base rounded-xl">
                See Our Projects
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="animate-fade-up delay-500 flex items-center gap-6 mt-10 pt-10 border-t border-white/10">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-[hsl(var(--navy-mid))] border-2 border-[hsl(var(--gold))]/40 flex items-center justify-center text-[10px] text-[hsl(var(--gold))] font-bold">
                    {["J","M","R","S"][i-1]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-[hsl(var(--gold))] text-[hsl(var(--gold))]" />)}
                </div>
                <p className="text-white/50 text-xs">Trusted by Jacksonville homeowners</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-scroll">
          <div className="w-px h-10 bg-gradient-to-b from-[hsl(var(--gold))]/60 to-transparent" />
          <span className="text-white/40 text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        </div>
      </section>

      {/* ── STATS BAR ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, hsl(38 68% 42%) 0%, hsl(38 68% 52%) 50%, hsl(42 80% 55%) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container mx-auto px-4 lg:px-8 py-10 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map(({ value, label, icon }, i) => (
              <Reveal key={label} delay={i * 80} className="text-center py-4 md:px-8 relative">
                <div className="flex justify-center mb-2 text-white/60">{icon}</div>
                <div className="text-3xl md:text-4xl font-heading font-black text-white tracking-tight stat-glow">
                  {value}
                </div>
                <div className="text-sm text-white/80 mt-1 font-medium">{label}</div>
                {i < STATS.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/4 bottom-1/4 w-px bg-white/25" />
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TWO OFFERINGS ──────────────────────────────────────────── */}
      <section className="bg-warm-white py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <Reveal className="text-center mb-16">
            <span className="gold-line-center mb-4" />
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[hsl(var(--navy-deep))] mt-4">
              How We Can Help You
            </h2>
            <p className="text-gray-500 mt-4 max-w-lg mx-auto">
              Two proven paths — for homeowners who want to sell and investors who want to grow.
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-8">

            {/* Sell card */}
            <Reveal direction="left" delay={100}>
              <div className="bg-[hsl(var(--navy-deep))] text-white rounded-3xl overflow-hidden flex flex-col h-full card-glow-dark">
                <div className="relative h-60 overflow-hidden">
                  <img
                    src="/home/sell-after.jpg"
                    alt="Renovated home"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--navy-deep))] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6 inline-block px-3 py-1 rounded-full bg-[hsl(var(--gold))] text-white text-xs font-bold uppercase tracking-wider">
                    For Sellers
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-1">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">Sell Your House Fast</h3>
                  <p className="text-white/65 mb-8 leading-relaxed">
                    We buy houses as-is for cash — fast, fair, and completely hassle-free.
                    No agents, no repairs, no open houses.
                  </p>
                  <ul className="space-y-3 mb-10 flex-1">
                    {[
                      "No repairs or cleaning needed",
                      "We pay fair cash prices",
                      "Close in as little as 14 days",
                      "Flexible closing timeline",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                        <CheckCircle2 className="h-4 w-4 text-[hsl(var(--gold))] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/sell-your-house"
                    className="btn-gold inline-flex items-center justify-center gap-2 py-4 rounded-xl text-base"
                  >
                    Get My Cash Offer <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Invest card */}
            <Reveal direction="right" delay={200}>
              <div className="bg-[hsl(var(--navy-mid))] text-white rounded-3xl overflow-hidden flex flex-col h-full card-glow-dark">
                <div className="relative h-60 overflow-hidden">
                  <img
                    src="/projects/pennant-after-kitchen-2.jpg"
                    alt="Investment property"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--navy-mid))] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6 inline-block px-3 py-1 rounded-full bg-[hsl(var(--navy-light))] border border-[hsl(var(--gold))]/50 text-[hsl(var(--gold))] text-xs font-bold uppercase tracking-wider">
                    For Investors
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-1">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">Invest With Us</h3>
                  <p className="text-white/65 mb-8 leading-relaxed">
                    Leverage our deep Jacksonville market expertise. Multiple successful projects
                    completed in 2025 — delivering consistent returns through strategic real estate.
                  </p>
                  <ul className="space-y-3 mb-10 flex-1">
                    {[
                      "Debt / HML Financing — secured lending",
                      "JV Projects — partner on high-potential deals",
                      "Creative Financing — flexible structures",
                      "Wholesaling — off-market deal access",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                        <CheckCircle2 className="h-4 w-4 text-[hsl(var(--gold))] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="btn-outline-gold inline-flex items-center justify-center gap-2 py-4 rounded-xl text-base"
                  >
                    Invest With Us <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ────────────────────────────────────────────── */}
      <section className="bg-navy-deep py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[hsl(var(--gold))]/5 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Reveal className="text-center mb-16">
            <span className="gold-line-center mb-4" />
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mt-4">
              What We Do
            </h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto">
              Three proven strategies for creating value in Jacksonville real estate
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {WHAT_WE_DO.map(({ icon, title, desc, tag }, i) => (
              <Reveal key={title} delay={i * 120}>
                <div className="relative bg-[hsl(var(--navy-mid))] rounded-3xl p-8 border border-[hsl(var(--navy-light))] card-glow-dark group h-full">
                  {tag && (
                    <div className="absolute top-6 right-6 px-2.5 py-1 rounded-full bg-[hsl(var(--gold))]/15 border border-[hsl(var(--gold))]/30 text-[hsl(var(--gold))] text-[10px] font-bold uppercase tracking-wider">
                      {tag}
                    </div>
                  )}
                  <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--gold))]/10 border border-[hsl(var(--gold))]/20 flex items-center justify-center text-[hsl(var(--gold))] mb-6 group-hover:bg-[hsl(var(--gold))]/20 group-hover:border-[hsl(var(--gold))]/40 transition-all duration-300">
                    {icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-3">{title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRANSFORMATIONS COLLAGE ───────────────────────────────── */}
      <section className="bg-warm-white py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <Reveal className="text-center mb-14">
            <span className="gold-line-center mb-4" />
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[hsl(var(--navy-deep))] mt-4">
              Our Transformations
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              See how we turn distressed properties into beautiful, move-in ready homes
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-6xl mx-auto auto-rows-[160px]">
              {COLLAGE.map(({ src, alt, span }) => (
                <div key={src} className={`${span} img-hover rounded-2xl overflow-hidden shadow-md ring-1 ring-black/5`}>
                  <img src={src} alt={alt} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200} className="text-center mt-10">
            <Link
              to="/our-transformations"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center gap-2 text-[hsl(var(--gold))] font-semibold hover:gap-4 transition-all duration-300 text-sm group"
            >
              View All Transformations
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────── */}
      <section className="bg-navy-deep py-28 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[hsl(var(--gold))]/5 blur-3xl rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Reveal className="text-center mb-16">
            <span className="gold-line-center mb-4" />
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mt-4">
              How It Works
            </h2>
            <p className="text-white/50 mt-4">Simple, fast, and transparent — every time</p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {HOW_IT_WORKS.map(({ step, title, desc }, i) => (
              <Reveal key={step} delay={i * 100}>
                <div className="relative glass-card rounded-3xl p-7 h-full group hover:bg-white/10 transition-all duration-300">
                  {/* Step circle */}
                  <div className="w-14 h-14 rounded-full bg-[hsl(var(--gold))]/15 border border-[hsl(var(--gold))]/40 flex items-center justify-center mb-6 group-hover:bg-[hsl(var(--gold))]/25 transition-colors">
                    <span className="text-[hsl(var(--gold))] font-heading font-bold text-lg">{step}</span>
                  </div>
                  {/* Connector */}
                  {i < HOW_IT_WORKS.length - 1 && (
                    <div className="hidden lg:block absolute top-9 left-full w-6 h-px bg-gradient-to-r from-[hsl(var(--gold))]/40 to-transparent z-0 -translate-x-0" />
                  )}
                  <h3 className="text-white font-heading font-bold text-base mb-2">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────── */}
      <section className="bg-warm-white py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <Reveal className="text-center mb-16">
            <span className="gold-line-center mb-4" />
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[hsl(var(--navy-deep))] mt-4">
              Why Sellers Choose Us
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {WHY_US.map(({ icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 100}>
                <div className="text-center p-8 rounded-3xl bg-white border border-gray-100 shadow-sm card-glow h-full group">
                  <div className="w-16 h-16 rounded-2xl bg-[hsl(var(--gold))]/10 flex items-center justify-center mx-auto mb-5 text-[hsl(var(--gold))] group-hover:bg-[hsl(var(--gold))]/20 group-hover:scale-110 transition-all duration-300">
                    {icon}
                  </div>
                  <h3 className="font-heading font-bold text-[hsl(var(--navy-deep))] mb-2 text-sm">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="relative py-32 overflow-hidden bg-navy-deep">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/projects/kingsbury-after-exterior-1.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--navy-deep))]/80 via-[hsl(var(--navy-deep))]/60 to-[hsl(var(--navy-deep))]/90" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

        {/* Glow orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[hsl(var(--gold))]/8 blur-3xl rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <Reveal>
            <span className="gold-line-center mb-6" />
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mt-4 mb-6 max-w-2xl mx-auto">
              Ready to see what we can offer for your property?
            </h2>
            <p className="text-white/60 mb-12 max-w-lg mx-auto text-lg">
              No obligation, no pressure. Get a fair cash offer within 24 hours.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/sell-your-house" className="btn-gold inline-flex items-center gap-2 px-10 py-5 text-lg rounded-2xl">
                Get Your Cash Offer <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/contact" className="btn-outline-white inline-flex items-center gap-2 px-10 py-5 text-lg rounded-2xl">
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
