import { PrismicPreview } from '@prismicio/next';
import { PrismicLink, PrismicProvider } from '@prismicio/react';
import NextLink from 'next/link';

import { repositoryName } from '../prismicio';

import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { AppProps as NextAppProps } from 'next/app';
import { ReactNode } from 'react';
import theme from '../theme';
import createEmotionCache from '../utils/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface Props {
  children: ReactNode;
  node?: any;
}

const richTextComponents = {
  heading1: ({ children }: Props) => (
    <Typography
      component="h1"
      variant="h1"
      mb={3.5}
      sx={{ '&:last-child': { mb: 0 }, '&:first': { mt: 0 } }}
      mt={6}
    >
      {children}
    </Typography>
  ),
  heading2: ({ children }: Props) => (
    <Typography
      component="h2"
      variant="h2"
      mb={3.5}
      sx={{ '&:last-child': { mb: 0 }, '&:first': { mt: 0 } }}
      mt={6}
    >
      {children}
    </Typography>
  ),
  heading3: ({ children }: Props) => (
    <Typography
      component="h3"
      variant="h3"
      mb={3.5}
      sx={{ '&:last-child': { mb: 0 }, '&:first': { mt: 0 } }}
      mt={6}
    >
      {children}
    </Typography>
  ),
  paragraph: ({ children }: Props) => (
    <Typography mb={3.5} sx={{ '&:last-child': { mb: 0 } }}>
      {children}
    </Typography>
  ),
  oList: ({ children }: Props) => (
    <Typography
      component="ol"
      mb={3.5}
      pl={{ xs: 2, md: 3 }}
      sx={{ '&:last-child': { mb: 0 } }}
    >
      {children}
    </Typography>
  ),
  oListItem: ({ children }: Props) => (
    <Typography
      component="li"
      mb={0.5}
      sx={{ '&:last-child': { mb: 0 }, listStyleType: 'decimal' }}
      pl={{ xs: 0.5, md: 1 }}
    >
      {children}
    </Typography>
  ),
  list: ({ children }: Props) => (
    <Typography
      component="ul"
      mb={3}
      pl={{ xs: 2, md: 3 }}
      sx={{ '&:last-child': { mb: 0 } }}
    >
      {children}
    </Typography>
  ),
  listItem: ({ children }: Props) => (
    <Typography
      component="li"
      mb={0.5}
      pl={{ xs: 0.5, md: 1 }}
      sx={{ '&:last-child': { mb: 0 }, listStyleType: 'disc' }}
    >
      {children}
    </Typography>
  ),
  preformatted: ({ children }: Props) => (
    <Typography
      component="pre"
      mb={3.5}
      sx={{ '&:last-child': { mb: 0 } }}
      bgcolor={(theme) => theme.palette.neutral?.main}
      p={{ xs: 2, md: 4 }}
    >
      <code>{children}</code>
    </Typography>
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
    >
      {children}
    </PrismicLink>
  ),
};

interface AppProps extends NextAppProps {
  emotionCache?: EmotionCache;
}

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppProps) {
  if (process.env.NEXT_PUBLIC_LOGROCKET_KEY) {
    import('logrocket').then(({ default: LogRocket }) => {
      LogRocket.init(process.env.LOGROCKET_KEY!);
    });
  }

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PrismicProvider
          internalLinkComponent={({ children, ...props }: any) => (
            <NextLink {...props}>{children}</NextLink>
          )}
          richTextComponents={richTextComponents}
        >
          <PrismicPreview repositoryName={repositoryName}>
            <Component {...pageProps} />
          </PrismicPreview>
        </PrismicProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
