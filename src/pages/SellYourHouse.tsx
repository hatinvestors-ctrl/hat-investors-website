import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import hatLogo from "@/assets/hat-logo.png";

const SellYourHouse = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    propertyAddress: "",
    message: "",
    smsConsent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.smsConsent) {
      newErrors.smsConsent = "You must agree to SMS terms to continue";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Form is valid
    toast({
      title: "Form Submitted!",
      description: "Thank you! We'll review your property and contact you soon.",
    });

    // Reset form
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      propertyAddress: "",
      message: "",
      smsConsent: false,
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Tell Us About Your Property
          </h1>
          <p className="text-base md:text-lg max-w-3xl mx-auto opacity-90">
            Fill out the form below and our team at HatInvestors will review your property and
            contact you with options. There is no obligation, and your information is kept private.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              {/* Logo */}
              <div className="text-center mb-8">
                <img src={hatLogo} alt="HatInvestors LLC" className="h-16 mx-auto mb-4" />
                <h2 className="text-xl md:text-2xl font-heading font-bold">Get Your Cash Offer</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <Label htmlFor="fullName" className="text-base">
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      setErrors({ ...errors, fullName: "" });
                    }}
                    className={errors.fullName ? "border-destructive" : ""}
                    placeholder="John Smith"
                  />
                  {errors.fullName && (
                    <p className="text-sm text-destructive mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <Label htmlFor="phone" className="text-base">
                    Phone Number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      setErrors({ ...errors, phone: "" });
                    }}
                    className={errors.phone ? "border-destructive" : ""}
                    placeholder="(904) 555-0123"
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="text-base">
                    Email (Optional)
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                  />
                </div>

                {/* Property Address */}
                <div>
                  <Label htmlFor="propertyAddress" className="text-base">
                    Property Address (Optional)
                  </Label>
                  <Input
                    id="propertyAddress"
                    type="text"
                    value={formData.propertyAddress}
                    onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                    placeholder="123 Main St, Jacksonville, FL 32256"
                  />
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message" className="text-base">
                    Message / Notes (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your property and situation..."
                    rows={4}
                  />
                </div>

                {/* SMS Consent */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="smsConsent"
                      checked={formData.smsConsent}
                      onCheckedChange={(checked) => {
                        setFormData({ ...formData, smsConsent: checked as boolean });
                        setErrors({ ...errors, smsConsent: "" });
                      }}
                      className={errors.smsConsent ? "border-destructive" : ""}
                    />
                    <Label htmlFor="smsConsent" className="text-sm font-normal leading-relaxed">
                      I agree to receive SMS messages from HatInvestors about property opportunities,
                      services, and updates. Message frequency varies. Message & data rates may apply.
                      Reply STOP to unsubscribe or HELP for help.{" "}
                      <span className="text-destructive">*</span>
                    </Label>
                  </div>
                  {errors.smsConsent && (
                    <p className="text-sm text-destructive">{errors.smsConsent}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  Get Started
                </Button>

                {/* Legal Text */}
                <div className="text-xs text-muted-foreground space-y-2 pt-4 border-t border-border">
                  <p>
                    By submitting this form, you confirm that you own the phone number provided and
                    agree to receive text messages from HatInvestors LLC. We do not sell or share your
                    personal information.
                  </p>
                  <p>
                    View our{" "}
                    <Link to="/privacy-policy" className="text-accent hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link to="/terms-of-service" className="text-accent hover:underline">
                      Terms of Service
                    </Link>
                    .
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="max-w-2xl mx-auto mt-12 text-center">
            <p className="text-muted-foreground">
              <strong>Business Name:</strong> HatInvestors LLC
            </p>
            <p className="text-muted-foreground mt-2">
              <strong>Contact:</strong>{" "}
              <a href="mailto:hemi@hatinvestors.com" className="text-accent hover:underline">
                hemi@hatinvestors.com
              </a>
              {" • "}
              <a href="mailto:tom@hatinvestors.com" className="text-accent hover:underline">
                tom@hatinvestors.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellYourHouse;
