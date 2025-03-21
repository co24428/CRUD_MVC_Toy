const Player = require("../models/Player");

class PlayerController {
    static getAllPlayers(req, res) {
        try {
            const players = Player.getAllPlayers();
            PlayerController.generateLog(res, 200, "success", null, players);
        } catch (err) {
            PlayerController.generateLog(res, 500, "error", "Failed to fetch players");
        }
    }

    static getPlayerbyID(req, res) {
        try {
            const id = Number(req.params.id);
            const player = Player.getPlayerbyID(id)
            if (!player) return PlayerController.generateLog(res, 404, "fail", "id not exist");
            PlayerController.generateLog(res, 200, "success", null, player);
        } catch (err) {
            PlayerController.generateLog(res, 500, "error", "Failed to fetch player");
        }
    }

    static addNewPlayer(req, res) {
        try {
            const newPlayer = Player.addNewPlayer(req.body);
            PlayerController.generateLog(res, 201, "success", null, newPlayer);
        } catch (err) {
            PlayerController.generateLog(res, 500, "error", "Failed to add new player");
        }
    }

    static updatePlayer(req, res) {
        try{
            const id = Number(req.params.id);
            const player = Player.updatePlayer(id, req.body);
            if (!player) return PlayerController.generateLog(res, 404, "fail", "id not exist");
            PlayerController.generateLog(res, 200, "success", null, player);
        } catch (err) {
            PlayerController.generateLog(res, 500, "error", "Failed to update the player");
        }
    }

    static deletePlayer(req, res) {
        try {
            const id = Number(req.params.id);
            const player = Player.deletePlayer(id, req.body);
            if (!player) return PlayerController.generateLog(res, 404, "fail", "id not exist");
            PlayerController.generateLog(res, 200, "success", null, player);
        } catch (err) {
            PlayerController.generateLog(res, 500, "error", "Failed to delete the player");
        }
    }

    static generateLog(res, code, status, message = null, data = null){
        const  response = { status };
        if (message) response.message = message;
        if (data) response.data = data;
        return res.status(code).json(response);
    }
}

module.exports = PlayerController;
