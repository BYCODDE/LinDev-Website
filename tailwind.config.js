/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["Gilroy GEO Heavy", "sans-serif"],
        nino: ["BPG Nino Mtavruli", "sans-serif"],
      },
      colors: {
        blueCustom: "#2662D6",
        tealCustom: "#3DB8B1",
      },
    },
  },
  plugins: [],
};
