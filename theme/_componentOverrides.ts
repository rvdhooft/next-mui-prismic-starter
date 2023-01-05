import { LinkProps } from '@mui/material';
import LinkBehavior from './_linkBehavior';

// Update the Paper's variant prop options
declare module '@mui/material/Paper' {
  // eslint-disable-next-line no-unused-vars
  interface PaperPropsVariantOverrides {
    padded: true;
  }
}

const componentOverrides = {
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
      },
    },
  },
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
      LinkComponent: LinkBehavior,
    },
  },
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        '& img': {
          maxWidth: '100%',
          height: 'auto',
          display: 'block',
        },
        '& menu, & ol, & ul': {
          listStyle: 'none',
          margin: 0,
          padding: 0,
        },
        '& a': {
          textDecoration: 'inherit',
        },
      },
    },
  },
  MuiLink: {
    defaultProps: {
      component: LinkBehavior,
    } as LinkProps,
  },
  MuiPaper: {
    variants: [
      {
        props: {
          variant: 'padded' as 'padded' | 'elevation' | 'outlined' | undefined,
        },
        style: {
          padding: '2rem',
        },
      },
    ],
  },
  MuiToolbar: {
    styleOverrides: {
      root: {
        '@media (min-width: 600px)': {
          minHeight: '3rem',
        },
      },
    },
  },
};

export default componentOverrides;
