/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'cover-image': "url('/line.png')",
        'background-cover': "url('/singer.png')",
        'background-image': "url('/background-image.png')",
      },
    },
  },
  plugins: [],
}
