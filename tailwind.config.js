/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio:{
        '5/4':'5/4',
        '16/10':'16/10',
      }
    },
  },
  plugins: [],
}