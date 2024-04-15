import React, { useContext } from 'react';
import Header from '../../components/Header';
import UserProfile from '../../components/UserProfile';
import styles from './ProfilePage.module.scss';
import UserContext from '../../contexts/userContext';

const ProfilePage = (props) => {
  const [user] = useContext(UserContext);

  return (
    <>
      <Header />
      <section className={styles.container}>
        <h1 className={styles.heading}>User Profile</h1>
        <UserProfile user={user} />
      </section>
    </>
  );
};

export default ProfilePage;
