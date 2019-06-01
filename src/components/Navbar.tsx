import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

export default () => {
  const [initialized, setInitialized] = useState(false);
  const [fixed, setFixed] = useState(false);

  function handleScroll(): void {
    setFixed(window.pageYOffset > window.innerHeight);
  }

  useEffect((): void => {
    if (!initialized) {
      window.addEventListener('scroll', handleScroll);
      setInitialized(true);
    }
  }, [initialized]);

  return (
    <ul className={fixed ? styles.fixedNavbar : styles.navbar}>
      <li className={styles.logo}>
        <a href="https://utopiabeam.dev">{'{UtopiaBeam}'}</a>
      </li>
      <li className={styles.menu}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.menu}>
        <a href="https://osu.ppy.sh/u/UtopiaBeam">osu!</a>
      </li>
    </ul>
  );
};
