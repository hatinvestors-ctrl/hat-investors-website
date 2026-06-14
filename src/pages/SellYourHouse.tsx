import { Link } from "react-router-dom";
import { CheckCircle, Clock, Banknote, Home, Phone, Mail, ArrowRight, Star, Shield } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const STEPS = [
  { n: "01", title: "Contact Us",           desc: "Call or fill out our quick form with your property details. No obligation, no pressure." },
  { n: "02", title: "Get Your Offer",       desc: "We evaluate your property and present a fair all-cash offer — usually within 24–48 hours." },
  { n: "03", title: "Pick Your Close Date", desc: "You choose when to close — as fast as 7 days or on a timeline that works for your situation." },
  { n: "04", title: "Get Paid at Closing",  desc: "We handle all paperwork and costs. You walk away with cash — no commissions, no fees." },
];

const COMPARE = [
  { feature: "Commissions & fees",     us: "None — zero",           agent: "5–6% of sale price" },
  { feature: "Closing costs",          us: "We pay them",           agent: "Seller typically pays" },
  { feature: "Repairs needed",         us: "None — we buy as-is",   agent: "Often required" },
  { feature: "Time to close",          us: "7–30 days",             agent: "30–90+ days" },
  { feature: "Showings & open houses", us: "Not needed",            agent: "Multiple required" },
  { feature: "Sale certainty",         us: "Guaranteed cash offer", agent: "May fall through" },
];

const BENEFITS = [
  { icon: <Banknote className="h-6 w-6" />,    title: "Cash Offers",    desc: "No financing contingencies, no waiting on bank approvals." },
  { icon: <Home className="h-6 w-6" />,        title: "As-Is Purchase", desc: "We buy in any condition — no repairs, cleaning, or staging." },
  { icon: <Clock className="h-6 w-6" />,       title: "Fast Closing",   desc: "Close in as few as 7 days or pick a date that works for you." },
  { icon: <Shield className="h-6 w-6" />,      title: "No Hidden Fees", desc: "No agent commissions, closing costs, or surprise deductions." },
];

export default function SellYourHouse() {
  return (
    <div className="min-h-screen">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative bg-navy-deep py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 scale-105"
          style={{ backgroundImage: "url('/projects/parrish-after-exterior.jpg')" }}
        />
        <div className="absolute inset-0 overlay-navy-top" />
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[hsl(var(--gold))]/5 blur-3xl rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <Reveal>
            <span className="gold-line-center mb-6" />
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mt-4 mb-6 max-w-3xl mx-auto leading-tight">
              Sell Your House{" "}
              <span className="text-gradient-gold">Fast for Cash</span>
            </h1>
            <p className="text-lg text-white/65 max-w-2xl mx-auto mb-10 leading-relaxed">
              No agents, no repairs, no waiting. We buy houses in any condition across Jacksonville
              and surrounding areas — fair offer within 24 hours.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:9047120271" className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg">
                <Phone className="h-5 w-5" /> (904) 712-0271
              </a>
              <Link to="/contact" className="btn-outline-white inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg">
                Get My Cash Offer <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────────────── */}
      <section className="bg-warm-white py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <Reveal className="text-center mb-14">
            <span className="gold-line-center mb-4" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[hsl(var(--navy-deep))] mt-4">
              Why Sell to HAT Investors?
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {BENEFITS.map(({ icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 100}>
                <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100 card-glow text-center group h-full">
                  <div className="w-16 h-16 rounded-2xl bg-[hsl(var(--gold))]/10 flex items-center justify-center mx-auto mb-5 text-[hsl(var(--gold))] group-hover:bg-[hsl(var(--gold))]/20 group-hover:scale-110 transition-all duration-300">
                    {icon}
                  </div>
                  <h3 className="font-heading font-bold text-[hsl(var(--navy-deep))] mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
      <section className="bg-navy-deep py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[hsl(var(--gold))]/5 blur-3xl rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Reveal className="text-center mb-14">
            <span className="gold-line-center mb-4" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-4">
              How It Works
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {STEPS.map(({ n, title, desc }, i) => (
              <Reveal key={n} delay={i * 100}>
                <div className="glass-card rounded-3xl p-7 h-full hover:bg-white/10 transition-all duration-300 group">
                  <div className="text-5xl font-heading font-black text-gradient-gold mb-4 leading-none opacity-70">{n}</div>
                  <h3 className="font-heading font-bold text-white mb-2">{title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARE ──────────────────────────────────────────────── */}
      <section className="bg-warm-white py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <Reveal className="text-center mb-12">
            <span className="gold-line-center mb-4" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[hsl(var(--navy-deep))] mt-4">
              HAT Investors vs. Traditional Sale
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-xl">
              <div className="grid grid-cols-3 text-center text-sm font-semibold" style={{ background: "hsl(var(--navy-deep))" }}>
                <div className="py-5 px-4 text-white/50">Feature</div>
                <div className="py-5 px-4 text-[hsl(var(--gold-light))]">HAT Investors</div>
                <div className="py-5 px-4 text-white/50">Traditional Agent</div>
              </div>
              {COMPARE.map(({ feature, us, agent }, i) => (
                <div
                  key={feature}
                  className={`grid grid-cols-3 text-center text-sm border-b border-gray-100 last:border-0 transition-colors hover:bg-[hsl(var(--gold))]/5 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/80"}`}
                >
                  <div className="py-4 px-4 text-left text-gray-600 font-medium">{feature}</div>
                  <div className="py-4 px-4 text-[hsl(var(--navy-deep))] font-semibold flex items-center justify-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-green-500 shrink-0" /> {us}
                  </div>
                  <div className="py-4 px-4 text-gray-400">{agent}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── TESTIMONIAL ──────────────────────────────────────────── */}
      <section className="bg-navy-deep py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <Reveal className="container mx-auto px-4 lg:px-8 max-w-3xl text-center relative z-10">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-[hsl(var(--gold))] text-[hsl(var(--gold))]" />
            ))}
          </div>
          <blockquote className="text-xl md:text-2xl text-white font-light leading-relaxed mb-8 italic">
            "HAT Investors made the whole process incredibly easy. We got a fair cash offer quickly
            and closed on our schedule. I couldn't believe how stress-free it was."
          </blockquote>
          <p className="text-[hsl(var(--gold))] font-semibold">— Jacksonville Homeowner</p>
        </Reveal>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-warm-white py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <Reveal>
            <div className="bg-[hsl(var(--navy-deep))] rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none rounded-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-40 bg-[hsl(var(--gold))]/8 blur-3xl rounded-full pointer-events-none" />
              <div className="relative z-10">
                <span className="gold-line-center mb-4" />
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-4 mb-4">
                  Ready to Get Your Cash Offer?
                </h2>
                <p className="text-white/60 mb-10 max-w-xl mx-auto">
                  No obligation, no pressure. Just a fair offer on your timeline.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href="tel:9047120271" className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-xl">
                    <Phone className="h-5 w-5" /> Call (904) 712-0271
                  </a>
                  <a href="mailto:hemi@hatinvestors.com" className="btn-outline-white inline-flex items-center gap-2 px-8 py-4 rounded-xl">
                    <Mail className="h-5 w-5" /> Email Us
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
