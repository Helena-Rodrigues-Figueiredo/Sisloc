const { User } = require("../models");

const login = async (email) => {
  const userEmail = await User.findOne({ where: { email } });
  return userEmail;
};

const register = async ({ name, email, password }) => {
  const userEmail = await login(email);

  if (userEmail === null) {
    return User.create({ name, email, password });
  }
};

module.exports = {
  login,
  register,
};
