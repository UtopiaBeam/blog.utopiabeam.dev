const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { chunk } = require('lodash');

const POST_PER_PAGE = 8;

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMM DD, YYYY")
              description
              featured
              title
              banner {
                childImageSharp {
                  fluid {
                    src
                    srcSet
                    srcSetWebp
                    srcWebp
                    tracedSVG
                  }
                }
              }
            }
            html
          }
        }
      }
    }
  `);

  const blogs = result.data.allMarkdownRemark.edges;
  const blogLists = chunk(blogs, POST_PER_PAGE);

  // Create blog listing pages
  blogLists.forEach((list, i) => {
    createPage({
      path: i == 0 ? '/' : `/page/${i + 1}`,
      component: path.resolve('src/templates/BlogList.tsx'),
      context: {
        currentPage: i + 1,
        posts: list.map(({ node }) => {
          const { frontmatter, html, fields } = node;
          return { ...frontmatter, html, slug: fields.slug };
        }),
      },
    });
  });

  // Create blog posts
  blogs.forEach(({ node }) => {
    const { frontmatter, html, fields } = node;
    createPage({
      path: fields.slug,
      component: path.resolve('src/templates/BlogPost.tsx'),
      context: {
        ...frontmatter,
        html,
      },
    });
  });
};
