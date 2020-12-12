module.exports = {
  purge: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#F8F8FF',
          200: '#ECEBF3',
          900: '#080708',
        },
      },
      lineHeight: {
        14: '3.5rem',
      },
    },
    textColor: {
      primary: '#243FFE',
      secondary: '#E71D36',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
