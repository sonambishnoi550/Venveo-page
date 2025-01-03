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
      'sohne': "'Sohne Schmal', sans-serif",
        'space': "'space mono', sans-serif",
        'MaisonNeue': "'Maison Neue',sans-serif",
        'maisonLight': "'MaisonNeueLight',sans-serif",
        'maisonMedium': "'MaisonNeueMedium',sans-serif",
        'maisonDemi': "'MaisonNeueDemi',sans-serif",
        'maisonMono': "'MaisonNeueMono',sans-serif",
      },
      fontSize: {
        'custom-xxs': '6px',
        'custom-sx': '13px',
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
        yellow: '#D2F038',
      },
      backgroundImage: {
        'mobile-tab-two': "url('/public/assets/images/webp/tab-two-mobile-bg.webp')",
        'actual': "url('/public/assets/images/webp/actual-bg.webp')",
        'ready': "url('/public/assets/images/webp/ready-bg.webp')",
        'marketing-one': "url('/public/assets/images/webp/read-more-one.webp')",
        'marketing-two': "url('/public/assets/images/webp/read-more-two.webp')",
        'marketing-three': "url('/public/assets/images/webp/read-more-three.webp')",
        'mobile-marketing-one': "url('/public/assets/images/webp/mobile-read-one.webp')",
        'mobile-marketing-two': "url('/public/assets/images/webp/mobile-read-two.webp')",
        'mobile-marketing-three': "url('/public/assets/images/webp/mobile-read-three.webp')",
      }
    },
  },
  plugins: [],
};
