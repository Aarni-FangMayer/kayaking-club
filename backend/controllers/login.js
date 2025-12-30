const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const loginRouter = require("express").Router();
const User = require("../models/user");

loginRouter.post("/", async (request, response, next) => {
   const { username, password } = request.body;

  try {
    const user = await User.findOne({ username });
    const passwordCorrect = user ? await bcrypt.compare(password, user.passwordHash) : false;

    if (!(user && passwordCorrect)) {
      return response.status(401).json({ error: "Invalid username or password" });
    }

    const userForToken = { username: user.username, id: user._id };
    const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: "7d" });

    response.status(200).json({ token: token, username: user.username, email: user.email, role: user.role, phone: user.phone, id: user._id, avatar: user.avatar });
  } catch (error) {
    next(error);
  }
});

module.exports = loginRouter;