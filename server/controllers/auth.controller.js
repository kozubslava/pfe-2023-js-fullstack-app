const bcrypt = require('bcrypt');
const { User } = require('../models');
const { prepareUser } = require('../utils/userUtils');

// 1. - реєстрація користувача
module.exports.registration = async (req, res, next) => {
  try {
    const { body } = req;
    const user = await User.create(body);

    const userWithoutPassword = prepareUser(user);
    res.status(201).send({ data: userWithoutPassword });
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

    // 3. надсилаємо дані про користувача на фронт БЕЗ ПАРОЛЮ
    const userWithoutPassword = prepareUser(user);
    res.status(201).send({ data: userWithoutPassword });
  } catch (error) {
    next(error);
  }
};

// 3. - оновлення сессії
module.exports.refresh = async (req, res, next) => {
  try {
    // з фронта нам надсилають айдішник користувача, сессію якого треба оновити
    const {
      body: { userId },
    } = req;

    const user = await User.findById(userId);

    if(!user) {
      throw new Error('User not found');
    }

    const userWithoutPassword = prepareUser(user);
    res.status(201).send({ data: userWithoutPassword });
  } catch (error) {
    next(error);
  }
};
