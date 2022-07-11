/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'Josefin Sans'],
      },
      colors: {
        zpurple: {
          500: '#BB42F3',
          900: '#AA14F0',
        },
        zwhite: {
          100: '#EEEEEE',
          200: '#ECECEC',
          400: '#E5E5E5',
        },
      },
    },
  },
  plugins: [],
};
