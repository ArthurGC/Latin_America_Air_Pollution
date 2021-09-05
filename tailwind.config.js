module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      gill: ['Gill Sans'],
      lato: ['Lato'],
    },
    extend: {
      colors: {
        dribble: '#E35A8A',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
