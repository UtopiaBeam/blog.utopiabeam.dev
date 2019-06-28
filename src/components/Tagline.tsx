import React from 'react';
import styles from './Tagline.module.scss';

export default () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <h1>Welcome to my blog!</h1>
        <p>
          Hi! My name is Natchapol Srisang (UtopiaBeam). I'm studying in Computer Engineering,
          Chulalongkorn University. I'm a backend developer who is interested in frontend and DevOps
        </p>
      </div>
    </div>
  );
};
