import React from 'react';
import Content from '../components/Content';
import styles from './Home.module.scss';

export default () => {
  return (
    <div>
      <div className={styles.text}>
        <h1>Welcome to my blog!</h1>
        <p>
          Hello! My name is UtopiaBeam. I'm back-end developer who is trying
          to be full-stack developer. I'm also interested in math and algorithms.
        </p>
      </div>
    </div>
  );
};
