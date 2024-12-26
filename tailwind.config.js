/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",
        },
      },
      fontFamily: {
        Mono: ["'Space Mono'", "sans-serif"],
      }
,
      fontSize: {
        'custom-xxs': '6px',
        'custom-xs': '15px',
        'custom-2xl': '22px',
        'custom-3xl': '40px',
        'custom-4xl': '50px',
        'custom-5xl': '57px',
        'custom-7xl': '80px',
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
        sky: '#00afb5',
        lightgray: '#9dc9cc',
        lightblack: '#a6a6a6',
        yellow:'#D2F038',
      },
      backgroundImage: {
        'tab-two': "url('/public/assets/images/png/tab-two-bg.png')",
        'mobile-tab-two': "url('/public/assets/images/png/tab-two-mobile-bg.png')",
        'actual': "url('/public/assets/images/png/actual-bg.webp')",
      },
    },
  },
  plugins: [],
};
