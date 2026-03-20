/*
  Two-level color system:
    Level 1 — Palette   : concrete shades (teal-500, sand-200…)
    Level 2 — Semantic  : roles (accent, surface, bg-base…)
*/

tailwind.config = {
  theme: {
    extend: {
      /* LEVEL 1: PALETTE */
      colors: {
        teal: {
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
        },
        sand: {
          50: "#fdfaf5",
          100: "#f8f1e4",
          200: "#eedfc4",
          300: "#e0c89a",
        },

        /* LEVEL 2: SEMANTIC TOKENS 
           Use these names in HTML — they describe the COLOR ROLE,
           not the visual shade. This makes refactoring painless.
        */

        // Interactive elements: buttons, links, icons
        accent: "#14b8a6", // = teal-500
        "accent-dark": "#0d9488", // hover / pressed state
        "accent-light": "#ccfbf1", // subtle tinted background

        // Backgrounds
        "bg-base": "#fef3e2", // main page background — warm amber tint, clearly visible
        "bg-alt": "#fde8c0", // alternating section background — one step deeper
        "bg-dark": "#0f172a", // dark sections (footer, cta)

        // Surfaces (elements sitting ON the background)
        surface: "#ffffff", // cards, modals, panels
        border: "#e0c89a", // dividers, card outlines

        // Typography
        "text-primary": "#0f172a", // headings
        "text-body": "#334155", // body copy
        muted: "#64748b", // captions, placeholders
      },

      /* FONTS 
         font-heading → Cormorant Garamond (elegant serif for titles)
         font-sans    → Outfit (geometric sans-serif for body text)
      */
      fontFamily: {
        heading: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Outfit"', "system-ui", "sans-serif"],
      },

      /* SHADOWS */
      boxShadow: {
        soft: "0 2px 16px rgba(15,23,42,0.06)",
        card: "0 4px 32px rgba(15,23,42,0.5)",
        "card-hover": "0 12px 48px rgba(15,23,42,0.15)",
      },

      /* BORDER RADIUS */
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
      },

      /* KEYFRAME ANIMATIONS */
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in": {
          "0%": { opacity: "0", transform: "translateX(100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease both",
        "fade-in": "fade-in 0.4s ease both",
        "slide-in": "slide-in 0.35s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
};
