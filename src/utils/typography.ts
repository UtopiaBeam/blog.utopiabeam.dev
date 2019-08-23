import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.5,
  headerFontFamily: ['Athiti', 'sans-serif'],
  bodyFontFamily: ['Pridi', 'sans-serif'],
  googleFonts: [
    {
      name: 'Athiti',
      styles: ['600', ' 700'],
    },
    {
      name: 'Pridi',
      styles: ['400'],
    },
    {
      name: 'Catamaran',
      styles: ['300', '500'],
    },
    {
      name: 'Kanit',
      styles: ['300'],
    },
  ],
});

export default typography;
export const { scale, rhythm, options } = typography;
