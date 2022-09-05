/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        gradientStart: "hsl(249, 99%, 64%)",
        gradientEnd: "hsl(278, 94%, 30%)",
        errorRed: "hsl(0, 100%, 66%)",
        lightGrayishViolet: "hsl(270, 3%, 87%)",
        darkGrayishViolet: "hsl(279, 6%, 55%)",
        veryDarkViolet: "hsl(278, 68%, 11%)"
      },
      fontFamily: {
        grotesk: ['Space Grotesk', "sans-serif"]
      }
    },
  },
  plugins: [],
}
