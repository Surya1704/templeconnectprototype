import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        // shadcn primitives
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },

        // FaithConnect palette
        ground: {
          ivory: "hsl(var(--ground-ivory))",
          sand: "hsl(var(--ground-sand))",
          bone: "hsl(var(--ground-bone))",
          deep: "hsl(var(--ground-deep))",
        },
        ink: {
          espresso: "hsl(var(--ink-espresso))",
          walnut: "hsl(var(--ink-walnut))",
          stone: "hsl(var(--ink-stone))",
          mist: "hsl(var(--ink-mist))",
        },
        copper: {
          400: "hsl(var(--copper-400))",
          500: "hsl(var(--copper-500))",
          600: "hsl(var(--copper-600))",
          DEFAULT: "hsl(var(--copper-500))",
        },

        // Legacy `spiritual-*` aliases — mapped to new palette so existing
        // pages keep rendering until Phases C/D rebuild them.
        spiritual: {
          saffron: "hsl(var(--copper-500))",
          ochre: "hsl(var(--copper-600))",
          maroon: "hsl(var(--ink-espresso))",
          gold: "hsl(var(--copper-400))",
          deepgold: "hsl(var(--copper-600))",
          ivory: "hsl(var(--ground-ivory))",
          sandstone: "hsl(var(--ground-sand))",
          copper: "hsl(var(--copper-500))",
          vermilion: "hsl(var(--copper-600))",
          turmeric: "hsl(var(--copper-400))",
        },
      },
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
        cinzel: ["Fraunces", "serif"], // legacy alias
        playfair: ["Fraunces", "serif"], // legacy alias
        serif: ["Fraunces", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        deva: ["'Noto Serif Devanagari'", "serif"],
      },
      borderRadius: {
        sm: "6px",
        md: "12px",
        lg: "20px",
        xl: "28px",
        pill: "999px",
        image: "16px",
      },
      transitionTimingFunction: {
        "fc-out": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-pulse": {
          "0%, 100%": { transform: "scaleY(1)", opacity: "0.4" },
          "50%": { transform: "scaleY(1.4)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.64s cubic-bezier(0.22, 1, 0.36, 1) both",
        "scale-pulse": "scale-pulse 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
