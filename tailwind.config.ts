import type { Config } from "tailwindcss";

export default {
  darkMode:'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow:{
        'custom':'0px 0px 15px 2px rgba(0,0,0,0.1);',
        'dcustom':'3px 3px 15px 2px rgba(255,255,255,0.3);'
      }
    },
  },
  plugins: [],
} satisfies Config;
