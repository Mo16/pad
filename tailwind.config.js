/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-pattern": "url('/public/assets/images/bg-starts.png')",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        scale: "scaleFrame 6s linear 1",
        load: "loadFrame 6s linear 1",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        scaleFrame: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(8)" },
        },
        loadFrame: {
          "0%": { width: 0 },
          "100%": { width: "100%" },
        },
      },
      scale: {
        800: "8",
      },
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
    },
    backgroundColor: {
      white: "#FFFFFF",
      black: "#000000",
      transparent: "transparent",
    },
    fontFamily: {
      sans: ["Futura", "sans-serif"],
      serif: ["Fritz-Quad", "serif"],
    },
  },
  plugins: [],
};
