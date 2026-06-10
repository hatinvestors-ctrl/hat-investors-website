import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, TrendingUp, Handshake, Home, Users, Key } from "lucide-react";
const WhoWeAre = () => {
  return <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Who We Are</h1>
          <p className="text-base md:text-lg max-w-3xl mx-auto opacity-90">HAT Investors LLC is a real estate investment company focused on buying, renovating, and improving properties for homeowners and investors.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Our Mission</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              We help homeowners solve problems and improve neighborhoods by buying houses as-is,
              renovating them with care and quality craftsmanship, and creating affordable homes that
              families are proud to live in. Every property we touch becomes a better place to call
              home.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-3">People-First Solutions</h3>
                <p className="text-sm text-muted-foreground">
                  We understand that selling a home can be stressful. Our team listens to your unique
                  situation and creates solutions that work for you, not just us.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-3">Data-Driven Investing</h3>
                <p className="text-sm text-muted-foreground">
                  We leverage market data, comparable sales, and renovation expertise to make fair
                  offers that reflect true property value and potential.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Handshake className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-3">Long-Term Partnerships</h3>
                <p className="text-sm text-muted-foreground">
                  We believe in building relationships, not just transactions. Many of our best
                  opportunities come from referrals and repeat sellers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Markets We Serve */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center">
              Markets We Serve
            </h2>
            <p className="text-base text-muted-foreground mb-8 text-center">
              Based in Florida with a focus on the Jacksonville area, we're actively investing in
              properties throughout the region. We understand local market dynamics and have
              established relationships with contractors, lenders, and real estate professionals.
            </p>

            <div className="bg-secondary rounded-lg p-8">
              <h3 className="font-heading font-bold text-lg mb-6">
                We Help Homeowners In These Situations:
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[{
                icon: Home,
                text: "Inherited properties you don't want to maintain"
              }, {
                icon: Key,
                text: "Tired landlords ready to exit rental investments"
              }, {
                icon: Users,
                text: "Properties needing major repairs or updates"
              }, {
                icon: TrendingUp,
                text: "Homeowners behind on mortgage payments"
              }, {
                icon: Heart,
                text: "Families needing to relocate quickly"
              }, {
                icon: Handshake,
                text: "Divorce or estate settlement situations"
              }].map((item, index) => <div key={index} className="flex items-start gap-3">
                    <item.icon className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <span>{item.text}</span>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-base md:text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Whether you're looking to sell your property or partner with us on investment
            opportunities, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/sell-your-house">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Sell Your House
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default WhoWeAre;