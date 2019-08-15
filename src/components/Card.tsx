import React from 'react';
import { Card, Text, Box, Heading } from 'rebass';
import Img, { FluidObject } from 'gatsby-image';
import { Link } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';

interface Props {
  title: string;
  slug: string;
  description: string;
  banner?: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none
  }
`;

const BlogCard = styled(Card)`
  background-color: rgb(250, 250, 250);
  box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

const Banner = styled(Img)`
  border-radius: 5px 5px 0 0;
`;

const BlogTitle = styled(Heading)`
  font-size: 1.6em;
  color: rgb(10, 10, 10);
`;

const BlogText = styled(Text)`
  color: rgba(10, 10, 10, 0.8);
`;

export default ({ title, slug, description, banner }: Props) => {
  const cardBanner = banner ? (
    <Banner fluid={banner.childImageSharp.fluid} />
  ) : null;
  console.log(title, cardBanner);
  return (
    <>
      <GlobalStyle />
      <Link to={slug}>
        <BlogCard m={3} width={[1 / 2]}>
          {cardBanner}
          <Box p={3}>
            <BlogTitle as="h1">{title}</BlogTitle>
            <BlogText mt={3} fontSize={[16, 17]}>
              {description}
            </BlogText>
          </Box>
        </BlogCard>
      </Link>
    </>
  );
};
