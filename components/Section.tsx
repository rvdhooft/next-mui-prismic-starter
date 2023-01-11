import { Container, ContainerProps, styled } from '@mui/material';

const Section = styled((props: ContainerProps) => (
  <Container component="section" {...props} />
))(({ theme }) => ({
  marginBottom: '3.5rem',
  [theme.breakpoints.up('sm')]: {
    marginBottom: '4.5rem',
  },
  [theme.breakpoints.up('md')]: {
    marginBottom: '7rem',
  },
}));

export default Section;
