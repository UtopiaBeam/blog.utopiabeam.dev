import React from 'react';
import { Card, Text, Box, Heading, Link } from 'rebass';
import Img, { FluidObject } from 'gatsby-image';
import styled, { createGlobalStyle } from 'styled-components';

interface Props {
  title: string;
  slug: string;
  description: string;
  date?: string;
  banner?: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
  pathPrefix?: string;
}

const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
  }
`;

const BlogCard = styled(Card)`
  background-color: rgb(250, 250, 250);
  box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  transition: transform .175s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Banner = styled(Img)`
  border-radius: 5px 5px 0 0;
`;

const BlogTitle = styled(Heading)`
  font-size: 1.6em;
  color: rgb(10, 10, 10);
`;

const BlogDate = styled(Text)`
  font-size: 0.85em;
  font-family: Kanit, sans-serif;
  color: rgba(10, 10, 10, 0.5);
`;

const BlogText = styled(Text)`
  color: rgba(20, 20, 20, 0.8);
`;

export default ({ title, slug, description, date, banner, pathPrefix = '' }: Props) => {
  const cardBanner = banner ? <Banner fluid={banner.childImageSharp.fluid} /> : null;
  return (
    <>
      <GlobalStyle />
      <Link href={pathPrefix ? `${pathPrefix}/${slug}` : slug}>
        <BlogCard m={3}>
          {cardBanner}
          <Box p={3}>
            {date ? <BlogDate mb={2}>{date}</BlogDate> : null}
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
