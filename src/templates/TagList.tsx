import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Flex, Box } from 'rebass';
import Pagination from '../components/Pagination';
import Card from '../components/Card';
import Header from '../components/Header';
import { Tag, PageType } from '../types';
import SEO from '../components/SEO';

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
      <Card {...tag} pathPrefix="tag" />
    </Box>
  ));
  return (
    <>
      <SEO type={PageType.List} title="Tags" />
      <GlobalStyle />
      <Header />
      <Flex justifyContent="center">
        <Box width={[1, 2 / 3]}>
          <Flex flexWrap="wrap">{tagCards}</Flex>
        </Box>
      </Flex>
      <Pagination
        numPage={numPage}
        currentPage={currentPage}
        pathPrefix="tags"
      />
    </>
  );
};
