import { Container, ContainerProps, styled } from '@mui/material';

const Section = styled((props: ContainerProps) => (
  <Container component="section" {...props} />
))(({ theme }) => ({
  paddingTop: '1rem',
  paddingBottom: '1rem',
  [theme.breakpoints.up('sm')]: {
    paddingTop: '2rem',
    paddingBottom: '2rem',
  },
}));

export default Section;
