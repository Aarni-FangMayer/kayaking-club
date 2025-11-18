const path = require("path");
const logger = require("./logger");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const checkAdmin = (request, response, next) => {

  const userRole = request.body.userRole;

  logger.info('checkAdmin user', userRole)

  if (!userRole) {
    return response.status(401).json({ error: "Unauthorized" });
  }

  if (userRole !== "admin") {
    return response.status(403).json({ error: "Forbidden: Admins only" });
  }

  next();
}

const authenticate = async (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader || !authHeader.toLowerCase().startsWith("bearer ")) {
    return res.status(401).json({ error: "Token missing or invalid" });
  }

  const token = authHeader.substring(7);

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(401).json({ error: "User not found" });

    req.user = {
      id: user.id,
      username: user.username,
      role: user.role,
    };

    next();
  } catch (error) {
    logger.info('Invalid token', error)
    return res.status(401).json({ error: "Invalid token" });
  }
};

const requestLogger = (request, response, next) => {
  logger.info("Method:", request.method);
  logger.info("Path:  ", request.path);
  logger.info("Body:  ", request.body);
  logger.info("---");
  next();
};

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

const errorHandler = (error, request, response, next) => {
  logger.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  } else if (
    error.name === "MongoServerError" &&
    error.message.includes("E11000 duplicate key error")
  ) {
    return response
      .status(400)
      .json({ error: "expected `username` to be unique" });
  }

  next(error);
};

const frontendHandler = (distPath) => {
  return (req, res, next) => {
    if (req.path.startsWith("/api")) {
      return res.status(404).json({ error: "unknown endpoint" });
    }
    res.sendFile(path.resolve(distPath, "index.html"));
  };
};

module.exports = {
  checkAdmin,
  authenticate,
  requestLogger,
  unknownEndpoint,
  errorHandler,
  frontendHandler,
};
