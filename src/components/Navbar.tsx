import React from 'react';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <ul
      className={
        window.pageYOffset > window.innerHeight
          ? styles.fixedNavbar
          : styles.navbar
      }
    >
      <li className={styles.logo}>
        <a href="https://utopiabeam.dev">{'{UtopiaBeam}'}</a>
      </li>
      <li className={styles.menu}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.menu}>
        <Link to="/">Photo</Link>
      </li>
    </ul>
  );
};
