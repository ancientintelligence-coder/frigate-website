"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const trustItems = [
  { icon: "📦", label: "Amazon DSP Partner" },
  { icon: "🏭", label: "MFN Certified" },
  { icon: "🗺️", label: "Pan-India Coverage" },
  { icon: "✅", label: "ISO Compliant" },
  { icon: "⏱️", label: "24/7 Operations" },
  { icon: "🚛", label: "Insured Fleet" },
  { icon: "⚡", label: "99.2% On-Time Rate" },
  { icon: "🎯", label: "10,000+ Deliveries/Month" },
];

const whyItems = [
  { icon: "🔗", title: "End to End Supply Chain", desc: "Surface transport, express cargo, comprehensive warehousing or 3PL. We manage your supply chain end to end with a single point of accountability." },
  { icon: "💬", title: "Get Instant Quote", desc: "Enormous cost efficiencies and time savings on your cargo. Reach out and receive a competitive quote tailored to your logistics needs." },
  { icon: "📍", title: "Track Real Time", desc: "Login anytime and check the updated status of your cargo location and delivery details. Full visibility at every step of the journey." },
];

const services = [
  { icon: "🚚", title: "Amazon Last-Mile Delivery", desc: "Reliable door-step delivery across all pin codes as an authorized Amazon DSP. Fast, safe, and fully tracked.", tag: "DSP Partner" },
  { icon: "📋", title: "MFN Fulfillment", desc: "Merchant Fulfilled Network order processing from warehouse pick to dispatch. Storage, packing, and shipping handled end-to-end.", tag: "MFN Certified" },
  { icon: "📍", title: "Pick-Up Services", desc: "Scheduled pick-up from seller warehouses and fulfilment centres. Timely collection with full tracking and proof of pickup.", tag: "On-Time" },
  { icon: "↩️", title: "Return Logistics", desc: "End-to-end reverse logistics management. Collect, inspect, and reroute returned items with complete documentation.", tag: "Returns" },
  { icon: "🚛", title: "Fleet Transport", desc: "Managed fleet for bulk cargo movement. Fragile, oversized, or temperature-sensitive cargo handled by experienced drivers.", tag: "Full Fleet" },
  { icon: "📡", title: "Real-Time Tracking", desc: "Live shipment tracking and delivery updates for senders and recipients. Full transparency across the entire supply chain.", tag: "Live Updates" },
];

const testimonials = [
  { name: "Ramesh Sharma", role: "Amazon Seller, Electronics", quote: "Frigate Logistics has transformed our fulfillment operations. Their MFN handling is impeccable — zero damaged shipments in 8 months. We experienced a customer-centric approach towards service excellence and an attitude to improve, which is a must for any long-term business partnership.", initials: "RS" },
  { name: "Priya Menon", role: "E-Commerce Entrepreneur", quote: "As a small seller, timely delivery makes or breaks my Amazon ratings. Frigate's team has never let me down. My metrics shot up after partnering with them. I appreciate the staff for their full cooperation and extra efforts. Truly professional.", initials: "PM" },
  { name: "Sunil Kapoor", role: "Logistics Manager, FMCG Brand", quote: "We handle large volume transport with Frigate. Their fleet is always in excellent condition, drivers are trained, and the real-time tracking gives our operations team full peace of mind. The placement of vehicles is always prompt and very professional.", initials: "SK" },
  { name: "Anita Joshi", role: "Amazon FBA Seller", quote: "The pick-up service is a game changer. Frigate's team arrives within the scheduled window every single time. We get daily status updates of our consignments. I have recommended them to several other sellers in my network.", initials: "AJ" },
  { name: "Mohammed Faraz", role: "Regional Distribution Head", quote: "We've worked with many DSPs but Frigate's on-time delivery rate sets them apart. They are professional and have a customer-oriented approach all the time. Their reverse logistics handling for returns is particularly excellent.", initials: "MF" },
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

function ServiceCard({ service, delay, inView }: { service: typeof services[0]; delay: number; inView: boolean }) {
  const [h, setH] = useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ background: h ? "linear-gradient(135deg,rgba(30,58,95,0.8),rgba(22,40,68,0.9))" : "rgba(30,58,95,0.35)", border: `1px solid ${h ? "rgba(212,168,67,0.5)" : "#2C4A6E"}`, borderRadius: "18px", padding: "32px", opacity: inView ? 1 : 0, transform: inView ? (h ? "translateY(-5px)" : "translateY(0)") : "translateY(28px)", transition: `all 0.4s ease ${delay}s`, boxShadow: h ? "0 16px 48px rgba(212,168,67,0.1)" : "none", cursor: "default" }}>
      <div style={{ fontSize: "36px", marginBottom: "16px" }}>{service.icon}</div>
      <div style={{ display: "inline-block", fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#D4A843", background: "rgba(212,168,67,0.1)", border: "1px solid rgba(212,168,67,0.2)", padding: "3px 10px", borderRadius: "100px", marginBottom: "14px" }}>{service.tag}</div>
      <h3 style={{ color: "white", fontWeight: 700, fontSize: "1.05rem", marginBottom: "10px", fontFamily: "'Playfair Display', serif" }}>{service.title}</h3>
      <p style={{ color: "#C0C8D8", fontSize: "13.5px", lineHeight: 1.7 }}>{service.desc}</p>
    </div>
  );
}

export default function HomePage() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [activeTest, setActiveTest] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const why = useInView();
  const svc = useInView();
  const test = useInView();
  const cta = useInView();

  useEffect(() => { setTimeout(() => setHeroVisible(true), 100); }, []);
  useEffect(() => {
    const t = setInterval(() => { setActiveTest(p => (p + 1) % testimonials.length); setAnimKey(k => k + 1); }, 5000);
    return () => clearInterval(t);
  }, []);

  const fade = (delay = 0): React.CSSProperties => ({ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(24px)", transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s` });
  const sfade = (inView: boolean, delay = 0): React.CSSProperties => ({ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(28px)", transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s` });

  return (
    <main>
      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", background: "radial-gradient(ellipse at 30% 50%, #1E3A5F 0%, #0A1628 65%)" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "linear-gradient(rgba(192,200,216,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(192,200,216,0.5) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        {[...Array(10)].map((_, i) => <div key={i} style={{ position: "absolute", width: i%3===0?"4px":"2px", height: i%3===0?"4px":"2px", borderRadius: "50%", background: i%4===0?"#D4A843":"#2C4A6E", left: `${8+i*8.5}%`, top: `${15+(i*37)%65}%`, animation: `floatParticle ${5+i%4}s ease-in-out infinite`, animationDelay: `${i*0.4}s`, opacity: 0.6 }} />)}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, pointerEvents: "none" }}>
          <svg viewBox="0 0 1440 80" fill="none" style={{ width: "100%", display: "block" }}>
            <path d="M0 40 C240 80 480 0 720 40 C960 80 1200 0 1440 40 L1440 80 L0 80 Z" fill="#0A1628" fillOpacity="0.6"/>
            <path d="M0 60 C360 20 720 80 1080 40 C1260 20 1380 55 1440 60 L1440 80 L0 80 Z" fill="#0A1628"/>
          </svg>
        </div>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "120px 32px 130px", width: "100%" }}>
          <div style={{ display: "grid", gap: "64px", alignItems: "center" }} className="hero-grid">
            <div>
              <div style={{ ...fade(0.1), display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(30,58,95,0.5)", border: "1px solid #2C4A6E", borderRadius: "100px", padding: "8px 16px", marginBottom: "32px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#D4A843", animation: "pulse 2s ease-in-out infinite" }} />
                <span style={{ color: "#C0C8D8", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>Amazon Certified Delivery Partner</span>
              </div>
              <div style={fade(0.25)}>
                <h1 style={{ fontSize: "clamp(2.6rem,5vw,4rem)", fontWeight: 800, lineHeight: 1.1, color: "white", marginBottom: "24px", fontFamily: "'Playfair Display',serif" }}>
                  {"India's Reliable"}<br/>
                  <span style={{ background: "linear-gradient(90deg,#D4A843,#F0C96A,#D4A843)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", animation: "shimmer 3s linear infinite" }}>Cargo Management</span><br/>
                  {"& Logistics Solutions"}
                </h1>
              </div>
              <div style={fade(0.4)}>
                <p style={{ color: "#C0C8D8", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "40px", maxWidth: "500px" }}>
                  Frigate Logistics Ltd is a trusted Amazon delivery and logistics partner, specializing in last-mile delivery, MFN fulfillment, and seamless pick-up operations — serving pan India with passion and precision.
                </p>
              </div>
              <div style={{ ...fade(0.55), display: "flex", gap: "16px", flexWrap: "wrap" as const }}>
                <Link href="/about" className="btn-primary">Learn More <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></Link>
                <Link href="/services" className="btn-outline">Our Services</Link>
              </div>
              <div style={{ ...fade(0.7), display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px", marginTop: "48px", paddingTop: "32px", borderTop: "1px solid rgba(44,74,110,0.5)" }}>
                {[["Amazon","Certified Partner"],["Pan-India","Coverage"],["99.2%","On-Time Rate"]].map(([val,lbl])=>(
                  <div key={lbl}><div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#D4A843", marginBottom: "4px", fontFamily: "'Playfair Display',serif" }}>{val}</div><div style={{ color: "#C0C8D8", fontSize: "11px" }}>{lbl}</div></div>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative", minHeight: "420px" }} className="hero-right">
              <div style={{ position: "absolute", width: "400px", height: "400px", borderRadius: "50%", border: "1px dashed rgba(44,74,110,0.6)", animation: "spinRing 35s linear infinite" }}/>
              <div style={{ position: "absolute", width: "320px", height: "320px", borderRadius: "50%", border: "1px solid rgba(212,168,67,0.15)", animation: "spinRing 22s linear infinite reverse" }}/>
              <div style={{ position: "absolute", width: "400px", height: "400px", borderRadius: "50%", animation: "spinRing 8s linear infinite", pointerEvents: "none" as const }}>
                <div style={{ position: "absolute", top: "-5px", left: "50%", width: "10px", height: "10px", borderRadius: "50%", background: "#D4A843", boxShadow: "0 0 12px #D4A843", transform: "translateX(-50%)" }}/>
              </div>
              <div style={{ position: "relative", width: "260px", height: "260px", borderRadius: "50%", overflow: "hidden", boxShadow: "0 0 80px rgba(212,168,67,0.2),0 0 0 4px #1E3A5F", ...fade(0.3) }}>
                <Image src="/logo.jpeg" alt="Frigate Logistics" fill style={{ objectFit: "cover" }} priority/>
              </div>
              <div style={{ position: "absolute", top: "30px", right: "10px", background: "rgba(6,15,30,0.95)", border: "1px solid #2C4A6E", borderRadius: "14px", padding: "12px 16px", ...fade(0.8) }}>
                <div style={{ color: "#D4A843", fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>AMAZON</div>
                <div style={{ color: "white", fontSize: "11px" }}>Delivery Partner</div>
              </div>
              <div style={{ position: "absolute", bottom: "50px", left: "10px", background: "rgba(6,15,30,0.95)", border: "1px solid #2C4A6E", borderRadius: "14px", padding: "12px 16px", ...fade(1) }}>
                <div style={{ color: "#D4A843", fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>MFN</div>
                <div style={{ color: "white", fontSize: "11px" }}>Fulfillment Network</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div style={{ background: "#060f1e", borderTop: "1px solid rgba(30,58,95,0.6)", borderBottom: "1px solid rgba(30,58,95,0.6)", padding: "14px 0", overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "80px", background: "linear-gradient(to right,#060f1e,transparent)", zIndex: 2, pointerEvents: "none" as const }}/>
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "80px", background: "linear-gradient(to left,#060f1e,transparent)", zIndex: 2, pointerEvents: "none" as const }}/>
        <div style={{ display: "flex", width: "max-content", animation: "trustMarquee 30s linear infinite" }}>
          {[...trustItems,...trustItems,...trustItems].map((item,i)=>(
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "0 36px", borderRight: "1px solid rgba(44,74,110,0.4)", flexShrink: 0, whiteSpace: "nowrap" as const }}>
              <span style={{ fontSize: "16px" }}>{item.icon}</span>
              <span style={{ color: "#C0C8D8", fontSize: "12px", fontWeight: 500, letterSpacing: "0.06em" }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* WHY */}
      <section style={{ padding: "100px 0", background: "linear-gradient(180deg,#0A1628 0%,#0d1e38 100%)" }} ref={why.ref}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px", ...sfade(why.inView) }}>
            <div className="section-label" style={{ justifyContent: "center" }}><span/>Why Frigate Logistics<span/></div>
            <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 800, color: "white", fontFamily: "'Playfair Display',serif", marginBottom: "16px" }}>The Simpler Way to Manage Your Supply Chain</h2>
            <p style={{ color: "#C0C8D8", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>We combine technology, infrastructure, and passionate people to deliver logistics solutions that give you a competitive edge.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "24px" }}>
            {whyItems.map((item,i)=>(
              <div key={item.title} style={{ background: "rgba(30,58,95,0.3)", border: "1px solid rgba(44,74,110,0.6)", borderRadius: "18px", padding: "36px", textAlign: "center", ...sfade(why.inView,i*0.1), transition: `all 0.7s ease ${i*0.1}s` }}>
                <div style={{ fontSize: "40px", marginBottom: "20px" }}>{item.icon}</div>
                <h3 style={{ color: "white", fontWeight: 700, fontSize: "1.1rem", marginBottom: "12px", fontFamily: "'Playfair Display',serif" }}>{item.title}</h3>
                <p style={{ color: "#C0C8D8", fontSize: "13.5px", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "100px 0", background: "#0A1628" }} ref={svc.ref}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px", ...sfade(svc.inView) }}>
            <div className="section-label" style={{ justifyContent: "center" }}><span/>What We Do<span/></div>
            <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 800, color: "white", fontFamily: "'Playfair Display',serif", marginBottom: "16px" }}>Customised Integrated Logistics Solutions</h2>
            <p style={{ color: "#C0C8D8", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>From Amazon deliveries to fleet transport, we offer a complete suite of logistics services built for speed, reliability, and scale.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "20px" }}>
            {services.map((s,i)=><ServiceCard key={s.title} service={s} delay={i*0.08} inView={svc.inView}/>)}
          </div>
          <div style={{ textAlign: "center", marginTop: "48px", ...sfade(svc.inView,0.5) }}>
            <Link href="/services" className="btn-primary">View All Services <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "100px 0", background: "linear-gradient(135deg,#0d1e38 0%,#0A1628 100%)", position: "relative", overflow: "hidden" }} ref={test.ref}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg,transparent,#2C4A6E,transparent)" }}/>
        <div style={{ position: "absolute", top: "40px", left: "20px", fontSize: "16rem", fontFamily: "'Playfair Display',serif", color: "#1E3A5F", opacity: 0.2, lineHeight: 1, pointerEvents: "none" as const, userSelect: "none" as const }}>&ldquo;</div>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: "60px", ...sfade(test.inView) }}>
            <div className="section-label" style={{ justifyContent: "center" }}><span/>Testimonials<span/></div>
            <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 800, color: "white", fontFamily: "'Playfair Display',serif", marginBottom: "16px" }}>What Our Partners Say</h2>
            <p style={{ color: "#C0C8D8", maxWidth: "480px", margin: "0 auto" }}>Trusted by Amazon sellers, brands, and businesses across India.</p>
          </div>
          <div style={{ maxWidth: "740px", margin: "0 auto 40px", ...sfade(test.inView,0.2) }}>
            <div key={animKey} style={{ background: "rgba(22,40,68,0.8)", border: "1px solid #2C4A6E", borderRadius: "20px", padding: "44px", textAlign: "center", animation: "fadeUp 0.5s ease" }}>
              <div style={{ display: "flex", justifyContent: "center", gap: "4px", marginBottom: "24px" }}>
                {[...Array(5)].map((_,i)=><svg key={i} style={{ width:"18px",height:"18px",color:"#D4A843" }} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
              </div>
              <blockquote style={{ color: "#E8EDF5", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "32px", fontStyle: "italic", fontFamily: "'Playfair Display',serif" }}>&ldquo;{testimonials[activeTest].quote}&rdquo;</blockquote>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px" }}>
                <div style={{ width:"46px",height:"46px",borderRadius:"50%",background:"linear-gradient(135deg,#1E3A5F,#2C4A6E)",border:"1px solid rgba(212,168,67,0.3)",display:"flex",alignItems:"center",justifyContent:"center",color:"#D4A843",fontWeight:700,fontSize:"13px" }}>{testimonials[activeTest].initials}</div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ color:"white",fontWeight:600,fontSize:"14px" }}>{testimonials[activeTest].name}</div>
                  <div style={{ color:"#C0C8D8",fontSize:"12px" }}>{testimonials[activeTest].role}</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display:"flex",justifyContent:"center",gap:"10px" }}>
            {testimonials.map((_,i)=><button key={i} onClick={()=>{setActiveTest(i);setAnimKey(k=>k+1);}} style={{ width:i===activeTest?"28px":"8px",height:"8px",borderRadius:"100px",background:i===activeTest?"#D4A843":"#2C4A6E",border:"none",cursor:"pointer",transition:"all 0.3s" }}/>)}
          </div>
        </div>
        <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}`}</style>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", background: "linear-gradient(135deg,#1E3A5F 0%,#0A1628 100%)", borderTop: "1px solid rgba(44,74,110,0.4)" }} ref={cta.ref}>
        <div style={{ maxWidth:"1280px",margin:"0 auto",padding:"0 32px",textAlign:"center" }}>
          <div style={sfade(cta.inView)}>
            <h2 style={{ fontSize:"clamp(1.8rem,3.5vw,2.8rem)",fontWeight:800,color:"white",fontFamily:"'Playfair Display',serif",marginBottom:"20px" }}>Ready to Partner With Us?</h2>
            <p style={{ color:"#C0C8D8",maxWidth:"520px",margin:"0 auto 36px",lineHeight:1.7 }}>Whether you are an Amazon seller, a growing brand, or an enterprise business — Frigate Logistics has the right solution for your logistics needs.</p>
            <div style={{ display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap" as const }}>
              <Link href="/contact" className="btn-primary">Get a Free Quote <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></Link>
              <Link href="/about" className="btn-outline">Learn About Us</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .hero-grid { grid-template-columns: 1fr 1fr; }
        @media(max-width:768px){
          .hero-grid{grid-template-columns:1fr!important;}
          .hero-right{display:none!important;}
        }
      `}</style>
    </main>
  );
}
