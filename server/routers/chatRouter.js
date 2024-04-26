const chatRouter = require('express').Router();
const ChatController = require('../controllers/chat.controller');

chatRouter
  .route('/')
  .post(ChatController.createChat)
  .get(ChatController.findAllChats);

chatRouter
  .route('/:chatId')
  .get(ChatController.getChat)
  .post(ChatController.addMessageToChat);

chatRouter
  .route('/:chatId/users')
  .post(ChatController.addUserToChat);

module.exports = chatRouter;