"use client";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1500);
  };

  const contactInfo = [
    {
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
      label: "Phone", value: "+91 98765 43210", sub: "Mon–Sat, 9am–7pm",
    },
    {
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      label: "Email", value: "info@frigatelogistics.in", sub: "We reply within 24 hours",
    },
    {
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      label: "Address", value: "Mumbai, Maharashtra", sub: "India — 400 001",
    },
  ];

  return (
    <section id="contact" className="py-28 relative overflow-hidden" ref={ref} style={{ background: "#0A1628" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #2C4A6E, transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div style={{
          textAlign: "center", marginBottom: "64px",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            color: "#D4A843", fontSize: "11px", fontWeight: 700,
            letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "16px",
          }}>
            <span style={{ width: "32px", height: "1px", background: "#D4A843" }} />
            Reach Out
            <span style={{ width: "32px", height: "1px", background: "#D4A843" }} />
          </div>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "white",
            marginBottom: "16px", fontFamily: "'Playfair Display', serif",
          }}>
            Contact Us
          </h2>
          <p style={{ color: "#C0C8D8", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
            Ready to partner with us? Get in touch for a quote, a partnership inquiry, or any logistics support you need.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: "48px" }} className="lg:grid-cols-[2fr_3fr] flex flex-col">
          {/* Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {contactInfo.map((info, i) => (
              <div
                key={info.label}
                style={{
                  display: "flex", gap: "16px", alignItems: "flex-start",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateX(0)" : "translateX(-20px)",
                  transition: "opacity 0.6s ease, transform 0.6s ease",
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <div style={{
                  width: "48px", height: "48px", borderRadius: "14px",
                  background: "#1E3A5F", border: "1px solid #2C4A6E",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#D4A843", flexShrink: 0,
                }}>
                  {info.icon}
                </div>
                <div>
                  <div style={{ color: "#C0C8D8", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" }}>{info.label}</div>
                  <div style={{ color: "white", fontWeight: 600, fontSize: "14px" }}>{info.value}</div>
                  <div style={{ color: "#C0C8D8", fontSize: "11px", marginTop: "2px" }}>{info.sub}</div>
                </div>
              </div>
            ))}

            {/* Partnership note */}
            <div style={{
              marginTop: "16px",
              background: "rgba(30,58,95,0.3)",
              border: "1px solid rgba(212,168,67,0.2)",
              borderRadius: "16px", padding: "24px",
              opacity: inView ? 1 : 0,
              transition: "opacity 0.6s ease",
              transitionDelay: "0.4s",
            }}>
              <div style={{ color: "#D4A843", fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
                Amazon Partners
              </div>
              <p style={{ color: "#C0C8D8", fontSize: "13px", lineHeight: 1.7 }}>
                We are a certified Amazon DSP and MFN logistics partner.
                For seller partnerships, onboarding, or bulk delivery contracts,
                reach out and our team will respond within one business day.
              </p>
            </div>
          </div>

          {/* Form */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
            transitionDelay: "0.2s",
          }}>
            <div style={{
              background: "rgba(30,58,95,0.2)",
              border: "1px solid rgba(44,74,110,0.6)",
              borderRadius: "20px", padding: "36px",
            }}>
              {status === "sent" ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 0", textAlign: "center", animation: "fadeSlideUp 0.5s ease" }}>
                  <div style={{
                    width: "64px", height: "64px", borderRadius: "50%",
                    background: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "24px", fontSize: "28px",
                  }}>✓</div>
                  <h3 style={{ color: "white", fontSize: "1.4rem", fontWeight: 700, marginBottom: "10px", fontFamily: "'Playfair Display', serif" }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: "#C0C8D8", fontSize: "14px" }}>
                    Thank you for reaching out. Our team will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setStatus("idle"); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                    style={{ marginTop: "24px", color: "#D4A843", fontSize: "13px", background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div>
                      <label style={{ display: "block", color: "#C0C8D8", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>Full Name *</label>
                      <input type="text" required className="form-input" placeholder="Rajesh Kumar" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div>
                      <label style={{ display: "block", color: "#C0C8D8", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>Phone</label>
                      <input type="tel" className="form-input" placeholder="+91 98765 43210" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: "block", color: "#C0C8D8", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>Email Address *</label>
                    <input type="email" required className="form-input" placeholder="yourname@company.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ display: "block", color: "#C0C8D8", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>Subject *</label>
                    <select required className="form-input" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}>
                      <option value="">Select a subject</option>
                      <option>Amazon Delivery Partnership</option>
                      <option>MFN Fulfillment</option>
                      <option>Pick-Up Services</option>
                      <option>Fleet Transport</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: "block", color: "#C0C8D8", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>Message *</label>
                    <textarea required rows={5} className="form-input" style={{ resize: "none" }} placeholder="Tell us about your logistics requirements..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  </div>
                  <button type="submit" className="btn-primary" style={{ justifyContent: "center" }} disabled={status === "sending"}>
                    {status === "sending" ? (
                      <>
                        <svg style={{ width: "16px", height: "16px", animation: "spin 1s linear infinite" }} fill="none" viewBox="0 0 24 24">
                          <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg style={{ width: "16px", height: "16px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 1024px) {
          #contact .max-w-7xl > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
