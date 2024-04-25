import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../../contexts/userContext';

/*
  Опціональне ДЗ:
    Створити компонент PublicOnlyRoute який не дозволяє авторизовани користувачам
    переходити на певні сторінки на фронті (реєстрації, логін)
*/

const PublicOnlyRoute = (props) => {
  const [{ user, isLoading }] = useContext(UserContext);

  // якщо  дані користувача магаються отримати то можна про це споівстити користувача
  if (isLoading) {
    return <div>LOADING ...</div>;
  }

  // якщо користувач є то ми перекидаємо його на головну сторінку 
  if (user) {
    return <Redirect to='/' />;
  }
  
  // якщо даних користувача немає і ми не вантажимо їх то показуємо сторінку на яку людина йшла
  return <Route {...props} />;
}

export default PublicOnlyRoute;
