const fs = require("fs");

class Toy {
    static getAllToys() {
        return JSON.parse(fs.readFileSync("./data/data.json", "utf-8"));
    }
}

module.exports = Toy;
