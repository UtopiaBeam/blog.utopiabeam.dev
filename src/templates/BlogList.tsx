import React from 'react';
import { FluidObject } from 'gatsby-image';
import Pagination from '../components/Pagination';
import Card from '../components/Card';
import { Flex, Box } from 'rebass';
import { createGlobalStyle } from 'styled-components';
import Header from '../components/Header';

interface Post {
  title: string;
  slug: string;
  description: string;
  date: string;
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
    posts: Post[];
  };
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(250, 250, 250);
  }
`;

export default (props: Props) => {
  const { numPage, currentPage, posts } = props.pageContext;
  const blogCards = posts.map((post: Post) => (
    <Box width={[1, 1, 1 / 2]}>
      <Card {...post} />
    </Box>
  ));
  return (
    <>
      <GlobalStyle />
      <Header />
      <Flex justifyContent="center">
        <Box width={[1, 2 / 3]}>
          <Flex flexWrap="wrap">{blogCards}</Flex>
        </Box>
      </Flex>
      <Pagination numPage={numPage} currentPage={currentPage} />
    </>
  );
};
