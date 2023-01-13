import {
  NavigationDocumentData,
  SettingsDocumentData,
} from '@/.slicemachine/prismicio';
import { Box } from '@mui/material';
import { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorMessage from './ErrorMessage';
import Footer from './Footer';
import { Navigation } from './Navigation';
import SkipLink from './SkipLink';

interface Props {
  navigation: NavigationDocumentData | undefined;
  settings: SettingsDocumentData | undefined;
  children: ReactNode;
}

export const Layout = ({ navigation, settings, children }: Props) => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <SkipLink href="#skip-link-target" variant="contained" LinkComponent="a">
        Skip to Main Content
      </SkipLink>
      <Navigation navigation={navigation} settings={settings} />
      <SkipLink
        id="skip-link-target"
        href="#skip-link-target"
        variant="contained"
        tabIndex={-1}
        LinkComponent="a"
      >
        Start of Main Content
      </SkipLink>
      <Box component="main" flex={1}>
        <ErrorBoundary FallbackComponent={ErrorMessage}>
          {children}
        </ErrorBoundary>
      </Box>
      <Footer navigation={navigation} />
    </Box>
  );
};
