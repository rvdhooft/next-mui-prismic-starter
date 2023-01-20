import { Typography, styled } from '@mui/material';
import { PrismicLink } from '@prismicio/react';
import { ReactNode } from 'react';
import NextLink from 'next/link';

interface Props {
  children: ReactNode;
  node?: any;
}

const TypographyWithMargin = styled(Typography)({
  marginBottom: '1.75rem',
  '&:last-child': { marginBottom: 0 },
}) as typeof Typography;

const Heading = styled(TypographyWithMargin)({
  marginTop: '3rem',
  '&:first-of-type': { marginTop: 0 },
}) as typeof Typography;

const List = styled(TypographyWithMargin)(({ theme }) => ({
  paddingLeft: '1rem',
  [theme.breakpoints.up('md')]: {
    paddingLeft: '1.5rem',
  },
})) as typeof Typography;

const ListItem = styled(Typography)(({ theme }) => ({
  marginBottom: '0.25rem',
  paddingLeft: '0.25rem',
  [theme.breakpoints.up('md')]: { paddingLeft: 0.5 },
  '&:last-child': { marginBottom: 0 },
})) as typeof Typography;

const richTextComponents = {
  heading1: ({ children }: Props) => (
    <Heading component="h1" variant="h1">
      {children}
    </Heading>
  ),
  heading2: ({ children }: Props) => (
    <Heading component="h2" variant="h2">
      {children}
    </Heading>
  ),
  heading3: ({ children }: Props) => (
    <Heading component="h3" variant="h3">
      {children}
    </Heading>
  ),
  paragraph: ({ children }: Props) => (
    <TypographyWithMargin>{children}</TypographyWithMargin>
  ),
  oList: ({ children }: Props) => <List component="ol">{children}</List>,
  oListItem: ({ children }: Props) => (
    <ListItem component="li" sx={{ listStyleType: 'decimal' }}>
      {children}
    </ListItem>
  ),
  list: ({ children }: Props) => <List component="ul">{children}</List>,
  listItem: ({ children }: Props) => (
    <ListItem component="li" sx={{ listStyleType: 'disc' }}>
      {children}
    </ListItem>
  ),
  preformatted: ({ children }: Props) => (
    <TypographyWithMargin
      component="pre"
      bgcolor={(theme) => theme.palette.neutral?.main}
      p={{ xs: 2, md: 4 }}
    >
      <code>{children}</code>
    </TypographyWithMargin>
  ),
  strong: ({ children }: Props) => (
    <Typography component="strong" fontWeight="bold">
      {children}
    </Typography>
  ),
  hyperlink: ({ children, node }: Props) => (
    <PrismicLink
      field={node.data}
      style={{
        textDecoration: 'underline',
        textUnderlineOffset: '2px',
        textDecorationThickness: '1px',
      }}
      internalComponent={({ children, ...props }: any) => (
        <NextLink {...props}>{children}</NextLink>
      )}
      externalComponent="a"
    >
      {children}
    </PrismicLink>
  ),
};

export default richTextComponents;
