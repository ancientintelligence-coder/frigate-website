"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.12) {
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

export default function AboutPage() {
  const hero = useInView(0.1);
  const story = useInView();
  const ecom = useInView();
  const transport = useInView();
  const vals = useInView();

  return (
    <main>
      {/* Hero */}
      <section style={{ paddingTop: "140px", paddingBottom: "80px", background: "radial-gradient(ellipse at 30% 50%, #1E3A5F 0%, #0A1628 65%)", borderBottom: "1px solid rgba(44,74,110,0.4)", position: "relative", overflow: "hidden" }} ref={hero.ref}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "linear-gradient(rgba(192,200,216,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(192,200,216,0.5) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", position: "relative" }}>
          <div style={sfade(hero.inView)}>
            <div className="section-label"><span />About Us<span /></div>
            <h1 style={{ fontSize: "clamp(2.4rem,5vw,3.8rem)", fontWeight: 800, color: "white", fontFamily: "'Playfair Display',serif", marginBottom: "20px", lineHeight: 1.15 }}>
              Built on Trust.<br />
              <span style={{ background: "linear-gradient(90deg,#D4A843,#F0C96A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Driven by Excellence.</span>
            </h1>
            <p style={{ color: "#C0C8D8", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "600px" }}>
              Frigate Logistics Ltd is a registered Amazon EDSP delivery partner and trusted logistics provider, operating two distinct divisions — E-commerce and Transport.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section style={{ padding: "100px 0", background: "#0A1628" }} ref={story.ref}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="two-col">
            <div style={sfade(story.inView)} className="logo-col">
              <div style={{ position: "relative", display: "inline-block" }}>
                <div style={{ position: "absolute", inset: "-24px", borderRadius: "50%", border: "1px dashed rgba(44,74,110,0.5)", animation: "spinRing 40s linear infinite" }} />
                <div style={{ position: "relative", width: "320px", height: "320px", borderRadius: "50%", overflow: "hidden", boxShadow: "0 0 80px rgba(212,168,67,0.12),0 0 0 4px #1E3A5F" }}>
                  <Image src="/logo.png" alt="Frigate Logistics" fill style={{ objectFit: "cover" }} />
                </div>
              </div>
            </div>
            <div style={sfade(story.inView, 0.2)}>
              <div className="section-label"><span />Who We Are<span /></div>
              <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 800, color: "white", fontFamily: "'Playfair Display',serif", marginBottom: "24px", lineHeight: 1.25 }}>A Logistics Partner You Can Count On</h2>
              <p style={{ color: "#C0C8D8", lineHeight: 1.8, marginBottom: "20px" }}>
                Headquartered in Vadodara, Gujarat, Frigate Logistics Ltd is a preferred logistics solutions provider offering services across E-commerce fulfillment and surface transport — with a presence across India.
              </p>
              <p style={{ color: "#C0C8D8", lineHeight: 1.8, marginBottom: "36px" }}>
                We are a reliable partner for cargo deliveries with advanced technology platforms, well-trained staff, and an unwavering commitment to on-time delivery, safety, and customer satisfaction.
              </p>
              <Link href="/contact" className="btn-primary">Partner With Us <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></Link>
            </div>
          </div>
        </div>
        <style>{`@keyframes spinRing{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>
      </section>

      {/* E-commerce Division */}
      <section style={{ padding: "100px 0", background: "linear-gradient(180deg,#0d1e38,#0A1628)" }} ref={ecom.ref}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "48px", ...sfade(ecom.inView) }}>
            <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px" }}>📦</div>
            <div>
              <div style={{ color: "#D4A843", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Division 01</div>
              <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 800, color: "white", fontFamily: "'Playfair Display',serif" }}>Frigate E-commerce</h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }} className="two-col">
            <div style={sfade(ecom.inView, 0.1)}>
              <p style={{ color: "#C0C8D8", lineHeight: 1.8, marginBottom: "20px" }}>
                Our E-commerce division is a certified Amazon EDSP (Delivery Service Partner) and MFN logistics provider. We specialise in last-mile delivery, pick-up services, and merchant fulfilled network operations across the region.
              </p>
              <p style={{ color: "#C0C8D8", lineHeight: 1.8, marginBottom: "32px" }}>
                With a dedicated fleet, trained delivery executives, and real-time tracking, our E-commerce team ensures your Amazon seller metrics stay at the top.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" as const }}>
                {["Amazon EDSP", "MFN Fulfillment", "Last-Mile Delivery", "Pick-Up Services", "Returns Management", "Real-Time Tracking"].map(tag => (
                  <span key={tag} style={{ background: "rgba(212,168,67,0.1)", border: "1px solid rgba(212,168,67,0.25)", color: "#D4A843", fontSize: "11px", fontWeight: 600, padding: "5px 12px", borderRadius: "100px", letterSpacing: "0.05em" }}>{tag}</span>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", ...sfade(ecom.inView, 0.2) }}>
              {[
                { title: "Amazon EDSP Partner", desc: "Certified Delivery Service Partner for Amazon, ensuring timely and accurate last-mile delivery across all serviceable pin codes." },
                { title: "MFN Fulfillment", desc: "End-to-end Merchant Fulfilled Network operations — pick, pack, and dispatch handled seamlessly so sellers can focus on growth." },
                { title: "Pick-Up & Returns", desc: "Scheduled pick-ups from seller warehouses and hassle-free return logistics with complete documentation and status updates." },
              ].map(item => (
                <div key={item.title} style={{ background: "rgba(30,58,95,0.3)", border: "1px solid rgba(44,74,110,0.5)", borderRadius: "14px", padding: "22px" }}>
                  <div style={{ color: "white", fontWeight: 700, fontSize: "14px", marginBottom: "8px" }}>{item.title}</div>
                  <div style={{ color: "#C0C8D8", fontSize: "13px", lineHeight: 1.7 }}>{item.desc}</div>
                </div>
              ))}
              <div style={{ background: "rgba(212,168,67,0.08)", border: "1px solid rgba(212,168,67,0.2)", borderRadius: "14px", padding: "18px" }}>
                <div style={{ color: "#D4A843", fontSize: "11px", fontWeight: 700, marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Contact E-commerce Team</div>
                <div style={{ color: "#E8EDF5", fontSize: "13px" }}>📞 +91 99246 26900</div>
                <div style={{ color: "#C0C8D8", fontSize: "12px" }}>sunil@fll.co.in · hardik@fll.co.in</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transport Division */}
      <section style={{ padding: "100px 0", background: "#0A1628", borderTop: "1px solid rgba(44,74,110,0.3)" }} ref={transport.ref}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "48px", ...sfade(transport.inView) }}>
            <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px" }}>🚛</div>
            <div>
              <div style={{ color: "#D4A843", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Division 02</div>
              <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 800, color: "white", fontFamily: "'Playfair Display',serif" }}>Frigate Transport</h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }} className="two-col">
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", ...sfade(transport.inView, 0.1) }}>
              {[
                { title: "PTL — Part Truck Load", desc: "Cost-effective cargo movement for loads smaller than a full truck. Perfect for MSMEs and growing businesses." },
                { title: "FTL — Full Truck Load", desc: "Dedicated trucks for large volume shipments. Direct routing, sealed cargo, no intermediate stops." },
                { title: "ODC — Over Dimensional Cargo", desc: "Specialised handling for cargo that exceeds standard dimensions — with permits, escorts, and expert routing." },
              ].map(item => (
                <div key={item.title} style={{ background: "rgba(30,58,95,0.3)", border: "1px solid rgba(44,74,110,0.5)", borderRadius: "14px", padding: "22px" }}>
                  <div style={{ color: "white", fontWeight: 700, fontSize: "14px", marginBottom: "8px" }}>{item.title}</div>
                  <div style={{ color: "#C0C8D8", fontSize: "13px", lineHeight: 1.7 }}>{item.desc}</div>
                </div>
              ))}
              <div style={{ background: "rgba(212,168,67,0.08)", border: "1px solid rgba(212,168,67,0.2)", borderRadius: "14px", padding: "18px" }}>
                <div style={{ color: "#D4A843", fontSize: "11px", fontWeight: 700, marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Contact Transport Team</div>
                <div style={{ color: "#E8EDF5", fontSize: "13px" }}>📞 +91 93272 34001</div>
                <div style={{ color: "#C0C8D8", fontSize: "12px" }}>rpchoudhary@fll.co.in</div>
              </div>
            </div>
            <div style={sfade(transport.inView, 0.2)}>
              <p style={{ color: "#C0C8D8", lineHeight: 1.8, marginBottom: "20px" }}>
                Our Transport division handles surface freight across India — from part loads to full truck loads and specialised over-dimensional cargo. With a managed fleet and deep network, we ensure every consignment reaches its destination safely and on time.
              </p>
              <p style={{ color: "#C0C8D8", lineHeight: 1.8, marginBottom: "32px" }}>
                We provide a single-window logistics solution — door to door, godown to godown, and every configuration in between — with GPS tracking and complete documentation.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" as const }}>
                {["PTL", "FTL", "ODC", "Pan-India Network", "GPS Tracking", "Single Window"].map(tag => (
                  <span key={tag} style={{ background: "rgba(212,168,67,0.1)", border: "1px solid rgba(212,168,67,0.25)", color: "#D4A843", fontSize: "11px", fontWeight: 600, padding: "5px 12px", borderRadius: "100px" }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "100px 0", background: "linear-gradient(180deg,#0d1e38,#0A1628)", borderTop: "1px solid rgba(44,74,110,0.3)" }} ref={vals.ref}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px", ...sfade(vals.inView) }}>
            <div className="section-label" style={{ justifyContent: "center" }}><span />Our Values<span /></div>
            <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 800, color: "white", fontFamily: "'Playfair Display',serif" }}>What Drives Us</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "20px" }}>
            {[
              { icon: "⚓", title: "Reliability", desc: "We show up — every shipment, every route, every time. No excuses." },
              { icon: "🚀", title: "Speed", desc: "Optimised routes and a disciplined fleet ensure fastest-in-class delivery." },
              { icon: "📡", title: "Transparency", desc: "Real-time tracking and honest communication at every step of the journey." },
              { icon: "🤝", title: "Customer First", desc: "From Amazon sellers to enterprise clients, every consignment is a priority." },
              { icon: "⚡", title: "Efficiency", desc: "Technology-driven operations that reduce cost and increase delivery velocity." },
              { icon: "🏆", title: "Excellence", desc: "We don't settle for good enough. Every process is continuously improved." },
            ].map((v, i) => (
              <div key={v.title} style={{ background: "rgba(30,58,95,0.25)", border: "1px solid rgba(44,74,110,0.6)", borderRadius: "16px", padding: "28px", ...sfade(vals.inView, i * 0.08), transition: `all 0.5s ease ${i * 0.08}s` }}>
                <div style={{ fontSize: "28px", marginBottom: "14px" }}>{v.icon}</div>
                <div style={{ color: "white", fontWeight: 700, fontSize: "15px", marginBottom: "10px" }}>{v.title}</div>
                <div style={{ color: "#C0C8D8", fontSize: "13.5px", lineHeight: 1.7 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", background: "#0A1628", borderTop: "1px solid rgba(44,74,110,0.4)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 800, color: "white", fontFamily: "'Playfair Display',serif", marginBottom: "20px" }}>Partner With Frigate Logistics</h2>
          <p style={{ color: "#C0C8D8", maxWidth: "500px", margin: "0 auto 36px", lineHeight: 1.7 }}>Ready to simplify your supply chain? Let us handle logistics so you can focus on growing your business.</p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" as const }}>
            <Link href="/contact" className="btn-primary">Get in Touch <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></Link>
            <Link href="/services" className="btn-outline">View Services</Link>
          </div>
        </div>
      </section>

      <style>{`.two-col{grid-template-columns:1fr 1fr;} .logo-col{display:flex;justify-content:center;} @media(max-width:768px){.two-col{grid-template-columns:1fr!important;}}`}</style>
    </main>
  );
}
