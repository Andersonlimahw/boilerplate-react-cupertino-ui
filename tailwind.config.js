/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glass: {
          background: 'rgba(255, 255, 255, 0.1)',
          border: 'rgba(255, 255, 255, 0.2)',
          text: 'rgba(255, 255, 255, 0.9)',
          'text-secondary': 'rgba(255, 255, 255, 0.7)',
        }
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        'app-bg': 'radial-gradient(circle at 50% -20%, #4c1d95 0%, #1e1b4b 50%, #0f172a 100%)', // Generic deep elegant background
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}