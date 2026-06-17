"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const values = [
  { title: "Reliability", desc: "We show up — every shipment, every route, every time.", icon: "⚓" },
  { title: "Speed", desc: "Optimized routes and a disciplined fleet ensure fastest-in-class delivery.", icon: "🚀" },
  { title: "Transparency", desc: "Real-time tracking and honest communication at every step.", icon: "📡" },
  { title: "Customer First", desc: "From Amazon sellers to end customers, we treat every package as a priority.", icon: "🤝" },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section
      id="about"
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0A1628 0%, #0d1e38 50%, #0A1628 100%)" }}
    >
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: "radial-gradient(circle, #C0C8D8 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left — Logo */}
          <div className="relative flex justify-center lg:justify-start">
            <div style={{ position: "relative" }}>
              {/* Outer ring */}
              <div style={{
                position: "absolute", inset: "-24px",
                borderRadius: "50%",
                border: "1px dashed rgba(44,74,110,0.5)",
                animation: "spinRing 40s linear infinite",
              }} />

              {/* Logo circle */}
              <div style={{
                position: "relative", width: "320px", height: "320px",
                borderRadius: "50%", overflow: "hidden",
                boxShadow: "0 0 100px rgba(212,168,67,0.12), 0 0 0 4px #1E3A5F",
                opacity: inView ? 1 : 0,
                transform: inView ? "scale(1) rotate(0deg)" : "scale(0.8) rotate(-6deg)",
                transition: "opacity 0.9s ease, transform 0.9s ease",
              }}>
                <Image src="/logo.jpeg" alt="Frigate Logistics" fill className="object-cover" />
              </div>

              {/* Badge — bottom right */}
              <div style={{
                position: "absolute", bottom: "-16px", right: "-16px",
                background: "#0A1628", border: "1px solid #2C4A6E",
                borderRadius: "16px", padding: "14px 18px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
                transitionDelay: "0.5s",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{
                    width: "38px", height: "38px", borderRadius: "50%",
                    background: "rgba(212,168,67,0.15)",
                    border: "1px solid rgba(212,168,67,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#D4A843", fontSize: "18px",
                  }}>✓</div>
                  <div>
                    <div style={{ color: "white", fontSize: "13px", fontWeight: 700 }}>Amazon Partner</div>
                    <div style={{ color: "#C0C8D8", fontSize: "11px" }}>DSP &amp; MFN Certified</div>
                  </div>
                </div>
              </div>

              {/* Badge — top left */}
              <div style={{
                position: "absolute", top: "-16px", left: "-16px",
                background: "#0A1628", border: "1px solid #2C4A6E",
                borderRadius: "16px", padding: "14px 18px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(-16px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
                transitionDelay: "0.65s",
              }}>
                <div style={{ fontSize: "28px", fontWeight: 700, color: "#D4A843", fontFamily: "'Playfair Display', serif" }}>6+</div>
                <div style={{ color: "#C0C8D8", fontSize: "11px" }}>Years in Logistics</div>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div>
            <div style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
              transitionDelay: "0.1s",
            }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                color: "#D4A843", fontSize: "11px", fontWeight: 700,
                letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "24px",
              }}>
                <span style={{ width: "32px", height: "1px", background: "#D4A843", display: "block" }} />
                Who We Are
                <span style={{ width: "32px", height: "1px", background: "#D4A843", display: "block" }} />
              </div>

              <h2 style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800, lineHeight: 1.2, color: "white",
                marginBottom: "24px", fontFamily: "'Playfair Display', serif",
              }}>
                Built on Trust. <br />
                <span style={{
                  background: "linear-gradient(90deg, #D4A843, #F0C96A)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>
                  Driven by Excellence.
                </span>
              </h2>

              <p style={{ color: "#C0C8D8", lineHeight: 1.75, marginBottom: "20px" }}>
                Frigate Logistics Pvt Ltd is a registered Amazon Delivery Service Partner (DSP) and
                a trusted Merchant Fulfilled Network (MFN) logistics provider. Founded with a mission
                to make last-mile delivery faster and more reliable, we have grown into a full-service
                logistics company serving sellers, businesses, and individual customers.
              </p>
              <p style={{ color: "#C0C8D8", lineHeight: 1.75, marginBottom: "40px" }}>
                Headquartered in India, our team of dedicated delivery executives and logistics
                professionals operates a modern fleet with an unwavering commitment to on-time
                delivery, safety, and customer satisfaction.
              </p>
            </div>

            {/* Values grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {values.map((v, i) => (
                <div
                  key={v.title}
                  style={{
                    background: "rgba(30,58,95,0.25)",
                    border: "1px solid rgba(44,74,110,0.6)",
                    borderRadius: "14px", padding: "18px",
                    transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
                    cursor: "default",
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(20px)",
                    transitionDelay: `${0.3 + i * 0.1}s`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(212,168,67,0.4)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(212,168,67,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(44,74,110,0.6)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }}
                >
                  <div style={{ fontSize: "24px", marginBottom: "10px" }}>{v.icon}</div>
                  <div style={{ color: "white", fontWeight: 600, fontSize: "14px", marginBottom: "6px" }}>{v.title}</div>
                  <div style={{ color: "#C0C8D8", fontSize: "12px", lineHeight: 1.6 }}>{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spinRing {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
