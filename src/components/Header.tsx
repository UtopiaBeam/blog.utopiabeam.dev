import React from 'react';
import Navbar from './Navbar';
import { Flex, Heading } from 'rebass';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const Banner = styled(Flex)`
  background: url(../../bg.jpg) center center no-repeat;
  background-size: cover;
  width: 100%;
`;

interface Site {
  siteMetadata: {
    description: string;
  };
}

interface Data {
  site: Site;
}

export default () => {
  const { site }: Data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
        }
      }
    }
  `);
  return (
    <>
      <Banner
        justifyContent="center"
        alignItems="center"
        height={400}
        flexDirection="column"
      >
        <Heading
          textAlign="center"
          fontFamily="Catamaran, sans-serif"
          fontWeight={300}
          fontSize={[20, 28, 32]}
          letterSpacing={2}
          color="rgba(250, 250, 250, 0.8)"
        >
          {site.siteMetadata.description}
        </Heading>
      </Banner>
      <Navbar />
    </>
  );
};
