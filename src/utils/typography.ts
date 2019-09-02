import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.7,
  headerFontFamily: ['Kanit', 'sans-serif'],
  headerWeight: 500,
  scaleRatio: 1.75,
  googleFonts: [
    {
      name: 'Space Mono',
      styles: ['700'],
    },
    {
      name: 'Catamaran',
      styles: ['300', '400', '500'],
    },
    {
      name: 'Kanit',
      styles: ['300', '400', '500', '600'],
    },
    {
      name: 'Roboto Mono',
      styles: ['500'],
    },
  ],
});

export default typography;
export const { scale, rhythm, options } = typography;
