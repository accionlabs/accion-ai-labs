/** @type {import('tailwindcss').Config} */
const accionPreset = require('../local-app-router/accion-tailwind-preset');

module.exports = {
  presets: [accionPreset],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // App-specific overrides while keeping Accion brand colors
      fontFamily: {
        // Keep Inter as the primary font for this app, but include brand font as fallback
        'sans': ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}