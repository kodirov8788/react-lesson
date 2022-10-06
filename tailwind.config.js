/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#6e6e6e',
        secondary: '#bcfd4c',
      },

      animation: {
        photo: 'photo 1s ease-in-out infinite',
      },
      keyframes: {
        photo: {
          '0%': { transform: 'translate-x-[600px]' },
          '100%': { transform: 'translate-x-[0px]' },
        },
      },
    },
  },
  plugins: [],
}