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
        "main-text": "#213547",
        "light-text": "#f0f0fb",
        "gray-txt": "#909090",
        "light-gray-text": "#c7c7c7",
        "dark-text": "#111827",
        active: "#8b008b",
        "error-text": "#c81830",
        "success-text": "#119e58",
        "main-bg": "#f0f0f0",
        "header-bg": "#d9dbe5",
        "theme-green": "#6aa4b8",
        "button-bg": "#6aa4b8cc",
        "light-bg": "#ffffff",
        "mobil-bg": "#191a1e60",
        "drop-bg": "#000000D9",
        "genre-bg": "#00000099",
        faceblue: "#1e90ff",
        "dark-bg": "#0b0f19",
        "dark-hover": "#f64825",
        "second-bg": "#181818",
        "input-bg": "#222222",
        "gray-bg": "#c4c4c4",
      },
      boxShadow: {
        "item-shadow": "1px 4px 4px 2px rgb(157,162,235,0.1)",
        "button-shadow": "-1px 6px 10px 8px rgb(157,162,235,0.1)",
        "image-shadow": "-1px 6px 10px 8px rgb(157,162,235,0.2)",
        "around-shadow": "-1px 5px 20px 10px rgb(157,162,235,0.5)",
      },
    },
  },
  plugins: [],
};
export default config;
