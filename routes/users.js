const router = require('express').Router();
const {getUser, createUser, getUsers, login} = require("../controllers/users");


router.get("/:userId", getUser);


module.exports = router;
