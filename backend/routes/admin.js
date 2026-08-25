const express = require("express");
const { authenticate, authorizeAdmin } = require("../middleware/auth");

const router = express.Router();

router.get("/",
  authenticate,
  authorizeAdmin,
  (req, res) => {
    res.json({ message: "welcome admin" });
  });

  module.exports = router;