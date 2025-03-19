const fs = require("fs");

class Toy {
    static getAllToys() {
        return JSON.parse(fs.readFileSync("./data/data.json", "utf-8"));
    }

    static getToybyID(id) {
        const toys = this.getAllToys();
        return toys.find(el => el.id === id);
    }

    static getNewToyID() {
        const toys = this.getAllToys();
        const lastToy = toys[toys.length - 1];
        return lastToy ? lastToy.id + 1 : 1;
    }

    static addNewToy(newToyData) {
        const toys = this.getAllToys();
        const newToy = Object.assign({ id: this.getNewToyID() }, newToyData);
        toys.push(newToy);

        fs.writeFileSync("./data/data.json", JSON.stringify(toys, null, 2));

        return newToy;
    }
}

module.exports = Toy;
