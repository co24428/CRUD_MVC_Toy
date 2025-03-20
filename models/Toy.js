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

    static updateToy(id, {name, description, price}) {
        const toys = this.getAllToys();
        const toy =  toys.find(el => el.id === id);

        if (name) toy.name = name;
        if (description) toy.description = description;
        if (price) toy.price = Number(price);

        if (toy) fs.writeFileSync("./data/data.json", JSON.stringify(toys, null, 2));
        return toy;
    }
    
    static deleteToy(id) {
        const toys = this.getAllToys();
        const toyIndex = toys.findIndex(obj => obj.id === id);

        if (toyIndex === -1) {
            return false;
        }
        
        const toy = toys[toyIndex]
        toys.splice(toyIndex, 1);
        fs.writeFileSync("./data/data.json", JSON.stringify(toys, null, 2));
        return toy;
    }
}

module.exports = Toy;
