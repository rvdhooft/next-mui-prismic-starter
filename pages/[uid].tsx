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

const Page = ({ page, navigation, settings }: Props) => {
  return (
    <Layout navigation={navigation} settings={settings}>
      <Seo page={page} settings={settings} />
      <SliceZone slices={page.slices} components={components} />
    </Layout>
  );
};

export default Page;

export const getStaticProps: GetStaticProps<Props> = async ({
  params,
  locale,
  previewData,
}) => {
  if (typeof params?.uid !== 'string') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const client = createClient({ previewData });
  const page = await client.getByUID('page', params.uid, { lang: locale });
  if (!page) {
    return {
      redirect: {
        destination: '/',
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

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType('page', { lang: '*' });

  return {
    paths: pages.map((page) => {
      return {
        params: { uid: page.uid },
        locale: page.lang,
      };
    }),
    fallback: false,
  };
}
