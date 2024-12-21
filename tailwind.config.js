/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",
        },
      },
      fontSize: {
        'custom-xxs': '6px',
        'custom-xs': '15px',
        'custom-2xl': '22px',
        'custom-8xl': '100px',
        'custom-9xl': '120px',

      },
      lineHeight: {
        'custom-md': '115%',
        'custom-2md': '121%',
        'custom-lg': '125%',
        'custom-2lg': '133%',
        'custom-3lg': '141%',
        'custom-4lg': '153%',
        'custom-xl': '188%',
        'custom-2xl': '225%',
      },
      colors: {
        lightgreen: '#D2F038',
        green: '#097980',
      }
    },
  },
  plugins: [],
};
