import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import hatLogo from "@/assets/hat-logo.png";

interface LayoutProps {
  children: React.ReactNode;
}

const navLinks = [
  { to: "/",                   label: "Home" },
  { to: "/who-we-are",         label: "Who We Are" },
  { to: "/our-projects",       label: "Our Projects" },
  { to: "/our-transformations",label: "Transformations" },
  { to: "/contact",            label: "Contact" },
];

const Layout = ({ children }: LayoutProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  // Scroll detection for nav background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">

      {/* ── Navigation ─────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? "bg-[hsl(var(--navy-deep))] shadow-lg shadow-black/30"
            : "bg-[hsl(var(--navy-deep))]/90 backdrop-blur-md"
        }`}
      >
        <nav className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <img src={hatLogo} alt="HAT Investors" className="h-12 md:h-14 w-auto" />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors group ${
                    isActive(link.to)
                      ? "text-[hsl(var(--gold))]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-0.5 bg-[hsl(var(--gold))] transition-transform duration-200 origin-left ${
                      isActive(link.to) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/sell-your-house"
                className="btn-gold text-sm px-5 py-2.5 rounded-lg font-semibold"
              >
                Get a Cash Offer
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="lg:hidden border-t border-white/10 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.to)
                      ? "text-[hsl(var(--gold))] bg-white/5"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 px-4">
                <Link
                  to="/sell-your-house"
                  className="block w-full text-center btn-gold text-sm py-3 rounded-lg font-semibold"
                >
                  Get a Cash Offer
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Spacer for fixed nav */}
      <div className="h-20" />

      {/* ── Main ───────────────────────────────────────────────── */}
      <main className="flex-1">{children}</main>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer className="bg-navy-deep text-white">

        {/* Top bar */}
        <div className="border-b border-white/10">
          <div className="container mx-auto px-4 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Brand */}
            <div>
              <img src={hatLogo} alt="HAT Investors" className="h-14 w-auto mb-4" />
              <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                Jacksonville's trusted real estate investment partner. We transform distressed properties
                into beautiful homes.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-[hsl(var(--gold))] mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {[
                  { to: "/who-we-are",          label: "Who We Are" },
                  { to: "/our-projects",         label: "Our Projects" },
                  { to: "/our-transformations",  label: "Transformations" },
                  { to: "/sell-your-house",      label: "Sell Your House" },
                  { to: "/privacy-policy",       label: "Privacy Policy" },
                  { to: "/terms-of-service",     label: "Terms of Service" },
                ].map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/60 hover:text-[hsl(var(--gold))] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-[hsl(var(--gold))] mb-4">
                Contact Us
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-white/60">
                  <Phone className="h-4 w-4 text-[hsl(var(--gold))] shrink-0" />
                  <a href="tel:9047120271" className="hover:text-white transition-colors">
                    (904) 712-0271
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-white/60">
                  <Mail className="h-4 w-4 text-[hsl(var(--gold))] shrink-0" />
                  <a href="mailto:hemi@hatinvestors.com" className="hover:text-white transition-colors">
                    hemi@hatinvestors.com
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-white/60">
                  <Mail className="h-4 w-4 text-[hsl(var(--gold))] shrink-0" />
                  <a href="mailto:tom@hatinvestors.com" className="hover:text-white transition-colors">
                    tom@hatinvestors.com
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-white/60">
                  <MapPin className="h-4 w-4 text-[hsl(var(--gold))] shrink-0 mt-0.5" />
                  <span>Jacksonville, FL</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="container mx-auto px-4 lg:px-8 py-5">
          <p className="text-xs text-white/40 leading-relaxed">
            © {new Date().getFullYear()} HatInvestors LLC. All rights reserved. We are real estate investors.
            We may make offers to purchase your property directly. No legal, tax, or financial advice is provided.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
