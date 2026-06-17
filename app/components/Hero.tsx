"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "10K+", label: "Deliveries Monthly" },
  { value: "99.2%", label: "On-Time Rate" },
  { value: "6+", label: "Years of Trust" },
  { value: "Amazon", label: "Certified Partner" },
];

// Animated counter hook
function useCounter(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 100);
    const t2 = setTimeout(() => setStatsVisible(true), 900);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 30% 50%, #1E3A5F 0%, #0A1628 65%)" }}
    >
      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(192,200,216,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(192,200,216,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          animation: "gridDrift 20s linear infinite",
        }}
      />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: i % 3 === 0 ? "4px" : "2px",
            height: i % 3 === 0 ? "4px" : "2px",
            borderRadius: "50%",
            background: i % 4 === 0 ? "#D4A843" : "#2C4A6E",
            left: `${8 + i * 7.5}%`,
            top: `${15 + ((i * 37) % 65)}%`,
            animation: `floatParticle ${5 + (i % 4)}s ease-in-out infinite`,
            animationDelay: `${i * 0.4}s`,
            opacity: 0.6,
          }}
        />
      ))}

      {/* Glowing orbs */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "500px", height: "500px",
          top: "10%", right: "5%",
          background: "radial-gradient(circle, rgba(30,58,95,0.4) 0%, transparent 70%)",
          animation: "orbPulse 6s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "300px", height: "300px",
          bottom: "15%", left: "10%",
          background: "radial-gradient(circle, rgba(212,168,67,0.08) 0%, transparent 70%)",
          animation: "orbPulse 8s ease-in-out infinite reverse",
        }}
      />

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 40 C240 80 480 0 720 40 C960 80 1200 0 1440 40 L1440 80 L0 80 Z" fill="#0A1628" fillOpacity="0.6" />
          <path d="M0 60 C360 20 720 80 1080 40 C1260 20 1380 55 1440 60 L1440 80 L0 80 Z" fill="#0A1628" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full pt-24 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left content — staggered fade-up */}
          <div>
            {/* Badge */}
            <div style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
              transitionDelay: "0.1s",
            }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "rgba(30,58,95,0.5)", border: "1px solid #2C4A6E",
                borderRadius: "100px", padding: "8px 16px", marginBottom: "32px",
              }}>
                <div style={{
                  width: "8px", height: "8px", borderRadius: "50%", background: "#D4A843",
                  animation: "pulse 2s ease-in-out infinite",
                }} />
                <span style={{ color: "#C0C8D8", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Amazon Certified Delivery Partner
                </span>
              </div>
            </div>

            {/* Headline */}
            <div style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
              transitionDelay: "0.25s",
            }}>
              <h1 style={{
                fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
                fontWeight: 800, lineHeight: 1.1,
                color: "white", marginBottom: "24px",
                fontFamily: "'Playfair Display', serif",
              }}>
                Delivering
                <span style={{
                  display: "block",
                  background: "linear-gradient(90deg, #D4A843, #F0C96A, #D4A843)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "shimmer 3s linear infinite",
                }}>
                  Excellence
                </span>
                Across Every Mile
              </h1>
            </div>

            {/* Paragraph */}
            <div style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
              transitionDelay: "0.4s",
            }}>
              <p style={{ color: "#C0C8D8", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "40px", maxWidth: "480px" }}>
                Frigate Logistics Pvt Ltd is a trusted Amazon delivery and logistics partner,
                specializing in last-mile delivery, MFN fulfillment, and seamless pick-up operations
                across the region.
              </p>
            </div>

            {/* Buttons */}
            <div style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
              transitionDelay: "0.55s",
              display: "flex", gap: "16px", flexWrap: "wrap",
            }}>
              <button
                className="btn-primary"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get a Free Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button
                className="btn-outline"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Our Services
              </button>
            </div>

            {/* Stats */}
            <div style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.7s ease",
              transitionDelay: "0.75s",
              display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
              gap: "16px", marginTop: "56px",
              paddingTop: "36px",
              borderTop: "1px solid rgba(44,74,110,0.5)",
            }}>
              {stats.map((stat, i) => (
                <div key={stat.label} style={{
                  opacity: statsVisible ? 1 : 0,
                  transform: statsVisible ? "translateY(0)" : "translateY(12px)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                  transitionDelay: `${i * 0.1}s`,
                }}>
                  <div style={{
                    fontSize: "1.6rem", fontWeight: 700, color: "#D4A843", marginBottom: "4px",
                    fontFamily: "'Playfair Display', serif",
                  }}>
                    {stat.value}
                  </div>
                  <div style={{ color: "#C0C8D8", fontSize: "11px", letterSpacing: "0.04em" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Logo showcase */}
          <div className="hidden lg:flex items-center justify-center relative" style={{ minHeight: "460px" }}>
            {/* Outer dashed ring */}
            <div style={{
              position: "absolute",
              width: "420px", height: "420px",
              borderRadius: "50%",
              border: "1px dashed rgba(44,74,110,0.7)",
              animation: "spinRing 35s linear infinite",
            }} />
            {/* Inner solid ring */}
            <div style={{
              position: "absolute",
              width: "340px", height: "340px",
              borderRadius: "50%",
              border: "1px solid rgba(212,168,67,0.2)",
              animation: "spinRing 22s linear infinite reverse",
            }} />
            {/* Glowing ring */}
            <div style={{
              position: "absolute",
              width: "300px", height: "300px",
              borderRadius: "50%",
              boxShadow: "0 0 60px rgba(212,168,67,0.15), inset 0 0 60px rgba(30,58,95,0.3)",
            }} />

            {/* Logo */}
            <div style={{
              position: "relative",
              width: "280px", height: "280px",
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: "0 0 80px rgba(212,168,67,0.2), 0 0 0 4px #1E3A5F",
              opacity: visible ? 1 : 0,
              transform: visible ? "scale(1)" : "scale(0.85)",
              transition: "opacity 0.9s ease, transform 0.9s ease",
              transitionDelay: "0.3s",
            }}>
              <Image src="/logo.jpeg" alt="Frigate Logistics" fill className="object-cover" priority />
            </div>

            {/* Floating badge — top right */}
            <div style={{
              position: "absolute", top: "30px", right: "10px",
              background: "rgba(6,15,30,0.95)",
              border: "1px solid #2C4A6E", borderRadius: "14px",
              padding: "12px 16px", backdropFilter: "blur(10px)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
              transitionDelay: "0.8s",
            }}>
              <div style={{ color: "#D4A843", fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>AMAZON</div>
              <div style={{ color: "white", fontSize: "11px" }}>Delivery Partner</div>
            </div>

            {/* Floating badge — bottom left */}
            <div style={{
              position: "absolute", bottom: "50px", left: "10px",
              background: "rgba(6,15,30,0.95)",
              border: "1px solid #2C4A6E", borderRadius: "14px",
              padding: "12px 16px", backdropFilter: "blur(10px)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
              transitionDelay: "1s",
            }}>
              <div style={{ color: "#D4A843", fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>MFN</div>
              <div style={{ color: "white", fontSize: "11px" }}>Fulfillment Network</div>
            </div>

            {/* Orbiting dot */}
            <div style={{
              position: "absolute",
              width: "420px", height: "420px",
              borderRadius: "50%",
              animation: "spinRing 8s linear infinite",
              pointerEvents: "none",
            }}>
              <div style={{
                position: "absolute",
                top: "-5px", left: "50%",
                width: "10px", height: "10px",
                borderRadius: "50%",
                background: "#D4A843",
                boxShadow: "0 0 12px #D4A843",
                transform: "translateX(-50%)",
              }} />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gridDrift {
          0% { background-position: 0 0; }
          100% { background-position: 60px 60px; }
        }
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.4; }
          50% { transform: translateY(-18px) scale(1.3); opacity: 0.9; }
        }
        @keyframes orbPulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.15); opacity: 1; }
        }
        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes spinRing {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
      `}</style>
    </section>
  );
}
