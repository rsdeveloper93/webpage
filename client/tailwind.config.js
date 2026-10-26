/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { orange: "#ff650e", ink: "#111315", mist: "#f5f6f7" },
      boxShadow: { soft: "0 12px 36px rgba(17,19,21,.07)" }
    }
  },
  plugins: []
};
