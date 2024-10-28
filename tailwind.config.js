/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor:{
        'primary':'rgb(255, 211, 172)',
        'secondary':'rgb(250 128 114)'
      },
      colors: {
        primary: 'rgb(255, 211, 172)',
        secondary: 'rgb(250 128 114)',
      },
    },
    fontFamily: {
      'hero-font':'Vollkorn'
    }
  },
  plugins: [],
}

