import ErrorMessage from '@/components/ErrorMessage';
import { Layout } from '@/components/Layout';
import { createClient } from '@/prismicio';
import getNavigationAndSettings from '@/utils/getNavigationAndSettings';
import { PrismicDocument } from '@prismicio/types';
import { GetStaticProps } from 'next';

interface Props {
  navigation: PrismicDocument<Record<string, any>, string, string>;
  settings: PrismicDocument<Record<string, any>, string, string>;
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
