import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
        robotoMono: ["var(--font-roboto-mono)", "monospace"],
        robotoSerif: ["var(--font-roboto-serif)", "serif"],
      },
      screens: { xs: "520px", "2xl": "1400px" },
      colors: {
        primary: {
          background: "rgba(255, 255, 255, .05)",
          foreground: "#fff",
        },
        secondary: {
          background: "rgba(255, 255, 255, .03)",
          foreground: "rgba(255,255,255,0.4)",
        },
        blue: {
          joust: "#56acff",
          cosmos: "#003049",
          hera: "#7179ef",
        },
        green: {
          benzol: "#00d372",
        },
        pink: {
          ice: "#d87cac",
        },
        border: "rgb(255 255 255 / 0.05)",
        purple: "#9B59B6",
        hotpink: "#FA2B88",
      },
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        //"grain":"url(/assets/images/background/noisy-background.png)",
      },
      animation: {
        "noisy-bg":"noise 1s steps(2) infinite",
        wave: "wave 1.5s infinite",
      },
      keyframes: {
        noise: {
          "0%": {
            transform: "translate3d(0, 9rem, 0)",
          },
          "10%": {
            transform: "translate3d(-1rem, -4rem, 0)",
          },
          "20%": {
            transform: "translate3d(-8rem, 2rem, 0)",
          },
          "30%": {
            transform: "translate3d(9rem, -9rem, 0)",
          },
          "40%": {
            transform: "translate3d(-2rem, 7rem, 0)",
          },
          "50%": {
            transform: "translate3d(-9rem, -4rem, 0)",
          },
          "60%": {
            transform: "translate3d(2rem, 6rem, 0)",
          },
          "70%": {
            transform: "translate3d(7rem, -8rem, 0)",
          },
          "80%": {
            transform: "translate3d(-9rem, 1rem, 0)",
          },
          "90%": {
            transform: "translate3d(6rem, -5rem, 0)",
          },
          to: {
            transform: "translate3d(-7rem, 0, 0)",
          },
        },
        wave: { 
          '0%': { transform: 'rotate(0deg)' },
          '20%': { transform: 'rotate(-10deg)' },
          '40%': { transform: 'rotate(25deg)' }, 
          '60%': { transform: 'rotate(-10deg)' },
          '80%': { transform: 'rotate(25deg)' }, 
          '100%': { transform: 'rotate(0deg)' },
        },
      }
    },
  },
  plugins: [],
};
export default config;
