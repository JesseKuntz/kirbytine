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
    },
  },
  plugins: [],
} satisfies Config;
