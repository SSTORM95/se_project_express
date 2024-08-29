const {getClothingItems, createClothingItems, deleteClothingItems} = require("../controllers/clothingItems");
const router = require('express').Router();

router.get("/", getClothingItems);
router.post("/:itemId", createClothingItems);
router.delete("/", deleteClothingItems);

module.exports = router;