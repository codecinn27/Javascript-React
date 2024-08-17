const express = require('express');
const route = express.Router();
const passport = require("passport");
const authController = require("../controller/AuthController");
const { handleGoogleAuthCallback } = require('../controller/handleGoogleAuthCallback');

route.post("/register", authController.register);

route.post("/signin", authController.signin);
route.get("/status", authController.checkAuthStatus);

route.get("/google/callback", passport.authenticate
    ("google", {
    failureRedirect: "/signin",
    session: false
    }), handleGoogleAuthCallback); 




module.exports = route;