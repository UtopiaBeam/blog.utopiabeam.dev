import React from 'react';
import SEO from '../components/SEO';
import { PageType } from '../types';
import { Text, Box, Link, Flex } from 'rebass';
import styled, { keyframes } from 'styled-components';

const Term = styled(Flex)`
  background-color: #0a0a0a;
  color: #00ff66;
  min-height: 100vh;
`;

const TermText = (props): JSX.Element => (
  <Text
    {...props}
    fontSize={props.fontSize || [16, 18, 20]}
    fontFamily="Roboto Mono, monospace"
    fontWeight={500}
    pb={props.pb || 3}
  />
);

const TermLink = styled(Link)`
  color: rgb(44, 120, 212);

  :hover {
    text-decoration: underline;
  }
`;

const blink = keyframes`
  from,
  to {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

export default () => {
  return (
    <>
      <SEO title="404" type={PageType.NotFound} />
      <Term p={[4, 5, 6]} alignItems="center" justifyContent="center">
        <Box>
          <TermText textAlign="center" fontSize={[24, 26, 28]} pb={5}>
            ----- 404 ! -----
          </TermText>
          <TermText>$ Oops! looks like you're trying to break this coconut shell</TermText>
          <TermText>$ There's no way you gonna break it, trust me...</TermText>
          <TermText>
            $ So why not just go <TermLink href="/">home</TermLink>?
          </TermText>
        </Box>
      </Term>
    </>
  );
};
