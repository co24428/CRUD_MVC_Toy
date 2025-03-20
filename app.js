const express = require("express");
const toyRoutes = require("./routes/toyRoutes");
const playerRoutes = require("./routes/playerRoutes");

const app = express();
const port = 3000;

// Enables express to parse JSON request bodies
// This middleware allows 'req.body' to contain parsed JSON data
app.use(express.json());

app.use("/assets", express.static(__dirname + "/public"));

// Register toyRoutes under base URL "/api/v1/toys"
app.use(toyRoutes);
app.use("/api/v1/players", playerRoutes);

app.listen(port, () => {
    console.log(`Server is running: http://localhost:${port}`);
});
