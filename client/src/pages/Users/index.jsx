import React, { useState } from 'react';
import Header from '../../components/Header';
import UsersList from '../../components/UsersList';

const activeUsers = [
  {
    id: 1,
    firstName: 'User 1',
    lastName: 'Userenko',
    email: 'user1@user.com',
    password: '1234test',
    isMale: true,
  },
  {
    id: 2,
    firstName: 'User 2',
    lastName: 'Test',
    email: 'user2@user.com',
    password: '1234test',
    isMale: true,
  },
  {
    id: 3,
    firstName: 'User 3',
    lastName: 'Userenko',
    email: 'user3@user.com',
    password: '1234test',
    isMale: false,
  }
];

const UsersPage = (props) => {
  const [users, setUsers] = useState(activeUsers);


  return (
    <>
    <Header />
    <section >
      <h1>Active users </h1>
      <button onClick={() => {
        const newUsers = [...users];
        setUsers(newUsers.reverse());
      }}>Change order</button>

      <UsersList users={users} />
    </section>
  </>
  );
}

export default UsersPage;
