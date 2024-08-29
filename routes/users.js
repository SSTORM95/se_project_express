const router = require('express').Router();
const {getUser, createUser, getUsers} = require("../controllers/users");

router.get("/", getUsers);
router.get("/:userId", getUser);
router.post("/", createUser);

module.exports = router;
