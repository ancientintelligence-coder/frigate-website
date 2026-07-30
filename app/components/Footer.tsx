"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#060f1e", borderTop: "1px solid rgba(30,58,95,0.6)", paddingTop: "64px", paddingBottom: "32px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px", marginBottom: "48px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ position: "relative", width: "56px", height: "56px", borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
                <Image src="/logo.png" alt="Frigate Logistics" fill style={{ objectFit: "cover" }} />
              </div>
              <div>
                <div style={{ color: "white", fontWeight: 700, fontFamily: "'Playfair Display', serif" }}>Frigate Logistics</div>
                <div style={{ color: "#D4A843", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase" }}>Ltd</div>
              </div>
            </div>
            <p style={{ color: "#C0C8D8", fontSize: "13px", lineHeight: 1.7, marginBottom: "20px" }}>Your trusted Amazon EDSP delivery partner and full-service logistics company. Delivering excellence across every mile.</p>
          </div>

          <div>
            <h4 style={{ color: "white", fontWeight: 600, fontSize: "14px", marginBottom: "20px" }}>Company</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {[["About Us", "/about"], ["Our Services", "/services"], ["Contact Us", "/contact"]].map(([label, href]) => (
                <li key={label}><Link href={href} style={{ color: "#C0C8D8", fontSize: "13px", textDecoration: "none" }}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: "white", fontWeight: 600, fontSize: "14px", marginBottom: "20px" }}>Services</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {["Amazon EDSP Last-Mile Delivery", "MFN Fulfillment", "E-commerce Logistics", "Transport Services", "Fleet Operations", "Real-Time Tracking"].map(s => (
                <li key={s} style={{ color: "#C0C8D8", fontSize: "13px" }}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: "white", fontWeight: 600, fontSize: "14px", marginBottom: "20px" }}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <div style={{ color: "#D4A843", fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>E-commerce</div>
                <div style={{ color: "#C0C8D8", fontSize: "13px" }}>9924626900</div>
                <div style={{ color: "#C0C8D8", fontSize: "12px" }}>sunil@fll.co.in</div>
                <div style={{ color: "#C0C8D8", fontSize: "12px" }}>hardik@fll.co.in</div>
              </div>
              <div>
                <div style={{ color: "#D4A843", fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>Transport</div>
                <div style={{ color: "#C0C8D8", fontSize: "13px" }}>9327234001</div>
                <div style={{ color: "#C0C8D8", fontSize: "12px" }}>rpchoudhary@fll.co.in</div>
              </div>
              <div>
                <div style={{ color: "#D4A843", fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>Address</div>
                <div style={{ color: "#C0C8D8", fontSize: "12px", lineHeight: 1.6 }}>G-1, Vaibhav Residency, Opp. Shivam Tenament, Vadodara, Gujarat — 390012</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(30,58,95,0.4)", paddingTop: "24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
          <p style={{ color: "#C0C8D8", fontSize: "12px" }}>© {new Date().getFullYear()} Frigate Logistics Ltd. All Rights Reserved.</p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms of Service"].map(t => (
              <a key={t} href="#" style={{ color: "#C0C8D8", fontSize: "12px", textDecoration: "none" }}>{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
