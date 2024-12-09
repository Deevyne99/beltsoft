/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: { 'cover-image': "url('/public/line.png')" },
    },
  },
  plugins: [],
}
