import React from 'react';
import { FluidObject } from 'gatsby-image';
import { Link } from 'gatsby';
import Pagination from '../components/Pagination';

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
  html: string;
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
  return (
    <div key={currentPage}>
      <h1>{currentPage}</h1>
      {posts.map((post: Post) => (
        <>
          <Link to={post.slug}>{post.title}</Link>
          <h3>{post.description}</h3>
          {post.banner ? (
            <img src={post.banner.childImageSharp.fluid.src} />
          ) : null}
        </>
      ))}
      <Pagination numPage={numPage} currentPage={currentPage} />
    </div>
  );
};
