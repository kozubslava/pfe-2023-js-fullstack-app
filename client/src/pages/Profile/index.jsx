import React, { useContext, useState } from 'react';
import Header from '../../components/Header';
import UserProfile from '../../components/UserProfile';
import styles from './ProfilePage.module.scss';
import UserContext from '../../contexts/userContext';
import UpdateUserForm from '../../components/formComponents/UpdateUserForm';

const ProfilePage = (props) => {
  const [user] = useContext(UserContext);
  const [isProfileUpdating, setIsProfileUpdating] = useState(false);

  return (
    <>
      <Header />
      <section className={styles.container}>
        <aside className={styles.aside}>
          <button
            className={styles.btn}
            onClick={() => setIsProfileUpdating(false)}
          >
            Profile
          </button>
          <button
            className={styles.btn}
            onClick={() => setIsProfileUpdating(true)}
          >
            Change profile
          </button>
        </aside>
        <section className={styles.section}>
          {isProfileUpdating ? (
            <>
              <h1 className={styles.heading}>Profile update form</h1>
              <UpdateUserForm />
            </>
          ) : (
            <UserProfile user={user} />
          )}
        </section>
      </section>
    </>
  );
};

export default ProfilePage;
