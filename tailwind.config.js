module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontSize: {
      'xxs':'.625rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
       'base': '1rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
       '5xl': '3rem',
       '6xl': '4rem',
      '7xl': '5rem',
     },
    fontFamily: {
     
      'mono': ['Space Mono'],
      'display': ['Playfair Display'],
      'body': ['Playfair Display'],
     },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#F25F3A',
      'secondary': '#242D52',
      'danger': '#e3342f',
     }),
    // colors: {
    //   'primary': '#F25F3A',
    //   'secondary': '#242D52',
    // },
    fontFamily: {
      'display': ['Space Mono'],
      'body': ['Space Mono'],
     },
    extend: {
       backgroundImage: theme => ({
      
        'front': "url('~@/assets/images/front.svg')",
        'back': "url('~@/assets/images/back.svg')",
        }),
        width: {
          '6/7': '95%',
         
        }
    },
  },
  variants: {},
  plugins: [],
}
