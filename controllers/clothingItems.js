const clothingItem = require('../models/clothingItem');

module.exports.getClothingItems = (req, res) => {
  clothingItem.find({})
    .then(clothingItems => res.send(clothingItems))
    .catch(() => res.status(500).send({ message: 'Error' }));
};

module.exports.createClothingItems = (req, res) => {
  const { name, weather, imageUrl } = req.body;
  const owner = req.user._id;

  clothingItem.create({ name, weather, imageUrl, owner  })
    .then(clothingItems => res.send(clothingItems))
    .catch((err) => {
      console.error(err);
      res.status(500).send({ message: 'Error' })});
};

module.exports.deleteClothingItems = (req, res) => {
  const {itemId} = req.params;
  clothingItem.findByIdAndDelete(itemId)
    .then(clothingItems => res.send(clothingItems))
    .catch(() => res.status(500).send({ message: 'Error' }));
};

