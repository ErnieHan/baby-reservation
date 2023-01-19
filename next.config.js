const isProd = process.env.NODE_ENV === 'production'
const { nextI18NextRewrites } = require('next-i18next/rewrites')
const localeSubpaths = {
  tc: 'tc',
  en: 'en'
}

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? '' : '',
  reactStrictMode: true
  // rewrites: async () => nextI18NextRewrites(localeSubpaths),
  // publicRuntimeConfig: {
  //   localeSubpaths
  // }
}
