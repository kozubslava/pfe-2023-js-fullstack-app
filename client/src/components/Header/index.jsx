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
        <li>
          <NavLink
            exact
            to='/registration'
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Registration
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to='/users'
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Active users
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
