import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        bgSoft: "#182237",
        bgDark: "#151c2c",
        pending: "#f7cb7375",
        done: "#afd6ee75",
        cancelled: "#f7737375",
      },
      colors: {
        soft: "#b7bac1",
        textWhite: "white",
      },
    },
  },
  plugins: [],
};
export default config;
