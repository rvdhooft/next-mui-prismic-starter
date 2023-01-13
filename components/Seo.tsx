import {
  PageDocumentData,
  SettingsDocumentData,
} from '@/.slicemachine/prismicio';
import * as prismicH from '@prismicio/helpers';
import Head from 'next/head';

interface Props {
  page: PageDocumentData;
  settings: SettingsDocumentData | undefined;
  index?: boolean;
}

const Seo = ({ page, settings, index }: Props) => {
  if (!page || !settings) return null;

  const title = index
    ? prismicH.asText(settings.siteTitle)
    : `${prismicH.asText(page.title)} | ${prismicH.asText(settings.siteTitle)}`;

  const robotsText = getRobotsText(page);

  return (
    <Head>
      <title>{title}</title>
      {robotsText && <meta name="robots" content={robotsText} />}
      <meta
        name="description"
        content={page.meta_description || settings.meta_description || ''}
      />
    </Head>
  );
};

const getRobotsText = (data: Record<string, any>) => {
  if (data.noindex && data.nofollow) {
    return 'noindex,nofollow';
  } else if (data.noindex) {
    return 'noindex';
  } else if (data.nofollow) {
    return 'nofollow';
  }
};

export default Seo;
