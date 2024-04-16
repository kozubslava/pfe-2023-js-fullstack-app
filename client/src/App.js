import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import RegistrationPage from './pages/Registration';
import UserContext from './contexts/userContext';
import UsersPage from './pages/Users';

const userMockData = {
  id: 1,
  firstName: 'User',
  lastName: 'Userenko',
  email: 'user@user.com',
  password: '1234test',
  isMale: true,
};

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/registration' component={RegistrationPage} />
        <Route path='/users' component={UsersPage} />
      </Switch>
    </UserContext.Provider>
  );
}

export default App;
