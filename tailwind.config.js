export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0c0f17",
        card: "#121728",
        brand: { primary:"#9b5cff", secondary:"#00e7f0", accent:"#ff4d6d" }
      },
      boxShadow: { soft:"0 10px 30px rgba(0,0,0,.25)" }
    }
  },
  plugins: []
};