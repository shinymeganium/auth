const express = require("express");
const bcrypt = require("bcryptjs");
const { addUser } = require("../userStore");

const router = express.Router();

router.route("/")
.get((req, res) => {
  res.send("register GET");
})
.post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  const id = crypto.randomUUID();

  addUser({ id, email, hash, role: "user" })
  res.send("user registered");
});

module.exports = router;