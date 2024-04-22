const JWTService = require('../services/jwt.service');
const { RefreshToken } = require('../models');

module.exports.checkRefreshToken = async (req, res, next) => {
  try {
    // з фронта нам надсилають токен користувача, сессію якого треба оновити
    const {
      body: { token },
    } = req;

    // перевіряємо токен на валідність
    const { userId } = await JWTService.verifyAccessToken(token);

    // перевіряємо що токен зроблений нашим сервером
    const tokenInstanse = await RefreshToken.findOne({ token, userId });

    if (!tokenInstanse) {
      throw new Error('Token not found');
    }

    req.tokenInstanse = tokenInstanse;

    next();
  } catch (error) {
    next(error);
  }
};
