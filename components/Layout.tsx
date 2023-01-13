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

interface Props {
  navigation: NavigationDocumentData | undefined;
  settings: SettingsDocumentData | undefined;
  children: ReactNode;
}

export const Layout = ({ navigation, settings, children }: Props) => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Navigation navigation={navigation} settings={settings} />
      <Box component="main" flex={1}>
        <ErrorBoundary FallbackComponent={ErrorMessage}>
          {children}
        </ErrorBoundary>
      </Box>
      <Footer navigation={navigation} />
    </Box>
  );
};
