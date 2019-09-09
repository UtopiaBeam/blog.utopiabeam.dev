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

interface Props {
  pageContext: {
    numPage: number;
    currentPage: number;
  };
  data: {
    allMarkdownRemark: {
      edges: { node: PostNode }[];
    };
    tag: Tag;
  };
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(250, 250, 250);
  }
`;

export default ({ pageContext, data }: Props) => {
  const { numPage, currentPage } = pageContext;
  const { tag, allMarkdownRemark } = data;
  const posts: Post[] = allMarkdownRemark.edges.map(({ node }) => {
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
      <SEO title={tag.title} type={PageType.List} />
      <GlobalStyle />
      <Header {...tag} />
      <Flex justifyContent="center">
        <Box width={[5 / 6, 2 / 3]}>
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
  query tagPostQuery($skip: Int!, $limit: Int!, $regex: String!, $tagTitle: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { regex: $regex } } }
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
    tag: tagsJson(title: { eq: $tagTitle }) {
      title
      slug
      description
      banner {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            src
          }
        }
      }
    }
  }
`;
