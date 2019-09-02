import React from 'react';
import { PostNode } from '../types';
import { Box, Text, Card, Heading, Link } from 'rebass';
import styled from 'styled-components';
import Img from 'gatsby-image';

const BlogCard = styled(Card)`
  position: relative;
  box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  transition: transform 0.175s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Background = styled(Img)`
  position: absolute;
  border-radius: 5px;
  top: 0;
  left: 0;
`;

const Content = styled(Box)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-image: linear-gradient(transparent, #000);
  color: rgb(245, 245, 245);
  border-radius: 0 0 5px 5px;
`;

const FeatureText = props => (
  <Heading {...props} fontSize={[16, 18, 20]} fontFamily="Kanit, sans-serif" fontWeight={500} />
);

const BlogTitle = props => (
  <Heading {...props} fontSize={[24, 30, 36]} fontFamily="Kanit, sans-serif" fontWeight={500} />
);

const Description = props => <Text {...props} fontSize={[16, 18, 20]} />;

export default ({ fields, frontmatter }: PostNode) => {
  const { title, description, banner } = frontmatter;
  return (
    <Link href={fields.slug}>
      <BlogCard m={[3]}>
        <Background fluid={banner.childImageSharp.fluid} />
        <Content p={3}>
          <FeatureText>FEATURED</FeatureText>
          <BlogTitle my={[1, 2, 3]}>{title}</BlogTitle>
          <Description>{description}</Description>
        </Content>
      </BlogCard>
    </Link>
  );
};
