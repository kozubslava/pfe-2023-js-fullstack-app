const _ = require('lodash');

module.exports.prepareUser = (user) => {
  console.log(user);

  // const userWithoutPassword = _.omit(user, ['password', '__v']);
  delete user.password;

  console.log(user);
  return userWithoutPassword;

};
