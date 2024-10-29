const router = require('express').Router();
const { errors } = require('celebrate');
const {getCurrentUser, updateUser} = require("../controllers/users");
const { auth } = require('../middlewares/auth');
const { validateUpdateUserInfo } = require('../middlewares/validation');

router.use(auth);
router.get("/me", getCurrentUser);
router.patch("/me",validateUpdateUserInfo, updateUser)

router.use(errors());

module.exports = router;
