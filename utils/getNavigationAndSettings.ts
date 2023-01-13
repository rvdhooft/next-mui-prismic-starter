import {
  AllDocumentTypes,
  NavigationDocumentData,
  SettingsDocumentData,
} from '@/.slicemachine/prismicio';
import * as prismic from '@prismicio/client';

const getNavigationAndSettings = async (
  client: prismic.Client<AllDocumentTypes>,
  locale: string | undefined
) => {
  const response = await client.get({
    predicates: [
      prismic.predicate.any('document.type', ['navigation', 'settings']),
    ],
    lang: locale,
  });

  const navigation = response.results.find((x) => x.type === 'navigation')
    ?.data as NavigationDocumentData | undefined;
  const settings = response.results.find((x) => x.type === 'settings')?.data as
    | SettingsDocumentData
    | undefined;
  return {
    navigation,
    settings,
  };
};

export default getNavigationAndSettings;
