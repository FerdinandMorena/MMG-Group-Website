/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        background: "#ffffff",
        foreground: "#041f5e",
        primary: {
          DEFAULT: "#041f5e",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f5f5f5",
          foreground: "#041f5e",
        },
        muted: {
          DEFAULT: "#f5f5f5",
          foreground: "#737373",
        },
        accent: {
          DEFAULT: "#F59E0B",
          foreground: "#ffffff",
        },
        border: "#e5e5e5",
      },
    },
  },
  plugins: [],
};
