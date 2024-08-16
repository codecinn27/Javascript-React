const express = require('express');
const cors = require("cors");
const app = express();
const passport = require("passport");
require("./passport"); //include the same level of file which is passport.js
const port = 5000;
const cookieParser = require('cookie-parser');
const dotenv = require("dotenv");
const {connectDB} = require("./database/connection");
dotenv.config({path: "config.env"});
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
)


connectDB();
app.use(express.json());

//passport middleware
app.use(passport.initialize());
app.use(cookieParser());

const indexRoute = require("./router/router");


app.use("/",indexRoute);
app.listen(port, () => {
  console.log(`Server is ruuning on http://localhost:${port}`)
})