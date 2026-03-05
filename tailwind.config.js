import { createRequire } from 'module';

const require = createRequire(import.meta.url);

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        grid: "grid 15s linear infinite",
        marquee: "marquee var(--duration, 40s) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration, 40s) linear infinite",
        "border-beam": "border-beam var(--duration, 15s) infinite linear",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite alternate",
      },
      keyframes: {
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap, 1rem)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap, 1rem)))" },
        },
        "border-beam": {
          "0%": {
            "offset-distance": "0%",
          },
          "100%": {
            "offset-distance": "100%",
          },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.15)" },
        },
      },
    },
  },
  plugins: [],
};

