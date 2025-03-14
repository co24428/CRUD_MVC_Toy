const express = require("express");
const toyRoutes = require("./routes/toyRoutes");

const app = express();
const port = 3000;

app.use("/assets", express.static(__dirname + "/public"));

app.use(toyRoutes);

app.listen(port);
