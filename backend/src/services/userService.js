const userRepository = require("../repositories/userRepository");

const getAllUsers = async () => {
  const users = await userRepository.findAll();
  return users;
};

const registerUser = async (userData) => {
  if (!userData.name || !userData.email) {
    throw new Error("Nama dan email wajib diisi!");
  }

  const newUser = await userRepository.create(userData);
  return newUser;
};

module.exports = {
  getAllUsers,
  registerUser,
};
