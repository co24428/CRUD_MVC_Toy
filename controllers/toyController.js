const Toy = require("../models/Toy");

class ToyController {
    static getAllToys(req, res) {
        try {
            const toys = Toy.getAllToys();
            ToyController.generateLog(res, 200, "success", null, toys);
        } catch (err) {
            ToyController.generateLog(res, 500, "error", "Failed to fetch toys");
        }
    }

    static getToysbyID(req, res) {
        try {
            const id = Number(req.params.id);
            const toy = Toy.getToybyID(id)
            if (!toy) return ToyController.generateLog(res, 404, "fail", "id not exist");
            ToyController.generateLog(res, 200, "success", null, toy);
        } catch (err) {
            ToyController.generateLog(res, 500, "error", "Failed to fetch toy");
        }
    }

    static addNewToy(req, res) {
        try {
            const newToy = Toy.addNewToy(req.body);
            ToyController.generateLog(res, 201, "success", null, newToy);
        } catch (err) {
            ToyController.generateLog(res, 500, "error", "Failed to add new toy");
        }
    }

    static updateToy(req, res) {
        try{
            const id = Number(req.params.id);
            const toy = Toy.updateToy(id, req.body);
            if (!toy) return ToyController.generateLog(res, 404, "fail", "id not exist");
            ToyController.generateLog(res, 200, "success", null, toy);
        } catch (err) {
            ToyController.generateLog(res, 500, "error", "Failed to update the toy");
        }
    }

    static deleteToy(req, res) {
        try {
            const id = Number(req.params.id);
            const toy = Toy.deleteToy(id, req.body);
            if (!toy) return ToyController.generateLog(res, 404, "fail", "id not exist");
            ToyController.generateLog(res, 200, "success", null, toy);
        } catch (err) {
            ToyController.generateLog(res, 500, "error", "Failed to delete the toy");
        }
    }

    static generateLog(res, code, status, message = null, data = null){
        const  response = { status };
        if (message) response.message = message;
        if (data) response.data = data;
        return res.status(code).json(response);
    }
}

module.exports = ToyController;
