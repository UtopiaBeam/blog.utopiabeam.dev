import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.5,
  headerFontFamily: ['Athiti', 'sans-serif'],
  bodyFontFamily: ['Pridi', 'sans-serif'],
  googleFonts: [
    {
      name: 'Athiti',
      styles: ['600'],
    },
    {
      name: 'Pridi',
      styles: ['400'],
    },
    {
      name: 'Catamaran',
      styles: ['300', '500'],
    },
  ],
});

export default typography;
export const { scale, rhythm, options } = typography;
