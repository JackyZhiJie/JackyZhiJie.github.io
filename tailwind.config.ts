/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['Lora', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        tc: ['"Noto Serif TC"', 'serif'],
        dfkai: ['"DFKai-SB"', 'BiauKai', 'serif'],
      },
      colors: {
        bioDark: {
          bg: '#111414',
          card: '#181D1D',
          border: '#283030',
          textMuted: '#ffffffd8',
          accentSage: '#86A396',
          accentTerra: '#C27B63',
          accentMoss: '#26332E'
        },
        bioLight: {
          bg: '#FBF9F6',
          card: '#F1EDE7',
          border: '#E1D9CD',
          textMuted: '#67706B',
          accentSage: '#4A7261',
          accentTerra: '#AB583F'
        }
      },
      transitionDuration: {
        '400': '400ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-in',
        'pulse-glow': 'pulseGlow 10s infinite ease-in-out',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.15' },
          '50%': { opacity: '0.4' }
        }
      }
    }
  },
  plugins: [],
}
