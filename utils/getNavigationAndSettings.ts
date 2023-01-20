import {
  AllDocumentTypes,
  NavigationDocumentData,
  SettingsDocumentData,
} from '@/.slicemachine/prismicio';
import * as prismic from '@prismicio/client';

// Use graph query in order to load linked navigation menus
const query = `{
  navigation {
    links {
      label
      link
      navigation_menu {
        ... on navigation_menu {
          title
          slices {
            ...on group_of_links {
              variation {
                ...on default {
                  primary {
                    ...primaryFields
                  }
                  items {
                    ...itemsFields
                  }
                }
              }
            }
          }
        }
      }
    }
    footer_links {
      ...footer_linksFields
    }
    social_links {
      ...social_linksFields
    }
  }
}`;

const getNavigationAndSettings = async (
  client: prismic.Client<AllDocumentTypes>,
  locale: string | undefined
) => {
  const response = await client.get({
    predicates: [
      prismic.predicate.any('document.type', ['navigation', 'settings']),
    ],
    lang: locale,
    graphQuery: query,
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
