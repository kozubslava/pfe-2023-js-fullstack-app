const { Schema, model } = require('mongoose');

const messageSchema = new Schema(
  {
    text: {
      type: String,
      required: [true, 'Text is required for creating a message'],
    },
    chat: {
      type: Schema.Types.ObjectId,
      ref: 'Chat',
      required: [true, 'Chat Id is required for creating a message'],
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Author Id is required for creating a message'],
    },
  },
  { timestamps: true }
);

const Message = model('Message', messageSchema);

module.exports = Message;
