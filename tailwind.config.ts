import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#d74894",
        },
        secondary: {
          DEFAULT: "#f7daea",
        },
        tertiary: {
          DEFAULT: "#efb6d4",
        },
      },
      fontFamily: {
        sans: ["Gaegu", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
