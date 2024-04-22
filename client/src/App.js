import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import RegistrationPage from './pages/Registration';
import UserContext from './contexts/userContext';
import UsersPage from './pages/Users';
import LoginPage from './pages/Login';
import { refresh } from './api';

function App() {
  const [user, setUser] = useState(null);

  // спроба виконання рефреш - запиту
  useEffect(() => {
    const token = window.localStorage.getItem('REFRESH_TOKEN');

    // якщо токен існує то робимо запит на рефреш даних користувача
    if (token) {
      refresh(token).then((response) => {
        // отриманого користувача зберігаємо у стейт
        setUser(response.data.data.user);
      });
    }
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/registration' component={RegistrationPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/users' component={UsersPage} />
      </Switch>
    </UserContext.Provider>
  );
}

export default App;
