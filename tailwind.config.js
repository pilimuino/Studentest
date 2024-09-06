const tailwindcssAnimate = require('tailwindcss-animate');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'], 
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',  // Incluye todas las subcarpetas y archivos en src
  ],
  
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',   
        foreground: 'hsl(var(--foreground))',   
        border: 'hsl(var(--border))',           
        primary: "#a6a6a6",  
        secondary: "#068ca4", 
        black: "#000000",
        white: "#FFFFFF",
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      fontFamily: {
        'cabin-condensed': ['"Cabin Condensed"', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

