import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

export default () => {
  const [initialized, setInitialized] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [searchText, setSearchText] = useState('');

  function handleScroll() {
    setFixed(window.pageYOffset > window.innerHeight);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(searchText);
  }

  useEffect(() => {
    if (!initialized) {
      window.addEventListener('scroll', handleScroll);
      setInitialized(true);
    }
  }, [initialized]);

  return (
    <nav className={fixed ? styles.fixedNavbar : styles.navbar}>
      <ul className={styles.leftNavbar}>
        <li className={styles.logo}>
          <a href="https://utopiabeam.dev">{'{UtopiaBeam}'}</a>
        </li>
        <li className={styles.menu}>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <form className={styles.rightNavbar} onSubmit={handleSubmit}>
        <input
          className={styles.searchBox}
          placeholder="Type to search"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
      </form>
    </nav>
  );
};
