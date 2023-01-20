import { SliceZone } from '@prismicio/react';

import {
  NavigationDocumentData,
  PageDocumentData,
  SettingsDocumentData,
} from '@/.slicemachine/prismicio';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import { createClient } from '@/prismicio';
import { components } from '@/slices';
import getNavigationAndSettings from '@/utils/getNavigationAndSettings';
import { GetStaticProps } from 'next';

interface Props {
  page: PageDocumentData;
  navigation: NavigationDocumentData | undefined;
  settings: SettingsDocumentData | undefined;
}

const Index = ({ page, navigation, settings }: Props) => {
  return (
    <Layout navigation={navigation} settings={settings}>
      <Seo page={page} settings={settings} index />
      <SliceZone slices={page.slices} components={components} />
    </Layout>
  );
};

export default Index;

export const getStaticProps: GetStaticProps<Props> = async ({
  locale,
  previewData,
}) => {
  const client = createClient({ previewData });

  const page = await client.getByUID('page', 'home', { lang: locale });
  if (!page) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  const { navigation, settings } = await getNavigationAndSettings(
    client,
    locale
  );

  return {
    props: {
      page: page.data,
      navigation,
      settings,
    },
  };
};
