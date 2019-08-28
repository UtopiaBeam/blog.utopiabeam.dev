import React from 'react';
import Footer from './Footer';
import { createGlobalStyle } from 'styled-components';

interface Props {
  children: React.ReactChildren;
}

const GlobalStyle = createGlobalStyle`
    html {
        background-color: rgb(250, 250, 250);
    }
    a {
      text-decoration: none;
    }
`;

export default (props: Props) => {
  return (
    <>
      <GlobalStyle />
      {props.children}
      <Footer />
    </>
  );
};
