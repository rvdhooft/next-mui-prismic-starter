import * as prismic from '@prismicio/client';
import { PrismicDocument } from '@prismicio/types';
import { AllDocumentTypes } from '@/.slicemachine/prismicio';

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
  return {
    navigation: response.results.find(
      (x) => x.type === 'navigation'
    ) as PrismicDocument<Record<string, any>, string, string>,
    settings: response.results.find(
      (x) => x.type === 'settings'
    ) as PrismicDocument<Record<string, any>, string, string>,
  };
};

export default getNavigationAndSettings;
