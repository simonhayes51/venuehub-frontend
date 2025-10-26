export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0c0f17",
        card: "#121728",
        brand: { primary:"#22d3a6", secondary:"#60a5fa", accent:"#f472b6" }
      },
      boxShadow: { soft:"0 12px 30px rgba(0,0,0,.25)" }
    }
  },
  plugins: []
};