const authRouter = require('express').Router();
const AuthController = require('../controllers/auth.controller');

authRouter.post('/registration', AuthController.registration);
authRouter.post('/login', AuthController.login);


module.exports = authRouter;