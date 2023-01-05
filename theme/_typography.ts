import { Roboto } from '@next/font/google';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const h1Size = 2;
const headingStyles = {
  fontWeight: 300,
};

const typography = {
  fontFamily: roboto.style.fontFamily,
  h1: {
    ...headingStyles,
    fontSize: `${h1Size}rem`,
  },
  h2: {
    ...headingStyles,
    fontSize: `${h1Size * 0.9}rem`,
  },
  h3: {
    ...headingStyles,
    fontSize: `${h1Size * 0.8}rem`,
  },
  h4: {
    ...headingStyles,
    fontSize: `${h1Size * 0.7}rem`,
  },
  h5: {
    ...headingStyles,
    fontSize: `${h1Size * 0.6}rem`,
  },
  h6: {
    ...headingStyles,
    fontSize: `${h1Size * 0.5}rem`,
  },
};

export default typography;
