/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'space': ['Space Grotesk', 'sans-serif'],
      'public': ['public-sans', 'sans-serif'],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'mobile': '375px',
      'xs': '515px',
    },
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
}