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
  opacity: inView ? 1 : 0,
  transform: inView ? "translateY(0)" : "translateY(28px)",
  transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
});

const services = [
  {
    id: "ptl",
    tag: "PTL",
    icon: "🚛",
    title: "Part Truck Load / PTL - LTL",
    intro: "It is not possible for a client to have a full truck load available each time they have some material to be shipped. All clients, irrespective of their size — be it a large corporate or an MSME — most times need a solution where they can ship loads lesser than a full truck. A service provider has to have a deep penetrated network, operational expertise, technology support and most importantly domain expertise to deliver these solutions. This is where Frigate Logistics is uniquely positioned — we have the capability and proven expertise to pick up any load from any location and deliver it anywhere in the country.",
    features: [
      { title: "Optimal Costs", desc: "For cargo that requires less than full truck load space, our competitive structure helps the client maximize delivery efficiency." },
      { title: "Mixed Shipments", desc: "Our automated systems and vehicle capacity enable us to load varied material that ensures maximum utility of space. We understand the compatibility of goods and safeguard that each customer's goods are given the best possible space allocation to avoid any damage in transit." },
      { title: "Highest Productivity", desc: "Our predefined routes and transit schedules with a perfect hub & spoke model of transshipments and branches ensure that our vehicles travel at best delivery times. With GPS-fitted vehicles and easy track & trace facility, consignments can be tracked with a click." },
      { title: "On Time Delivery", desc: "The strong network and operational strength we have built gives us the ability to pick and deliver loads from any part of the country in minimum possible time. With automation and available loads, we reduce transit time and optimize loading-offloading time at various stops." },
    ],
  },
  {
    id: "ftl",
    tag: "FTL",
    icon: "🚚",
    title: "Full Truck Load Cargo Service",
    intro: "When a client has a load equal to a full truck, it is easier to assign them the latest truck with trained and reliable drivers, who then ensure that the shipment is picked up and safely delivered at the destination on time. The full truck load consignment does not stop at mid points and hence completes the journey faster.",
    features: [
      { title: "Material Safety & Speed", desc: "As the vehicle travels between pick up and destination point without any stop, the consignment is delivered safely and with speed. No intermediate handling means zero risk of damage or loss." },
      { title: "Fleet and Vendor Network", desc: "Frigate Logistics has the advantage of a vast fleet available across our network. We have all sizes of trucks available for a full truck consignment — whether it is 19 ft, 21 ft or a 32 ft truck." },
      { title: "Reserved Shipment", desc: "Goods shipped with full truck loads do not get lost in transit or go untraced. The cargo, once loaded, is not unloaded or shifted onto another vehicle. The truck is sealed after loading and unsealed only at the destination." },
    ],
  },
  {
    id: "odc",
    tag: "ODC",
    icon: "📦",
    title: "Over Dimensional Cargo",
    intro: "At times the material comes in a different size — big enough that it extends to 40 ft, 60 ft or even more. From identifying the right type of vehicle to ensuring that the material reaches safely to the destination while staying compliant with traffic guidelines, it requires an expert to handle ODC consignments. Our expert team takes care of all such requirements and we have delivered numerous such shipments with ease and accuracy.",
    features: [
      { title: "Reliable & Efficient", desc: "Our ODC Cargo Handling is highly acknowledged for safety, promptness, effectiveness, and reliability. Every over-dimensional shipment is handled with the highest standards." },
      { title: "Cargo Solutions", desc: "We have a specialized team that can analyze your cargo and provide recommendations for the exact vehicle and routing solutions required for safe and compliant delivery." },
      { title: "Accurate & Safe", desc: "We have delivered numerous over dimensional consignments of any size or volume across India with accuracy and safety — with all required permits and escort arrangements in place." },
    ],
  },
  {
    id: "single-window",
    tag: "Integrated",
    icon: "🔗",
    title: "Single-Window Logistics Solutions",
    intro: "Our diversified business services in surface transport, door to door delivery, and comprehensive logistics — all these services make it ideal for a customer to choose Frigate Logistics and experience integrated and customized offerings uniquely created for them. Our clients enjoy peace of mind and focus on their core work, while leaving the logistics worries to us, knowing that a champion will handle them.",
    features: [
      { title: "Flexible & Scalable", desc: "We have built flexible and scalable logistics capabilities and services that can augment and evolve in sync with your business volumes and needs — from a single shipment to bulk contracts." },
      { title: "Secure & Efficient", desc: "We are fully equipped with state-of-the-art technology to manage your unique logistics needs — securely, efficiently, and effectively. Our platforms provide end-to-end visibility." },
      { title: "Optimized Time & Resources", desc: "Right from providing infrastructure to managing and optimizing the transportation and enabling technologies — we bring in the benefits of optimized time and resources with a single-window response to clients." },
    ],
  },
  {
    id: "value-added",
    tag: "Value Added",
    icon: "⭐",
    title: "Plus Value Added Services",
    intro: "With our experience and understanding of various industries, we know that each client has different logistics requirements. We therefore offer a plethora of value added services and let our clients have a felicitous choice. In payment options a client can choose from Paid, To Pay, or Billing. For delivery options it can be Door to Door, Godown to Door, Godown to Godown, Delivery against Consignee Copy (DACC), Cash on Delivery (COD), or any combination. For diversified services, clients can easily choose a combination of surface transport, express cargo movement, warehousing or end-to-end logistics solutions with us.",
    features: [
      { title: "Customer Centric Approach", desc: "We keep clients at the centre in everything that we do and our endeavour is to always give the best customer experience. Our dedicated team is just a click or call away to have your queries answered or provide any support you look for." },
      { title: "Transparent Cost & Billing", desc: "Our company prides itself on transparent cost and billing structures with our clients. We ensure that our customers see the value through our services, with a single-point billing system that ensures right-time billing." },
    ],
  },
];

const whyChoose = [
  { icon: "⚡", title: "Efficient & Effective", desc: "Our updated technology, state-of-the-art infrastructure, and trained staff ensures the best customized cargo management and logistics solutions for all sizes and types of cargo at competitive costs with effective operations." },
  { icon: "🎯", title: "Expert", desc: "Through longstanding relationships with our clients, we have years of expertise in handling voluminous types of material across geographies and industries. It is this expertise and network power that sets Frigate Logistics apart from the rest." },
  { icon: "🤝", title: "Ethical", desc: "With technology and excellence in delivering cargo, one thing that can never be compromised is being Ethical. Frigate Logistics is known for its ethical dealings with employees, vendors and other stakeholders. This trait runs in the very DNA of the company." },
];

export default function ServicesPage() {
  const hero = useInView(0.1);
  const why = useInView();
  const cta = useInView();

  return (
    <main>
      {/* Page Hero */}
      <section style={{ paddingTop: "140px", paddingBottom: "80px", background: "radial-gradient(ellipse at 30% 50%, #1E3A5F 0%, #0A1628 65%)", borderBottom: "1px solid rgba(44,74,110,0.4)", position: "relative", overflow: "hidden" }} ref={hero.ref}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "linear-gradient(rgba(192,200,216,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(192,200,216,0.5) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", position: "relative" }}>
          <div style={sfade(hero.inView)}>
            <div className="section-label"><span />Our Services<span /></div>
            <h1 style={{ fontSize: "clamp(2.4rem,5vw,3.8rem)", fontWeight: 800, color: "white", fontFamily: "'Playfair Display',serif", marginBottom: "20px", lineHeight: 1.15 }}>
              Pan India Frigate Logistics<br />
              <span style={{ background: "linear-gradient(90deg,#D4A843,#F0C96A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Solutions</span>
            </h1>
            <p style={{ color: "#C0C8D8", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "640px" }}>
              Crafted and curated solutions from the wide range of logistics services that we provide, with a focus to customize and make it apt for our clients&apos; needs. We strive to be the logistics edge for our clients, by diligently blending technology, infrastructure, people-expertise and commitment.
            </p>
            {/* Quick nav */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" as const, marginTop: "36px" }}>
              {services.map(s => (
                <a key={s.id} href={`#${s.id}`} style={{ background: "rgba(30,58,95,0.6)", border: "1px solid rgba(44,74,110,0.8)", color: "#C0C8D8", padding: "8px 18px", borderRadius: "100px", fontSize: "13px", fontWeight: 600, textDecoration: "none", transition: "all 0.3s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#D4A843"; (e.currentTarget as HTMLElement).style.color = "#D4A843"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(44,74,110,0.8)"; (e.currentTarget as HTMLElement).style.color = "#C0C8D8"; }}
                >
                  {s.tag}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services — one per section */}
      {services.map((service, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <ServiceSection key={service.id} service={service} isEven={isEven} />
        );
      })}

      {/* Why Choose Frigate */}
      <section style={{ padding: "100px 0", background: "linear-gradient(180deg,#0d1e38,#0A1628)" }} ref={why.ref}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px", ...sfade(why.inView) }}>
            <div className="section-label" style={{ justifyContent: "center" }}><span />Why Choose Us<span /></div>
            <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 800, color: "white", fontFamily: "'Playfair Display',serif", marginBottom: "16px" }}>Why Choose Frigate Logistics</h2>
            <p style={{ color: "#C0C8D8", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
              The leadership of surface transport exposure, warehousing & 3PL strength, and logistics delivery expertise makes Frigate Logistics the preferred choice.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "24px" }}>
            {whyChoose.map((w, i) => (
              <div key={w.title} style={{ background: "rgba(30,58,95,0.3)", border: "1px solid rgba(44,74,110,0.6)", borderRadius: "18px", padding: "36px", ...sfade(why.inView, i * 0.1), transition: `all 0.7s ease ${i * 0.1}s` }}>
                <div style={{ fontSize: "36px", marginBottom: "18px" }}>{w.icon}</div>
                <h3 style={{ color: "white", fontWeight: 700, fontSize: "1.1rem", marginBottom: "12px", fontFamily: "'Playfair Display',serif" }}>{w.title}</h3>
                <p style={{ color: "#C0C8D8", fontSize: "13.5px", lineHeight: 1.75 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", background: "linear-gradient(135deg,#1E3A5F 0%,#0A1628 100%)", borderTop: "1px solid rgba(44,74,110,0.4)" }} ref={cta.ref}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", textAlign: "center" }}>
          <div style={sfade(cta.inView)}>
            <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 800, color: "white", fontFamily: "'Playfair Display',serif", marginBottom: "20px" }}>Make a Business Enquiry</h2>
            <p style={{ color: "#C0C8D8", maxWidth: "500px", margin: "0 auto 36px", lineHeight: 1.7 }}>
              Contact us today for a customised logistics quote. Let Frigate Logistics become the logistics edge your business needs.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" as const }}>
              <Link href="/contact" className="btn-primary">Make Business Enquiry <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></Link>
              <Link href="/about" className="btn-outline">About Us</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiceSection({ service, isEven }: { service: typeof services[0]; isEven: boolean }) {
  const { ref, inView } = useInView();
  const sfadeLocal = (delay = 0): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <section
      id={service.id}
      style={{ padding: "90px 0", background: isEven ? "#0A1628" : "linear-gradient(180deg,#0d1e38,#0A1628)", borderTop: "1px solid rgba(44,74,110,0.3)" }}
      ref={ref}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <div style={{ marginBottom: "56px", ...sfadeLocal() }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px", flexWrap: "wrap" as const }}>
            <span style={{ fontSize: "48px" }}>{service.icon}</span>
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#D4A843", background: "rgba(212,168,67,0.1)", border: "1px solid rgba(212,168,67,0.25)", padding: "5px 14px", borderRadius: "100px" }}>{service.tag}</span>
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 800, color: "white", fontFamily: "'Playfair Display',serif", marginBottom: "20px" }}>{service.title}</h2>
          <p style={{ color: "#C0C8D8", fontSize: "1rem", lineHeight: 1.85, maxWidth: "860px" }}>{service.intro}</p>
        </div>

        {/* Feature cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "20px", marginBottom: "36px" }}>
          {service.features.map((f, i) => (
            <div key={f.title} style={{ background: "rgba(30,58,95,0.35)", border: "1px solid rgba(44,74,110,0.6)", borderRadius: "16px", padding: "28px", ...sfadeLocal(0.1 + i * 0.08), transition: `all 0.7s ease ${0.1 + i * 0.08}s` }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#D4A843", fontSize: "13px", flexShrink: 0 }}>✓</div>
                <h3 style={{ color: "white", fontWeight: 700, fontSize: "1rem" }}>{f.title}</h3>
              </div>
              <p style={{ color: "#C0C8D8", fontSize: "13.5px", lineHeight: 1.75 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        <div style={sfadeLocal(0.3)}>
          <Link href="/contact" className="btn-primary" style={{ fontSize: "13px" }}>
            Make Business Enquiry
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
