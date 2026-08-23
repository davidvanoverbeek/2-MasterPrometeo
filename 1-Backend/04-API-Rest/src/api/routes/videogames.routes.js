const express = require("express");
const router = express.Router();

const {
    getAllVideogames,
    getVideogamesByID,
    getVideogamesByGenre,
    getVideogamesByConsole,
    createVideogame
} = require("../controllers/videogames.controllers");

router.get("/", getAllVideogames);
router.get("/id/:id", getVideogamesByID);
router.get("/genre/:genre", getVideogamesByGenre);
router.get("/console/:consoleId", getVideogamesByConsole);
router.post("/", createVideogame);

module.exports = router;