"use client";

const highlights = [
  { label: "Amazon DSP Partner", icon: "📦" },
  { label: "MFN Certified", icon: "🏭" },
  { label: "Pan-India Coverage", icon: "🗺️" },
  { label: "ISO Compliant", icon: "✅" },
  { label: "24/7 Operations", icon: "⏱️" },
  { label: "Insured Fleet", icon: "🚛" },
  { label: "99.2% On-Time Rate", icon: "⚡" },
  { label: "10,000+ Deliveries/Month", icon: "🎯" },
];

export default function TrustBar() {
  // Triplicate so the loop is always filled on any screen width
  const items = [...highlights, ...highlights, ...highlights];

  return (
    <div
      className="bg-[#060f1e] border-y border-[#1E3A5F]/60 py-4 overflow-hidden"
      style={{ position: "relative" }}
    >
      {/* Left fade */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "80px",
          background: "linear-gradient(to right, #060f1e, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      {/* Right fade */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "80px",
          background: "linear-gradient(to left, #060f1e, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "trustMarquee 30s linear infinite",
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "0 36px",
              borderRight: "1px solid rgba(44,74,110,0.5)",
              flexShrink: 0,
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ fontSize: "18px", lineHeight: 1 }}>{item.icon}</span>
            <span
              style={{
                color: "#C0C8D8",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.06em",
              }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes trustMarquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
      `}</style>
    </div>
  );
}
