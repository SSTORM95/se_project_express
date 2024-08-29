const router = require('express').Router()
const clothingItems = require('./clothingItems')
const users = require("./users")

router.use("/items", clothingItems)
router.use("/users", users)

router.use((req,res) => {
  res.status(500).send({message: "Requested resource not found"})
})