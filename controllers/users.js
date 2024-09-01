const User = require("../models/user");
const { ERROR_CODES, ERROR_MESSAGES } = require("../utils/errors");

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send(users))
    .catch((err) => {
      console.error(err);
      res
        .status(ERROR_CODES.SERVER_ERROR)
        .send({ message: ERROR_MESSAGES.SERVER_ERROR });
    });
};

module.exports.getUser = (req, res) => {
  const { userId } = req.params;
  User.findById(userId)
    .then((user) => {
      if (!user) {
        return res
          .status(ERROR_CODES.NOT_FOUND)
          .send({ message: ERROR_MESSAGES.NOT_FOUND });
      }
       return res.send(user);
    })
    .catch((err) => {
      console.error(err);
      if (err.name === "CastError") {
        res
          .status(ERROR_CODES.BAD_REQUEST)
          .send({ message: ERROR_MESSAGES.BAD_REQUEST });
      } else {
        res
          .status(ERROR_CODES.SERVER_ERROR)
          .send({ message: ERROR_MESSAGES.SERVER_ERROR });
      }
    });
};

module.exports.createUser = (req, res) => {
  const { name, avatar } = req.body;

  User.create({ name, avatar })
    .then((user) => res.send(user))
    .catch((err) => {
      console.error(err);
      if (err.name === "ValidationError") {
        res
          .status(ERROR_CODES.BAD_REQUEST)
          .send({ message: ERROR_MESSAGES.BAD_REQUEST });
      } else {
        res
          .status(ERROR_CODES.SERVER_ERROR)
          .send({ message: ERROR_MESSAGES.SERVER_ERROR });
      }
    });
};
