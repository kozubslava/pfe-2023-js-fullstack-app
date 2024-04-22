const rootRouter = require('express').Router();
const userRouter = require('./userRouter');
const authRouter = require('./authRouter');
const { checkAccessToken } = require('../middlewares/token.mw');

rootRouter.use('/users', userRouter);
rootRouter.use('/auth', authRouter);

// дані з цього маршуруту будуть недоступні без токену доступу у заголовках
rootRouter.get('/secret', checkAccessToken, (req, res, next) => {

  res.send('Some secret data');
});

module.exports = rootRouter;