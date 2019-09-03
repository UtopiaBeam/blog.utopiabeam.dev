const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { times } = require('lodash');

const CARD_PER_PAGE = 6;

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
      site {
        siteMetadata {
          author
        }
      }
      blogs: allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              description
              date(formatString: "DD MMM YYYY")
              featured
              banner {
                childImageSharp {
                  fluid(maxWidth: 1920) {
                    base64
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                  }
                }
              }
            }
          }
        }
      }
      tags: allTagsJson(sort: { fields: title }) {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `);

  const { data } = result;
  const blogs = data.blogs.edges;
  const tags = data.tags.edges;
  const { author } = data.site.siteMetadata;
  const blogPages = Math.ceil(blogs.length / CARD_PER_PAGE);
  const tagPages = Math.ceil(tags.length / CARD_PER_PAGE);

  const featuredPost = blogs.filter(({ node }) => node.frontmatter.featured === true)[0];

  // Create blog listing pages
  times(blogPages, i => {
    createPage({
      path: i === 0 ? '/' : `/page/${i + 1}`,
      component: path.resolve('src/templates/BlogList.tsx'),
      context: {
        featured: i === 0 ? featuredPost.node : null,
        numPage: blogPages,
        currentPage: i + 1,
        skip: i * CARD_PER_PAGE,
        limit: CARD_PER_PAGE,
      },
    });
  });

  // Create blog posts
  blogs.forEach(({ node }, i) => {
    const { fields } = node;
    createPage({
      path: fields.slug,
      component: path.resolve('src/templates/BlogPost.tsx'),
      context: {
        slug: fields.slug,
        author,
        others:
          i === 0
            ? [blogs[1].node, blogs[2].node]
            : i === blogs.length - 1
            ? [blogs[i - 2].node, blogs[i - 1].node]
            : [blogs[i - 1].node, blogs[i + 1].node],
      },
    });
  });

  // Create tag listing pages
  times(tagPages, i => {
    createPage({
      path: i === 0 ? 'tags' : `tags/page/${i + 1}`,
      component: path.resolve('src/templates/TagList.tsx'),
      context: {
        numPage: tagPages,
        currentPage: i + 1,
        skip: i * CARD_PER_PAGE,
        limit: CARD_PER_PAGE,
      },
    });
  });

  // Create blog listing for each tag
  const tagPosts = await Promise.all(
    tags.map(async ({ node }) => {
      const result = await graphql(`
        {
          posts: allMarkdownRemark(
            filter: { frontmatter: { tags: { regex: "/${node.title}/" } } }
            sort: { fields: frontmatter___date, order: DESC }
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                  date(formatString: "DD MMM YYYY")
                  description
                  tags
                  featured
                  banner {
                    childImageSharp {
                      fluid {
                        base64
                        tracedSVG
                        aspectRatio
                        src
                        srcSet
                        srcSetWebp
                        srcWebp
                        sizes
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `);
      return {
        tag: node,
        posts: result.data.posts.edges,
      };
    })
  );

  tagPosts.forEach(({ tag, posts }) => {
    const postPages = Math.ceil(posts.length / CARD_PER_PAGE);
    times(postPages, i => {
      createPage({
        path: `tags/${tag.slug}` + (i === 0 ? '/' : `/page/${i + 1}`),
        component: path.resolve('src/templates/TagPost.tsx'),
        context: {
          numPage: postPages,
          currentPage: i + 1,
          skip: i * CARD_PER_PAGE,
          limit: CARD_PER_PAGE,
          tagTitle: tag.title,
          regex: `/${tag.title}/`,
        },
      });
    });
  });
};
