/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lexend", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#703BF7",
        "primary-hover": "#8255F7",
        "primary-dark": "#5A2ED4",
        background: "#1A1A1A",
        surface: "#141414",
        "surface-light": "#141414",
        border: "#262626",
        "border-light": "#333333",
        "text-primary": "#FFFFFF",
        "text-secondary": "#999999",
        "text-muted": "#666666",
      },
      borderRadius: {
        "4xl": "32px",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
    },
  },
  plugins: [],
};

module.exports = config;
