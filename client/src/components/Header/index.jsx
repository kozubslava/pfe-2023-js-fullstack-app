import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = (props) => {
  return (
    <header className={styles.container}>
      <ul className={styles.navList}>
        <li>
          <NavLink
            exact
            to='/'
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to='/profile'
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to='/about'
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            About
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
