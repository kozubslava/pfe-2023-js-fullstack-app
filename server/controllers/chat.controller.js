const { Chat, Message } = require('../models');

// post /chats
module.exports.createChat = async (req, res, next) => {
  try {
    const { body } = req;

    const usersSet = new Set([...body.users]);
    const chat = await Chat.create({ ...body, users: [...usersSet] });

    res.status(201).send({ data: chat });
  } catch (error) {
    next(error);
  }
};

// /chats
module.exports.findAllChats = async (req, res, next) => {
  try {
    const chats = await Chat.find().populate('messages').populate('users');
    res.status(200).send({ data: chats });
  } catch (error) {
    next(error);
  }
};

// get /users/:ID/chats
module.exports.findChatsOfUser = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;
    const chats = await Chat.find({ users: userId })
      .select('messages users name')
      .populate({
        path: 'messages',
        populate: 'author',
      })
      .populate('users');
    res.status(200).send({ data: chats });
  } catch (error) {
    next(error);
  }
};

// get /chats/:ID
module.exports.getChat = async (req, res, next) => {
  try {
    const {
      params: { chatId },
    } = req;

    const chats = await Chat.findById(chatId)
      .select('messages users name')
      .populate({
        path: 'messages',
        populate: 'author',
      })
      .populate('users');

    res.status(200).send({ data: chats });
  } catch (error) {
    next(error);
  }
};

// post /chats/:ID
module.exports.addMessageToChat = async (req, res, next) => {
  try {
    const {
      body,
      params: { chatId },
    } = req;

    const message = await Message.create({ ...body, chat: chatId });

    const chat = await Chat.findOneAndUpdate(
      { _id: chatId },
      { $push: { messages: message._id } }
    );

    res.status(200).send({ data: message });
  } catch (error) {
    next(error);
  }
};

// post /chats/:ID/users
module.exports.addUserToChat = async (req, res, next) => {
  try {
    const {
      body: { users },
      params: { chatId },
    } = req;

    const chat = await Chat.findOneAndUpdate(
      { _id: chatId },
      { $addToSet: { users: users } },
      { new: true }
    ).populate('users');

    res.status(200).send({ data: chat });
  } catch (error) {
    next(error);
  }
};
