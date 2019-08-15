const theme = {
  white: '#FFFFFF',
  black: '#000000',
  lightGray: 'rgba(0, 0, 0, 0.3)',
  gray: 'rgba(0, 0, 0, 0.5)',
  darkGray: 'rgba(0, 0, 0, 0.6)',

  font: {
    family: {
      merriweather: 'Merriweather, serif',
      libreFranklin: 'Libre Franklin, sans-serif'
    },
    size: {
      h1: '96px',
      h2: '60px',
      h3: '48px',
      h4: '34px',
      h5: '24px',
      h6: '20px',
      subtitle1: '16px',
      subtitle2: '14px',
      body1: '16px',
      body2: '14px',
      button: '14px',
      caption: '12px',
      overline: '10px'
    },
    weight: {
      light: '300',
      regular: '400',
      medium: '500',
      bold: '700',
      black: '900'
    }
  },

  mq: {
    tablet: '@media (min-width: 768px)',
    desktop: '@media (min-width: 1024px)',
    huge: '@media (min-width: 1440px)'
  }
};

export default theme;
