import React from 'react';
import { Card, Text, Box, Heading, Link } from 'rebass';
import Img, { FluidObject } from 'gatsby-image';
import styled, { createGlobalStyle } from 'styled-components';

interface Props {
  title: string;
  slug: string;
  description?: string;
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
  transition: transform 0.175s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Banner = styled(Img)`
  border-radius: 5px 5px 0 0;
`;

const BlogTitle = props => (
  <Heading
    {...props}
    fontSize={[24, 26, 28, 30]}
    fontFamily="Kanit, sans-serif"
    fontWeight={500}
    color="rgb(10, 10, 10)"
    py={3}
  />
);

const BlogDate = props => (
  <Text
    {...props}
    fontSize={[14, 15, 16, 17]}
    fontFamily="Kanit, sans-serif"
    fontWeight={400}
    color="rgba(10, 10, 10, 0.5)"
  />
);

const Description = props => (
  <Text {...props} fontSize={[15, 16, 17, 18]} color="rgba(10, 10, 10, 0.8)" />
);

export default ({ title, slug, description, date, banner, pathPrefix = '' }: Props) => {
  const cardBanner = banner ? <Banner fluid={banner.childImageSharp.fluid} /> : null;
  return (
    <>
      <GlobalStyle />
      <Box py={3} px={[2, 2, 3, 3]} height="100%">
        <Link href={pathPrefix ? `${pathPrefix}/${slug}` : slug}>
          <BlogCard height="100%">
            {cardBanner}
            <Box p={3}>
              {date ? <BlogDate>{date}</BlogDate> : null}
              <BlogTitle>{title}</BlogTitle>
              <Description>{description}</Description>
            </Box>
          </BlogCard>
        </Link>
      </Box>
    </>
  );
};
