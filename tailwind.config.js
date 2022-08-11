/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateRows: {
        // Sobreescribiendo los valores para esa propiedad
        'daniRows': 'repeat(2, minmax(30px, 1fr))',
      },
      gridTemplateColumns: {
        // Sobreescribiendo los valores para esa propiedad
        'daniColumns': 'repeat(4, minmax(0px, 1fr))',
      },
      rotate: {
        'daniRotate': '21deg',
      },
      height: {
        'daniHeight': '3px'
      }
    },
  },
  plugins: [],
}