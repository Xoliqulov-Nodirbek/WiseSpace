/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textColor: "#002F5F",
        btnColor: "#FF6B35",
        btnHoverColor: "#e8521c",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "unversity-image": "url('/images/unversity.png')",
      },
    },
  },
  plugins: [],
};
