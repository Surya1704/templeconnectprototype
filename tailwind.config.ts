import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary":    "var(--bg-primary)",
        "bg-secondary":  "var(--bg-secondary)",
        "bg-card":       "var(--bg-card)",
        "bg-deep":       "var(--bg-deep)",
        "ink-primary":   "var(--ink-primary)",
        "ink-secondary": "var(--ink-secondary)",
        "ink-tertiary":  "var(--ink-tertiary)",
        "ink-muted":     "var(--ink-muted)",
        "accent":        "var(--accent)",
        "accent-deep":   "var(--accent-deep)",
        "accent-soft":   "var(--accent-soft)",
        "accent-glow":   "var(--accent-glow)",
        "line-hair":     "var(--line-hair)",
        "line-soft":     "var(--line-soft)",
        "line-strong":   "var(--line-strong)",
        border:          "var(--line-hair)",
      },
      fontFamily: {
        serif:    ["'Crimson Pro'", "serif"],
        sans:     ["'Inter'", "system-ui", "sans-serif"],
        fraunces: ["'Crimson Pro'", "serif"],
        cinzel:   ["'Crimson Pro'", "serif"],
        playfair: ["'Crimson Pro'", "serif"],
      },
      borderRadius: {
        sm:    "6px",
        md:    "12px",
        lg:    "20px",
        xl:    "28px",
        pill:  "9999px",
        image: "16px",
      },
      spacing: {
        120: "120px",
        160: "160px",
      },
      maxWidth: {
        container: "1280px",
      },
      transitionTimingFunction: {
        "fc-out": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        "160": "160ms",
        "320": "320ms",
        "480": "480ms",
        "640": "640ms",
        "1200": "1200ms",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
      animation: {
        "float-slow": "float-slow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
