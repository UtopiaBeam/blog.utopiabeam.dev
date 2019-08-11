import React from 'react';
import { FluidObject } from 'gatsby-image';
import { Link } from 'gatsby';

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

interface BlogListProps {
  pageContext: {
    currentPage: number;
    posts: Post[];
  };
}

export default (props: BlogListProps) => {
  const { currentPage, posts } = props.pageContext;
  return (
    <div key={currentPage}>
      <h1>{currentPage}</h1>
      {posts.map((post: Post) => (
        <>
          <Link to={post.slug}>{post.title}</Link>
          <h3>{post.description}</h3>
          {post.banner ? <img src={post.banner.childImageSharp.fluid.src} /> : null}
        </>
      ))}
    </div>
  );
};
