import React from 'react';
import Img from 'gatsby-image';
import { Flex, Box, Heading } from 'rebass';
import styled, { createGlobalStyle } from 'styled-components';
import { PageType, PostNode } from '../types';
import SEO from '../components/SEO';
import { graphql } from 'gatsby';
import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Share from '../components/Share';

interface Props {
  pageContext: {
    slug: string;
    author: string;
    others: PostNode[];
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

    @media only screen and (max-width: 420px) {
      font-size: 18px;
    }
  }
  ul>li, ol>li {
    color: rgb(20, 20, 20);
    @media only screen and (max-width: 420px) {
      font-size: 18px;
    }
  }
  pre[class*="language-"] {
    border-radius: 5px;
    margin-bottom: 34px;
    
    &>code {
      font-size: 17px;

      @media only screen and (max-width: 420px) {
        font-size: 16px;
      }
    }
  }
  :not(pre)>code {
    font-size: 18px;

    @media only screen and (max-width: 420px) {
      font-size: 17px;
    }
  }
  .katex-html {
    overflow-x: scroll;
  }
  blockquote {
    font-size: 1.2em;
    padding: 0 1.5em;
    border-left: 0.3em solid rgba(44, 120, 212, 0.6);

    @media only screen and (max-width: 420px) {
      padding: 0 1em;
    }
  }
  table {
    table-layout: fixed;
    &>tbody {
      font-size: 0.85em;
    }
  }
`;

const Title = props => (
  <Heading
    {...props}
    fontFamily="Kanit, sans-serif"
    fontWeight={700}
    fontSize={[36, 40, 44]}
    pb={3}
  />
);

const Date = props => (
  <Heading
    {...props}
    fontFamily="Kanit, sans-serif"
    fontWeight={400}
    fontSize={[16, 17, 18]}
    color="rgba(40, 40, 40, 0.5)"
    pb={4}
  />
);

const NavTitle = (): JSX.Element => (
  <Heading fontFamily="Kanit, sans-serif" fontWeight={400} fontSize={[28]} p={3}>
    Other posts
  </Heading>
);

const NavFlex = styled(Flex)`
  background-color: rgb(240, 240, 240);
`;

export default ({ pageContext, data }: Props) => {
  const { author, others } = pageContext;
  const { frontmatter, html, fields } = data.markdownRemark;
  const { title, description, date, banner } = frontmatter;
  const otherPosts = others.map(post => (
    <Box width={[1, 1, 1 / 2]}>
      <Card slug={post.fields.slug} {...post.frontmatter} />
    </Box>
  ));

  return (
    <>
      <SEO
        type={PageType.Post}
        title={title}
        slug={fields.slug}
        description={description}
        date={date}
        banner={banner ? banner.childImageSharp.fluid.src : undefined}
      />
      <GlobalStyle />
      <Header />
      <Flex justifyContent="center">
        <Box width={[4 / 5, 3 / 4, 1 / 2]} py={4}>
          <Title>{title}</Title>
          <Date>
            Written by {author} — {date}
          </Date>
          {banner ? <Img fluid={banner.childImageSharp.fluid} alt="banner" /> : null}
          <Box py={4}>
            <div dangerouslySetInnerHTML={{ __html: html! }} />
          </Box>
          <Box>
            <Share title={title} slug={fields.slug} />
          </Box>
        </Box>
      </Flex>
      <NavFlex justifyContent="center" py={4}>
        <>
          <Box width={[3 / 4, 2 / 3, 7 / 12]}>
            <NavTitle />
            <Flex flexWrap="wrap">{otherPosts}</Flex>
          </Box>
        </>
      </NavFlex>
      <Footer />
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
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
