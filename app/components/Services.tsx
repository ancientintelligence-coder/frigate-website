"use client";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
    title: "Amazon Last-Mile Delivery",
    description: "Reliable door-step delivery across all pin codes as an authorized Amazon Delivery Service Partner (DSP). Fast, safe, tracked.",
    highlight: "DSP Partner",
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>,
    title: "MFN Fulfillment",
    description: "Merchant Fulfilled Network order processing — from warehouse pick to dispatch. Storage, packing, and dispatch handled end-to-end.",
    highlight: "MFN Certified",
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    title: "Pick-Up Services",
    description: "Scheduled pick-up operations from seller warehouses and fulfilment centres. Timely collection with full tracking and proof of pickup.",
    highlight: "On-Time Guaranteed",
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>,
    title: "Return Logistics",
    description: "End-to-end reverse logistics management. Collect, inspect, and reroute returned items with complete documentation.",
    highlight: "Hassle-Free Returns",
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h7l1-2zm0 0l2-4h4l2 4H13z" /></svg>,
    title: "Fleet Transport",
    description: "Managed fleet for bulk cargo movement. Temperature-sensitive, fragile, or oversized cargo handled with care by experienced drivers.",
    highlight: "Full Fleet Coverage",
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    title: "Real-Time Tracking",
    description: "Live shipment tracking and delivery status updates. Full transparency at every step of the supply chain.",
    highlight: "Live Updates",
  },
];

function ServiceCard({ service, index, inView }: { service: typeof services[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? "linear-gradient(135deg, rgba(30,58,95,0.8), rgba(22,40,68,0.9))"
          : "rgba(30,58,95,0.4)",
        border: `1px solid ${hovered ? "rgba(212,168,67,0.5)" : "#2C4A6E"}`,
        borderRadius: "18px", padding: "32px",
        transition: "all 0.4s ease",
        transform: inView
          ? hovered ? "translateY(-6px)" : "translateY(0)"
          : "translateY(30px)",
        opacity: inView ? 1 : 0,
        boxShadow: hovered ? "0 16px 48px rgba(212,168,67,0.12)" : "none",
        transitionDelay: `${index * 0.08}s`,
        cursor: "default",
      }}
    >
      {/* Icon + badge row */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
        <div style={{
          width: "52px", height: "52px", borderRadius: "14px",
          background: hovered ? "rgba(212,168,67,0.15)" : "#0A1628",
          border: `1px solid ${hovered ? "rgba(212,168,67,0.4)" : "#2C4A6E"}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#D4A843",
          transition: "all 0.4s ease",
          flexShrink: 0,
        }}>
          {service.icon}
        </div>
        <span style={{
          fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em",
          textTransform: "uppercase", color: "#D4A843",
          background: "rgba(212,168,67,0.1)",
          border: "1px solid rgba(212,168,67,0.2)",
          padding: "4px 10px", borderRadius: "100px",
        }}>
          {service.highlight}
        </span>
      </div>

      <h3 style={{
        fontSize: "1.15rem", fontWeight: 700, color: "white",
        marginBottom: "12px", fontFamily: "'Playfair Display', serif",
      }}>
        {service.title}
      </h3>
      <p style={{ color: "#C0C8D8", fontSize: "13.5px", lineHeight: 1.7 }}>
        {service.description}
      </p>

      {/* Hover arrow */}
      <div style={{
        marginTop: "20px",
        opacity: hovered ? 1 : 0,
        transform: hovered ? "translateX(0)" : "translateX(-8px)",
        transition: "all 0.3s ease",
        color: "#D4A843", fontSize: "13px", fontWeight: 600,
        display: "flex", alignItems: "center", gap: "6px",
      }}>
        Learn more
        <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  );
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" className="py-28 bg-[#0A1628] relative" ref={ref}>
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
            What We Do
            <span style={{ width: "32px", height: "1px", background: "#D4A843" }} />
          </div>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800,
            color: "white", marginBottom: "20px",
            fontFamily: "'Playfair Display', serif",
          }}>
            Our Services
          </h2>
          <p style={{ color: "#C0C8D8", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
            From Amazon deliveries to fleet transport, Frigate Logistics offers a complete
            suite of logistics services built for speed, reliability, and scale.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
