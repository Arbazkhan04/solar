const { animation, keyframes } = require('tailwindcss-animate');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Update your content paths
  theme: {
    extend: {
      screens: {
        xs: '320px', // Define the `xs` breakpoint for small devices
      },
      animation: {
        fadeUp: 'fadeUp 0.5s ease-in-out',
        fadeDown: 'fadeDown 0.5s ease-in-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(20px)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
