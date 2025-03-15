const express = require("express");
const toyRoutes = require("./routes/toyRoutes");

const app = express();
const port = 3000;

// JSON parsing middleware
app.use(express.json());

app.use("/assets", express.static(__dirname + "/public"));

app.use(toyRoutes);

app.listen(port, () => {
    console.log(`Server is running: http://localhost:${port}`);
});
