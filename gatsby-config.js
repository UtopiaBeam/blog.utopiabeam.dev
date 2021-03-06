module.exports = {
  siteMetadata: {
    title: 'UtopiaBlog',
    description: 'A blogger in a coconut shell',
    author: 'Natchapol Srisang',
    siteUrl:
      process.env.NODE_ENV === 'production'
        ? 'https://blog.utopiabeam.dev'
        : process.env.NODE_ENV === 'staging'
        ? 'https://staging-blog.utopiabeam.dev'
        : 'https://localhost:8000',
    fbUrl: 'https://www.facebook.com/natchapolsrisang',
    fbApp: '100001227099580',
    githubUrl: 'https://github.com/UtopiaBeam',
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1920,
              linkImagesToOriginal: false,
              quality: 90,
              withWebp: true,
            },
          },
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              showLineNumbers: false,
              noInlineHighlight: true,
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`,
            },
          },
          `gatsby-remark-embed-video`,
          `gatsby-remark-responsive-iframe`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/data/blog`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `database`,
        path: `${__dirname}/data/database`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        excludes: [
          '/page/*',
          '/tags',
          '/tags/page/*',
          '/tags/diary',
          '/tags/review',
          '/tags/programming',
          '/tags/diary/page/*',
          '/tags/review/page/*',
          '/tags/programming/page/*',
        ],
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`,
  ],
};
