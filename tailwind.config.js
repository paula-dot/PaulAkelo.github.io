export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'map-dark': '#0a0f1a',
        'map-accent': '#00b3a4',
      },
    },
  },
  plugins: [],
}
