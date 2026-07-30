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

const ecomServices = [
  { tag: "EDSP", title: "Amazon EDSP Last-Mile Delivery", intro: "As a certified Amazon EDSP (Delivery Service Partner), we handle door-step delivery across all pin codes — fast, safe, and fully tracked with proof of delivery.", points: ["Full coverage across all serviceable pin codes", "Proof of delivery for every shipment", "Same-day and next-day delivery options", "Trained delivery executives", "Real-time GPS tracking on all vehicles", "Customer notification at every milestone"] },
  { tag: "MFN", title: "MFN Fulfillment", intro: "Merchant Fulfilled Network order processing from warehouse pick to dispatch. Storage, packing, and shipping handled end-to-end so Amazon sellers can focus on growth.", points: ["Pick, pack, and dispatch operations", "Inventory management support", "Amazon SLA compliance guaranteed", "Order batching and optimization", "Barcode and label printing", "Daily MIS reports to sellers"] },
  { tag: "Pick-Up", title: "Pick-Up Services", intro: "Scheduled pick-up operations from seller warehouses and fulfillment centres with full tracking and proof of pickup.", points: ["Scheduled and on-demand pick-ups", "Proof of pickup documentation", "Trained pick-up executives", "Real-time status updates", "Multi-location pick-up routing", "Integration with seller portals"] },
  { tag: "Returns", title: "Return Logistics", intro: "End-to-end reverse logistics — collect, inspect, and reroute returned items back to sellers or fulfillment centres with complete documentation.", points: ["Customer-to-warehouse return collection", "Item condition inspection and reporting", "Rerouting to seller or fulfillment centre", "Complete return documentation", "Return trend reporting for sellers"] },
];

const transportServices = [
  { tag: "PTL", title: "Part Truck Load", intro: "Cost-effective cargo movement for loads smaller than a full truck. Our deep network and hub-and-spoke model ensures on-time delivery at optimised cost for all business sizes.", points: ["Optimal cost for smaller loads", "Mixed shipment handling", "GPS-fitted vehicles", "Predefined routes and transit schedules", "On-time delivery guarantee", "Daily MIS and status updates"] },
  { tag: "FTL", title: "Full Truck Load", intro: "Dedicated truck for your shipment — direct routing, sealed cargo, no intermediate stops. Best for large volume consignments requiring speed and complete safety.", points: ["Dedicated vehicle from pickup to delivery", "Sealed cargo — no intermediate unloading", "All truck sizes: 19ft, 21ft, 32ft", "GPS tracking throughout", "Insured cargo and vehicles", "Express delivery options"] },
  { tag: "ODC", title: "Over Dimensional Cargo", intro: "Specialised handling for cargo that exceeds standard dimensions — with required permits, escorts, and route planning by our expert ODC team.", points: ["Specialised ODC vehicles and equipment", "All necessary permits arranged", "Police escort coordination", "Route survey and planning", "Experienced ODC handling team", "Accurate and safe delivery guaranteed"] },
  { tag: "Single Window", title: "Single-Window Logistics", intro: "One point of contact for all your logistics needs — surface transport, door-to-door delivery, and fleet management bundled into a single, seamless solution.", points: ["Door to Door delivery", "Godown to Godown transfer", "Flexible and scalable solutions", "Technology-driven tracking", "Single billing point", "Dedicated account manager"] },
];

function ServiceCard({ service, inView, delay }: { service: typeof ecomServices[0]; inView: boolean; delay: number }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div style={{ background: "rgba(30,58,95,0.25)", border: "1px solid rgba(44,74,110,0.6)", borderRadius: "18px", overflow: "hidden", opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: `all 0.6s ease ${delay}s` }}>
      <div style={{ padding: "32px" }}>
        <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#D4A843", background: "rgba(212,168,67,0.1)", border: "1px solid rgba(212,168,67,0.2)", padding: "4px 12px", borderRadius: "100px", marginBottom: "16px", display: "inline-block" }}>{service.tag}</span>
        <h3 style={{ color: "white", fontWeight: 700, fontSize: "1.2rem", marginBottom: "12px", fontFamily: "'Playfair Display',serif" }}>{service.title}</h3>
        <p style={{ color: "#C0C8D8", lineHeight: 1.75, marginBottom: "20px", fontSize: "14px" }}>{service.intro}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
          {service.points.slice(0, expanded ? service.points.length : 3).map(p => (
            <div key={p} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
              <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#D4A843", fontSize: "9px", flexShrink: 0, marginTop: "1px" }}>✓</div>
              <span style={{ color: "#C0C8D8", fontSize: "13px", lineHeight: 1.5 }}>{p}</span>
            </div>
          ))}
        </div>
        <button onClick={() => setExpanded(!expanded)} style={{ background: "none", border: "1px solid rgba(212,168,67,0.3)", color: "#D4A843", borderRadius: "8px", padding: "7px 16px", fontSize: "12px", fontWeight: 600, cursor: "pointer" }}>
          {expanded ? "Show Less ↑" : "View All Features ↓"}
        </button>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const hero = useInView(0.1);
  const ecom = useInView();
  const transport = useInView();
  const cta = useInView();

  return (
    <main>
      {/* Hero */}
      <section style={{ paddingTop: "140px", paddingBottom: "80px", background: "radial-gradient(ellipse at 30% 50%, #1E3A5F 0%, #0A1628 65%)", borderBottom: "1px solid rgba(44,74,110,0.4)", position: "relative", overflow: "hidden" }} ref={hero.ref}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "linear-gradient(rgba(192,200,216,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(192,200,216,0.5) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", position: "relative" }}>
          <div style={sfade(hero.inView)}>
            <div className="section-label"><span />Our Services<span /></div>
            <h1 style={{ fontSize: "clamp(2.4rem,5vw,3.8rem)", fontWeight: 800, color: "white", fontFamily: "'Playfair Display',serif", marginBottom: "20px", lineHeight: 1.15 }}>
              Two Divisions.<br />
              <span style={{ background: "linear-gradient(90deg,#D4A843,#F0C96A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>One Commitment to Excellence.</span>
            </h1>
            <p style={{ color: "#C0C8D8", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "640px" }}>
              Frigate Logistics Ltd operates two distinct service divisions — E-commerce and Transport — each with dedicated teams, infrastructure, and expertise.
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "32px", flexWrap: "wrap" as const }}>
              <a href="#ecommerce" className="btn-primary" style={{ fontSize: "13px" }}>📦 E-commerce Services</a>
              <a href="#transport" className="btn-outline" style={{ fontSize: "13px" }}>🚛 Transport Services</a>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Services */}
      <section id="ecommerce" style={{ padding: "100px 0", background: "#0A1628" }} ref={ecom.ref}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ marginBottom: "60px", ...sfade(ecom.inView) }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px" }}>📦</div>
              <div>
                <div style={{ color: "#D4A843", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const }}>Division 01</div>
                <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 800, color: "white", fontFamily: "'Playfair Display',serif" }}>Frigate E-commerce</h2>
              </div>
            </div>
            <p style={{ color: "#C0C8D8", maxWidth: "700px", lineHeight: 1.7 }}>Amazon EDSP certified. MFN compliant. Built for speed, accuracy, and seller success.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "20px" }}>
            {ecomServices.map((s, i) => <ServiceCard key={s.title} service={s} inView={ecom.inView} delay={i * 0.08} />)}
          </div>
          <div style={{ marginTop: "40px", padding: "28px 32px", background: "rgba(212,168,67,0.08)", border: "1px solid rgba(212,168,67,0.2)", borderRadius: "16px", display: "flex", flexWrap: "wrap" as const, alignItems: "center", justifyContent: "space-between", gap: "16px", ...sfade(ecom.inView, 0.4) }}>
            <div>
              <div style={{ color: "#D4A843", fontSize: "11px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: "4px" }}>E-commerce Team</div>
              <div style={{ color: "#E8EDF5", fontSize: "14px" }}>📞 +91 99246 26900 &nbsp;·&nbsp; sunil@fll.co.in &nbsp;·&nbsp; hardik@fll.co.in</div>
            </div>
            <Link href="/contact" className="btn-primary" style={{ fontSize: "13px" }}>Make Enquiry →</Link>
          </div>
        </div>
      </section>

      {/* Transport Services */}
      <section id="transport" style={{ padding: "100px 0", background: "linear-gradient(180deg,#0d1e38,#0A1628)", borderTop: "1px solid rgba(44,74,110,0.3)" }} ref={transport.ref}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ marginBottom: "60px", ...sfade(transport.inView) }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px" }}>🚛</div>
              <div>
                <div style={{ color: "#D4A843", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const }}>Division 02</div>
                <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 800, color: "white", fontFamily: "'Playfair Display',serif" }}>Frigate Transport</h2>
              </div>
            </div>
            <p style={{ color: "#C0C8D8", maxWidth: "700px", lineHeight: 1.7 }}>Pan-India surface transport. PTL, FTL, and ODC handled by an expert team with a managed fleet and technology-driven operations.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "20px" }}>
            {transportServices.map((s, i) => <ServiceCard key={s.title} service={s} inView={transport.inView} delay={i * 0.08} />)}
          </div>
          <div style={{ marginTop: "40px", padding: "28px 32px", background: "rgba(212,168,67,0.08)", border: "1px solid rgba(212,168,67,0.2)", borderRadius: "16px", display: "flex", flexWrap: "wrap" as const, alignItems: "center", justifyContent: "space-between", gap: "16px", ...sfade(transport.inView, 0.4) }}>
            <div>
              <div style={{ color: "#D4A843", fontSize: "11px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: "4px" }}>Transport Team</div>
              <div style={{ color: "#E8EDF5", fontSize: "14px" }}>📞 +91 93272 34001 &nbsp;·&nbsp; rpchoudhary@fll.co.in</div>
            </div>
            <Link href="/contact" className="btn-primary" style={{ fontSize: "13px" }}>Make Enquiry →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", background: "linear-gradient(135deg,#1E3A5F 0%,#0A1628 100%)", borderTop: "1px solid rgba(44,74,110,0.4)" }} ref={cta.ref}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", textAlign: "center" }}>
          <div style={sfade(cta.inView)}>
            <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 800, color: "white", fontFamily: "'Playfair Display',serif", marginBottom: "20px" }}>Ready to Get Started?</h2>
            <p style={{ color: "#C0C8D8", maxWidth: "500px", margin: "0 auto 36px", lineHeight: 1.7 }}>Contact the right team directly or send us an enquiry and we will route it to the right people.</p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" as const }}>
              <Link href="/contact" className="btn-primary">Make an Enquiry <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></Link>
              <Link href="/about" className="btn-outline">About Us</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
