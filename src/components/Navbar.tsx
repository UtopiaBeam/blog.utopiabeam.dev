import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { Flex, Link, Text } from 'rebass';

interface Data {
  allTagsJson: {
    edges: {
      node: {
        key: string;
        name: string;
        description: string;
      };
    }[];
  };
}

const NavLink = styled(Link)`
  a {
    text-decoration: none;
  }
`;

const NavText = styled(Text)`
  font-family: Catamaran, sans-serif;
  font-weight: 400;
  color: rgb(40, 40, 40);
  transition: color 0.1s ease-in-out;

  &:hover {
    color: rgba(255, 165, 0, 0.8);
  }
`;

export default () => {
  const data: Data = useStaticQuery(graphql`
    {
      allTagsJson {
        edges {
          node {
            description
            key
            name
          }
        }
      }
    }
  `);
  const tags = data.allTagsJson.edges;
  const navTags = tags.map(({ node }) => (
    <NavLink href={`tags/${node.key}`} p={4} pb={2} fontSize={[14, 16]}>
      <NavText>{node.name.toUpperCase()}</NavText>
    </NavLink>
  ));
  return (
    <Flex justifyContent="center">
      <NavLink href="/" p={4} pb={2} fontSize={[14, 16]}>
        <NavText>HOME</NavText>
      </NavLink>
      {navTags}
    </Flex>
  );
};
