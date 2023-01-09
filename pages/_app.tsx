import { PrismicPreview } from '@prismicio/next';
import { PrismicProvider } from '@prismicio/react';
import NextLink from 'next/link';

import { repositoryName } from '@/prismicio';

import richTextComponents from '@/components/RichTextComponents';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { AppProps as NextAppProps } from 'next/app';

import Fallback from '@/components/ErrorMessage';
import MinimalFallback from '@/components/MinimalFallback';
import theme from '@/theme';
import createEmotionCache from '@/utils/createEmotionCache';
import { ErrorBoundary } from 'react-error-boundary';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

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
    <ErrorBoundary FallbackComponent={MinimalFallback}>
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
              <ErrorBoundary FallbackComponent={Fallback}>
                <Component {...pageProps} />
              </ErrorBoundary>
            </PrismicPreview>
          </PrismicProvider>
        </ThemeProvider>
      </CacheProvider>
    </ErrorBoundary>
  );
}
