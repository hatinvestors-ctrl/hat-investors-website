import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, TrendingUp, Users, DollarSign, Clock, Shield } from "lucide-react";
import hatLogo from "@/assets/hat-logo.png";
const HomePage = () => {
  return <div className="min-h-screen">
      {/* Brand Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-32 md:py-48 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0" style={{
        backgroundImage: "url('/projects/darlington-after-living-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 text-primary-foreground">
                HAT Investors
              </h1>
              <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
              <p className="text-lg md:text-xl opacity-95">
                Building Your Affordable Dream
              </p>
            </div>
            <p className="text-base md:text-lg max-w-3xl mx-auto opacity-90 leading-relaxed">
              Jacksonville's trusted real estate investment partner. We transform properties, create opportunities for sellers, and deliver consistent returns for investors.
            </p>
          </div>
        </div>
      </section>

      {/* Two Offerings Section */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-6 mb-8 md:mb-12">
            <img src={hatLogo} alt="HAT Investors" className="h-16 md:h-20" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              How We Can Help You
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side: Sell Your House */}
            <div className="bg-primary-foreground/5 backdrop-blur rounded-lg p-6 md:p-8 border border-primary-foreground/10 flex flex-col">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Sell Your House Fast
              </h2>
              <p className="text-base md:text-lg mb-6 opacity-90">
                We buy houses as-is for cash — fast, fair, and hassle-free.
              </p>
              
              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-3 text-accent">What We Offer:</h3>
                <ul className="space-y-3 text-base">
                  <li className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>No repairs needed</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <DollarSign className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>We pay cash</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Flexible closing timeline</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Creative Financing</span>
                  </li>
                </ul>
              </div>
              
              {/* Before/After Image Preview */}
              <div className="mb-6 flex-grow flex flex-col justify-end">
                <p className="text-xs text-primary-foreground/70 mb-3 text-center">
                  We handle everything from purchase to sale
                </p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center">
                    <p className="text-xs font-bold text-accent mb-2">BEFORE</p>
                    <img src="/home/sell-before.jpg" alt="Before" className="w-full h-32 md:h-40 object-cover rounded-lg shadow-md" />
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-accent mb-2">AFTER</p>
                    <img src="/home/sell-after.jpg" alt="After" className="w-full h-32 md:h-40 object-cover rounded-lg shadow-md" />
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-accent mb-2">SOLD</p>
                    <img src="/home/sell-sold.jpg" alt="Sold" className="w-full h-32 md:h-40 object-cover rounded-lg shadow-md" />
                  </div>
                </div>
              </div>
              
              <Link to="/sell-your-house">
                <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Get My Cash Offer
                </Button>
              </Link>
            </div>

            {/* Right Side: Invest with Us */}
            <div className="bg-primary-foreground/5 backdrop-blur rounded-lg p-6 md:p-8 border border-primary-foreground/10 flex flex-col">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Invest with Us
              </h2>
              <p className="text-base md:text-lg mb-6 opacity-90">Leverage our deep expertise in the Jacksonville market. With multiple  successful projects completed in 2025, we deliver consistent returns through strategic real estate investments.</p>
              
              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-3 text-accent">Investment Opportunities:</h3>
                <ul className="space-y-3 text-base">
                  <li className="flex items-center gap-3">
                    <DollarSign className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Debt/HML Financing - Secured lending with competitive returns</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>JV Projects - Partner on high-potential deals</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Creative Financing - Flexible investment structures</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Home className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Wholesaling - Off-market deal access</span>
                  </li>
                </ul>
              </div>

              <div className="mb-4 flex-grow flex flex-col justify-end">
                <p className="text-xs text-primary-foreground mb-2">Flip Project Example: 6226 W Pennant Dr - 132% ROI</p>
                <div className="grid grid-cols-3 gap-3">
                  <img src="/projects/pennant-after-kitchen-2.jpg" alt="Pennant Kitchen After" className="w-full h-32 md:h-40 object-cover rounded shadow-md" />
                  <img src="/projects/darlington-after-kitchen.jpg" alt="Darlington Kitchen After" className="w-full h-32 md:h-40 object-cover rounded shadow-md" />
                  <img src="/projects/pennant-after-master-bedroom-1.jpg" alt="Pennant Master Bedroom After" className="w-full h-32 md:h-40 object-cover rounded shadow-md" />
                </div>
              </div>

              <Link to="/contact">
                <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Invest with us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            What We Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <Home className="h-12 w-12 text-accent mb-4" />
                <h3 className="font-heading font-bold text-lg mb-3">Fix & Flip</h3>
                <p className="text-sm text-muted-foreground">
                  We purchase distressed properties, renovate them to modern standards, and sell them
                  to families looking for quality homes at affordable prices.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-accent mb-4" />
                <h3 className="font-heading font-bold text-lg mb-3">BRRRR / Rentals</h3>
                <p className="text-sm text-muted-foreground">
                  Buy, Rehab, Rent, Refinance, Repeat. We build a portfolio of quality rental
                  properties that provide long-term value to communities.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-accent mb-4" />
                <h3 className="font-heading font-bold text-lg mb-3">
                  Wholesale & Creative Solutions
                </h3>
                <p className="text-sm text-muted-foreground">
                  We connect motivated sellers with qualified buyers and offer flexible financing
                  solutions that work for everyone involved.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Showcase Collage */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            Our Transformations
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            See how we transform distressed properties into beautiful homes
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {/* Row 1 */}
            <div className="col-span-2 row-span-2">
              <img src="/collage/parrish-living.jpg" alt="Parrish Living Room Transformation" className="w-full h-full object-cover rounded-lg shadow-lg hover-scale" />
            </div>
            <div className="col-span-1">
              <img src="/collage/pennant-kitchen.jpg" alt="Pennant Kitchen" className="w-full h-full object-cover rounded-lg shadow-lg hover-scale" />
            </div>
            <div className="col-span-1">
              <img src="/collage/parrish-bathroom.jpg" alt="Parrish Bathroom Renovation" className="w-full h-full object-cover rounded-lg shadow-lg hover-scale" />
            </div>
            
            {/* Row 2 */}
            <div className="col-span-1">
              <img src="/collage/pennant-bathroom.jpg" alt="Pennant Bathroom" className="w-full h-full object-cover rounded-lg shadow-lg hover-scale" />
            </div>
            <div className="col-span-1">
              <img src="/collage/parrish-exterior.jpg" alt="Parrish Exterior After" className="w-full h-full object-cover rounded-lg shadow-lg hover-scale" />
            </div>
            
            {/* Row 3 */}
            <div className="col-span-1">
              <img src="/collage/parrish-floorplan-2d.png" alt="Parrish 2D Floorplan" className="w-full h-full object-cover rounded-lg shadow-lg hover-scale" />
            </div>
            <div className="col-span-2">
              <img src="/collage/parrish-dining.jpg" alt="Parrish Dining Area" className="w-full h-full object-cover rounded-lg shadow-lg hover-scale" />
            </div>
            <div className="col-span-1">
              <img src="/projects/darlington-after-kitchen-2.jpg" alt="Darlington Kitchen Renovation" className="w-full h-full object-cover rounded-lg shadow-lg hover-scale" />
            </div>

            {/* Row 4 */}
            <div className="col-span-2">
              <img src="/collage/pennant-open-concept.jpg" alt="Pennant Open Concept" className="w-full h-full object-cover rounded-lg shadow-lg hover-scale" />
            </div>
            <div className="col-span-1">
              <img src="/collage/parrish-kitchen.jpg" alt="Parrish Kitchen" className="w-full h-full object-cover rounded-lg shadow-lg hover-scale" />
            </div>
            <div className="col-span-1">
              <img src="/collage/pennant-living-alt.jpg" alt="Pennant Living Room" className="w-full h-full object-cover rounded-lg shadow-lg hover-scale" />
            </div>

            {/* Row 5 */}
            <div className="col-span-1">
              <img src="/collage/pennant-living-fireplace.jpg" alt="Pennant Living with Fireplace" className="w-full h-full object-cover rounded-lg shadow-lg hover-scale" />
            </div>
            <div className="col-span-1">
              <img src="/collage/parrish-kitchen-3d.png" alt="Parrish Kitchen 3D Render" className="w-full h-full object-cover rounded-lg shadow-lg hover-scale" />
            </div>
            <div className="col-span-2">
              <img src="/collage/darlington-living.jpg" alt="Darlington Living Room" className="w-full h-full object-cover rounded-lg shadow-lg hover-scale" />
            </div>
            
            {/* Row 6 */}
            <div className="col-span-2">
              <img src="/collage/pennant-backyard.jpg" alt="Pennant Backyard" className="w-full h-full object-cover rounded-lg shadow-lg hover-scale" />
            </div>
            <div className="col-span-1">
              <img src="/collage/floorplan-1.png" alt="Darlington Floorplan" className="w-full h-full object-cover rounded-lg shadow-lg hover-scale" />
            </div>
            <div className="col-span-1">
              <img src="/collage/parrish-floorplan-3d.png" alt="Parrish 3D Floorplan" className="w-full h-full object-cover rounded-lg shadow-lg hover-scale" />
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/our-transformations" onClick={() => window.scrollTo(0, 0)}>
              <Button size="lg" variant="outline" className="font-semibold">
                View All Transformations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {[{
            step: "1",
            title: "Submit Your Property",
            description: "Fill out our simple form with your property details. It takes less than 2 minutes."
          }, {
            step: "2",
            title: "We Analyze & Visit the Property",
            description: "Our team reviews your property and schedules a convenient time to visit."
          }, {
            step: "3",
            title: "Get a Cash Offer",
            description: "Receive a fair, no-obligation cash offer typically within 24-48 hours."
          }, {
            step: "4",
            title: "Choose Closing Date & Get Paid",
            description: "Pick a closing date that works for you. We handle the paperwork and you get paid."
          }].map(item => <div key={item.step} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-heading font-bold text-xl">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Why Sellers Choose HatInvestors
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-heading font-bold mb-2">Local Market Expertise</h3>
              <p className="text-sm text-muted-foreground">
                Deep knowledge of Florida real estate markets
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-heading font-bold mb-2">Transparent Process</h3>
              <p className="text-sm text-muted-foreground">
                Clear communication every step of the way
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-heading font-bold mb-2">No Pressure, No Obligations</h3>
              <p className="text-sm text-muted-foreground">
                Get an offer with zero commitment required
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-heading font-bold mb-2">Fast Decisions & Closing</h3>
              <p className="text-sm text-muted-foreground">
                Close on your timeline, not ours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to see what we can offer for your property?
          </h2>
          <Link to="/sell-your-house">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </div>;
};
export default HomePage;