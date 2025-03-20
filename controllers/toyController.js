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
                    message: "id not exist",
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

    static updateToy(req, res) {
        try{
            const id = Number(req.params.id);
            const toy = Toy.updateToy(id, req.body);


            if (!toy) {
                return res.status(404).json({
                    status: "fail",
                    id: id,
                    message: "id not exist",
                });
            }

            res.status(200).json({
                status: "success",
                data: toy,
            });
        } catch (err) {
            res.status(500).json({ status: "error", message: "Failed to update the toy" });
        }
    }

    static deleteToy(req, res) {
        try {
            const id = Number(req.params.id);
            const toy = Toy.deleteToy(id, req.body);


            if (!toy) {
                return res.status(404).json({
                    status: "fail",
                    message: "id not exist",
                });
            }

            res.status(200).json({
                status: "success delete",
                data: toy,
            });

        } catch (err) {
            res.status(500).json({ status: "error", message: "Failed to delete the toy" });
        }
    }
}

module.exports = ToyController;
