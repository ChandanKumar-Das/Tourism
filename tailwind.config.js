/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        //'haboro-soft': ['Haboro-Soft', 'sans-serif'],
          //montserrat: ['Montserrat', 'sans-serif'],
          sans: ['Sen', 'ui-sans-serif', 'system-ui']
      },
    },
  },
  plugins: [],
}

