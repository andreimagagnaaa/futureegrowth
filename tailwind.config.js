/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      colors: {
        background: "#030610", // Deep Navy/Black (Slightly lighter than pure black)
        primary: "#D4AF37", // Metallic Gold
        foreground: "#f8fafc", // Slate 50
        border: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(to right, #D4AF37, #F3E5AB, #D4AF37)',
      }
    },
  },
  plugins: [],
}

