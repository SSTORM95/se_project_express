const router = require('express').Router();
const {getClothingItems, createClothingItems, deleteClothingItems, likeItem, dislikeItem} = require("../controllers/clothingItems");
const { auth } = require('../middlewares/auth');

router.get("/", getClothingItems);

router.use(auth)
router.post("/", createClothingItems);
router.delete("/:itemId", deleteClothingItems);
router.put("/:itemId/likes", likeItem)
router.delete("/:itemId/likes", dislikeItem)

module.exports = router;