import React from 'react';
import Img from 'gatsby-image';
import { Flex, Box, Heading } from 'rebass';
import styled, { createGlobalStyle } from 'styled-components';
import { PageType, PostNode } from '../types';
import SEO from '../components/SEO';
import { graphql } from 'gatsby';
import Card from '../components/Card';
import Header from '../components/Header';

interface Props {
  pageContext: {
    slug: string;
    previous: PostNode;
    next: PostNode;
  };
  data: {
    markdownRemark: PostNode;
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

const Subtitle = ({ author, date }): JSX.Element => (
  <Heading
    fontFamily="Kanit, sans-serif"
    fontWeight={500}
    fontSize={[17, 18]}
    color="rgba(40, 40, 40, 0.5)"
    pb={4}
  >
    Written by {author} — {date}
  </Heading>
);

const NavTitle = (): JSX.Element => (
  <Heading fontFamily="Kanit, sans" fontWeight={400} fontSize={[28]} p={3}>
    Other posts
  </Heading>
);

const NavFlex = styled(Flex)`
  background-color: rgb(240, 240, 240);
`;

export default ({ pageContext, data }: Props) => {
  const { previous, next } = pageContext;
  const { frontmatter, html } = data.markdownRemark;
  const { title, description, date, banner } = frontmatter;
  return (
    <>
      <SEO type={PageType.Post} title={title} description={description} date={date} />
      <GlobalStyle />
      <Header />
      <Flex justifyContent="center">
        <Box width={[4 / 5, 3 / 4, 1 / 2]} py={4}>
          <Title title={title} />
          <Subtitle author="Natchapol Srisang" date={date} />
          {banner ? <Img fluid={banner.childImageSharp.fluid} alt="banner" /> : null}
          <Box py={4}>
            <div dangerouslySetInnerHTML={{ __html: html! }} />
          </Box>
        </Box>
      </Flex>
      <NavFlex justifyContent="center" py={4}>
        <>
          <Box width={[3 / 4, 2 / 3, 7 / 12]}>
            <NavTitle />
            <Flex flexWrap="wrap">
              {previous ? (
                <Box width={[1, 1, 1 / 2]}>
                  <Card
                    slug={previous.fields.slug}
                    banner={previous.frontmatter.banner}
                    title={previous.frontmatter.title}
                  />
                </Box>
              ) : null}
              {next ? (
                <Box width={[1, 1, 1 / 2]}>
                  <Card
                    slug={next.fields.slug}
                    banner={next.frontmatter.banner}
                    title={next.frontmatter.title}
                  />
                </Box>
              ) : null}
            </Flex>
          </Box>
        </>
      </NavFlex>
    </>
  );
};

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(formatString: "DD MMM, YYYY")
        banner {
          childImageSharp {
            fluid(maxWidth: 1920) {
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
`;
