const bcrypt = require("bcryptjs");

const users = [{ 
  id: "admin1",
  email: "admin@email.com",
  hash: bcrypt.hashSync("admin123", 10),
  role: "admin" }];

const addUser = user => users.push(user);

const getUser = id => users.find(user =>
  user.id === id);

const getUsers = () => users;

const findUserByEmail = email => users.find(user =>
  user.email === email);

module.exports = { addUser, getUser, getUsers, findUserByEmail };