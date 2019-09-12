import React from 'react';
import Pagination from '../components/Pagination';
import Card from '../components/Card';
import { Flex, Box } from 'rebass';
import { createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import { Post, Tag, PageType, PostNode } from '../types';
import SEO from '../components/SEO';
import { graphql } from 'gatsby';
import Footer from '../components/Footer';
import Featured from '../components/Featured';

interface Props {
  pageContext: {
    featured: PostNode;
    numPage: number;
    currentPage: number;
    tag: Tag;
  };
  data: {
    allMarkdownRemark: {
      edges: { node: PostNode }[];
    };
  };
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(250, 250, 250);
  }
`;

export default ({ pageContext, data }: Props) => {
  const { numPage, currentPage, tag, featured } = pageContext;
  const posts: Post[] = data.allMarkdownRemark.edges.map(({ node }) => {
    const { fields, frontmatter } = node;
    return {
      ...frontmatter,
      slug: fields.slug,
    };
  });
  const blogCards = posts.map((post: Post) => (
    <Box width={[1, 1, 1 / 2]}>
      <Card {...post} />
    </Box>
  ));
  return (
    <>
      <SEO title="" type={PageType.List} />
      <GlobalStyle />
      <Header />
      <Flex justifyContent="center">
        <Box width={[1, 20 / 24, 16 / 24, 14 / 24]}>
          {featured ? <Featured {...featured} /> : null}
        </Box>
      </Flex>
      <Flex justifyContent="center">
        <Box width={[20 / 24, 19 / 24, 18 / 24, 17 / 24]}>
          <Flex flexWrap="wrap">{blogCards}</Flex>
        </Box>
      </Flex>
      <Pagination
        numPage={numPage}
        currentPage={currentPage}
        pathPrefix={tag ? `tag/${tag.slug}` : ''}
      />
      <Footer />
    </>
  );
};

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      skip: $skip
      limit: $limit
      sort: { fields: frontmatter___date, order: DESC }
    ) {
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
                fluid(maxWidth: 1920, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
