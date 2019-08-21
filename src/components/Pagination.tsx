import React from 'react';
import { Link } from 'gatsby';
import { Flex, Text } from 'rebass';
import styled, { createGlobalStyle } from 'styled-components';
import { head, last } from 'lodash';

interface Props {
  numPage: number;
  currentPage: number;
  pathPrefix: string;
}

interface PageProps {
  num: number;
  currentPage: number;
}

const GlobalStyle = createGlobalStyle`
  a, a:visited {
    text-decoration: none;
  }
`;

const PageNum = styled(Text)`
  ${({ num, currentPage }: PageProps) => {
    if (num === currentPage) {
      return `color: rgb(44, 120, 212);`;
    } else {
      return `color: rgba(10, 10, 10, 0.2);`;
    }
  }}
  transition: color .1s ease-in-out;

  &:hover {
    color: rgb(255, 165, 0);
  }
`;

export default ({ numPage, currentPage, pathPrefix }: Props) => {
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(numPage, currentPage + 2);
  const pageCount = endPage - startPage + 1;
  const pageNums = Array.from({ length: pageCount }, (_, i) => startPage + i);
  return (
    <>
      <GlobalStyle />
      <Flex justifyContent="center" py={4}>
        {head(pageNums) > 1 ? (
          <Link to={pathPrefix}>
            <PageNum num={0} currentPage={-1}>
              {'<<'}
            </PageNum>
          </Link>
        ) : null}
        {pageNums.map(num => (
          <Link to={num > 1 ? `${pathPrefix}/page/${num}` : pathPrefix}>
            <PageNum mx={3} num={num} currentPage={currentPage}>
              {num}
            </PageNum>
          </Link>
        ))}
        {last(pageNums) < numPage ? (
          <Link to={`${pathPrefix}/page/${numPage}`}>
            <PageNum num={0} currentPage={-1}>
              {'>>'}
            </PageNum>
          </Link>
        ) : null}
      </Flex>
    </>
  );
};
