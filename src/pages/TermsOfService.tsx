const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <section className="py-24 bg-navy-deep text-white text-center">
        <div className="container mx-auto px-4">
          <span className="gold-line-center mb-6" />
          <h1 className="text-4xl md:text-5xl font-heading font-bold mt-4">Terms of Service</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <p className="text-muted-foreground mb-4">
                <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
              </p>
              <p className="text-muted-foreground">
                <strong>Business Name:</strong> HatInvestors LLC
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing or using the HatInvestors LLC website and services, you agree to be bound
                by these Terms of Service. If you do not agree to these terms, please do not use our
                services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">2. Services Provided</h2>
              <p className="text-muted-foreground">
                HatInvestors LLC is a real estate investment company. We purchase properties directly
                from homeowners and are not licensed real estate agents or brokers. We do not provide
                legal, tax, or financial advice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">3. No Obligation Offers</h2>
              <p className="text-muted-foreground">
                Any cash offers we provide for your property are non-binding until a formal purchase
                agreement is signed by both parties. You are under no obligation to accept any offer we
                make.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">4. SMS and Communications Consent</h2>
              <p className="text-muted-foreground">
                By providing your phone number and consenting to SMS communications, you agree to
                receive text messages from HatInvestors LLC. You can opt out at any time by replying
                STOP. Message frequency varies, and message and data rates may apply.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">5. Accuracy of Information</h2>
              <p className="text-muted-foreground">
                You agree to provide accurate and truthful information about yourself and any property
                you submit for evaluation. We reserve the right to verify all information provided.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">6. Property Evaluation</h2>
              <p className="text-muted-foreground">
                Our cash offers are based on property condition, market analysis, and our investment
                criteria. Offers may change if property conditions differ from initial assessments or if
                market conditions change.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">7. Privacy and Data Protection</h2>
              <p className="text-muted-foreground">
                Your personal information is protected according to our Privacy Policy. We do not sell
                or share your information with third parties except as necessary to complete
                transactions or as required by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">8. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                HatInvestors LLC is not liable for any indirect, incidental, or consequential damages
                arising from your use of our website or services. Our liability is limited to the
                maximum extent permitted by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">9. Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content on this website, including text, images, logos, and design, is the property
                of HatInvestors LLC and protected by copyright and trademark laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">10. Third-Party Links</h2>
              <p className="text-muted-foreground">
                Our website may contain links to third-party websites. We are not responsible for the
                content or practices of these external sites.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">11. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these Terms of Service at any time. Changes will be
                posted on this page with an updated effective date. Continued use of our services
                constitutes acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">12. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms of Service are governed by the laws of the State of Florida. Any disputes
                shall be resolved in the appropriate courts of Florida.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">13. Contact Information</h2>
              <p className="text-muted-foreground">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <ul className="list-none text-muted-foreground space-y-2 mt-3">
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:hemi@hatinvestors.com" className="text-accent hover:underline">
                    hemi@hatinvestors.com
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:9047120271" className="text-accent hover:underline">
                    (904) 712-0271
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-secondary rounded-lg p-6 mt-8">
              <p className="text-sm text-muted-foreground">
                <strong>Disclaimer:</strong> We are real estate investors. We may make offers to
                purchase your property directly. No legal, tax, or financial advice is provided. You
                should consult with appropriate professionals before making any decisions regarding the
                sale of your property.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
