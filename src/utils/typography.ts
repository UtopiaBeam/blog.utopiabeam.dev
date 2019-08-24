import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.7,
  headerFontFamily: ['Athiti', 'sans-serif'],
  googleFonts: [
    {
      name: 'Athiti',
      styles: ['600', ' 700'],
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
