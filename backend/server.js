require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("root");
});

const { getUsers } = require("./userStore.js");
app.get("/users", (req, res) => {
  res.send(getUsers())
  console.log(getUsers())
});

const adminRoute = require("./routes/admin.js");
const loginRoute = require("./routes/login.js");
const registerRoute = require("./routes/register.js");
const dashboardRoute = require("./routes/dashboard.js");

app.use("/admin", adminRoute);
app.use("/login", loginRoute);
app.use("/register", registerRoute);
app.use("/dashboard", dashboardRoute);

app.listen(PORT, () => {
  console.log(`listening port ${PORT}`);
});
