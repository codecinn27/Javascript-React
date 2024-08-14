const express = require('express');
const route = express.Router();
const authController = require("../controller/AuthController");

route.post("/register", authController.register);

route.post("/signin", authController.signin);


module.exports = route;