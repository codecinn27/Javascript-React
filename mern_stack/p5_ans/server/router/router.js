const express = require("express");
const route = express.Router();
const passport = require("passport");
const authRouter = require("./AuthRouter");
const crudRoutes = require("./crudRoutes");
const FileCrudController = require("../controller/FileCrudController.js");
const multer = require("multer");
const upload = multer();
route.use("/api/auth/", authRouter);

route.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    sesssion: false,
  })
);

route.post(
  "/api/storefile", // Add the forward slash here
  upload.single("file"),
  FileCrudController.storeFile
);
route.get("/api/getFile/:filename", FileCrudController.getFile);
route.use("/api/items", crudRoutes);
module.exports = route;
