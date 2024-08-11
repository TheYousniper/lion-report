/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'helvetic-light': ['Helvetic Light'],
        'helvetic-bold': ['Helvetic Bold'],
        'helvetic-regular': ['Helvetic Regular'],
        'helvetic-medium': ['Helvetic Medium'],
      },
      backgroundColor:{
        'lion-blue': '#00338D',
        'lion-yellow': '#EBB700',
      },
      textColor:{
        'lion-blue': '#00338D',
        'lion-yellow': '#EBB700',
      },
      boxShadow: {
        'lion-blue': '8px 8px 3px rgba(0, 51, 141, 0.5)', // Ajusta según el color y la intensidad que desees
        'lion-yellow': '8px 8px 3px rgba(235, 183, 0, 0.5)', // Ajusta según el color y la intensidad que desees
      },
      backdropBlur: {
        'sm': '4px',
        // puedes agregar más tamaños aquí
      },

    },
  },
  plugins: [],
}

