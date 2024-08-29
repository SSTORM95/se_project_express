const User = require('../models/user');

module.exports.getUsers = ('/users', (req, res) => {
  User.find({})
    .then(users => res.send(users))
    .catch(() => res.status(500).send({ message: 'Error' }));
});

module.exports.getUser = ('/users/:userId', (req, res) => {
  const {userId} = req.params;
  User.findById(userId)
    .then(user => res.send(user))
    .catch(() => res.status(500).send({ message: 'Error' }));
});

module.exports.createUser = ('/users', (req, res) => {
  const { name, avatar } = req.body;

  User.create({ name, avatar })
    .then(user => res.send(user))
    .catch(() => res.status(500).send({ message: 'Error' }));
});