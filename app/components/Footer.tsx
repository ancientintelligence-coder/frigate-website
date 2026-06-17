import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#060f1e] border-t border-[#1E3A5F]/60 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#2C4A6E]">
                <Image src="/logo.jpeg" alt="Frigate Logistics" fill className="object-cover" />
              </div>
              <div>
                <div className="text-white font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Frigate Logistics
                </div>
                <div className="text-[#D4A843] text-xs tracking-widest uppercase">Pvt Ltd</div>
              </div>
            </div>
            <p className="text-[#C0C8D8] text-sm leading-relaxed mb-5">
              Your trusted Amazon delivery partner and full-service logistics company.
              Delivering excellence across every mile.
            </p>
            <div className="flex gap-3">
              {["facebook", "linkedin", "twitter"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-[#1E3A5F] border border-[#2C4A6E] flex items-center justify-center text-[#C0C8D8] hover:border-[#D4A843] hover:text-[#D4A843] transition-all duration-300"
                  aria-label={s}
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    {s === "facebook" && <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />}
                    {s === "linkedin" && <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" />}
                    {s === "twitter" && <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Our Services", "Contact Us"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() =>
                      document
                        .getElementById(link.toLowerCase().replace(" ", "").replace("us", "").replace("our", "").trim() || "home")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-[#C0C8D8] text-sm hover:text-[#D4A843] transition-colors duration-300"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Services</h4>
            <ul className="space-y-3">
              {[
                "Amazon Last-Mile Delivery",
                "MFN Fulfillment",
                "Pick-Up Services",
                "Return Logistics",
                "Fleet Transport",
                "Real-Time Tracking",
              ].map((s) => (
                <li key={s}>
                  <span className="text-[#C0C8D8] text-sm hover:text-[#D4A843] transition-colors duration-300 cursor-default">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Quick */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <div className="text-[#D4A843] mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-[#C0C8D8] text-sm">+91 98765 43210</span>
              </li>
              <li className="flex gap-3 items-start">
                <div className="text-[#D4A843] mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-[#C0C8D8] text-sm">info@frigatelogistics.in</span>
              </li>
              <li className="flex gap-3 items-start">
                <div className="text-[#D4A843] mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <span className="text-[#C0C8D8] text-sm">Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1E3A5F]/40 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#C0C8D8] text-xs">
            © {year} Frigate Logistics Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#C0C8D8] text-xs hover:text-[#D4A843] transition-colors">Privacy Policy</a>
            <a href="#" className="text-[#C0C8D8] text-xs hover:text-[#D4A843] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
