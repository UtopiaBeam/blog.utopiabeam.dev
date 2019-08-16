import React from 'react';
import { Link } from 'gatsby';
import { Flex, Text } from 'rebass';
import styled, { createGlobalStyle } from 'styled-components';
import { head, last } from 'lodash';

interface Props {
  numPage: number;
  currentPage: number;
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
      return `color: rgba(44, 120, 212, 0.9);`;
    } else {
      return `color: rgba(10, 10, 10, 0.6);`;
    }
  }}

  &:hover {
    color: rgba(255, 165, 0, 0.8);
  }
`;

export default ({ numPage, currentPage }: Props) => {
  const pathPrefix = 'page/';
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(numPage, currentPage + 2);
  const pageCount = endPage - startPage + 1;
  const pageNums = Array.from({ length: pageCount }, (_, i) => startPage + i);
  console.log(last(pageNums));
  return (
    <>
      <GlobalStyle />
      <Flex justifyContent="center" mt={5} mb={4}>
        {head(pageNums) > 1 ? (
          <Link to="/">
            <PageNum num={0} currentPage={-1}>
              {'<<'}
            </PageNum>
          </Link>
        ) : null}
        {pageNums.map((num, i) => (
          <Link to={num > 1 ? `${pathPrefix}${num}` : '/'}>
            <PageNum mx={3} num={num} currentPage={currentPage}>
              {num}
            </PageNum>
          </Link>
        ))}
        {last(pageNums) < numPage ? (
          <Link to={`${pathPrefix}${numPage}`}>
            <PageNum num={0} currentPage={-1}>
              {'>>'}
            </PageNum>
          </Link>
        ) : null}
      </Flex>
    </>
  );
};
