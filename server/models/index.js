const mongoose = require('mongoose');
const dbConfig = require('../configs/mongo.json');
const User = require('./user');
const RefreshToken = require('./refreshToken');
const Chat = require('./chat');
const Message = require('./message');

async function connectToDb() {
  await mongoose.connect(dbConfig.CONNECTION_STRING);
}

connectToDb().catch((err) => {
  console.log(err);
  process.exit(1);
});

module.exports = {
  User,
  RefreshToken,
  Chat,
  Message
};
