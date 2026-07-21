"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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

const services = [
  {
    icon: "🚚", tag: "DSP Partner",
    title: "Amazon Last-Mile Delivery",
    intro: "Reliable door-step delivery across all pin codes as an authorized Amazon Delivery Service Partner (DSP).",
    points: ["Full coverage across all serviceable pin codes", "Proof of delivery for every shipment", "Same-day and next-day delivery options", "Trained delivery executives", "Real-time GPS tracking on all vehicles", "Customer notification at every milestone"],
  },
  {
    icon: "📋", tag: "MFN Certified",
    title: "MFN Fulfillment",
    intro: "Merchant Fulfilled Network order processing — from warehouse pick to dispatch, handled end-to-end.",
    points: ["Pick, pack, and dispatch operations", "Inventory management support", "Amazon SLA compliance guaranteed", "Order batching and optimization", "Barcode and label printing", "Daily MIS reports to sellers"],
  },
  {
    icon: "📍", tag: "On-Time Guaranteed",
    title: "Pick-Up Services",
    intro: "Scheduled pick-up operations from seller warehouses and fulfillment centres with full tracking.",
    points: ["Scheduled and on-demand pick-ups", "Proof of pickup documentation", "Trained pick-up executives", "Real-time status updates", "Multi-location pick-up routing", "Integration with seller portals"],
  },
  {
    icon: "↩️", tag: "Hassle-Free",
    title: "Return Logistics",
    intro: "End-to-end reverse logistics management — collect, inspect, and reroute returned items.",
    points: ["Customer-to-warehouse return collection", "Item condition inspection and reporting", "Rerouting to seller or fulfillment centre", "Complete return documentation", "Refund eligibility assessment support", "Return trend reporting for sellers"],
  },
  {
    icon: "🚛", tag: "Full Fleet Coverage",
    title: "Fleet Transport",
    intro: "A managed fleet of vehicles for bulk cargo movement — all cargo types handled with care.",
    points: ["Full Truck Load (FTL) and Part Truck Load (PTL)", "Over Dimension Cargo (ODC) capability", "Temperature-sensitive cargo handling", "Fragile and high-value goods specialists", "GPS tracking on all fleet vehicles", "Insured cargo and vehicles"],
  },
  {
    icon: "📡", tag: "Live Updates",
    title: "Real-Time Tracking",
    intro: "Live shipment tracking and delivery status updates for both senders and recipients.",
    points: ["Live GPS tracking portal", "Automated delivery notifications via SMS/email", "Proof of delivery with photos", "Daily MIS and performance reports", "Exception alerts for delays or issues", "API integration available for enterprise clients"],
  },
];

const roadTransportDetails = [
  { code: "PTL", name: "Part Truck Load", desc: "Maximizing productivity and optimizing loading cost and travel time of cargo. Ideal for shipments that do not require a full truck." },
  { code: "FTL", name: "Full Truck Load", desc: "Dedicated truck for your shipment — best for large volume cargo with direct routing and minimal handling." },
  { code: "ODC", name: "Over Dimension Cargo", desc: "Specialized handling for cargo that exceeds standard dimensions — with required permits, escorts, and route planning." },
];

export default function ServicesPage() {
  const hero = useInView(0.1);
  const main = useInView();
  const road = useInView();
  const value = useInView();
  const cta = useInView();

  return (
    <main>
      {/* Hero */}
      <section style={{ paddingTop: "140px", paddingBottom: "80px", background: "radial-gradient(ellipse at 30% 50%, #1E3A5F 0%, #0A1628 65%)", borderBottom: "1px solid rgba(44,74,110,0.4)", position: "relative", overflow: "hidden" }} ref={hero.ref}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "linear-gradient(rgba(192,200,216,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(192,200,216,0.5) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", position: "relative" }}>
          <div style={sfade(hero.inView)}>
            <div className="section-label"><span />Services<span /></div>
            <h1 style={{ fontSize: "clamp(2.4rem,5vw,3.8rem)", fontWeight: 800, color: "white", fontFamily: "'Playfair Display',serif", marginBottom: "20px", lineHeight: 1.15 }}>
              Customised Integrated<br />
              <span style={{ background: "linear-gradient(90deg,#D4A843,#F0C96A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Logistics Solutions For You</span>
            </h1>
            <p style={{ color: "#C0C8D8", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "600px" }}>
              All elements of your cargo management are evaluated to best suit your logistics needs. A combination that best suits your requirements is crafted as a solution and offered with the best possible standards.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section style={{ padding: "100px 0", background: "#0A1628" }} ref={main.ref}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ textAlign: "center", marginBottom: "64px", ...sfade(main.inView) }}>
            <div className="section-label" style={{ justifyContent: "center" }}><span />All Services<span /></div>
            <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 800, color: "white", fontFamily: "'Playfair Display',serif" }}>Everything We Offer</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {services.map((s, i) => (
              <ServiceDetailCard key={s.title} service={s} inView={main.inView} delay={i * 0.07} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Road Transport */}
      <section style={{ padding: "100px 0", background: "linear-gradient(180deg,#0d1e38,#0A1628)" }} ref={road.ref}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px", ...sfade(road.inView) }}>
            <div className="section-label" style={{ justifyContent: "center" }}><span />Road Transport<span /></div>
            <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 800, color: "white", fontFamily: "'Playfair Display',serif", marginBottom: "16px" }}>PTL / FTL / ODC</h2>
            <p style={{ color: "#C0C8D8", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>Maximizing productivity and optimizing loading cost and travel time. Part Load, Full Load, Over Dimension Cargo — all covered.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "24px" }}>
            {roadTransportDetails.map((r, i) => (
              <div key={r.code} style={{ background: "rgba(30,58,95,0.4)", border: "1px solid rgba(44,74,110,0.6)", borderRadius: "18px", padding: "36px", ...sfade(road.inView, i * 0.1), transition: `all 0.7s ease ${i * 0.1}s` }}>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "#D4A843", fontFamily: "'Playfair Display',serif", marginBottom: "8px" }}>{r.code}</div>
                <h3 style={{ color: "white", fontWeight: 700, fontSize: "1.1rem", marginBottom: "14px" }}>{r.name}</h3>
                <p style={{ color: "#C0C8D8", fontSize: "13.5px", lineHeight: 1.7 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Added Services */}
      <section style={{ padding: "100px 0", background: "#0A1628" }} ref={value.ref}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="two-col">
            <div style={sfade(value.inView)}>
              <div className="section-label"><span />Value Added<span /></div>
              <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 800, color: "white", fontFamily: "'Playfair Display',serif", marginBottom: "24px", lineHeight: 1.25 }}>Tailor-Made Solutions for Your Cargo</h2>
              <p style={{ color: "#C0C8D8", lineHeight: 1.8, marginBottom: "20px" }}>Whether raw material, finished goods, fragile goods, or perishable goods — we craft a delivery solution that fits your exact requirements with the required delivery option.</p>
              <p style={{ color: "#C0C8D8", lineHeight: 1.8, marginBottom: "36px" }}>Door to Door, Godown to Door, Godown to Godown, and many more configurations — all with full tracking and documentation.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {["Door to Door delivery","Godown to Godown transfer","Fragile goods specialised handling","Perishable & cold chain support","Customised packaging options","On-demand scheduling"].map(item=>(
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "rgba(212,168,67,0.2)", border: "1px solid rgba(212,168,67,0.4)", display: "flex", alignItems: "center", justifyContent: "center", color: "#D4A843", fontSize: "10px", flexShrink: 0 }}>✓</div>
                    <span style={{ color: "#C0C8D8", fontSize: "14px" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ ...sfade(value.inView, 0.2), background: "rgba(30,58,95,0.3)", border: "1px solid rgba(44,74,110,0.6)", borderRadius: "24px", padding: "48px" }}>
              <h3 style={{ color: "white", fontSize: "1.3rem", fontWeight: 700, fontFamily: "'Playfair Display',serif", marginBottom: "28px" }}>Customised Services</h3>
              <p style={{ color: "#C0C8D8", lineHeight: 1.8, marginBottom: "28px" }}>Customized solutions for your logistics needs. All elements of the cargo management are evaluated to best suit your logistics needs. A combination that best suits your requirements with best possible standards is crafted as a solution and offered.</p>
              <div style={{ borderTop: "1px solid rgba(44,74,110,0.5)", paddingTop: "28px" }}>
                <div style={{ color: "#D4A843", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: "16px" }}>Get a Custom Quote</div>
                <p style={{ color: "#C0C8D8", fontSize: "13.5px", lineHeight: 1.7, marginBottom: "24px" }}>Tell us about your cargo requirements and we will craft the perfect logistics solution for your business.</p>
                <Link href="/contact" className="btn-primary">Request a Quote <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", background: "linear-gradient(135deg,#1E3A5F 0%,#0A1628 100%)", borderTop: "1px solid rgba(44,74,110,0.4)" }} ref={cta.ref}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", textAlign: "center" }}>
          <div style={sfade(cta.inView)}>
            <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 800, color: "white", fontFamily: "'Playfair Display',serif", marginBottom: "20px" }}>Ready to Get Started?</h2>
            <p style={{ color: "#C0C8D8", maxWidth: "500px", margin: "0 auto 36px", lineHeight: 1.7 }}>Contact us today for a customised logistics quote and let Frigate Logistics become the logistics edge your business needs.</p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" as const }}>
              <Link href="/contact" className="btn-primary">Get a Free Quote <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></Link>
              <Link href="/about" className="btn-outline">About Us</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`.two-col{grid-template-columns:1fr 1fr;} @media(max-width:768px){.two-col{grid-template-columns:1fr!important;}}`}</style>
    </main>
  );
}

function ServiceDetailCard({ service, inView, delay, index }: { service: typeof services[0]; inView: boolean; delay: number; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const isEven = index % 2 === 0;
  return (
    <div style={{ background: "rgba(30,58,95,0.25)", border: "1px solid rgba(44,74,110,0.6)", borderRadius: "20px", overflow: "hidden", opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: `all 0.6s ease ${delay}s` }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }} className="svc-card-grid">
        {/* Left/Right alternating content */}
        <div style={{ padding: "40px", background: isEven ? "rgba(30,58,95,0.4)" : "transparent", order: isEven ? 1 : 2 }}>
          <div style={{ fontSize: "48px", marginBottom: "16px" }}>{service.icon}</div>
          <div style={{ display: "inline-block", fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#D4A843", background: "rgba(212,168,67,0.1)", border: "1px solid rgba(212,168,67,0.2)", padding: "4px 12px", borderRadius: "100px", marginBottom: "16px" }}>{service.tag}</div>
          <h3 style={{ color: "white", fontWeight: 700, fontSize: "1.4rem", marginBottom: "14px", fontFamily: "'Playfair Display',serif" }}>{service.title}</h3>
          <p style={{ color: "#C0C8D8", lineHeight: 1.75, marginBottom: "24px" }}>{service.intro}</p>
          <button onClick={() => setExpanded(!expanded)} style={{ background: "none", border: "1px solid rgba(212,168,67,0.4)", color: "#D4A843", borderRadius: "8px", padding: "8px 18px", fontSize: "13px", fontWeight: 600, cursor: "pointer", transition: "all 0.3s" }}>
            {expanded ? "Show Less ↑" : "View Features ↓"}
          </button>
        </div>
        <div style={{ padding: "40px", order: isEven ? 2 : 1 }}>
          <div style={{ color: "#D4A843", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: "20px" }}>Key Features</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {service.points.slice(0, expanded ? service.points.length : 4).map(p => (
              <div key={p} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#D4A843", fontSize: "10px", flexShrink: 0, marginTop: "1px" }}>✓</div>
                <span style={{ color: "#C0C8D8", fontSize: "14px", lineHeight: 1.5 }}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
