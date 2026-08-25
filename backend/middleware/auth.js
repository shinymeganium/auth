const jwt = require("jsonwebtoken");

function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).send("missing token");

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  }
  catch (err) {
    res.status(401).send("invalid token");
  }
}

function authorizeAdmin(req, res, next) {
  if (req.user.role !== "admin")
    return res.status(403).send("forbidden");

  next();
}

module.exports = { authenticate, authorizeAdmin };