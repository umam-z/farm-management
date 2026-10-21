let users = [
  { id: 1, name: "Budi", email: "budi@example.com" },
  { id: 2, name: "Siti", email: "siti@example.com" },
];

const findAll = async () => {
  return users;
};

const create = async (userData) => {
  const newUser = { id: users.length + 1, ...userData };
  users.push(newUser);
  return newUser;
};

module.exports = {
  findAll,
  create,
};
