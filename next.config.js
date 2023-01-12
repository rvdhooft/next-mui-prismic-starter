const prismic = require('@prismicio/client');

const sm = require('./sm.json');

/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  const client = prismic.createClient(sm.apiEndpoint);

  const repository = await client.getRepository();
  const locales = repository.languages.map((lang) => lang.id);

  return {
    reactStrictMode: true,
    i18n: {
      // These are all the locales you want to support in
      // your application
      locales,
      // This is the default locale you want to be used when visiting
      // a non-locale prefixed path e.g. `/hello`
      defaultLocale: locales[0],
    },
    async rewrites() {
      return [
        {
          source: '/robots.txt',
          destination: '/api/robots',
        },
      ];
    },
  };
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const prismicLinkResolver = (doc) => doc.uid;

const withPrismicSitemap = require('@reecem/prismic-sitemap')({
  linkResolver: prismicLinkResolver,
  apiEndpoint: sm.apiEndpoint,
  hostname: process.env.SITE_URL,
  optionsMapPerDocumentType: {
    page: { changefreq: 'monthly', priority: 1 },
  },
  documentTypes: ['page'],
});

module.exports = async () => {
  return withPrismicSitemap(withBundleAnalyzer(await nextConfig()));
};
