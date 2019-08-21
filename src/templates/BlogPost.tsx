import React from 'react';
import Helmet from 'react-helmet';
import { FluidObject } from 'gatsby-image';

interface Props {
  pageContext: {
    title: string;
    description: string;
    date: Date;
    banner: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
    html: string;
  };
}

export default (props: Props) => {
  const { title, html, banner } = props.pageContext;
  return (
    <>
      {banner ? <img src={banner.childImageSharp.fluid.src} alt="" /> : null}
      <Helmet title={title} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};
