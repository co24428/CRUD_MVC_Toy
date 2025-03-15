const express = require("express");
const ToyController = require("../controllers/ToyController");

const router = express.Router();

// add to base url in app.js -> "/"
// http://localhost:3000/api/v1/toys
router.get("/api/v1/toys", ToyController.getAllToys);
router.get("/api/v1/toys/newID", ToyController.getNewToyID);
router.post("/api/v1/toys", ToyController.addNewToy);

module.exports = router;
