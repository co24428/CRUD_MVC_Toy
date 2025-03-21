const express = require("express");
const PlayerController = require("../controllers/playerController");

const router = express.Router();

// add to base url in app.js -> "/api/v1/players"
// http://localhost:3000/api/v1/players
router.get("/", PlayerController.getAllPlayers);
router.get("/:id", PlayerController.getPlayerbyID);
router.post("/", PlayerController.addNewPlayer);
router.patch("/:id", PlayerController.updatePlayer);
router.delete("/:id", PlayerController.deletePlayer);

module.exports = router;
