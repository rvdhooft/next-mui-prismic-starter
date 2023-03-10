import { LinkProps } from '@mui/material';
import LinkBehavior from './_linkBehavior';
import palette from './_palette';

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
    styleOverrides: {
      root: {
        '&.Mui-focusVisible': {
          outline: `2px solid ${palette.focus.main}`,
        },
      },
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
    styleOverrides: {
      root: {
        color: '#343434',
        fontWeight: '500',
        textDecoration: 'none',
        fontSize: '1rem',
        '&:hover': {
          textDecoration: 'underline',
          textDecorationThickness: '1px',
          textUnderlineOffset: '2px',
        },
        '&.Mui-focusVisible': {
          outline: `2px solid ${palette.focus.main}`,
        },
      },
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        fontWeight: '500',
      },
    },
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
};

export default componentOverrides;
