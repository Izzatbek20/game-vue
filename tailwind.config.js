import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',

      // 'xs-imm': {
      //   'min': '320px',
      //   'max': '640px'
      // },
      // // => @media (min-width: 320px and max-width: 640px) { ... }
      // 'sm-imm': {
      //   'min': '640px',
      //   'max': '767px'
      // },
      // // => @media (min-width: 640px and max-width: 767px) { ... }

      // 'md-imm': {
      //   'min': '768px',
      //   'max': '1023px'
      // },
      // // => @media (min-width: 768px and max-width: 1023px) { ... }

      // 'lg-imm': {
      //   'min': '1024px',
      //   'max': '1279px'
      // },
      // // => @media (min-width: 1024px and max-width: 1279px) { ... }

      // 'xl-imm': {
      //   'min': '1280px',
      //   'max': '1535px'
      // },
      // // => @media (min-width: 1280px and max-width: 1535px) { ... }

      // '2xl-imm': {
      //   'min': '1536px'
      // },
    },
    extend: {},
  },
  plugins: [
    typography,
    forms,
    aspectRatio,
  ],
}