import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        prompt: ["var(--font-prompt)", "Maven Pro", "sans-serif"],
        mavenpro: ["var(--font-mavenpro)", "Maven Pro", "sans-serif"],
      },
      colors: {
        primary: "#4A7AC1",
        secondary: "#FFDBCB",
        black: "#252525",
        gray: {
          e4e: "#E4E4E4",
          "8b8": "#8B8B8B",
        },
      },
    },
  },
  plugins: [],
};
export default config;
