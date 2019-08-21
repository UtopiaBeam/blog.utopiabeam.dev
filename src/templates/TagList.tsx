import React from 'react';
import { FluidObject } from 'gatsby-image';
import { createGlobalStyle } from 'styled-components';
import { Flex, Box } from 'rebass';
import Pagination from '../components/Pagination';
import Card from '../components/Card';

interface Tag {
  title: string;
  slug: string;
  description: string;
  banner: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

interface Props {
  pageContext: {
    numPage: number;
    currentPage: number;
    tags: Tag[];
  };
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(250, 250, 250);
  }
`;

export default (props: Props) => {
  const { numPage, currentPage, tags } = props.pageContext;
  const tagCards = tags.map((tag: Tag) => (
    <Box width={[1, 1, 1 / 2]}>
      <Card {...tag} />
    </Box>
  ));
  return (
    <>
      <GlobalStyle />
      <Flex justifyContent="center">
        <Box width={[1, 2 / 3]}>
          <Flex flexWrap="wrap">{tagCards}</Flex>
        </Box>
      </Flex>
      <Pagination numPage={numPage} currentPage={currentPage} pathPrefix='tags' />
    </>
  );
};
