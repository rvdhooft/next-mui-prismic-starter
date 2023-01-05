import { ReactElement, ReactNode } from 'react';

interface Props {
  condition: boolean;
  wrap: ({}: { children: ReactNode }) => ReactElement;
  children: ReactElement;
}

/**
 * Adds a wrapper around children if a condition is true.
 */
export const ConditionalWrap = ({ condition, wrap: Wrap, children }: Props) => {
  return condition ? <Wrap>{children}</Wrap> : children;
};
