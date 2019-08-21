import React from 'react';
import { FluidObject } from 'gatsby-image';
import Pagination from '../components/Pagination';
import Card from '../components/Card';
import { Flex, Box } from 'rebass';
import { createGlobalStyle } from 'styled-components';
import Header from '../components/Header';

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

interface Post extends Tag {
  date: string;
}

interface Props {
  pageContext: {
    numPage: number;
    currentPage: number;
    tag: Tag;
    posts: Post[];
  };
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(250, 250, 250);
  }
`;

export default (props: Props) => {
  const { numPage, currentPage, tag, posts } = props.pageContext;
  const blogCards = posts.map((post: Post) => (
    <Box width={[1, 1, 1 / 2]}>
      <Card {...post} pathPrefix="" />
    </Box>
  ));
  return (
    <>
      <GlobalStyle />
      <Flex justifyContent="center">
        <Box width={[1, 2 / 3]}>
          <Flex flexWrap="wrap">{blogCards}</Flex>
        </Box>
      </Flex>
      <Pagination
        numPage={numPage}
        currentPage={currentPage}
        pathPrefix={`tag/${tag.slug}`}
      />
    </>
  );
};
