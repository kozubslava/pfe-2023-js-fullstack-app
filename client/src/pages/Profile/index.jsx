import React from 'react';
import Header from '../../components/Header';
import UserProfile from '../../components/UserProfile';
import styles from './ProfilePage.module.scss';

const ProfilePage = (props) => {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <h1 className={styles.heading}>User Profile</h1>
        <UserProfile user={{
          id: 1,
          firstName: 'User',
          lastName: 'Userenko',
          email: 'user@user.com',
          password: '1234test',
          isMale: true
        }} />
      </section>
    </>
  );
};

export default ProfilePage;
