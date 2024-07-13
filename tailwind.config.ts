import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors:{
        "border-dark":"rgba(212, 212, 216, 0.2)",
        "border-darker":"rgba(24,24,27,0.05)",
        "border-light":"#f4f4f5",
        "brand-black":"#18181b",
        "light-purple":"#FBB3FB",
        "deep-purple":"#87028A",
        "brand-text":"#27272a",
        "brand-text-light":"#e4e4e7",
        "brand-shadow":"rgba(3, 39, 42, 0.05)",
        "brand-bg":"rgba(39,39,42,0.9)"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      
    },
  },
  plugins: [],
};
export default config;
