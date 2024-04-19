const bcrypt = require('bcrypt');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const { User, RefreshToken } = require('../models');
const { prepareUser } = require('../utils/userUtils');


const jwtSign = promisify(jwt.sign);
const jwtVerify = promisify(jwt.verify);

// 1. - реєстрація користувача
module.exports.registration = async (req, res, next) => {
  try {
    const { body } = req;
    const user = await User.create(body);

    const userWithoutPassword = prepareUser(user);

    // генеруємо токен для користувача
    const token = await jwtSign(
      {
        userId: user._id,
      },
      'secret-12345',
      { expiresIn: '1d' }
    );

    // зберігаємо токен у БД
    await RefreshToken.create({ userId: user._id, token });

    res.status(201).send({ data: { user: userWithoutPassword, token } });
  } catch (error) {
    next(error);
  }
};

// 2. - логін користувача
module.exports.login = async (req, res, next) => {
  try {
    // логін / пошта + пароль
    const {
      body: { email, password },
    } = req;

    // 1. знайти користувача
    const user = await User.findOne({ email });

    // одразу повертає чистий js об'єкт замість монгусівського документу
    // const user = await User.findOne({ email }).lean();

    // 1.5 якщо не знайшли користувача то кидаємо помилку
    if (!user) {
      // 404
      throw new Error('user with this data not found');
    }

    // 2. перевірити пароль
    const isSamePassword = await bcrypt.compare(password, user.password);

    if (!isSamePassword) {
      // 404
      throw new Error('user with this data not found');
    }

    // 3. генеруємо токен для користувача
    const token = await jwtSign(
      {
        userId: user._id,
      },
      'secret-12345',
      { expiresIn: '1d' }
    );

    // зберігаємо токен у БД
    await RefreshToken.create({ userId: user._id, token });

    // 4. надсилаємо дані про користувача на фронт БЕЗ ПАРОЛЮ
    const userWithoutPassword = prepareUser(user);
    res.status(201).send({ data: { user: userWithoutPassword, token } });
  } catch (error) {
    next(error);
  }
};

// 3. - оновлення сессії
module.exports.refresh = async (req, res, next) => {
  try {
    // з фронта нам надсилають токен користувача, сессію якого треба оновити
    const {
      body: { token },
    } = req;

    // перевіряємо токен на валідність
    const { userId } = await jwtVerify(token, 'secret-12345');

    // перевіряємо що токен зроблений нашим сервером
    const tokenInstanse = await RefreshToken.findOne({token});

    if (!tokenInstanse) {
      throw new Error('Token not found');
    }

    const user = await User.findById(tokenInstanse.userId);

    if (!user) {
      throw new Error('User not found');
    }

    const newToken = await jwtSign(
      {
        userId: user._id,
      },
      'secret-12345',
      { expiresIn: '1d' }
    );

    // міняємо запис зі старим токеном у БД на новий
    await RefreshToken.findOneAndUpdate({token}, {token: newToken});

    const userWithoutPassword = prepareUser(user);
    res
      .status(201)
      .send({ data: { user: userWithoutPassword, token: newToken } });
  } catch (error) {
    next(error);
  }
};
