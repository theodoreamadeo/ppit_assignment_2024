/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': 'rgba(216, 213, 213, 0.5)',
      }
    },
  },
  plugins: [],
}

