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

export default ({ pageContext }: Props) => {
  const { title, html, banner } = pageContext;
  return (
    <>
      {banner === null ? null : (
        <img src={banner.childImageSharp.fluid.src} alt="" />
      )}
      <Helmet title={title} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};
