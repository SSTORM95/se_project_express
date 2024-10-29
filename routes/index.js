const router = require('express').Router()
const { errors } = require('celebrate');
const NotFoundError = require('../errors/notFoundError');
const { login, createUser } = require('../controllers/users');
const { validateLogin, validateUserInfo } = require('../middlewares/validation');
const users = require("./users")
const clothingItems = require('./clothingItems')

router.post('/signin', validateLogin, login);
router.post('/signup', validateUserInfo, createUser);
router.use("/items", clothingItems)
router.use("/users", users)

router.use(() => {
  next(new NotFoundError("Route not found"));
});

router.use(errors());

module.exports = router;