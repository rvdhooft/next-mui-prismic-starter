import { Container, Typography } from '@mui/material';
import Link from 'next/link';

const ErrorMessage = () => {
  return (
    <div role="alert">
      <Container
        sx={{ mt: '10%', textAlign: 'center', maxWidth: { sm: '36rem' } }}
      >
        <Typography component="h1" variant="h1" mb={3}>
          Something Went Wrong
        </Typography>
        <Typography mb={3}>
          Try reloading the page, or return to the{' '}
          <Link href="/">home page.</Link>
        </Typography>
        <Typography>
          If the error keeps occurring, please contact{' '}
          {process.env.NEXT_PUBLIC_SUPPORT_EMAIL} with the following details and
          include any steps to reproduce the issue.
        </Typography>
      </Container>
    </div>
  );
};

export default ErrorMessage;
