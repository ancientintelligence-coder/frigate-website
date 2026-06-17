"use client";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Ramesh Sharma",
    role: "Amazon Seller, Electronics",
    quote: "Frigate Logistics has transformed our fulfillment operations. Their MFN handling is impeccable — zero damaged shipments in 8 months, and their team responds within minutes when we have a query.",
    rating: 5,
    initials: "RS",
  },
  {
    name: "Priya Menon",
    role: "E-Commerce Entrepreneur",
    quote: "As a small seller, timely delivery makes or breaks my ratings. Frigate's team has never let me down. My Amazon metrics shot up after partnering with them. Truly professional.",
    rating: 5,
    initials: "PM",
  },
  {
    name: "Sunil Kapoor",
    role: "Logistics Manager, FMCG Brand",
    quote: "We handle large volume transport with Frigate. Their fleet is always in excellent condition, drivers are trained, and the real-time tracking gives our operations team full peace of mind.",
    rating: 5,
    initials: "SK",
  },
  {
    name: "Anita Joshi",
    role: "Amazon FBA Seller",
    quote: "The pick-up service is a game changer. Frigate's team arrives within the scheduled window every single time. I have recommended them to 4 other sellers in my network.",
    rating: 5,
    initials: "AJ",
  },
  {
    name: "Mohammed Faraz",
    role: "Regional Distribution Head",
    quote: "We've worked with many DSPs, but Frigate's on-time delivery rate and professional conduct sets them apart. Their reverse logistics handling for returns is particularly excellent.",
    rating: 5,
    initials: "MF",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((p) => (p + 1) % testimonials.length);
      setAnimKey((k) => k + 1);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const goTo = (i: number) => { setActive(i); setAnimKey((k) => k + 1); };

  return (
    <section
      id="testimonials"
      className="py-28 relative overflow-hidden"
      ref={ref}
      style={{ background: "linear-gradient(135deg, #0d1e38 0%, #0A1628 100%)" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #2C4A6E, transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #2C4A6E, transparent)" }} />

      {/* Decorative quote mark */}
      <div style={{
        position: "absolute", top: "40px", left: "20px",
        fontSize: "18rem", fontFamily: "'Playfair Display', serif",
        color: "#1E3A5F", opacity: 0.25, lineHeight: 1,
        pointerEvents: "none", userSelect: "none",
      }}>&ldquo;</div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
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
            Testimonials
            <span style={{ width: "32px", height: "1px", background: "#D4A843" }} />
          </div>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "white",
            marginBottom: "16px", fontFamily: "'Playfair Display', serif",
          }}>
            What Our Partners Say
          </h2>
          <p style={{ color: "#C0C8D8", maxWidth: "480px", margin: "0 auto" }}>
            Trusted by Amazon sellers, brands, and businesses across India.
          </p>
        </div>

        {/* Featured card */}
        <div style={{
          maxWidth: "740px", margin: "0 auto 40px",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
          transitionDelay: "0.2s",
        }}>
          <div
            key={animKey}
            style={{
              background: "rgba(22,40,68,0.8)",
              border: "1px solid #2C4A6E",
              borderRadius: "20px", padding: "40px",
              textAlign: "center",
              animation: "fadeSlideUp 0.5s ease",
            }}
          >
            {/* Stars */}
            <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginBottom: "24px" }}>
              {[...Array(testimonials[active].rating)].map((_, i) => (
                <svg key={i} style={{ width: "18px", height: "18px", color: "#D4A843" }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <blockquote style={{
              color: "#E8EDF5", fontSize: "1.2rem", lineHeight: 1.75,
              marginBottom: "32px", fontStyle: "italic",
              fontFamily: "'Playfair Display', serif",
            }}>
              &ldquo;{testimonials[active].quote}&rdquo;
            </blockquote>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
              <div style={{
                width: "48px", height: "48px", borderRadius: "50%",
                background: "linear-gradient(135deg, #1E3A5F, #2C4A6E)",
                border: "1px solid rgba(212,168,67,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#D4A843", fontWeight: 700, fontSize: "14px",
              }}>
                {testimonials[active].initials}
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ color: "white", fontWeight: 600, fontSize: "14px" }}>{testimonials[active].name}</div>
                <div style={{ color: "#C0C8D8", fontSize: "12px" }}>{testimonials[active].role}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "48px" }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === active ? "28px" : "8px",
                height: "8px",
                borderRadius: "100px",
                background: i === active ? "#D4A843" : "#2C4A6E",
                border: "none", cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>

        {/* Mini selector row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "12px",
          opacity: inView ? 1 : 0,
          transition: "opacity 0.6s ease",
          transitionDelay: "0.4s",
        }}>
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => goTo(i)}
              style={{
                textAlign: "left", padding: "14px",
                borderRadius: "14px", cursor: "pointer",
                border: `1px solid ${i === active ? "rgba(212,168,67,0.5)" : "rgba(44,74,110,0.6)"}`,
                background: i === active ? "rgba(30,58,95,0.6)" : "rgba(30,58,95,0.2)",
                transition: "all 0.3s ease",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                <div style={{
                  width: "28px", height: "28px", borderRadius: "50%",
                  background: "#1E3A5F", border: "1px solid #2C4A6E",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#D4A843", fontSize: "10px", fontWeight: 700, flexShrink: 0,
                }}>
                  {t.initials}
                </div>
                <div style={{ color: "white", fontSize: "11px", fontWeight: 600 }}>{t.name.split(" ")[0]}</div>
              </div>
              <div style={{ color: "#C0C8D8", fontSize: "10px", lineHeight: 1.4 }}>{t.role}</div>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
