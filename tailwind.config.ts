import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        newBlue: "#478ac9",
        newRed: "#dc2626",
        newGray: "#111111",
        newGray02: "#e5e5e5",
        black: "#000",
        newBlack: "#292d33",
        bgFooter: "#333333",
        footerLink: "#adcce9",
        white: "#fff",
      },
      keyframes: {
        left: {
          "0%": { transform: "translateX(-500px)", opacity: "0" },
          "100": { transform: "translateX(0)", opacity: "1" },
        },
        bottom: {
          "0%": { transform: "translateY(500px)", opacity: "0" },
          "100": { transform: "translateY(0)", opacity: "1" },
        },
        rotateImage: {
          "0%": { transform: "rotate(180deg) scale(0)" },
          "100": { transform: "rotate(0deg) scale(1)" },
        },
      },
      animation: {
        left: "left 1.5s ease-in-out",
        bottom: "bottom 1.5s ease-in-out",
        rotateImg: "rotateImage 2s ease-in-out",
      },
      screens: {
        cel: { max: "768px" },
        tablet: { max: "992px" },
        desktop: { max: "1200px" },
        TV: { max: "50000px" },
      },
    },
  },
  plugins: [],
};
export default config;
