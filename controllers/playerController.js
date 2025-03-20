const Player = require("../models/Player");

class PlayerController {
    static getAllPlayers(req, res) {
        try {
            const players = Player.getAllPlayers();
            res.status(200).json({
                status: "success",
                data: players,
            });
        } catch (err) {
            res.status(500).json({ status: "error", message: "Failed to fetch players" });
        }
    }

    static getPlayerbyID(req, res) {
        try {
            const id = Number(req.params.id);
            const player = Player.getPlayerbyID(id)

            if (!Player) {
                return res.status(404).json({
                    status: "fail",
                    message: "id not exist",
                });
            }

            res.status(200).json({
                status: "success",
                data: player,
            });
        } catch (err) {
            res.status(500).json({ status: "error", message: "Faild to fetch player"});
        }
    }

    static addNewPlayer(req, res) {
        try {
            const newPlayer = Player.addNewPlayer(req.body);
            res.status(201).json({
                status: "success",
                data: newPlayer,
            });
        } catch (err) {
            res.status(500).json({ status: "error", message: "Failed to add new player" });
        }
    }

    static updatePlayer(req, res) {
        try{
            const id = Number(req.params.id);
            const toy = Player.updatePlayer(id, req.body);


            if (!Player) {
                return res.status(404).json({
                    status: "fail",
                    id: id,
                    message: "id not exist",
                });
            }

            res.status(200).json({
                status: "success",
                data: player,
            });
        } catch (err) {
            res.status(500).json({ status: "error", message: "Failed to update the player" });
        }
    }

    static deletePlayer(req, res) {
        try {
            const id = Number(req.params.id);
            const player = Player.deletePlayer(id, req.body);


            if (!player) {
                return res.status(404).json({
                    status: "fail",
                    message: "id not exist",
                });
            }

            res.status(200).json({
                status: "success delete",
                data: player,
            });

        } catch (err) {
            res.status(500).json({ status: "error", message: "Failed to delete the player" });
        }
    }
}

module.exports = PlayerController;
