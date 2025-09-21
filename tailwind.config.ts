import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: { center: true, padding: "1rem", screens: { "2xl": "1280px" } },
    extend: {
      fontFamily: { sans: ["var(--font-epilogue)", "system-ui", "ui-sans-serif", "Segoe UI", "Roboto", "Apple Color Emoji", "Noto Color Emoji"] },
      colors: {
        bg: "hsl(var(--bg))",
        fg: "hsl(var(--fg))",
        muted: "hsl(var(--muted))",
        brand: "hsl(var(--brand))",
        accent: "hsl(var(--accent))",
        card: "hsl(var(--card))",
        border: "hsl(var(--border))",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      backgroundImage: {
        "dot-grid": "radial-gradient(currentColor 0.75px, transparent 0.75px)",
      },
      backgroundSize: {
        "dot-grid": "16px 16px",
      }
    },
  },
  plugins: [],
};
export default config;
