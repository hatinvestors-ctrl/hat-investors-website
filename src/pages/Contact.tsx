import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-navy-deep py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-[hsl(var(--gold))]/6 blur-3xl rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Reveal>
            <span className="gold-line-center mb-6" />
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mt-4 mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-white/65 max-w-xl mx-auto">
              Ready to sell, invest, or just have questions? We'd love to hear from you.
              Expect a response within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CONTENT ──────────────────────────────────────────────── */}
      <section className="bg-warm-white py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-10">

            {/* Contact info */}
            <Reveal direction="left" className="lg:col-span-2 space-y-5">
              <div>
                <span className="gold-line mb-4" />
                <h2 className="text-2xl font-heading font-bold text-[hsl(var(--navy-deep))] mt-4 mb-6">
                  Contact Info
                </h2>
              </div>

              {[
                { icon: <Phone className="h-5 w-5" />, label: "Phone",       value: "(904) 712-0271",       href: "tel:9047120271" },
                { icon: <Mail className="h-5 w-5" />,  label: "Email (Hemi)", value: "hemi@hatinvestors.com", href: "mailto:hemi@hatinvestors.com" },
                { icon: <Mail className="h-5 w-5" />,  label: "Email (Tom)",  value: "tom@hatinvestors.com",  href: "mailto:tom@hatinvestors.com" },
                { icon: <MapPin className="h-5 w-5" />, label: "Location",    value: "Jacksonville, FL",      href: null },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100 card-glow group">
                  <div className="w-11 h-11 rounded-xl bg-[hsl(var(--gold))]/10 flex items-center justify-center text-[hsl(var(--gold))] shrink-0 group-hover:bg-[hsl(var(--gold))]/20 group-hover:scale-110 transition-all duration-300">
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">{label}</p>
                    {href ? (
                      <a href={href} className="text-[hsl(var(--navy-deep))] font-semibold hover:text-[hsl(var(--gold))] transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-[hsl(var(--navy-deep))] font-semibold">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="bg-[hsl(var(--navy-deep))] rounded-2xl p-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-15 rounded-2xl pointer-events-none" />
                <p className="text-[hsl(var(--gold))] font-heading font-bold text-lg mb-2 relative z-10">Office Hours</p>
                <p className="text-white/65 text-sm relative z-10">Monday – Friday: 9am – 6pm</p>
                <p className="text-white/65 text-sm relative z-10">Saturday: By appointment</p>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal direction="right" delay={100} className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-10 w-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-[hsl(var(--navy-deep))] mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-gray-500">
                      Thanks for reaching out. We'll get back to you within one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <span className="gold-line mb-4" />
                      <h2 className="text-2xl font-heading font-bold text-[hsl(var(--navy-deep))] mt-4 mb-6">
                        Send Us a Message
                      </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                        <input
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold))]/30 focus:border-[hsl(var(--gold))] transition-all text-sm bg-gray-50/50 hover:bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone</label>
                        <input
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="(904) 555-0123"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold))]/30 focus:border-[hsl(var(--gold))] transition-all text-sm bg-gray-50/50 hover:bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email *</label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold))]/30 focus:border-[hsl(var(--gold))] transition-all text-sm bg-gray-50/50 hover:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message *</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your property or inquiry…"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold))]/30 focus:border-[hsl(var(--gold))] transition-all text-sm resize-none bg-gray-50/50 hover:bg-white"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-gold w-full py-4 rounded-xl flex items-center justify-center gap-2 text-base"
                    >
                      <Send className="h-5 w-5" /> Send Message
                    </button>

                    <p className="text-xs text-gray-400 text-center">
                      We respect your privacy and never share your information.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
