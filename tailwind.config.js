module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["'M PLUS 1p'"],
    },
    extend: {
      colors: {
        fbblue: '#1877f2',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  mode: 'jit',
};
