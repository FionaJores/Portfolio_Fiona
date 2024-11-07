/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor:{
        'primary':'rgb(131, 164, 102)',
        'secondary':'rgb(69, 48, 5)'
      },
      colors: {
        primary: 'rgb(131, 164, 102)',
        secondary: 'rgb(69, 48, 5)',
      },
    },
    fontFamily: {
      'hero-font':'Vollkorn'
    }
  },
  plugins: [],
}

