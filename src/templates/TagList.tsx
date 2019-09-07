import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Flex, Box, Heading } from 'rebass';
import Pagination from '../components/Pagination';
import Card from '../components/Card';
import Header from '../components/Header';
import { Tag, PageType } from '../types';
import SEO from '../components/SEO';
import { graphql } from 'gatsby';
import Footer from '../components/Footer';

interface Props {
  pageContext: {
    numPage: number;
    currentPage: number;
    tag: Tag;
  };
  data: {
    allTagsJson: {
      edges: {
        node: Tag;
      }[];
    };
  };
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(250, 250, 250);
  }
`;

const Title = props => (
  <Heading
    {...props}
    fontFamily="Kanit, sans-serif"
    fontWeight={500}
    fontSize={[36, 38, 40]}
    p={3}
  ></Heading>
);

export default ({ pageContext, data }: Props) => {
  const { numPage, currentPage } = pageContext;
  const tags: Tag[] = data.allTagsJson.edges.map(({ node }) => node);
  const tagCards = tags.map((tag: Tag) => (
    <Box width={[1, 1, 1 / 2]}>
      <Card {...tag} pathPrefix="tags" />
    </Box>
  ));
  return (
    <>
      <SEO type={PageType.List} title="Tags" />
      <GlobalStyle />
      <Header />
      <Flex justifyContent="center">
        <Box width={[1, 2 / 3]}>
          <Title>Tags</Title>
          <Flex flexWrap="wrap">{tagCards}</Flex>
        </Box>
      </Flex>
      <Pagination numPage={numPage} currentPage={currentPage} pathPrefix="tags" />
      <Footer />
    </>
  );
};

export const pageQuery = graphql`
  query tagListQuery($skip: Int!, $limit: Int!) {
    allTagsJson(skip: $skip, limit: $limit, sort: { fields: title, order: ASC }) {
      edges {
        node {
          title
          slug
          description
          banner {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
