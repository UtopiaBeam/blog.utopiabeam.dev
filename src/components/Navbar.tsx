import React from 'react';
import styles from './Navbar.module.scss';

export default () => {
  return (
    <ul className={styles.ul}>
      <li className={styles.li}>
        <a href="https://utopiabeam.dev">home</a>
      </li>
      <li className={styles.li}>
        <a href="https://osu.ppy.sh/u/UtopiaBeam">osu!</a>
      </li>
    </ul>
  );
};
