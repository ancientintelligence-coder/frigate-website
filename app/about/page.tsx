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
  opacity: inView ? 1 : 0,
  transform: inView ? "translateY(0)" : "translateY(28px)",
  transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
});

const values = [
  { title: "Be Passionate", desc: "Love your work, do not compromise on quality, and aim for success in every delivery." },
  { title: "Be Reliable", desc: "Respond to changes and never break the trust. We show up every shipment, every route, every time." },
  { title: "Be a Visionary", desc: "Always think innovatively, think differently, and think about the future of logistics." },
  { title: "Be Human", desc: "Show respect for the dignity of each individual — customers, partners, and our own team." },
  { title: "Be Ethical", desc: "Know the difference between right and wrong, and honor our social and behavioral commitments." },
  { title: "Be Customer-First", desc: "Our single-minded focus is to live up to customer expectations and provide a logistics edge." },
];

const qualityPoints = [
  { title: "Customer Delight", desc: "Understand customer needs, provide customised solutions, and achieve customer satisfaction at every step." },
  { title: "Process Improvements", desc: "A continuous learning process to improve existing operations that increases productivity and efficiency across everything we do." },
  { title: "Meet Expectations", desc: "With trained staff and updated technology platforms we provide solutions catering to customer preferences and regular cargo status updates." },
  { title: "Periodic Reviews", desc: "We monitor and periodically review our work to introduce new ideas and processes that reduce inefficiencies and costs for our clients." },
  { title: "Minimise Waste", desc: "As an environment-conscious company, we encourage all internal stakeholders to practice minimum wastage across operations." },
  { title: "Zero Defects", desc: "We aim to achieve zero defects in cargo management — better handling, better equipment, well-trained staff, flawless operations." },
];

export default function AboutPage() {
  const hero = useInView(0.1);
  const story = useInView();
  const vals = useInView();
  const quality = useInView();
  const network = useInView();

  return (
    <main>
      {/* Page Hero */}
      <section style={{ paddingTop: "140px", paddingBottom: "80px", background: "radial-gradient(ellipse at 30% 50%, #1E3A5F 0%, #0A1628 65%)", borderBottom: "1px solid rgba(44,74,110,0.4)", position: "relative", overflow: "hidden" }} ref={hero.ref}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "linear-gradient(rgba(192,200,216,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(192,200,216,0.5) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", position: "relative" }}>
          <div style={sfade(hero.inView)}>
            <div className="section-label"><span />About Us<span /></div>
            <h1 style={{ fontSize: "clamp(2.4rem,5vw,3.8rem)", fontWeight: 800, color: "white", fontFamily: "'Playfair Display',serif", marginBottom: "20px", lineHeight: 1.15 }}>
              A Brand That Symbolises<br />
              <span style={{ background: "linear-gradient(90deg,#D4A843,#F0C96A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Trust & Commitment</span>
            </h1>
            <p style={{ color: "#C0C8D8", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "600px" }}>
              Frigate Logistics Ltd has become a brand that represents reliability and strong business ethics. The landscape changed, business grew, but our firmness on core values never moved an inch — it has now become part of the DNA of every person here.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section style={{ padding: "100px 0", background: "#0A1628" }} ref={story.ref}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="two-col">
            {/* Logo */}
            <div style={sfade(story.inView)} className="logo-col">
              <div style={{ position: "relative", display: "inline-block" }}>
                <div style={{ position: "absolute", inset: "-24px", borderRadius: "50%", border: "1px dashed rgba(44,74,110,0.5)", animation: "spinRing 40s linear infinite" }} />
                <div style={{ position: "relative", width: "320px", height: "320px", borderRadius: "50%", overflow: "hidden", boxShadow: "0 0 80px rgba(212,168,67,0.12),0 0 0 4px #1E3A5F" }}>
                  <Image src="/logo.jpeg" alt="Frigate Logistics" fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ position: "absolute", bottom: "-16px", right: "-16px", background: "#0A1628", border: "1px solid #2C4A6E", borderRadius: "16px", padding: "14px 18px", boxShadow: "0 8px 32px rgba(0,0,0,0.4)", ...sfade(story.inView, 0.4) }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#D4A843", fontSize: "18px" }}>✓</div>
                    <div><div style={{ color: "white", fontSize: "13px", fontWeight: 700 }}>Amazon Partner</div><div style={{ color: "#C0C8D8", fontSize: "11px" }}>DSP &amp; MFN Certified</div></div>
                  </div>
                </div>
                <div style={{ position: "absolute", top: "-16px", left: "-16px", background: "#0A1628", border: "1px solid #2C4A6E", borderRadius: "16px", padding: "14px 18px", boxShadow: "0 8px 32px rgba(0,0,0,0.4)", ...sfade(story.inView, 0.55) }}>
                  <div style={{ fontSize: "26px", fontWeight: 700, color: "#D4A843", fontFamily: "'Playfair Display',serif" }}>Pan</div>
                  <div style={{ color: "#C0C8D8", fontSize: "11px" }}>India Coverage</div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div style={sfade(story.inView, 0.2)}>
              <div className="section-label"><span />Company<span /></div>
              <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 800, color: "white", fontFamily: "'Playfair Display',serif", marginBottom: "24px", lineHeight: 1.25 }}>
                Built on Trust.<br />
                <span style={{ background: "linear-gradient(90deg,#D4A843,#F0C96A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Driven by Excellence.</span>
              </h2>
              <p style={{ color: "#C0C8D8", lineHeight: 1.8, marginBottom: "20px" }}>
                Frigate Logistics Ltd is a preferred logistics solution provider, offering services in Amazon last-mile delivery, MFN fulfillment, pick-up, fleet transport, and real-time tracking — with presence across India.
              </p>
              <p style={{ color: "#C0C8D8", lineHeight: 1.8, marginBottom: "20px" }}>
                We are a reliable partner for your cargo deliveries with advanced technology platforms connecting all our locations, providing full visibility, clubbed with well-trained staff to take care of cargo throughout the journey.
              </p>
              <p style={{ color: "#C0C8D8", lineHeight: 1.8, marginBottom: "36px" }}>
                The bouquet of services that we offer and the flexibility in sensing the right solution is something our clients recognise as a unique advantage. Long-standing relationships, thorough experience, and an astute grip on the length and breadth of the country set Frigate apart from the rest.
              </p>
              <Link href="/contact" className="btn-primary">Partner With Us <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></Link>
            </div>
          </div>
        </div>
        <style>{`@keyframes spinRing{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>
      </section>

      {/* Core Values */}
      <section style={{ padding: "100px 0", background: "linear-gradient(180deg,#0d1e38 0%,#0A1628 100%)" }} ref={vals.ref}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px", ...sfade(vals.inView) }}>
            <div className="section-label" style={{ justifyContent: "center" }}><span />Our DNA<span /></div>
            <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 800, color: "white", fontFamily: "'Playfair Display',serif", marginBottom: "16px" }}>Core Values</h2>
            <p style={{ color: "#C0C8D8", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
              Our company values are core and integral to each activity that we do. From management to colleagues working on ground — these values are imbibed in everyone.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "20px" }}>
            {values.map((v, i) => (
              <ValueCard key={v.title} value={v} inView={vals.inView} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* Quality Policy */}
      <section style={{ padding: "100px 0", background: "#0A1628" }} ref={quality.ref}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px", ...sfade(quality.inView) }}>
            <div className="section-label" style={{ justifyContent: "center" }}><span />Quality Policy<span /></div>
            <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 800, color: "white", fontFamily: "'Playfair Display',serif", marginBottom: "16px" }}>We Strongly Believe in High Quality</h2>
            <p style={{ color: "#C0C8D8", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
              Our commitment to quality impacts everything — from how we handle your cargo to how we communicate with you at every step.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "20px" }}>
            {qualityPoints.map((q, i) => (
              <div key={q.title} style={{ background: "rgba(30,58,95,0.3)", border: "1px solid rgba(44,74,110,0.6)", borderRadius: "16px", padding: "28px", ...sfade(quality.inView, i * 0.07), transition: `all 0.7s ease ${i * 0.07}s` }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#D4A843", fontWeight: 700, fontSize: "14px", flexShrink: 0 }}>✓</div>
                  <h3 style={{ color: "white", fontWeight: 700, fontSize: "1rem" }}>{q.title}</h3>
                </div>
                <p style={{ color: "#C0C8D8", fontSize: "13.5px", lineHeight: 1.7 }}>{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* National Presence */}
      <section style={{ padding: "100px 0", background: "linear-gradient(135deg,#0d1e38 0%,#0A1628 100%)", borderTop: "1px solid rgba(44,74,110,0.4)" }} ref={network.ref}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="two-col">
            <div style={sfade(network.inView)}>
              <div className="section-label"><span />Our Reach<span /></div>
              <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 800, color: "white", fontFamily: "'Playfair Display',serif", marginBottom: "24px", lineHeight: 1.25 }}>National Presence</h2>
              <p style={{ color: "#C0C8D8", lineHeight: 1.8, marginBottom: "20px" }}>
                A widespread network across India in all key locations to cater to a variety of industries and companies of different sizes. We work with large companies as well as growing businesses who take advantage of our widespread network and cost efficiencies.
              </p>
              <p style={{ color: "#C0C8D8", lineHeight: 1.8, marginBottom: "40px" }}>
                Our booking and delivery offices, and transshipment hubs across strategic locations enable a perfect hub-and-spoke model for optimized operations and cost-effective logistics.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                {[["Pan-India","Coverage"],["Amazon","DSP Partner"],["MFN","Fulfillment"],["24/7","Operations"]].map(([val,lbl])=>(
                  <div key={lbl} style={{ background: "rgba(30,58,95,0.4)", border: "1px solid rgba(44,74,110,0.6)", borderRadius: "14px", padding: "20px" }}>
                    <div style={{ fontSize: "1.4rem", fontWeight: 700, color: "#D4A843", fontFamily: "'Playfair Display',serif", marginBottom: "4px" }}>{val}</div>
                    <div style={{ color: "#C0C8D8", fontSize: "12px" }}>{lbl}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ ...sfade(network.inView, 0.2), background: "rgba(30,58,95,0.3)", border: "1px solid rgba(44,74,110,0.6)", borderRadius: "24px", padding: "48px" }}>
              <h3 style={{ color: "white", fontSize: "1.3rem", fontWeight: 700, fontFamily: "'Playfair Display',serif", marginBottom: "24px" }}>{"Our Commitment is Universal"}</h3>
              <p style={{ color: "#C0C8D8", lineHeight: 1.8, marginBottom: "24px" }}>
                We integrate sustainability and the highest ethical standards across our business activities. At Frigate Logistics, we are committed to advancing responsible logistics by integrating ESG principles into everything we do.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[["⚡","Efficient & Effective","Updated technology, state-of-the-art infrastructure, and trained staff ensures the best customized logistics solutions at competitive costs."],["🎯","Expert","Through longstanding relationships with clients, we have expertise in handling all types of cargo across geographies and industries."],["🤝","Ethical","One thing that can never be compromised is being Ethical. Our ethical dealings with employees, vendors, and stakeholders run in our very DNA."]].map(([icon,title,desc])=>(
                  <div key={title as string} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div style={{ fontSize: "24px", flexShrink: 0 }}>{icon}</div>
                    <div><div style={{ color: "white", fontWeight: 600, fontSize: "14px", marginBottom: "4px" }}>{title as string}</div><div style={{ color: "#C0C8D8", fontSize: "13px", lineHeight: 1.6 }}>{desc as string}</div></div>
                  </div>
                ))}
              </div>
            </div>
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

      <style>{`
        .two-col { grid-template-columns: 1fr 1fr; }
        @media(max-width:768px){
          .two-col{grid-template-columns:1fr!important;}
          .logo-col{display:flex;justify-content:center;}
        }
      `}</style>
    </main>
  );
}

function ValueCard({ value, inView, delay }: { value: { title: string; desc: string }; inView: boolean; delay: number }) {
  const [h, setH] = useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ background: h ? "rgba(30,58,95,0.6)" : "rgba(30,58,95,0.25)", border: `1px solid ${h ? "rgba(212,168,67,0.4)" : "rgba(44,74,110,0.6)"}`, borderRadius: "16px", padding: "28px", opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: `all 0.5s ease ${delay}s`, cursor: "default" }}>
      <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#D4A843", fontWeight: 700, marginBottom: "16px", fontSize: "16px" }}>⚓</div>
      <h3 style={{ color: "white", fontWeight: 700, fontSize: "1rem", marginBottom: "10px" }}>{value.title}</h3>
      <p style={{ color: "#C0C8D8", fontSize: "13.5px", lineHeight: 1.7 }}>{value.desc}</p>
    </div>
  );
}
