const express = require("express");
const {authenticate, authorizeAdmin} = require("../middleware/auth");

const router = express.Router();

router.get("/", authenticate, (req, res) => {
  res.json({ message: "welcome", user: req.user });
});


module.exports = router;