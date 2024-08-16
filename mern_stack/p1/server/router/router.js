const express = require('express');
const route = express.Router();
const passport = require("passport");
const authRouter = require("./AuthRouter");

route.use("/api/auth/", authRouter);

route.get("/auth/google", passport.authenticate("google", 
    { scope: ["profile", "email"],
        session: false
     }));


module.exports = route;