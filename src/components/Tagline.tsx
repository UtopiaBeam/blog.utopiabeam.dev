import React from 'react';
import styles from './Tagline.module.scss';

export default () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <h1>Welcome to my blog!</h1>
        <p>
          MWIT 24/4 | CU 101 | CPCU 44 | President of Thinc. | Back-end
          developer | Interesting in DevOps & front-end development | Love to
          learn new things
        </p>
      </div>
    </div>
  );
};
