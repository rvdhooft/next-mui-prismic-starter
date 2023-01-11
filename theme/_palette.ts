import { red } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Palette {
    neutral?: Palette['primary'];
  }
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  // eslint-disable-next-line no-unused-vars
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

const palette = {
  primary: {
    main: '#556cd6',
  },
  secondary: {
    main: '#19857b',
  },
  error: {
    main: red.A400,
  },
  neutral: {
    main: '#f3f3f3',
    dark: '#b1b1b1',

    contrastText: 'rgba(0,0,0,0.87)',
  },
};

export default palette;
