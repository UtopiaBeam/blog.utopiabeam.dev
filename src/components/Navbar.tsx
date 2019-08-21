import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { Flex, Link, Text } from 'rebass';

interface Tab {
  name: string;
  href: string;
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
  const tabs: Tab[] = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Tags',
      href: '/tags',
    },
  ];
  const navTabs = tabs.map((tab: Tab) => (
    <NavLink href={tab.href} p={4} pb={2} fontSize={[14, 16]}>
      <NavText>{tab.name.toUpperCase()}</NavText>
    </NavLink>
  ));
  return <Flex justifyContent="center">{navTabs}</Flex>;
};
