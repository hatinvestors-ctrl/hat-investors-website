import { Link } from "react-router-dom";
import { Heart, TrendingUp, Handshake, Home, Users, Key, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const APPROACH = [
  {
    icon: <Heart className="h-7 w-7" />,
    title: "People-First Solutions",
    desc: "We understand that selling a home can be stressful. Our team listens to your unique situation and creates solutions that work for you, not just us.",
  },
  {
    icon: <TrendingUp className="h-7 w-7" />,
    title: "Data-Driven Investing",
    desc: "We leverage market data, comparable sales, and renovation expertise to make fair offers that reflect true property value and potential.",
  },
  {
    icon: <Handshake className="h-7 w-7" />,
    title: "Long-Term Partnerships",
    desc: "We believe in building relationships, not just transactions. Many of our best opportunities come from referrals and repeat sellers.",
  },
];

const SITUATIONS = [
  { icon: <Home className="h-5 w-5" />,      text: "Inherited properties you don't want to maintain" },
  { icon: <Key className="h-5 w-5" />,       text: "Tired landlords ready to exit rental investments" },
  { icon: <Users className="h-5 w-5" />,     text: "Properties needing major repairs or updates" },
  { icon: <TrendingUp className="h-5 w-5" />,text: "Homeowners behind on mortgage payments" },
  { icon: <Heart className="h-5 w-5" />,     text: "Families needing to relocate quickly" },
  { icon: <Handshake className="h-5 w-5" />, text: "Divorce or estate settlement situations" },
];

export default function WhoWeAre() {
  return (
    <div className="min-h-screen">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative bg-navy-deep py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/projects/pennant-after-exterior.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--navy-deep))] via-transparent to-[hsl(var(--navy-deep))]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-[hsl(var(--gold))]/6 blur-3xl rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <Reveal>
            <span className="gold-line-center mb-6" />
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mt-4 mb-6">
              Who We Are
            </h1>
            <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">
              HAT Investors LLC is a real estate investment company focused on buying, renovating,
              and improving properties for homeowners and investors across Jacksonville, FL.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── MISSION ──────────────────────────────────────────────── */}
      <section className="bg-warm-white py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <Reveal className="max-w-3xl mx-auto text-center">
            <span className="gold-line-center mb-4" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[hsl(var(--navy-deep))] mt-4 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We help homeowners solve problems and improve neighborhoods by buying houses as-is,
              renovating them with care and quality craftsmanship, and creating affordable homes that
              families are proud to live in. Every property we touch becomes a better place to call home.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── OUR APPROACH ─────────────────────────────────────────── */}
      <section className="bg-navy-deep py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-[hsl(var(--gold))]/5 blur-3xl rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Reveal className="text-center mb-14">
            <span className="gold-line-center mb-4" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-4">
              Our Approach
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {APPROACH.map(({ icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 120}>
                <div className="bg-[hsl(var(--navy-mid))] rounded-3xl p-8 border border-[hsl(var(--navy-light))] card-glow-dark group text-center h-full">
                  <div className="w-16 h-16 rounded-2xl bg-[hsl(var(--gold))]/10 border border-[hsl(var(--gold))]/20 flex items-center justify-center mx-auto mb-6 text-[hsl(var(--gold))] group-hover:bg-[hsl(var(--gold))]/25 group-hover:border-[hsl(var(--gold))]/40 transition-all duration-300">
                    {icon}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white mb-3">{title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARKETS WE SERVE ─────────────────────────────────────── */}
      <section className="bg-warm-white py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <Reveal className="text-center mb-12">
            <span className="gold-line-center mb-4" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[hsl(var(--navy-deep))] mt-4 mb-4">
              Markets We Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Based in Florida with a focus on the Jacksonville area, we're actively investing in
              properties throughout the region. We understand local market dynamics and have
              established relationships with contractors, lenders, and real estate professionals.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-[hsl(var(--navy-deep))] rounded-3xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none rounded-3xl" />
              <h3 className="text-[hsl(var(--gold))] font-heading font-bold text-lg mb-8 uppercase tracking-wider relative z-10">
                We Help Homeowners In These Situations:
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 relative z-10">
                {SITUATIONS.map(({ icon, text }, i) => (
                  <div
                    key={text}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[hsl(var(--gold))]/20 transition-all duration-300 group"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <div className="text-[hsl(var(--gold))] shrink-0 mt-0.5 group-hover:scale-110 transition-transform">{icon}</div>
                    <span className="text-white/75 text-sm leading-relaxed">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-navy-deep py-28 border-t border-[hsl(var(--navy-light))] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[hsl(var(--gold))]/6 blur-3xl rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <Reveal>
            <span className="gold-line-center mb-4" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-4 mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-white/60 mb-10 max-w-xl mx-auto">
              Whether you're looking to sell your property or partner with us on investment
              opportunities, we'd love to hear from you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/sell-your-house" className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-xl">
                Sell Your House <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn-outline-white inline-flex items-center gap-2 px-8 py-4 rounded-xl">
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
