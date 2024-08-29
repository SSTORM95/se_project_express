const clothingItem = require('../models/clothingItem');

module.exports.getClothingItems = ('/items', (req, res) => {
  clothingItem.find({})
    .then(clothingItems => res.send(clothingItems))
    .catch(() => res.status(500).send({ message: 'Error' }));
});

module.exports.createClothingItems = ('/items', (req, res) => {
  const { name, weather, imageUrl } = req.body;

  User.create({ name, weather, imageUrl })
    .then(user => res.send(user))
    .catch(() => res.status(500).send({ message: 'Error' }));
});

module.exports.deleteClothingItems = ('/items/:itemId', (req, res) => {
  const {itemId} = req.params;
  clothingItem.findByIdAndDelete(itemId)
    .then(clothingItem => res.send(clothingItem))
    .catch(() => res.status(500).send({ message: 'Error' }));
});

