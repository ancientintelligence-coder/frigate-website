"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#060f1e", borderTop: "1px solid rgba(30,58,95,0.6)", paddingTop: "64px", paddingBottom: "32px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px", marginBottom: "48px" }}>
          {/* Brand */}
          <div style={{ gridColumn: "span 1" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ position: "relative", width: "48px", height: "48px", borderRadius: "50%", overflow: "hidden", border: "2px solid #2C4A6E", flexShrink: 0 }}>
                <Image src="/logo.jpeg" alt="Frigate Logistics" fill style={{ objectFit: "cover" }} />
              </div>
              <div>
                <div style={{ color: "white", fontWeight: 700, fontFamily: "'Playfair Display', serif" }}>Frigate Logistics</div>
                <div style={{ color: "#D4A843", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase" }}>Ltd</div>
              </div>
            </div>
            <p style={{ color: "#C0C8D8", fontSize: "13px", lineHeight: 1.7, marginBottom: "20px" }}>
              Your trusted Amazon delivery partner and full-service logistics company. Delivering excellence across every mile.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              {[
                { label: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                { label: "LinkedIn", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" },
                { label: "Twitter", path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
              ].map((s) => (
                <a key={s.label} href="#" aria-label={s.label} style={{
                  width: "34px", height: "34px", borderRadius: "8px",
                  background: "#1E3A5F", border: "1px solid #2C4A6E",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#C0C8D8", transition: "all 0.3s", textDecoration: "none",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#D4A843"; (e.currentTarget as HTMLElement).style.color = "#D4A843"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#2C4A6E"; (e.currentTarget as HTMLElement).style.color = "#C0C8D8"; }}
                >
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d={s.path} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ color: "white", fontWeight: 600, fontSize: "14px", marginBottom: "20px", letterSpacing: "0.05em" }}>Company</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {[["About Us", "/about"], ["Our Services", "/services"], ["Contact Us", "/contact"]].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} style={{ color: "#C0C8D8", fontSize: "13px", textDecoration: "none", transition: "color 0.3s" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#D4A843"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#C0C8D8"}
                  >{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: "white", fontWeight: 600, fontSize: "14px", marginBottom: "20px" }}>Services</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {["Amazon Last-Mile Delivery", "MFN Fulfillment", "Pick-Up Services", "Return Logistics", "Fleet Transport", "Real-Time Tracking"].map((s) => (
                <li key={s} style={{ color: "#C0C8D8", fontSize: "13px" }}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "white", fontWeight: 600, fontSize: "14px", marginBottom: "20px" }}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", text: "+91 98765 43210" },
                { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", text: "info@frigatelogistics.in" },
                { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Mumbai, Maharashtra, India" },
              ].map((c) => (
                <div key={c.text} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <svg width="16" height="16" fill="none" stroke="#D4A843" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: "2px" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={c.icon} />
                  </svg>
                  <span style={{ color: "#C0C8D8", fontSize: "13px" }}>{c.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(30,58,95,0.4)", paddingTop: "24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
          <p style={{ color: "#C0C8D8", fontSize: "12px" }}>
            © {new Date().getFullYear()} Frigate Logistics Ltd. All Rights Reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms of Service"].map((t) => (
              <a key={t} href="#" style={{ color: "#C0C8D8", fontSize: "12px", textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#D4A843"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#C0C8D8"}
              >{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
