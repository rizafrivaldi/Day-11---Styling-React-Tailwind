/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        secondary: "#14b8a6",
        dark: "#0f172a",
        light: "#f8fafc",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
