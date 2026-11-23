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
        primary: "#2D257D",
        secondary: "#581C87",
        tertiary: "#9CA3AF",
        neutral: "#F5EFFF",
        surface: "#FFFFFF",
        "on-surface": "#2A1647",
        error: "#B42318",
        border: "#E5E7EB",
      },
      fontFamily: {
        serif: [
          '"Emotion Serif"',
          '"Playfair Display"',
          'Didot',
          '"Bodoni MT"',
          'Georgia',
          'serif',
        ],
        mono: [
          '"IBM Plex Mono"',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
        sans: [
          '"PP Neue Montreal"',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
      },
      spacing: {
        xs: "6px",
        sm: "16px",
        md: "42px",
        lg: "64px",
        xl: "134px",
      },
      borderRadius: {
        none: "0px",
        sm: "4px",
        md: "8px",
        lg: "16px",
        xl: "24px",
        full: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
