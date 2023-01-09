import { FallbackProps } from 'react-error-boundary';

const MinimalFallback = ({ error }: FallbackProps) => (
  <div role="alert">
    <p>Something went wrong</p>
    <pre>{error?.message}</pre>
  </div>
);

export default MinimalFallback;
