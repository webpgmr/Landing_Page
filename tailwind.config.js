const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        ...colors,
        'orange-btn': "#F57C00",
      },
      screens: {
        '2xl': '1728px',
        'xl': '1280px',
        'lg': '1024px',
        'md': '768px',
        'sm': '480px',
      },
    },
  },
  plugins: [],
}