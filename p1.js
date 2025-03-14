const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;
const toys = JSON.parse(fs.readFileSync("./data/data.json", 'utf-8'));
app.use('/assets', express.static(__dirname + '/public'));

// http://localhost:3000/api/v1/toys
app.get('/api/v1/toys', (req, res) => { 
    res.status(200).json({
        status: "success",
        data: toys
    });
});
app.listen(port);
