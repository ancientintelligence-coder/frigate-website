import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1628",
          light: "#1E3A5F",
          mid: "#162844",
        },
        steel: "#2C4A6E",
        silver: "#C0C8D8",
        "silver-light": "#E8EDF5",
        gold: "#D4A843",
        "gold-light": "#F0C96A",
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "navy-gradient": "linear-gradient(135deg, #0A1628 0%, #1E3A5F 50%, #0A1628 100%)",
        "hero-pattern": "radial-gradient(ellipse at 20% 50%, #1E3A5F 0%, #0A1628 70%)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "wave": "wave 8s linear infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        wave: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
