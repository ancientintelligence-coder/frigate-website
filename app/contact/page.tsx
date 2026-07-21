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
  const [status, setStatus] = useState<"idle"|"sending"|"sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1600);
  };

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
              Whether you are looking for a logistics partner, need a quote, or have a general inquiry — our team is ready to assist you. Reach out and we will get back within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section style={{ padding: "60px 0", background: "#060f1e", borderBottom: "1px solid rgba(30,58,95,0.5)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "20px" }}>
            {[
              { icon: "📞", label: "Customer Care", value: "+91 98765 43210", sub: "Mon–Sat, 9am–7pm" },
              { icon: "📧", label: "Email Us", value: "info@frigatelogistics.in", sub: "Reply within 24 hours" },
              { icon: "📍", label: "Corporate Office", value: "Mumbai, Maharashtra", sub: "India — 400 001" },
              { icon: "🕐", label: "Operations", value: "24/7 Support", sub: "For urgent shipments" },
            ].map(c => (
              <div key={c.label} style={{ background: "rgba(30,58,95,0.3)", border: "1px solid rgba(44,74,110,0.6)", borderRadius: "16px", padding: "28px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ fontSize: "28px", flexShrink: 0 }}>{c.icon}</div>
                <div>
                  <div style={{ color: "#D4A843", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: "6px" }}>{c.label}</div>
                  <div style={{ color: "white", fontWeight: 600, fontSize: "14px", marginBottom: "4px" }}>{c.value}</div>
                  <div style={{ color: "#C0C8D8", fontSize: "12px" }}>{c.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section style={{ padding: "100px 0", background: "#0A1628" }} ref={form.ref}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "48px", alignItems: "flex-start" }} className="contact-grid">

            {/* Form */}
            <div style={{ ...sfade(form.inView), background: "rgba(30,58,95,0.2)", border: "1px solid rgba(44,74,110,0.6)", borderRadius: "24px", padding: "48px" }}>
              <div className="section-label"><span />Enquiry Form<span /></div>
              <h2 style={{ fontSize: "clamp(1.5rem,2.5vw,2.2rem)", fontWeight: 800, color: "white", fontFamily: "'Playfair Display',serif", marginBottom: "32px" }}>Send Us a Message</h2>

              {status === "sent" ? (
                <div style={{ textAlign: "center", padding: "60px 0", animation: "fadeUp 0.5s ease" }}>
                  <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", fontSize: "28px" }}>✓</div>
                  <h3 style={{ color: "white", fontSize: "1.4rem", fontWeight: 700, marginBottom: "12px", fontFamily: "'Playfair Display',serif" }}>Message Sent!</h3>
                  <p style={{ color: "#C0C8D8", fontSize: "14px", lineHeight: 1.7, marginBottom: "24px" }}>Thank you for reaching out. Our team will contact you within 24 hours.</p>
                  <button onClick={() => { setStatus("idle"); setData({ name:"",email:"",phone:"",service:"",message:"" }); }} style={{ color: "#D4A843", background: "none", border: "none", cursor: "pointer", fontSize: "13px", textDecoration: "underline" }}>Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                    <div>
                      <label style={{ display: "block", color: "#C0C8D8", fontSize: "10px", textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: "8px" }}>Full Name *</label>
                      <input type="text" required className="form-input" placeholder="Rajesh Kumar" value={data.name} onChange={e => setData({...data,name:e.target.value})} />
                    </div>
                    <div>
                      <label style={{ display: "block", color: "#C0C8D8", fontSize: "10px", textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: "8px" }}>Phone Number</label>
                      <input type="tel" className="form-input" placeholder="+91 98765 43210" value={data.phone} onChange={e => setData({...data,phone:e.target.value})} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: "block", color: "#C0C8D8", fontSize: "10px", textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: "8px" }}>Email Address *</label>
                    <input type="email" required className="form-input" placeholder="yourname@company.com" value={data.email} onChange={e => setData({...data,email:e.target.value})} />
                  </div>
                  <div>
                    <label style={{ display: "block", color: "#C0C8D8", fontSize: "10px", textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: "8px" }}>Enquire Service *</label>
                    <select required className="form-input" value={data.service} onChange={e => setData({...data,service:e.target.value})}>
                      <option value="">Select One</option>
                      <option>Amazon Last-Mile Delivery (DSP)</option>
                      <option>MFN Fulfillment</option>
                      <option>Pick-Up Services</option>
                      <option>Return Logistics</option>
                      <option>Fleet Transport (PTL/FTL/ODC)</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: "block", color: "#C0C8D8", fontSize: "10px", textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: "8px" }}>Message *</label>
                    <textarea required rows={5} className="form-input" style={{ resize: "none" }} placeholder="Tell us about your logistics requirements..." value={data.message} onChange={e => setData({...data,message:e.target.value})} />
                  </div>
                  <p style={{ color: "#C0C8D8", fontSize: "12px", lineHeight: 1.6 }}>
                    I agree to receive messages from Frigate Logistics Ltd and its representatives through WhatsApp, email, and other communication channels.
                  </p>
                  <button type="submit" className="btn-primary" style={{ justifyContent: "center" }} disabled={status === "sending"}>
                    {status === "sending" ? (
                      <><svg style={{ width:"16px",height:"16px",animation:"spin 1s linear infinite" }} fill="none" viewBox="0 0 24 24"><circle style={{opacity:0.25}} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path style={{opacity:0.75}} fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg> Sending...</>
                    ) : (
                      <>Submit Enquiry <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg></>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", ...sfade(form.inView, 0.2) }}>
              {/* Pickup Request */}
              <div style={{ background: "rgba(30,58,95,0.4)", border: "1px solid rgba(44,74,110,0.6)", borderRadius: "18px", padding: "32px" }}>
                <div style={{ fontSize: "32px", marginBottom: "16px" }}>📦</div>
                <h3 style={{ color: "white", fontWeight: 700, fontSize: "1.1rem", marginBottom: "12px", fontFamily: "'Playfair Display',serif" }}>Pickup Request</h3>
                <p style={{ color: "#C0C8D8", fontSize: "13.5px", lineHeight: 1.7, marginBottom: "20px" }}>Need a scheduled pickup from your location? Submit a pickup request and our team will arrange collection.</p>
                <Link href="/contact" className="btn-outline" style={{ fontSize: "13px" }}>Request Pickup →</Link>
              </div>

              {/* Track Shipment */}
              <div style={{ background: "rgba(30,58,95,0.4)", border: "1px solid rgba(44,74,110,0.6)", borderRadius: "18px", padding: "32px" }}>
                <div style={{ fontSize: "32px", marginBottom: "16px" }}>📡</div>
                <h3 style={{ color: "white", fontWeight: 700, fontSize: "1.1rem", marginBottom: "12px", fontFamily: "'Playfair Display',serif" }}>Track Your Shipment</h3>
                <p style={{ color: "#C0C8D8", fontSize: "13.5px", lineHeight: 1.7, marginBottom: "20px" }}>Get real-time updates on your cargo. Enter your tracking number to see live status and location.</p>
                <div style={{ display: "flex", gap: "8px" }}>
                  <input type="text" className="form-input" placeholder="Enter tracking no." style={{ flex: 1 }} />
                  <button className="btn-primary" style={{ flexShrink: 0, padding: "0.75rem 1rem" }}>Go</button>
                </div>
              </div>

              {/* Business Enquiry */}
              <div style={{ background: "linear-gradient(135deg,rgba(212,168,67,0.15),rgba(30,58,95,0.4))", border: "1px solid rgba(212,168,67,0.3)", borderRadius: "18px", padding: "32px" }}>
                <h3 style={{ color: "white", fontWeight: 700, fontSize: "1.1rem", marginBottom: "12px", fontFamily: "'Playfair Display',serif" }}>Become a Business Partner</h3>
                <p style={{ color: "#C0C8D8", fontSize: "13.5px", lineHeight: 1.7, marginBottom: "20px" }}>Looking to partner with Frigate Logistics as a fleet owner, agent, or channel partner? Get in touch with our business development team.</p>
                <Link href="/contact" className="btn-primary" style={{ fontSize: "13px" }}>Quick Business Enquiry →</Link>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
          @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
          .contact-grid{grid-template-columns:3fr 2fr;}
          .form-row{grid-template-columns:1fr 1fr;}
          @media(max-width:900px){.contact-grid{grid-template-columns:1fr!important;} .form-row{grid-template-columns:1fr!important;}}
        `}</style>
      </section>
    </main>
  );
}
