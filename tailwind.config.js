/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      black: "#000",
      white: "#fff",
      brown_text: "#FFE9D3CA",
      brown_0: "#EDC4B3",
      brown_1: "#E6B8A2",
      brown_2: "#DEAB90",
      brown_3: "#D69F7e",
      brown_4: "#CD9777",
      brown_5: "#C38E70",
      brown_6: "#B07D62",
      brown_7: "#9D6B53",
      brown_8: "#8A5A44",
      brown_9: "#774936",
      brown_dark_text: "#5E3A2B",
      green_0: "#FEFAE0",
      green_1: "#E9EDC9",
      green_2: "#CCD5AE",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      playfair: ["Playfair Display", "serif"],
      play: ["Playfair", "serif"],
      serifdisplay: ["DM Serif Display", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      gridAutoColumns: {
        fr3: "minmax(3, 5fr)",
      },
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "6xl": "4.882rem",
      "7xl": "6.104rem",
    },
  },
  plugins: [],
};
