const path = require('path');

const POST_PER_PAGE = 10;

// exports.onCreateNode = ({ node, getNode }) => {
//   if (node.internal.type === `MarkdownRemark`) {
//     const fileNode = getNode(node.parent);
//     console.log(`\n`, fileNode.relativePath);
//   }
// };

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              slug
              date(formatString: "MMM DD, YYYY")
              description
              banner
              featured
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { id, frontmatter, html } = node;
    const { title, slug, description, date, banner } = frontmatter;
    createPage({
      path: slug,
      component: path.resolve('src/templates/BlogPost.tsx'),
      context: {
        title,
        slug,
        description,
        date,
        banner,
        html,
      },
    });
  });
};
