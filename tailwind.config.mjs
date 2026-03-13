/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#09111f",
        steel: "#4d5b78",
        mist: "#d9e2f2",
        panel: "#0f1a30",
        accent: "#57d0ff",
        copper: "#f3a65a",
        signal: "#99f7d2"
      },
      boxShadow: {
        glow: "0 20px 60px rgba(87, 208, 255, 0.12)"
      },
      fontFamily: {
        sans: ["'Space Grotesk'", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        grid:
          "linear-gradient(to right, rgba(217, 226, 242, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(217, 226, 242, 0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
