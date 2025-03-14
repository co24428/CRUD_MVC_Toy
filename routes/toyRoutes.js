const express = require("express");
const ToyController = require("../controllers/ToyController");

const router = express.Router();

// http://localhost:3000/api/v1/toys
router.get("/api/v1/toys", ToyController.getAllToys);

module.exports = router;
