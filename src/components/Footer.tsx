import React from 'react';
import { Link, Text, Flex } from 'rebass';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { SiteMetadata } from '../types';

const NavFlex = styled(Flex)`
  background-color: rgb(40, 40, 40);
`;

const NavText = styled(Text)`
  color: rgba(250, 250, 250, 0.7);
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: rgba(250, 250, 250, 0.7);

  :hover {
    color: rgb(255, 165, 0);
  }
`;

export default () => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          fbUrl
          githubUrl
        }
      }
    }
  `);
  const { author, fbUrl, githubUrl }: Partial<SiteMetadata> = site.siteMetadata;
  return (
    <NavFlex justifyContent="center" p={4}>
      <NavText fontFamily="Kanit, sans-serif" fontSize={[14, 15, 16]} fontWeight={300}>
        {author} © {new Date().getFullYear()} ·{' '}
        <NavLink href={fbUrl} target="blank">
          Facebook
        </NavLink>{' '}
        ·{' '}
        <NavLink href={githubUrl} target="blank">
          GitHub
        </NavLink>
      </NavText>
    </NavFlex>
  );
};
