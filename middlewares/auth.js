const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require("../utils/config");
const UnauthorizedError = require('../errors/unauthorizedError');

module.exports.auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    next(new UnauthorizedError("Authorization required"));
  }

  const token = authorization.replace("Bearer ", "");
  let payload;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    next(new UnauthorizedError("Invalid Token"));
  }
  req.user = payload
  return next();
};


