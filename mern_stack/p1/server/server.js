const express = require('express');
const cors = require("cors");
const app = express()
const port = 5000

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
)

const indexRoute = require("./router/router");
app.use("/",indexRoute);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})