const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-center">Privacy Policy</h1>
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
              <h2 className="text-2xl font-heading font-bold mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                <li>Full name and contact information (phone number, email address)</li>
                <li>Property address and details about properties you wish to sell</li>
                <li>Any additional information you choose to provide in messages or forms</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                <li>Evaluate properties and prepare cash offers</li>
                <li>
                  Communicate with you via phone, SMS, and email about property opportunities and our
                  services
                </li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve our services and website experience</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">3. SMS Communications</h2>
              <p className="text-muted-foreground">
                By providing your phone number and consenting to receive SMS messages, you agree that
                HatInvestors LLC may send you text messages regarding property opportunities, updates,
                and services.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                <li>Message frequency varies</li>
                <li>Message and data rates may apply</li>
                <li>You can reply STOP at any time to unsubscribe</li>
                <li>Reply HELP for assistance</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">4. Data Sharing and Disclosure</h2>
              <p className="text-muted-foreground">
                We do not sell or rent your personal information to third parties. We may share your
                information with:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                <li>Service providers who assist in our business operations (e.g., contractors, title companies)</li>
                <li>Legal authorities if required by law or to protect our rights</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">5. Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate security measures to protect your personal information from
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground">You have the right to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                <li>Access, update, or delete your personal information</li>
                <li>Opt out of SMS and email communications at any time</li>
                <li>Request information about how your data is used</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">7. Cookies</h2>
              <p className="text-muted-foreground">
                Our website may use cookies to improve your browsing experience. You can control cookie
                settings through your browser preferences.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">8. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. Changes will be posted on this
                page with an updated effective date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">9. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us:
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
