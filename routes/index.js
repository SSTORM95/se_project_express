const router = require('express').Router()
const clothingItems = require('./clothingItems')
const users = require("./users")
const { ERROR_CODES } = require("../utils/errors");
const { login, createUser } = require('../controllers/users');

router.post('/signin', login);
router.post('/signup', createUser);
router.use("/items", clothingItems)
router.use("/users", users)

router.use(( req,res ) => {
  res.status(ERROR_CODES.NOT_FOUND).send({ message: "Route not found" });
});


module.exports = router;