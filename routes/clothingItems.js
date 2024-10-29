const router = require('express').Router();
const { errors } = require('celebrate');
const {getClothingItems, createClothingItems, deleteClothingItems, likeItem, dislikeItem} = require("../controllers/clothingItems");
const { auth } = require('../middlewares/auth');
const { validateClothingItem, validateIds } = require('../middlewares/validation');


router.get("/", getClothingItems);

router.use(auth)
router.post("/", validateClothingItem, createClothingItems);
router.delete("/:itemId", validateIds, deleteClothingItems);
router.put("/:itemId/likes", validateIds, likeItem);
router.delete("/:itemId/likes", validateIds, dislikeItem);

router.use(errors());

module.exports = router;