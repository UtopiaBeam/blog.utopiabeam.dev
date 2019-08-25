import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { Flex, Box, Heading } from 'rebass';
import styled, { createGlobalStyle } from 'styled-components';

interface Props {
  pageContext: {
    title: string;
    description: string;
    date: Date;
    banner: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
    html: string;
  };
}

const GlobalStyle = createGlobalStyle`
  html {
    background-color: rgb(250, 250, 250);
  }
  a {
    text-decoration: none;
    color: rgb(44, 120, 212);
  }
  p {
    color: rgb(20, 20, 20);
  }
  pre[class*="language-"] {
    border-radius: 5px;
    
    &>code {
      font-size: 17px;
    }
  }
  :not(pre)>code {
    font-size: 18px;
  }
  .katex-html {
    overflow-x: scroll;
  }
  blockquote {
    font-size: 1.2em;
    padding: 0 1.5em;
    border-left: 0.3em solid rgba(44, 120, 212, 0.6);
  }
  table {
    table-layout: fixed;
    &>tbody {
      font-size: 0.85em;
    }
  }
`;

const Title = ({ title }): JSX.Element => (
  <Heading
    as="h1"
    fontFamily="Athiti, sans-serif"
    fontWeight={700}
    fontSize={[40, 44, 48]}
    pt={2}
    pb={3}
  >
    {title}
  </Heading>
);

const Date = ({ date }): JSX.Element => (
  <Heading
    fontFamily="Kanit, sans-serif"
    fontWeight={600}
    fontSize={[17, 18]}
    color="rgba(40, 40, 40, 0.5)"
    pb={4}
  >
    {date}
  </Heading>
);

export default (props: Props) => {
  const { title, date, html, banner } = props.pageContext;
  return (
    <>
      <GlobalStyle />
      {banner ? <Img fluid={banner.childImageSharp.fluid} alt="" /> : null}
      <Flex justifyContent="center">
        <Box width={[4 / 5, 3 / 4, 1 / 2]} py={4}>
          <Title title={title} />
          <Date date={date} />
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Box>
      </Flex>
    </>
  );
};
