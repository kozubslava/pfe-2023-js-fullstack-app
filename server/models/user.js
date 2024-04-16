const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
    },
    imgSrc: { type: String },
    email: {
      type: String,
      unique: true,
      required: true,
      match: [
        /[A-Za-z0-9]+[@]{1}[A-Za-z0-9]+[.]{1}[A-Za-z0-9]+/,
        'Email must be in form like: email@cool.com',
      ],
    },
    password: {
      type: String,
      required: [true, 'password field is required'],
      minlength: [8, 'password field cannot be smaller then 8 symbols'],
    },
    isMale: { type: Boolean },
  },
  { timestamps: true }
);

const User = model('User', userSchema);

module.exports = User;
