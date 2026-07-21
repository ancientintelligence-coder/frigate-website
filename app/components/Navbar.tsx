"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      transition: "all 0.4s ease",
      background: scrolled ? "rgba(10,22,40,0.96)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(44,74,110,0.4)" : "1px solid transparent",
      boxShadow: scrolled ? "0 2px 30px rgba(0,0,0,0.4)" : "none",
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "80px" }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
            <div style={{ position: "relative", width: "48px", height: "48px", borderRadius: "50%", overflow: "hidden", border: "2px solid #2C4A6E", flexShrink: 0 }}>
              <Image src="/logo.jpeg" alt="Frigate Logistics" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="hidden-mobile">
              <div style={{ color: "white", fontWeight: 700, fontSize: "1.05rem", lineHeight: 1.2, fontFamily: "'Playfair Display', serif" }}>
                Frigate Logistics
              </div>
              <div style={{ color: "#D4A843", fontSize: "10px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Ltd
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "40px" }} className="desktop-nav">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.label} href={item.href} style={{
                  position: "relative", color: isActive ? "#D4A843" : "#C0C8D8",
                  fontSize: "14px", fontWeight: 500, letterSpacing: "0.05em",
                  textDecoration: "none", transition: "color 0.3s",
                  paddingBottom: "4px",
                }}
                onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = "#D4A843"; }}
                onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = "#C0C8D8"; }}
                >
                  {item.label}
                  <span style={{
                    position: "absolute", bottom: 0, left: 0,
                    width: isActive ? "100%" : "0",
                    height: "1px", background: "#D4A843",
                    transition: "width 0.3s",
                  }} />
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <Link href="/contact" className="btn-primary desktop-cta" style={{ fontSize: "13px" }}>
            Get a Quote
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          {/* Mobile toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", color: "#C0C8D8", cursor: "pointer", padding: "8px" }}
          >
            {menuOpen ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div style={{
        maxHeight: menuOpen ? "320px" : "0",
        overflow: "hidden", transition: "max-height 0.3s ease",
        background: "rgba(10,22,40,0.98)", borderTop: menuOpen ? "1px solid rgba(44,74,110,0.4)" : "none",
      }}>
        <div style={{ padding: "16px 32px 24px", display: "flex", flexDirection: "column", gap: "4px" }}>
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} style={{
              color: pathname === item.href ? "#D4A843" : "#C0C8D8",
              padding: "12px 0", fontSize: "15px", fontWeight: 500,
              borderBottom: "1px solid rgba(44,74,110,0.3)", textDecoration: "none",
            }}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary" style={{ marginTop: "16px", justifyContent: "center" }}>
            Get a Quote
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav, .desktop-cta, .hidden-mobile { display: none !important; }
        }
        @media (min-width: 769px) {
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
