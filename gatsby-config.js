module.exports = {
  siteMetadata: {
    title: 'UtopiaBlog',
    description: 'Dev blogger in the coconut shell',
    author: 'Natchapol Srisang {UtopiaBeam}',
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/data/blog`,
      },
    },
    `gatsby-plugin-sharp`,
  ],
};
