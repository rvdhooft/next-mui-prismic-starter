import { Button, styled } from '@mui/material';

const SkipLink = styled(Button)(({ theme }) => ({
  zIndex: theme.zIndex.appBar + 1,
  position: 'absolute',
  top: '-40px',
  transition: 'top 250ms ease-in-out',
  '&:focus': {
    top: 0,
  },
}));

export default SkipLink;
