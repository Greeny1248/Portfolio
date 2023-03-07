module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  colors: colors,
  textColors: colors,
  backgroundColors: colors,
}
var colors = {
  'transparent': 'transparent',

  'green': '#698269',
  'brown': '#B99B6B',
  'cream': '#F1DBBF',
  'red': '#AA5656n',
  'grey': '#9babb4',

  // ...
}