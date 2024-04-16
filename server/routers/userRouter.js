const userRouter = require('express').Router();
const UserController = require('../controllers/user.controller');

userRouter
  .route('/')
  .post(UserController.createUser)
  .get(UserController.findUsers);

userRouter
  .route('/:userId')
  .get(UserController.findUser)
  .put(UserController.updateUser)
  .delete(UserController.deleteUser);

module.exports = userRouter;
