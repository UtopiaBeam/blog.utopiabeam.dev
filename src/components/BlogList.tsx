import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

interface BlogQueryResult {
  allMarkdownRemark: {
    edges: BlogNode[];
  };
}

interface BlogNode {
  node: Blog;
}

interface Blog {
  id: string;
  frontmatter: {
    title: string;
    slug: string;
    date: Date;
    description: string;
    banner: string;
    featured: boolean;
  };
}

export default () => {
  const data: BlogQueryResult = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
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
  const posts: BlogNode[] = data.allMarkdownRemark.edges;
  return (
    <>
      <h1>My Blog</h1>
      <h3>Blog list</h3>
      {posts.map(({ node }: BlogNode) => {
        const { id, frontmatter } = node;
        const { title, slug, description, date } = frontmatter;
        return (
          <div key={id}>
            <Link to={slug}>
              <h3>{title}</h3>
            </Link>
            <p>{description}</p>
          </div>
        );
      })}
    </>
  );
};
