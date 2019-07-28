import React from 'react';
import Helmet from 'react-helmet';

interface Props {
  pageContext: {
    title: string;
    slug: string;
    description: string;
    date: Date;
    banner: string;
    html: string;
  };
}

export default ({ pageContext }: Props) => {
  const { title, html } = pageContext;
  console.log(pageContext);
  return (
    <>
      <Helmet title={title} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};
