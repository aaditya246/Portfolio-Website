/** @type {import('tailwindcss').Config} */
export default {
darkMode: "class",

content: [
"./index.html",
"./src/**/*.{js,jsx,ts,tsx}",
],

theme: {
extend: {
colors: {
void: "#05060A",

    panel: "#0D0F18",

    "panel-light": "#15182A",

    accent: {
      DEFAULT: "#3B82F6",
      glow: "#93C5FD",
      dark: "#1D4ED8",
    },

    ink: {
      DEFAULT: "#E5E7EB",
      muted: "#6B7280",
      faint: "#9CA3AF",
    },

    border: {
      DEFAULT: "rgba(255,255,255,0.08)",
      hover: "rgba(59,130,246,0.4)",
    },
  },

  fontFamily: {
    display: ['"Space Grotesk"', "sans-serif"],
    body: ['"Inter"', "sans-serif"],
    mono: ['"JetBrains Mono"', "monospace"],
  },

  backgroundImage: {
    "grid-pattern":
      "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",

    "glow-radial":
      "radial-gradient(circle at center, rgba(59,130,246,0.15) 0%, transparent 70%)",
  },

  backgroundSize: {
    grid: "40px 40px",
  },

  boxShadow: {
    glow: "0 0 40px rgba(59,130,246,0.25)",
    "glow-sm": "0 0 20px rgba(59,130,246,0.15)",
    card: "0 8px 32px rgba(0,0,0,0.4)",
  },

  animation: {
    float: "float 6s ease-in-out infinite",
    "float-slow": "float 10s ease-in-out infinite",
    "float-delayed": "float 8s ease-in-out infinite 2s",
    blink: "blink 1s step-end infinite",
    "pulse-slow":
      "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
  },

  keyframes: {
    float: {
      "0%, 100%": {
        transform: "translateY(0px) translateX(0px)",
      },
      "50%": {
        transform: "translateY(-20px) translateX(10px)",
      },
    },

    blink: {
      "0%, 100%": {
        opacity: "1",
      },
      "50%": {
        opacity: "0",
      },
    },
  },

  maxWidth: {
    content: "1280px",
  },
},


},

plugins: [],
};
