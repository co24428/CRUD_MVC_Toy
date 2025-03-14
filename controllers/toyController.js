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
}

module.exports = ToyController;
