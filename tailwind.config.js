module.exports = {
  purge: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
  darkMode: false,
  theme: {
    colors: {
      primary: {
        DEFAULT: '#243FFE',
      },
      secondary: {
        DEFAULT: '#E71D36',
      },
    },
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
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
