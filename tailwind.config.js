/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'innovation-gradient': 'linear-gradient(135deg, #783680, #ee26b9)',
        'trust-gradient': 'linear-gradient(135deg, #164fc8, #2e9ec7)',
      },
      colors: {
        // Primary brand colors (Accion)
        'primary': '#EB4B55',
        'secondary': '#164FC8',
        'accent': '#EE26B9',

        // Accion brand colors
        'accion-red': '#EB4B55',

        // Status colors
        'success': {
          DEFAULT: '#61A606',
          50: '#F2F9E6',
          100: '#E5F3CD',
          200: '#CBE79B',
          300: '#B1DB69',
          400: '#97CF37',
          500: '#61A606',
          600: '#4E8505',
          700: '#3B6404',
          800: '#284303',
          900: '#152202',
        },
        'warning': {
          DEFAULT: '#C8782C',
          50: '#FEF7ED',
          100: '#FDEFD9',
          200: '#FBDFB3',
          300: '#F9CF8D',
          400: '#F7BF67',
          500: '#C8782C',
          600: '#A06023',
          700: '#78481A',
          800: '#503011',
          900: '#281808',
        },
        'danger': {
          DEFAULT: '#B73734',
          50: '#FEF2F2',
          100: '#FDE5E5',
          200: '#FBCBCB',
          300: '#F9B1B1',
          400: '#F79797',
          500: '#B73734',
          600: '#922C2A',
          700: '#6E211F',
          800: '#491615',
          900: '#250B0A',
        },

        // Brand purple palette (Accion purple)
        'brand-purple': {
          25: '#F9F5FA',
          50: '#F3E9F4',
          100: '#E0C7E2',
          200: '#CDA5D0',
          300: '#BA83BE',
          400: '#9C5EA4',
          500: '#783680',
          600: '#6A2F72',
          700: '#522458',
          800: '#3A193E',
          900: '#220E24',
        },

        // Brand blue palette (Accion blue)
        'brand-blue': {
          50: '#E6ECFB',
          100: '#C0CFF5',
          200: '#99B2EF',
          300: '#7395E9',
          400: '#4C78E3',
          500: '#164FC8',
          600: '#1346B1',
          700: '#0F3789',
          800: '#0B2862',
          900: '#07193A',
        },

        // Brand indigo palette
        'brand-indigo': {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
        },

        // Brand orange palette
        'brand-orange': {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        },

        // Brand pink palette
        'brand-pink': {
          50: '#FDF2F8',
          100: '#FCE7F3',
          200: '#FBCFE8',
          300: '#F9A8D4',
          400: '#F472B6',
          500: '#EC4899',
          600: '#DB2777',
          700: '#BE185D',
          800: '#9D174D',
          900: '#831843',
        },
      },
    },
  },
  plugins: [],
}
