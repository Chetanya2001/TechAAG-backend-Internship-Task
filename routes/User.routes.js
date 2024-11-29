const express = require("express");
const UserController = require("../controllers/User.controller.js");
const router = express.Router();

//Register User
router.post("/register", UserController.register);
// Sign In
router.post("/logIn", UserController.LogIn);

module.exports = router;
