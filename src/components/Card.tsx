import React from 'react';
import styles from './Card.module.scss';
import { Blog, getNewestBlogs } from '../services/card.service';

export default () => {
  const blogs: Blog[] = getNewestBlogs();
  return blogs.map(blog => {
    <div className={styles.card}>
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
    </div>;
  });
};
