import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.4,
  headerFontFamily: ['Athiti', 'sans-serif'],
  bodyFontFamily: ['Pridi', 'sans-serif'],
  googleFonts: [
    {
      name: 'Athiti',
      styles: ['600'],
    }, {
      name: 'Pridi',
      styles: ['400'],
    }
  ],
});

export default typography;
export const { scale, rhythm, options } = typography;
