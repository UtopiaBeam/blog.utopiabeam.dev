import React from 'react';
import Tagline from '../components/Tagline';
import Navbar from '../components/Navbar';
import Content from '../components/Content';
import styles from './Home.module.scss';
import Background from '../components/Background';

export default () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <Tagline />
      <Content />
      <Background />
    </div>
  );
};
