/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      backgroundImage:{
        'CSE':'url(public/src/assets/Card_1.jpeg)'
      }
    },
  },
  plugins: [],
}

