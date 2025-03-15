const Toy = require("../models/Toy");

class ToyController {
    static getAllToys(req, res) {
        try {
            const toys = Toy.getAllToys();
            res.status(200).json({
                status: "success",
                data: toys,
            });
        } catch (error) {
            res.status(500).json({ status: "error", message: "Failed to fetch toys" });
        }
    }

    static getNewToyID(req, res) {
        try {
            const newID = Toy.getNewToyID();
            res.status(200).json({
                status: "success",
                newID,
            });
        } catch (error) {
            res.status(500).json({ status: "error", message: "Failed to generate new toy" });
        }
    }

    static addNewToy(req, res) {
        try {
            const newToy = Toy.addNewToy(req.body);
            res.status(201).json({
                status: "success",
                data: newToy,
            });
        } catch (error) {
            res.status(500).json({ status: "error", message: "Failed to add new toy" });
        }
    }
}

module.exports = ToyController;
