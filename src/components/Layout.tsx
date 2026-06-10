import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import hatLogo from "@/assets/hat-logo.png";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/who-we-are", label: "Who We Are" },
    { to: "/our-projects", label: "Our Projects" },
    { to: "/our-transformations", label: "Our Transformations" },
    { to: "/sell-your-house", label: "Sell Your House" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={hatLogo} alt="HatInvestors LLC" className="h-12 md:h-16" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    isActive(link.to) ? "text-accent" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/sell-your-house">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Get an Offer
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block text-sm font-medium transition-colors hover:text-accent ${
                    isActive(link.to) ? "text-accent" : "text-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/sell-your-house" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Get an Offer
                </Button>
              </Link>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <img src={hatLogo} alt="HatInvestors LLC" className="h-16 mb-4" />
              <p className="text-sm opacity-90">Building Your Affordable Dream</p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/who-we-are" className="text-sm hover:text-accent transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/our-projects" className="text-sm hover:text-accent transition-colors">
                    Our Projects
                  </Link>
                </li>
                <li>
                  <Link to="/our-transformations" className="text-sm hover:text-accent transition-colors">
                    Our Transformations
                  </Link>
                </li>
                <li>
                  <Link to="/sell-your-house" className="text-sm hover:text-accent transition-colors">
                    Sell Your House
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="text-sm hover:text-accent transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="text-sm hover:text-accent transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-heading font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="opacity-90">
                  <a href="mailto:hemi@hatinvestors.com" className="hover:text-accent transition-colors">
                    hemi@hatinvestors.com
                  </a>
                </li>
                <li className="opacity-90">
                  <a href="mailto:tom@hatinvestors.com" className="hover:text-accent transition-colors">
                    tom@hatinvestors.com
                  </a>
                </li>
                <li className="opacity-90">
                  <a href="tel:9047120271" className="hover:text-accent transition-colors">
                    (904) 712-0271
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-primary-foreground/20">
            <p className="text-xs opacity-75">
              © {new Date().getFullYear()} HatInvestors LLC. All rights reserved. We are real estate
              investors. We may make offers to purchase your property directly. No legal, tax, or
              financial advice is provided.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
