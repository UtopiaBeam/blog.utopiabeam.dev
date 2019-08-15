import React from 'react';
import { FluidObject } from 'gatsby-image';
import Pagination from '../components/Pagination';
import Card from '../components/Card';

interface Post {
  title: string;
  slug: string;
  description: string;
  date: Date;
  banner: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

interface Props {
  pageContext: {
    numPage: number;
    currentPage: number;
    posts: Post[];
  };
}

export default (props: Props) => {
  const { numPage, currentPage, posts } = props.pageContext;
  const blogCards = posts.map((post: Post) => <Card {...post} />);
  return (
    <>
      {blogCards}
      <Pagination numPage={numPage} currentPage={currentPage} />
    </>
  );
};
