import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Ad banner sizes
      adSizes: {
        leaderboard: { width: 728, height: 90 },
        mediumRectangle: { width: 300, height: 250 },
        largeRectangle: { width: 336, height: 280 },
        wideSkyscraper: { width: 160, height: 600 },
      },
    },
  },
  plugins: [],
} satisfies Config;
