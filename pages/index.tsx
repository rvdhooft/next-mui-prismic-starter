import * as prismicH from '@prismicio/helpers';
import { SliceZone } from '@prismicio/react';
import Head from 'next/head';

import { PrismicDocument } from '@prismicio/types';
import { GetStaticProps } from 'next';
import { Layout } from '../components/Layout';
import { createClient } from '../prismicio';
import { components } from '../slices';

interface Props {
  page: PrismicDocument<Record<string, any>, string, string>;
  navigation: PrismicDocument<Record<string, any>, string, string>;
  settings: PrismicDocument<Record<string, any>, string, string>;
}

const Index = ({ page, navigation, settings }: Props) => {
  return (
    <Layout navigation={navigation} settings={settings}>
      <Head>
        <title>{prismicH.asText(page.data.title)}</title>
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
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
  const navigation = await client.getSingle('navigation', { lang: locale });
  const settings = await client.getSingle('settings', { lang: locale });

  return {
    props: {
      page,
      navigation,
      settings,
    },
  };
};
