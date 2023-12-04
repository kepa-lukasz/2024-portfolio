/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
  content: [
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'

  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'darkSlate': '#0F172A',  //main dark
      'darkGrey': '#272727',
      'darkGreen': '#116466',
      'darkRed': '#5d001e',
      'darkBlue': '#190061',
      'darkPink': '#9a1750',

      'lemon': '#EFFD5F',
      'orange': '#FF652F',
      'blue': '#3500d3',
      'green': '#14a76c',
      'fiolet': '#cab1f8',

      'lightLemon': '#fde68a',
      'lightBeige': '#EAE7DC',
      'lightBlue': '#4056A1',
      'lightPink': '#e3afbc',
      'lightGrey': '#747474',
      'rose': '#fff1f2',     //main light

      'white': '#FFF',
      'black': '#000',
    },
  },
  plugins: [],
}