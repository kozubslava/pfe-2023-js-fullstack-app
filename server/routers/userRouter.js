const userRouter = require('express').Router();
const UserController = require('../controllers/user.controller');
const { validateUserUpdate } = require('../middlewares/user.mw');

userRouter
  .route('/')
  .post(UserController.createUser)
  .get(UserController.findUsers);

userRouter
  .route('/:userId')
  .get(UserController.findUser)
  .put(validateUserUpdate, UserController.updateUser)
  .delete(UserController.deleteUser);

module.exports = userRouter;
