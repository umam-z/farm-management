const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const validate = require("../middlewares/validationMiddleware");
const { createUserSchema } = require("../validators/userValidator");

router.get("/", userController.getUsers);
router.post("/", validate(createUserSchema), userController.createUser);

module.exports = router;
