const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { findUserByEmail, getUser } = require("../userStore");

router.route("/")
.get((req, res) => {
  res.send("get login");
})
.post((req, res) => {
  const email = req.body.email;
  const user = findUserByEmail(email);
  
  if (user === undefined) {
    res.send("user not found");
    return;
  }
  
  const password = req.body.password;
  const hash = user.hash;

  if (!bcrypt.compareSync(password, hash)) {
    res.send("wrong password");
    return;
  }

  const token = jwt.sign(
    { email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" });

  res.json({ token, role: user.role });

});

module.exports = router;