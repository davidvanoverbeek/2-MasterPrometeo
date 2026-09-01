const express = require("express");
const router = express.Router();
const isAuth = require("../../middlewares/auth.middleware");

const {
    getAllVideogames,
    getVideogamesByID,
    getVideogamesByGenre,
    getVideogamesByConsole,
    createVideogame
} = require("../controllers/videogames.controllers");

router.get("/", getAllVideogames);
// hemos protegido la ruta con autenticacion
router.get("/id/:id", [isAuth], getVideogamesByID);
router.get("/genre/:genre", getVideogamesByGenre);
router.get("/console/:consoleId", getVideogamesByConsole);
router.post("/", createVideogame);

module.exports = router;