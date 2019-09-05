import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import { Text, Flex } from 'rebass';

interface Props {
  slug: string;
}

const GlobalStyle = createGlobalStyle`
  .item {
    padding-right: 20px;
  }
`;

const Icon = styled.span`
  :hover {
    color: rgba(36, 89, 173);
  }
`;

const Label = props => (
  <Text
    {...props}
    fontSize={[18, 19, 20]}
    fontFamily="Kanit, sans-serif"
    fontWeight={400}
    color="rgb(60, 60, 60)"
  >
    Share this post :
  </Text>
);

export default (props: Props) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);
  const { siteUrl } = data.site.siteMetadata;
  const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${siteUrl}${props.slug}`;

  console.log(fbUrl);

  return (
    <>
      <GlobalStyle />
      <hr />
      <Flex alignItems="center">
        <Label className="item" />
        <a href={fbUrl} target="blank">
          <Icon className="item fab fa-facebook fa-lg" />
        </a>
      </Flex>
    </>
  );
};
