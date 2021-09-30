module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["'M PLUS 1p'"],
    },
    extends: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  mode: 'jit',
};
