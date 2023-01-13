import {
  NavigationDocumentData,
  SettingsDocumentData,
} from '@/.slicemachine/prismicio';
import ErrorMessage from '@/components/ErrorMessage';
import { Layout } from '@/components/Layout';
import { createClient } from '@/prismicio';
import getNavigationAndSettings from '@/utils/getNavigationAndSettings';
import { GetStaticProps } from 'next';

interface Props {
  navigation: NavigationDocumentData | undefined;
  settings: SettingsDocumentData | undefined;
}

const ErrorPage = ({ navigation, settings }: Props) => {
  return (
    <Layout navigation={navigation} settings={settings}>
      <ErrorMessage />
    </Layout>
  );
};

export default ErrorPage;

export const getStaticProps: GetStaticProps<Props> = async ({
  locale,
  previewData,
}) => {
  const client = createClient({ previewData });

  const { navigation, settings } = await getNavigationAndSettings(
    client,
    locale
  );

  return {
    props: {
      navigation,
      settings,
    },
  };
};
