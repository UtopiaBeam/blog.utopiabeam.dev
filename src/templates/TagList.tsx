import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Flex, Box } from 'rebass';
import Pagination from '../components/Pagination';
import Card from '../components/Card';
import Header from '../components/Header';
import { Tag, PageType } from '../types';
import SEO from '../components/SEO';
import { graphql } from 'gatsby';
import ListTitle from '../components/ListTitle';

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
          <ListTitle title="Tags" />
          <Flex flexWrap="wrap">{tagCards}</Flex>
        </Box>
      </Flex>
      <Pagination numPage={numPage} currentPage={currentPage} pathPrefix="tags" />
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
`;
