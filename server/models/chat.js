const { Schema, model } = require('mongoose');

const chatSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, 'Name field in chat is required'],
    },
    isPrivate: {
      type: Boolean,
      required: true,
      default: true,
    },
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Users is required in chat'],
      },
    ],
    messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
    coverImage: {
      type: String,
    },
  },
  { timestamps: true }
);

const Chat = model('Chat', chatSchema);

module.exports = Chat;
