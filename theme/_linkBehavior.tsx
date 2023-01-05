import NextLink, { LinkProps } from 'next/link';
import { forwardRef } from 'react';

const LinkBehavior = forwardRef<
  any,
  LinkProps & {
    component: React.ElementType;
  }
>((props, ref) => {
  return <NextLink ref={ref} {...props} />;
});
LinkBehavior.displayName = 'LinkBehavior';

export default LinkBehavior;
