/**
 * Accion Brand Color Configuration
 * Based on Brand Guidelines v4.0
 * 
 * This file provides centralized color mappings and utilities
 * for consistent brand color usage across the application.
 */

export const brandColors = {
  // Primary brand colors
  primary: 'accion-red', // #EB4B55 - Primary CTA, important actions
  secondary: 'brand-blue-500', // #164FC8 - Headers, navigation
  accent: 'magenta-500', // #EE26B9 - Innovation features
  
  // Semantic colors
  success: 'fresh-green-500', // #61A606
  warning: 'marigold-500', // #C8782C
  error: 'terracotta-500', // #B73734
  info: 'sky-blue-500', // #2E9EC7
  data: 'turquoise-500', // #05A393
  
  // Feature-specific colors
  ai: 'brand-purple-500', // #783680 - AI/ML features
  innovation: 'magenta-500', // #EE26B9 - Innovation highlights
  analytics: 'teal-500', // #5EFEFF - Data visualizations
  
  // Neutral colors
  neutral: {
    dark: 'gray-900',
    medium: 'gray-600',
    light: 'gray-400',
    lighter: 'gray-200',
    lightest: 'gray-50'
  }
} as const;

/**
 * Color mapping for legacy to brand colors
 * Used for automated replacements
 */
export const colorMappings = {
  // Blue replacements
  'blue-50': 'brand-blue-50',
  'blue-100': 'brand-blue-100',
  'blue-200': 'brand-blue-200',
  'blue-300': 'brand-blue-300',
  'blue-400': 'brand-blue-400',
  'blue-500': 'secondary', // Maps to brand-blue-500
  'blue-600': 'brand-blue-600',
  'blue-700': 'brand-blue-700',
  'blue-800': 'brand-blue-800',
  'blue-900': 'brand-blue-900',
  
  // Green replacements
  'green-50': 'fresh-green-50',
  'green-100': 'fresh-green-100',
  'green-500': 'success', // Maps to fresh-green-500
  'green-600': 'fresh-green-600',
  
  // Purple replacements
  'purple-50': 'brand-purple-50',
  'purple-100': 'brand-purple-100',
  'purple-500': 'ai', // Maps to brand-purple-500
  'purple-600': 'brand-purple-600',
  
  // Orange replacements
  'orange-50': 'marigold-50',
  'orange-100': 'marigold-100',
  'orange-500': 'warning', // Maps to marigold-500
  'orange-600': 'marigold-600',
  
  // Red replacements
  'red-50': 'terracotta-50',
  'red-100': 'terracotta-100',
  'red-500': 'error', // Maps to terracotta-500
  'red-600': 'terracotta-600',
  
  // Gradient replacements
  'from-blue-600 to-purple-600': 'bg-innovation-gradient',
  'from-blue-50 to-purple-50': 'from-brand-blue-50 to-brand-purple-50',
} as const;

/**
 * Get the appropriate text color class for a given background
 */
export function getTextColorForBackground(bgColor: string): string {
  const darkBackgrounds = [
    'primary', 'secondary', 'accent', 'success', 'error', 'ai',
    'brand-blue-500', 'brand-blue-600', 'brand-blue-700',
    'brand-purple-500', 'brand-purple-600',
    'fresh-green-500', 'fresh-green-600',
    'terracotta-500', 'terracotta-600',
    'magenta-500', 'magenta-600'
  ];
  
  if (darkBackgrounds.includes(bgColor)) {
    return 'text-white';
  }
  
  return 'text-gray-900';
}

/**
 * Component-specific color schemes
 */
export const componentColors = {
  // Navigation
  navigation: {
    bg: 'bg-white',
    border: 'border-gray-200',
    text: 'text-gray-900',
    textHover: 'text-primary',
    activeText: 'text-secondary',
    activeBg: 'bg-brand-blue-50',
    activeBorder: 'border-l-4 border-secondary',
    icon: 'text-gray-500',
    iconActive: 'text-secondary'
  },
  
  // Buttons
  button: {
    primary: 'bg-primary hover:bg-accion-red/90 text-white',
    secondary: 'bg-secondary hover:bg-brand-blue-600 text-white',
    tertiary: 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-300',
    success: 'bg-success hover:bg-fresh-green-600 text-white',
    danger: 'bg-error hover:bg-terracotta-600 text-white',
    innovation: 'bg-gradient-to-r from-ai to-accent text-white'
  },
  
  // Cards
  card: {
    bg: 'bg-white',
    border: 'border-gray-200',
    shadow: 'shadow-accion',
    shadowHover: 'hover:shadow-accion-lg',
    header: 'text-gray-900',
    body: 'text-gray-600'
  },
  
  // Badges
  badge: {
    blue: 'bg-brand-blue-100 text-brand-blue-800',
    green: 'bg-fresh-green-100 text-fresh-green-800',
    purple: 'bg-brand-purple-100 text-brand-purple-800',
    orange: 'bg-marigold-100 text-marigold-800',
    red: 'bg-terracotta-100 text-terracotta-800',
    teal: 'bg-teal-100 text-teal-800'
  },
  
  // Alerts
  alert: {
    success: 'bg-fresh-green-50 border-fresh-green-200 text-fresh-green-800',
    warning: 'bg-marigold-50 border-marigold-200 text-marigold-800',
    error: 'bg-terracotta-50 border-terracotta-200 text-terracotta-800',
    info: 'bg-sky-blue-50 border-sky-blue-200 text-sky-blue-800'
  }
};

/**
 * D3/Chart color palettes aligned with brand
 */
export const chartColors = {
  primary: ['#EB4B55', '#164FC8', '#61A606', '#05A393', '#783680', '#EE26B9'],
  categorical: [
    '#164FC8', // Brand Blue
    '#61A606', // Fresh Green
    '#05A393', // Turquoise
    '#783680', // Brand Purple
    '#C8782C', // Marigold
    '#2E9EC7', // Sky Blue
    '#EE26B9', // Magenta
    '#B73734', // Terracotta
  ],
  sequential: {
    blue: ['#E6ECFB', '#99B2EF', '#4D78E3', '#164FC8', '#0F3789'],
    green: ['#F2F9E6', '#CAE599', '#A2D14D', '#61A606', '#437104'],
    purple: ['#F3E9F4', '#CDA5D0', '#A761AC', '#783680', '#522458'],
    teal: ['#EBFEFF', '#8EFBFF', '#5EFEFF', '#41B0B3', '#2E7D80']
  },
  diverging: {
    redBlue: ['#B73734', '#DDA5A3', '#FFFFFF', '#99B2EF', '#164FC8'],
    greenPurple: ['#61A606', '#CAE599', '#FFFFFF', '#CDA5D0', '#783680']
  }
};