/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      maxWidth: {
        container: "1440px",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        // DARK MODE
        bodyColor: "#0a0f1a",
        darkCard: "#111827",
        darkCardAlt: "#1a2332",
        lightText: "#f5f7fa",
        mutedText: "#94a3b8",
        designColor: "#3b82f6",
        darkRed: "#ef4444",
        darkBorder: "#1e293b",

        // LIGHT MODE
        lightBody: "#f8fafc",
        lightBodyAlt: "#eff6ff",
        lightCard: "#ffffff",
        blackText: "#0a0a0a",
        grayText: "#475569",
        blueAccent: "#2563eb",
        redAccent: "#dc2626",
        lightBorder: "#dbeafe",
      },
    },
  },
  plugins: [],
};