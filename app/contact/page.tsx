"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}
const sfade = (inView: boolean, delay = 0): React.CSSProperties => ({
  opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(28px)",
  transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
});

export default function ContactPage() {
  const hero = useInView(0.1);
  const form = useInView();
  const [data, setData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // In production this would POST to an API route that emails the right team
    // Ecommerce -> sunil@fll.co.in, hardik@fll.co.in
    // Transport -> rpchoudhary@fll.co.in
    setTimeout(() => setStatus("sent"), 1600);
  };

  const ecommerceContacts = [
    { icon: "📞", label: "Phone", value: "+91 99246 26900" },
    { icon: "📧", label: "Email", value: "sunil@fll.co.in" },
    { icon: "📧", label: "Email", value: "hardik@fll.co.in" },
  ];
  const transportContacts = [
    { icon: "📞", label: "Phone", value: "+91 93272 34001" },
    { icon: "📧", label: "Email", value: "rpchoudhary@fll.co.in" },
  ];

  return (
    <main>
      {/* Hero */}
      <section style={{ paddingTop: "140px", paddingBottom: "80px", background: "radial-gradient(ellipse at 30% 50%, #1E3A5F 0%, #0A1628 65%)", borderBottom: "1px solid rgba(44,74,110,0.4)", position: "relative", overflow: "hidden" }} ref={hero.ref}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "linear-gradient(rgba(192,200,216,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(192,200,216,0.5) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", position: "relative" }}>
          <div style={sfade(hero.inView)}>
            <div className="section-label"><span />Contact Us<span /></div>
            <h1 style={{ fontSize: "clamp(2.4rem,5vw,3.8rem)", fontWeight: 800, color: "white", fontFamily: "'Playfair Display',serif", marginBottom: "20px", lineHeight: 1.15 }}>
              {"Have a Question?"}<br />
              <span style={{ background: "linear-gradient(90deg,#D4A843,#F0C96A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{"Let's Talk."}</span>
            </h1>
            <p style={{ color: "#C0C8D8", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "600px" }}>
              Reach out to our E-commerce or Transport team directly. We respond within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Two contact cards */}
      <section style={{ padding: "60px 0", background: "#060f1e", borderBottom: "1px solid rgba(30,58,95,0.5)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>

            {/* E-commerce */}
            <div style={{ background: "rgba(30,58,95,0.35)", border: "1px solid rgba(44,74,110,0.7)", borderRadius: "20px", padding: "36px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px" }}>📦</div>
                <div>
                  <div style={{ color: "#D4A843", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Frigate E-commerce</div>
                  <div style={{ color: "#C0C8D8", fontSize: "12px" }}>Amazon EDSP & MFN</div>
                </div>
              </div>
              {ecommerceContacts.map((c, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                  <span style={{ fontSize: "16px" }}>{c.icon}</span>
                  <span style={{ color: "#E8EDF5", fontSize: "14px", fontWeight: 500 }}>{c.value}</span>
                </div>
              ))}
            </div>

            {/* Transport */}
            <div style={{ background: "rgba(30,58,95,0.35)", border: "1px solid rgba(44,74,110,0.7)", borderRadius: "20px", padding: "36px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px" }}>🚛</div>
                <div>
                  <div style={{ color: "#D4A843", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Frigate Transport</div>
                  <div style={{ color: "#C0C8D8", fontSize: "12px" }}>PTL / FTL / ODC</div>
                </div>
              </div>
              {transportContacts.map((c, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                  <span style={{ fontSize: "16px" }}>{c.icon}</span>
                  <span style={{ color: "#E8EDF5", fontSize: "14px", fontWeight: 500 }}>{c.value}</span>
                </div>
              ))}
            </div>

            {/* Address */}
            <div style={{ background: "rgba(30,58,95,0.35)", border: "1px solid rgba(44,74,110,0.7)", borderRadius: "20px", padding: "36px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px" }}>📍</div>
                <div>
                  <div style={{ color: "#D4A843", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Corporate Office</div>
                  <div style={{ color: "#C0C8D8", fontSize: "12px" }}>Vadodara, Gujarat</div>
                </div>
              </div>
              <div style={{ color: "#E8EDF5", fontSize: "14px", lineHeight: 1.8 }}>
                G-1, Vaibhav Residency,<br />
                Opposite Shivam Tenament,<br />
                Vadodara, Gujarat — 390012
              </div>
            </div>

            {/* 24/7 */}
            <div style={{ background: "rgba(30,58,95,0.35)", border: "1px solid rgba(44,74,110,0.7)", borderRadius: "20px", padding: "36px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px" }}>⏱️</div>
                <div>
                  <div style={{ color: "#D4A843", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Operations</div>
                  <div style={{ color: "#C0C8D8", fontSize: "12px" }}>Always available</div>
                </div>
              </div>
              <div style={{ color: "#E8EDF5", fontSize: "20px", fontWeight: 700, fontFamily: "'Playfair Display',serif", marginBottom: "8px" }}>24/7 Support</div>
              <div style={{ color: "#C0C8D8", fontSize: "13px" }}>For urgent shipments</div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section style={{ padding: "100px 0", background: "#0A1628" }} ref={form.ref}>
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ ...sfade(form.inView), background: "rgba(30,58,95,0.2)", border: "1px solid rgba(44,74,110,0.6)", borderRadius: "24px", padding: "48px" }}>
            <div className="section-label"><span />Enquiry Form<span /></div>
            <h2 style={{ fontSize: "clamp(1.5rem,2.5vw,2.2rem)", fontWeight: 800, color: "white", fontFamily: "'Playfair Display',serif", marginBottom: "12px" }}>Send Us a Message</h2>
            <p style={{ color: "#C0C8D8", fontSize: "14px", marginBottom: "32px" }}>
              Select your service below — your enquiry will be routed directly to the right team.
            </p>

            {status === "sent" ? (
              <div style={{ textAlign: "center", padding: "60px 0" }}>
                <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", fontSize: "28px" }}>✓</div>
                <h3 style={{ color: "white", fontSize: "1.4rem", fontWeight: 700, marginBottom: "12px", fontFamily: "'Playfair Display',serif" }}>Message Sent!</h3>
                <p style={{ color: "#C0C8D8", fontSize: "14px", lineHeight: 1.7, marginBottom: "8px" }}>
                  {data.service === "Ecommerce"
                    ? "Your enquiry has been sent to our E-commerce team — sunil@fll.co.in & hardik@fll.co.in"
                    : "Your enquiry has been sent to our Transport team — rpchoudhary@fll.co.in"}
                </p>
                <p style={{ color: "#C0C8D8", fontSize: "13px", marginBottom: "24px" }}>We will get back to you within 24 hours.</p>
                <button onClick={() => { setStatus("idle"); setData({ name: "", email: "", phone: "", service: "", message: "" }); }} style={{ color: "#D4A843", background: "none", border: "none", cursor: "pointer", fontSize: "13px", textDecoration: "underline" }}>Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                  <div>
                    <label style={{ display: "block", color: "#C0C8D8", fontSize: "10px", textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: "8px" }}>Full Name *</label>
                    <input type="text" required className="form-input" placeholder="Your name" value={data.name} onChange={e => setData({ ...data, name: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ display: "block", color: "#C0C8D8", fontSize: "10px", textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: "8px" }}>Phone</label>
                    <input type="tel" className="form-input" placeholder="+91 98765 43210" value={data.phone} onChange={e => setData({ ...data, phone: e.target.value })} />
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", color: "#C0C8D8", fontSize: "10px", textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: "8px" }}>Email Address *</label>
                  <input type="email" required className="form-input" placeholder="yourname@company.com" value={data.email} onChange={e => setData({ ...data, email: e.target.value })} />
                </div>

                {/* Service selector — only two options */}
                <div>
                  <label style={{ display: "block", color: "#C0C8D8", fontSize: "10px", textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: "8px" }}>Service *</label>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    {[
                      { value: "Ecommerce", label: "📦 E-commerce", sub: "Amazon EDSP, MFN, Pick-up" },
                      { value: "Transport", label: "🚛 Transport", sub: "PTL, FTL, ODC, Fleet" },
                    ].map(opt => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setData({ ...data, service: opt.value })}
                        style={{
                          background: data.service === opt.value ? "rgba(212,168,67,0.15)" : "rgba(22,40,68,0.5)",
                          border: `1px solid ${data.service === opt.value ? "rgba(212,168,67,0.6)" : "rgba(44,74,110,0.6)"}`,
                          borderRadius: "12px", padding: "16px", cursor: "pointer", textAlign: "left",
                          transition: "all 0.3s",
                        }}
                      >
                        <div style={{ color: "white", fontSize: "14px", fontWeight: 600, marginBottom: "4px" }}>{opt.label}</div>
                        <div style={{ color: "#C0C8D8", fontSize: "11px" }}>{opt.sub}</div>
                      </button>
                    ))}
                  </div>
                  {data.service && (
                    <div style={{ marginTop: "10px", padding: "10px 14px", background: "rgba(212,168,67,0.08)", border: "1px solid rgba(212,168,67,0.2)", borderRadius: "8px" }}>
                      <div style={{ color: "#D4A843", fontSize: "11px" }}>
                        {data.service === "Ecommerce"
                          ? "✓ This enquiry will be sent to: sunil@fll.co.in & hardik@fll.co.in"
                          : "✓ This enquiry will be sent to: rpchoudhary@fll.co.in"}
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <label style={{ display: "block", color: "#C0C8D8", fontSize: "10px", textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: "8px" }}>Message *</label>
                  <textarea required rows={5} className="form-input" style={{ resize: "none" }} placeholder="Tell us about your requirements..." value={data.message} onChange={e => setData({ ...data, message: e.target.value })} />
                </div>

                <button type="submit" className="btn-primary" style={{ justifyContent: "center" }} disabled={status === "sending" || !data.service}>
                  {status === "sending" ? (
                    <><svg style={{ width: "16px", height: "16px", animation: "spin 1s linear infinite" }} fill="none" viewBox="0 0 24 24"><circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg> Sending...</>
                  ) : (
                    <>Submit Enquiry <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
        <style>{`
          @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
          .form-row { grid-template-columns: 1fr 1fr; }
          @media(max-width:600px){ .form-row{grid-template-columns:1fr!important;} }
        `}</style>
      </section>
    </main>
  );
}
