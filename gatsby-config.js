module.exports = {
  siteMetadata: {
    title: 'UtopiaBlog',
    description: 'A blogger in the coconut shell',
    author: 'Natchapol Srisang {UtopiaBeam}',
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/data/blog`,
      },
    },
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
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false,
              backgroundColor: `rgb(60, 60, 60)`,
              withWebp: true,
              quality: 80,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
  ],
};
