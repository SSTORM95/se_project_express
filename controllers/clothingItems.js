const clothingItem = require("../models/clothingItem");
const { ERROR_CODES, ERROR_MESSAGES } = require("../utils/errors");

module.exports.getClothingItems = (req, res) => {
  clothingItem
    .find({})
    .then((clothingItems) => res.send(clothingItems))
    .catch((err) => {
      console.error(err);
      res
        .status(ERROR_CODES.SERVER_ERROR)
        .send({ message: ERROR_MESSAGES.SERVER_ERROR })})
    };

module.exports.createClothingItems = (req, res) => {
  const { name, weather, imageUrl } = req.body;
  const owner = req.user._id;

  clothingItem
    .create({ name, weather, imageUrl, owner })
    .then((clothingItems) => res.status(200).send(clothingItems))
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

module.exports.deleteClothingItems = (req, res) => {
  const { itemId } = req.params;
  clothingItem
    .findByIdAndDelete(itemId)
    .orFail()
    .then((clothingItems) => res.send(clothingItems))
    .catch((err) => {
      console.error(err);
      if (err.name === "DocumentNotFoundError") {
        res
          .status(ERROR_CODES.NOT_FOUND)
          .send({ message: ERROR_MESSAGES.NOT_FOUND });
      } else if (err.name === "CastError") {
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

module.exports.likeItem = (req, res) =>{
  clothingItem
    .findByIdAndUpdate(
      req.params.itemId,
      { $addToSet: { likes: req.user._id } },
      { new: true }
    )
    .orFail()
    .then((clothingItems) => res.send(clothingItems))
    .catch((err) => {
      console.error(err);
      if (err.name === "DocumentNotFoundError") {
        res
          .status(ERROR_CODES.NOT_FOUND)
          .send({ message: ERROR_MESSAGES.NOT_FOUND });
      } else if (err.name === "CastError") {
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

module.exports.dislikeItem = (req, res) =>{
  clothingItem.findByIdAndUpdate(
    req.params.itemId,
    { $pull: { likes: req.user._id } },
    { new: true }
  )
  .orFail()
  .then((clothingItems) => res.send(clothingItems))
    .catch((err) => {
      console.error(err);
      if (err.name === "DocumentNotFoundError") {
        res
          .status(ERROR_CODES.NOT_FOUND)
          .send({ message: ERROR_MESSAGES.NOT_FOUND });
      } else if (err.name === "CastError") {
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
