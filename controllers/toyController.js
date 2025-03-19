const Toy = require("../models/Toy");

class ToyController {
    static getAllToys(req, res) {
        try {
            const toys = Toy.getAllToys();
            res.status(200).json({
                status: "success",
                data: toys,
            });
        } catch (err) {
            res.status(500).json({ status: "error", message: "Failed to fetch toys" });
        }
    }

    static getToysbyID(req, res) {
        try {
            const id = Number(req.params.id);
            const toy = Toy.getToybyID(id)

            if (!toy) {
                return res.status(404).json({
                    status: "fail",
                    message: "id note exist",
                });
            }

            res.status(200).json({
                status: "success",
                data: toy,
            });
        } catch (err) {
            res.status(500).json({ status: "error", message: "Faild to fetch toy"});
        }
    }

    static getNewToyID(req, res) {
        try {
            const newID = Toy.getNewToyID();
            res.status(200).json({
                status: "success",
                newID,
            });
        } catch (err) {
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
        } catch (err) {
            res.status(500).json({ status: "error", message: "Failed to add new toy" });
        }
    }
}

module.exports = ToyController;
