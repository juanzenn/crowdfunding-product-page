module.exports = {
  purge: [
    './*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'commissioner': ['Commissioner']
      },
      colors: {
        cyan: {
          DEFAULT: '#3CB4AC',
          dark: '#147B74'
        },
      },
      zIndex: {
        '-10': '-10'
      },
      boxShadow: {
        custom: 'inset 0px 50px 20px -30px rgba(0,0,0,0.75);',
        container: '0 0px 60px -15px rgba(0, 0, 0, 0.5)'
      }
    },
  },
  
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
