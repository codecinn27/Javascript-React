const express = require('express');
const route = express.Router();
const passport = require("passport");
const authRouter = require("./AuthRouter");
const crudRoutes = require("./CrudRouter");
route.use("/api/auth/", authRouter);

route.get("/auth/google", passport.authenticate("google", 
    { scope: ["profile", "email"],
        session: false
     }));

route.use("/api/items", crudRoutes);
module.exports = route;